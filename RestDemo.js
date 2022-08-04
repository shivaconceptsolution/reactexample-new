import React from "react";
import { Link } from "react-router-dom";
function RestDemo()
{
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const url = "http://jsonplaceholder.typicode.com/todos";
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log(error));
      }, []);
    return(<div>
             <table border='1'>
            <tbody>
           <tr><th>Userid</th><th>ID</th><th>Title</th><th>Edit</th></tr>

           {data.map((data1,i)=> <tr key={i}><td>{data1.userId}</td><td>{data1.id}</td><td>{data1.title}</td><td><Link to="/Edit" state={data1.id}>Edit</Link></td></tr>)}   

</tbody>
            </table>
    </div>);
}

export default RestDemo;