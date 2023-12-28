const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const authenticate = require('../middleware/authenticate')
const cookieParser = require('cookie-parser')
router.use(cookieParser())
const User = require('../models/userSchema')
const Log = require('../models/logSchema')
const Message = require('../models/messageSchema')
const Comment = require('../models/commentSchema')
const Like = require('../models/likeSchema')

/**
 * /**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - roles
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               roles:
 *                 type: string
 *                 default: 'writer'
 *     responses:
 *       200:
 *         description: User registered successfully
 *       422:
 *         description: Validation error
 */
router.post('/register', async (req, res) => {
  const { username, password, roles } = req.body
  if (!username || !password) {
    return res.status(422).json({ error: 'please fill the field properly ' })
  }
  try {
    const userExist = await User.findOne({ username })
    if (userExist) {
      return res.status(422).json({ error: 'Choose another username ' })
    } else {
      const user = new User({ username, password, roles })
      await user.save()
      res.json({ message: 'User registered successfully ' })
    }
  } catch (err) {
    console.log(err)
  }
})

/**
 * /**
 * @swagger
 * /signin:
 *   post:
 *     summary: Sign in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User signed in successfully
 *       422:
 *         description: Invalid credentials
 */
router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(422).json({ error: 'please fill the field properly ' })
    }

    const userLogin = await User.findOne({ username })
    if (!userLogin) {
      res.status(422).json({ message: 'Not a Valid Credentials' })
      console.log('Not valid Credentials')
    } else if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)
      if (!isMatch) {
        res.status(422).json({ message: 'Try again with valid passwords' })
      } else {
        const userSession = { username: userLogin.username }
        //  * creating user session to keep user logged in also in refresh
        req.session.user = userSession
        //  * attach user session to session objects from express-session

        //  * token generation
        const token = await userLogin.generateAuthToken()
        console.log(token)
        res.cookie('jwtoken', token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true
        })
        res.status(200).json({
          message: 'user login successfull',
          roles: userLogin.roles,
          success: true,
          userSession
        })
      }
    }
  } catch (err) {
    console.log(err)
  }
})

/**
 * /**
 * @swagger
 * /getdata:
 *   get:
 *     summary: Retrieve user data
 *     tags: [UserData]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *       401:
 *         description: Unauthorized
 */

router.get('/getdata', authenticate, (req, res) => {
  res.send(req.rootUser)
})

/**
 * /**
 * @swagger
 * /getlog:
 *   get:
 *     summary: Get logs of the user
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logs retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/getlog', authenticate, async (req, res) => {
  const log = await Log.find({ userid: req.userID })
  res.send(log)
})
/**
 * /**
 * @swagger
 * /getlikes/{id}:
 *   get:
 *     summary: Get likes for a specific log
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Likes data retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/getlikes/:id', authenticate, async (req, res) => {
  const { id } = req.params

  const likes = await Like.find({ log: id })
  console.log(likes)
  res.json(likes)
})
/**
 * /**
 * @swagger
 * /getcomments/{id}:
 *   get:
 *     summary: Get comments for a specific log
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Comments retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/getcomments/:id', authenticate, async (req, res) => {
  const { id } = req.params

  const comments = await Comment.find({ logid: id })
  console.log(comments)
  res.json(comments)
})
/**
 * /**
 * @swagger
 * /contact:
 *   post:
 *     summary: Send a contact message
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message sent successfully
 *       400:
 *         description: Bad request
 */
router.post('/contact', authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    if (!name || !email || !phone || !message) {
      return res.json({ error: 'please fill the field properly' })
    }

    const user = req.rootUser
    const contact = await new Message({
      name,
      email,
      phone,
      message,
      _id: user._id
    })
    await contact.save()

    if (contact) {
      res.status(201).json({ message: 'Message send successfully' })
    } else {
      res.status(400).json({ message: 'Message send Unsuccessfull' })
    }
  } catch (e) {
    console.log(e)
  }
})
/**
 * /**
 * @swagger
 * /createlog:
 *   post:
 *     summary: Create a new log
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               descriptions:
 *                 type: string
 *               days:
 *                 type: number
 *               budgets:
 *                 type: number
 *     responses:
 *       200:
 *         description: Log created successfully
 */
