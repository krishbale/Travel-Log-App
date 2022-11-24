
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Createlog() {
  const history = useNavigate();
  const [user,setUser] = useState({
    title:"",descriptions:"",days:"",budgets:""
  });
  const Travelform = async(e)=> {
    e.preventDefault();
    const { title , descriptions, days , budgets } = user; 
    try {
    const res = 
    await fetch("/createlog",{
    method : "POST",
    headers: {
      "Content-Type" : "application/json"},
    body: JSON.stringify({
      title , descriptions, days , budgets 
    })

   });
   //logic if success
   const data = await res.json();
   if(res.status === 422 || !data ){
    window.alert('Error Occoured Unable to create Log')
   }else {
    window.alert('Log created successfully')
    history('/')
   }
  }catch(error){
    console.log(error)
    
  }
}
  const handleInputs = (e) => {
    let name, value;
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user,[name]:value})
  }


  return (
    <>
      <div className='createlog bg-secondary '>
                <h1>Createlog</h1>
                <div className='row'>
                <form className='form ' method='post' >
                <div className='form-group '>
                

                    <label  htmlFor="title"> Enter the title for your travel log: </label>
                    <input type="text" className='form-control form-text text bg-dark col-sm-2' placeholder='title' name="title"           
                        onChange={handleInputs} required/>

                    <label htmlFor="descriptions">Explain your experience about your exprediton: </label>
                   <textarea className='form-control form-control-plaintext bg-dark col-sm-6' placeholder='descriptions' name="descriptions" 
                    onChange={handleInputs} id="" cols="50" rows="10"></textarea>

                    <label htmlFor="days"> Days you spent on your travel: </label>
                    <input type="number" className='form-control bg-dark col-sm-2' placeholder='days' name="days"
                        onChange={handleInputs} required/>

                    <label htmlFor="budgets">Enter the budget for your travel</label>
                  
                    <input type="number" className='form-control bg-dark col-sm-2'  placeholder='budgets' name="budgets"
                    onChange={handleInputs} required/>
                    <input type="submit" className='btn btn-lg btn-outline-info '  name='submit' onClick={Travelform} />
                    </div>
                </form>

                </div>
               
            </div>
       
    </>
  )
  }
