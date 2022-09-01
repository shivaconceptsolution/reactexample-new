import React, { useState }   from 'react';
import { useLocation } from "react-router";
import axios from 'axios'
function Edit()
{
 let data = useLocation();
 console.log(data.state);
 const baseURL = "http://127.0.0.1:5000/stu/63084b90efd3c07aaa22df94";
 const [post, setPost] = React.useState(null);
 const [id, setId] = React.useState("");
 const [rno, setRno] = React.useState("");
 const [name,setName]= useState("")
 const [branch,setBranch]= useState("")
 const [fees,setFees]= useState("")
 React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  const handelInput =(e)=>{
    switch (e.target.id) {
      case "id":
        setId(e.target.value)
        break;
        case "rno":
          setRno(e.target.value)
          break;
        case "name":
          setName(e.target.value)
          break;
        case "branch":
          setBranch(e.target.value)
          break;
        case "fees":
          setFees(e.target.value)
          break;
        default:
          break;
    }
}
const changeSubmit =(e)=>{
    e.preventDefault()   
    axios
    .put(baseURL, {
      rno: rno,
      name: name,
      branch:branch,
      fees:fees
    })
    .then((response) => {
     // setPost(response.data);
     window.location.href="/";
    });
     
   
}
  if (!post) return null;
   return(
       <div id="middle">
           
          
            <form onSubmit={changeSubmit}>
            <input type="text"  id='id' value={post._id}       />   
            <br />  
           rno <input type="text"  id='rno'   onChange={handelInput} />
            <br />
             name <input type="text"  id='name'  onChange={handelInput}/>
            <br />
            <br />
             branch <input type="text"  id='branch'  onChange={handelInput}/>
            <br />
            <br />
             fees <input type="text"  id='fees'  onChange={handelInput}/>
            <br />
            <button type="submit" value="Submit">Submit</button>
        </form>
           <p>Edit Component {data.state}</p>
       </div>
   );
}

export default Edit;