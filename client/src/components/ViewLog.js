import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


export default function ViewLog() {
    const history =useNavigate()
    const[title,setTitle] = useState("")
    const[descriptions,setDescriptions] = useState("")
    const[days,setDays] = useState("")
    const[budgets,setBudgets] = useState("")
    const[userId,setUserId] = useState(null)
    const [userData,setUserData] = useState([])
    const callviewLog = async () => {
        try{
            const { data } = await axios.get('/getlog');
            let  traveldata = data;
           setUserData(traveldata);
        //    setTitle(traveldata[0].title)
        //    setDescriptions(traveldata[0].descriptions)
        //    setDays(traveldata[0].days)
        //    setBudgets(traveldata[0].budgets)
        //    setUserId(traveldata[0].userid)


        }catch(e){
            console.log(e);
           
        }
    }

        useEffect(() => {
         callviewLog();
        }, []);


        function selectUser(id,title,descriptions,days,budgets){
        setTitle(title)
        setDescriptions(descriptions)
        setDays(days)
        setBudgets(budgets)
        setUserId(id)
        

    }
    function updateUser(){
        let item = {title,descriptions,days,budgets}
        console.warn("item",item)
        fetch(`/updatelog/${userId}`,{
            method: "PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                callviewLog();
            })
        })

    }
    function deleteUser(id){
        fetch(`/deletelog/${id}`,{
            method: "PUT"
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                callviewLog();

            })
        })
        

    }

      
    
        return(
            <>
             <table className='table table-secondary table-responsive table-hover ' border="10" style={{
                 float: 'left',
                 border:'1 px solid black',
                 borderCollapse:'collapse', }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Descriptions</td>
            <td>Days</td>
            <td>Budgets</td>
            <td>Operations</td>
          </tr>
          {
            userData.map((item,i)=>
           
          
           
              <tr key={item._id}>
                <td>{i}</td>
                <td>{item.title}</td>
                <td>{item.descriptions}</td>
                <td>{item.days}</td>
                <td>{item.budgets}</td> 
                <td><button className='btn btn-outline-info' onClick={() => selectUser(
                    item._id, item.title,
                    item.descriptions, item.days, item.budgets
                )}>Edit</button></td>
                <td><button className='btn btn-outline-danger' onClick={() => deleteUser(item._id)}>Delete</button></td>


              </tr>
              )
          }
              
               
            )
          
        </tbody>
      </table>
                      <div>
                      <p className=' bg-secondary'>Click Update button to update the  travel Log </p> <br/>
               
                    <input type="text" className=' bg-secondary' value={title} name="title"
                        onChange={(e) => { setTitle(e.target.value) }} required />
                    <input type="text" value={descriptions} name="descriptions" className='  bg-secondary'
                        onChange={(e) => { setDescriptions(e.target.value) }} required />

                    <input type="number" value={days} name="days" className='  bg-secondary'
                        onChange={(e) => { setDays(e.target.value) }} required />
                    <input type="number" value={budgets} name="budgets" className='  bg-secondary'
                        onChange={(e) => { setBudgets(e.target.value) }} required />
                    <button className='btn btn-outline-info' onClick={updateUser} >Update</button>
                     </div>
                    


              
            
            </>
        )
           
        
    };




        
    
  

