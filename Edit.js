import React from "react";
import { useLocation } from "react-router";
function Edit()
{
    let data = useLocation();
    console.log(data.state);
   return(<div>
     <p>Data is {data.state}</p>
   </div>)
}

export default Edit;