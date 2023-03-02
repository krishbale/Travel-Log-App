import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CommentIcon from '@mui/icons-material/Comment';
export default function ViewLog() {
    
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const [userData, setUserData] = useState([])
    const [comments,setComments] = useState('')
    const [likes,setLikes] = useState(0)
    const [ comment,getcomment] = useState([])
  
    const callviewLog = async (id) => {

        try {
            
            
          
            const { data } = await axios.get('/api/getlog');
            let traveldata = data;
            setUserData(traveldata);
            
            
        

        } catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        callviewLog();
    }, []);

    const postlike = async (id) => {

        setLikes(likes+1)
        try{
            const { data } = await axios.put(`/api/likes/${id}`,{
                likes,
            });
            
    
        }catch(e){
            console.log(e);
        }
        
        
    
      
    }
  

    const fetchcomment = async(id) => {
        try{
             const {data} = await axios.get(`/api/getcomments/${id}`);
        getcomment(data);

       
        }catch(e){
            console.log(e);
        }
       
            


    }
  const postcomment = async (id) => {
   
    setComments(comments)
  
    try{
        const { data } = await axios.post(`/api/comments/${id}`,{
            comments,
        });
   

    }catch(e){
        console.log(e);
    }
  }
 
    
   

        
     

       
        
       





    return (
        <>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {userData.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                    </Typography>
                    <Typography>
                    {item.descriptions} 
                    </Typography>
                    <Typography>
                    Days:{item.days} 
                    </Typography>
                    <Typography>
                    Budgets:{item.budgets} 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=>{postlike(item._id)}} size="small">
                    {}
                    {likes} <FavoriteIcon />
                    </Button>
                    <Button size="small">
                        <CommentIcon />
                    </Button>
                    <Button size="small">
                       <QuestionAnswerIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        
{/*         
        <div className='row'>
       
    
          
        <div className='col-sm'>
             
             { userData.map((item, i) =>
             
                   
                <div className="card" key={i}>
                    <img className="card-img-top " alt='' />
                    <div className="card-body">
                        <h5 className="card-title col">{item.title}</h5>
                        <p className="card-text ">{item.descriptions} So,Overall budget for our destination was {item.budgets}.We finished the trip in approximately {item.days} days</p>
                       
                        <p className="card-text"><small className="text-muted">Last updated: {Date(item.updatedAt)}</small></p>
                        <button className='btn  btn-danger' onClick={()=>{postlike(item._id)}}>
                         {likes} Like</button> 
                        <textarea className='form-control form-control-plaintext bg-dark  text-white '  placeholder='Enter your comments'
                         name="comments" 
                        onChange={(e)=> setComments(e.target.value)} id="comments"  cols="1" rows="1" required></textarea>
                        <button type="submit" className='btn btn-lg btn-outline-info'  onClick={() => {postcomment(item._id)}}  name='submit' >Comment</button>
                        <button type="submit" className='btn btn-lg btn-outline-block' onClick={() => {fetchcomment(item._id)}}  name='submit'>View Other Comments</button>       
                          </div>
                       
                 </div>
                 
                 
             )
             

             }
             </div>
             <div className='col-sm'>

       


             { comment.map((item,i)=>
             
          
             <div key={i} >
                      
                      <p className='card-text'>{item.comments}</p>
                      <p className="card-text"><small className="text-muted">Last updated: {Date(item.updatedAt)}</small></p>
                      

          </div>
        

            
             
          
             
              
             )
                
             }
             </div>
                
                       
           
  
  
        
                

        
           
         
     
                        
              

            
            



             </div> */}
        </>
    )


};








