import axios from 'axios'
import React, { useState, useEffect } from 'react'



export default function Updatelog() {
    const [title, setTitle] = useState("")
    const [descriptions, setDescriptions] = useState("")
    const [days, setDays] = useState("")
    const [budgets, setBudgets] = useState("")
    const [userId, setUserId] = useState(null)
    const [userData, setUserData] = useState([])
    const [likes,setLikes] = useState(10)
    const Counthandle = async () => {
        setLikes(likes+1);
        
    
      
    }
    const callviewLog = async () => {

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


    
    function selectUser(id, title, descriptions, days, budgets) {
        setTitle(title)
        setDescriptions(descriptions)
        setDays(days)
        setBudgets(budgets)
        setUserId(id)
       
      

    }
    function updateUser() {
        let item = { title, descriptions, days, budgets}
      
        fetch(`/api/updatelog/${userId}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.log('update successfull')
                callviewLog();
            })
        })

    }
    function deleteUser(id) {
        fetch(`/api/deletelog/${id}`, {
            method: "PUT"
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                callviewLog();

            })
        })


    }



    return (
        <>
        
        <h1>ViewLog</h1>

          
           
             { userData.map((item, i) =>
             
   
                
                <div className="card" key={i} >
                    <img className="card-img-top"  />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.descriptions} So,Overall budget for our destination was {item.budgets}.We finished the trip in approximately {item.days} days</p>
                       
                        <p className="card-text"><small className="text-muted">Last updated: {Date(item.updatedAt)}</small></p>
                        <button className='btn btn-outline-danger' onClick={Counthandle}>{likes} Like</button>  
                                         <button type="button" className='btn btn-outline-info' data-toggle="modal"
                                         data-target="#exampleModalCenter" onClick={() => selectUser(
                                            item._id, item.title,
                                            item.descriptions, item.days, item.budgets
                                        )}>Edit</button>
                                          <button className='btn btn-outline-danger' onClick={() => deleteUser(item._id)}>
                                          Delete
                                          </button>
                                       
                    </div>
                 </div>
             )

             }

  
  
      
         
            <div className='col-sm'>
    
                        {/* Popup MOdel */}
                    <div className="modal fade modal-xl" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog  modal-dialog-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Update Log</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <p className=' '>Click Update button to update the  travel Log </p> <br />
                                <label  htmlFor="title"> Enter the title for your travel log: </label>
                                <input type="text" className=' bg-secondary col' value={title} name="title"
                                    onChange={(e) => { setTitle(e.target.value) }} required />
                                <label htmlFor="descriptions">Explain your experience about your exprediton: </label>
                                <textarea type="text" value={descriptions} name="descriptions" className='  bg-secondary col'
                                    onChange={(e) => { setDescriptions(e.target.value) }} required />
                                <label htmlFor="days"> Days you spent on your travel: </label>
                                <input type="number" value={days} name="days" className='  bg-secondary col'
                                    onChange={(e) => { setDays(e.target.value) }} required />
                                <label htmlFor="budgets">Enter the budget for your travel</label>
                                <input type="number" value={budgets} name="budgets" className='  bg-secondary col'
                                onChange={(e) => { setBudgets(e.target.value) }} required />
                                </div>
                                <div className="modal-footer">
                                    <button className='btn btn-outline-info' onClick={updateUser} data-dismiss="modal" >Update</button>

                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )


};








