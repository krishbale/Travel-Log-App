import axios from 'axios'
import React, { useState, useEffect } from 'react'




export default function ViewLog() {
    
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
    console.log(id)
    setComments(comments)
    console.log(comments)
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
        
        <h1 >ViewLog</h1>
        <div className='row'>
       
    
          
        <div className='col-sm'>
             
             { userData.map((item, i) =>
             
             <>
            
         
                
                   
                     
               
                
         

             

             

                <div className="card " key={item._id}  >
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
                 </>
                 
             )
             

             }
             </div>
             <div className='col-sm'>

       


             { comment.map((item,i)=>
             <>
             <div className='' key={item._id}>
             <div className='' key={item.id}>
                      
                      <p className='card-text'>{item.comments}</p>
                      <p className="card-text"><small className="text-muted">Last updated: {Date(item.updatedAt)}</small></p>
                      

          </div>
        

             </div>
            
             
          
             </>
              
             )
                
             }
             </div>
                
                       
           
  
  
        
                

        
           
         
     
                        
              

            
            



             </div>
        </>
    )


};








