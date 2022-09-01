import React from "react";
function InsertRestDemo()
{
    const [data, setData] = React.useState("");
    React.useEffect(() => {
        fetch('http://127.0.0.1:5000/studata',{
      method: 'POST',
      body: JSON.stringify({
          rno:'1008',
          name:'dfdsfdsfg',
          branch:1023,
          fees:45000
      }),
      headers:{"content-type":"application/json; charset=UTF-8"}  
    }).then(res => res.json()).then((data) => {

       console.log(data);
       setData("data inserted successfully");
      // setData(data)

    }).catch(console.log)
      }, []);
    return(<div>
             {data}
          </div>);
}

export default InsertRestDemo;