router.post('/createlog', authenticate, async (req, res) => {
  const { title, descriptions, days, budgets } = req.body
  if (!title || !descriptions || !days || !budgets) {
    return res.json({ error: 'please fill the field properly' })
  }
  try {
    const user = req.rootUser
    const log = new Log({
      title,
      descriptions,
      days,
      budgets,
      userid: user._id
    })
    await log.save()
    res.json({ msg: 'log created successfully' })
  } catch (e) {
    console.log(e)
  }
})
/**
 * /**
 * @swagger
 * /comments/{id}:
 *   post:
 *     summary: Post a comment on a log
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comments:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment posted successfully
 *       422:
 *         description: Validation error
 */
router.post('/comments/:id', authenticate, async (req, res) => {
  const { comments } = req.body
  const { id } = req.params
  if (!comments) {
    return res
      .status(422)
      .json({ error: 'please fill the comments field properly' })
  } else {
    console.log(comments, id)
  }
  try {
    const cmt = new Comment({ comments, logid: id })
    await cmt.save()
    if (!cmt) {
      res.json({ msg: 'not successfull' })
    } else {
      res.json({ msg: 'comment created successfully' })
    }
  } catch (e) {
    console.log(e)
  }
})
/**
 * /**
 * @swagger
 * /likes/{id}:
 *   put:
 *     summary: Like a log
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               likes:
 *                 type: number
 *     responses:
 *       200:
 *         description: Like registered successfully
 */
router.put('/likes/:id', authenticate, async (req, res) => {
  const { likes } = req.body
  const { id } = req.params
  try {
    const doc = await Like.findOneAndUpdate(
      {
        logid: id
      },
      {
        $set: {
          likes: likes + 1,
          logid: id
        }
      },
      {
        upsert: true
      }
    )
    if (!doc) {
      res.json({ msg: 'unable to register  likes' })
    } else {
      res.json({ msg: 'like  registered on the database' })
    }
  } catch (e) {
    console.log(e)
  }
})
/**
 * /**
 * @swagger
 * /updatelog/{id}:
 *   put:
 *     summary: Update a log
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               descriptions:
 *                 type: string
 *               days:
 *                 type: number
 *               budgets:
 *                 type: number
 *     responses:
 *       201:
 *         description: Log updated successfully
 */
router.put('/updatelog/:id', authenticate, async (req, res) => {
  const { title, descriptions, days, budgets } = req.body
  const { id } = req.params

  try {
    const doc = await Log.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: {
          title,
          descriptions,
          days,
          budgets
        }
      }
    )
    if (!doc) {
      console.log('Document doesnot exit')
    }
  } catch (e) {
    console.log(e)
  }

  res.status(201).json({ message: 'put route' })
})
/**
 * /**
 * @swagger
 * /deletelog/{id}:
 *   put:
 *     summary: Delete a log
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Log deleted successfully
 */
router.put('/deletelog/:id', authenticate, async (req, res) => {
  const { id } = req.params
  try {
    const doc = await Log.findByIdAndRemove({
      _id: id
    })
    if (!doc) {
      console.log('failed')
    }
  } catch (e) {
    console.log(e)
  }
  res.status(201).json({ message: 'content deleted' })
})
/**
 * /**
 * @swagger
 * /isAuth:
 *   get:
 *     summary: Check if the user is authenticated
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: User is authenticated
 *       401:
 *         description: User not authenticated
 */
router.get('/isAuth', async (req, res) => {
  if (req.session.user) {
    return res.status(200).json(req.session.user)
  } else {
    res.status(401).json({ msg: 'nosession' })
  }
})
/**
 * /**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout the user
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged out
 */
router.get('/logout', authenticate, (req, res) => {
  console.log('logout server')
  res.clearCookie('jwtoken', { path: '/' })
  res.clearCookie('session-id', { path: '/' })
  res.status(200).send('session Timeout , signing off')
})

module.exports = router
