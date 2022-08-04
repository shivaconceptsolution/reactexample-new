import React, { useState }   from 'react';
import { useLocation } from "react-router";
import axios from 'axios'
function Edit()
{
 let data = useLocation();
 console.log(data.state);
 const baseURL = "https://jsonplaceholder.typicode.com/posts/"+data.state;
 const [post, setPost] = React.useState(null);
 const [title,setTitle]= useState("")
 const [body,setBody]= useState("")

 React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  const handelInput =(e)=>{
    switch (e.target.id) {
        case "title":
            setTitle(e.target.value)
           
            break;
        case "body":
            setBody(e.target.value)
            break;
       
        default:
            break;
    }
}
const changeSubmit =(e)=>{
    e.preventDefault()   
    axios
    .put(baseURL, {
      title: title,
      body: body
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
            USERID <input type="text"  id='uid' value={post.userId}  />   
            <br />
            ID <input type="text"  id='id' value={post.id}       />   
            <br />  
            Title  <input type="text"  id='title'   onChange={handelInput} />
            <br />
             Body <input type="text"  id='body'  onChange={handelInput}/>
            <br />
            <button type="submit" value="Submit">Submit</button>
        </form>
           <p>Edit Component {data.state}</p>
       </div>
   );
}

export default Edit;