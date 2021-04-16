import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { JobDescription } from './JobDescription';
import styles from "../JobDescription/Tabs.module.css"

function JobDescriptionSidebar() {
    const [data,setData] =useState([]);
    const [page, setPage] = React.useState(1);
    const [limit, setLimit]=useState(5);
    const [dis, setDis]=useState([]);

    const {location} =useParams(); 
    
    const handleSearch = () => {
        const requestParam = {
          method: "get",
          url: `https://json-heroku-shubham.herokuapp.com/jobDetails?location=${location}`,
          params: {
            
            limit : limit,
            page :page
            
            
          }
        };
        axios(requestParam)
          .then((res) =>{
            setData(res.data);
            
            
        })
        
          .catch((err) => console.log("err"));
      };

      


      const getData =(id)=>{
          axios.get(`https://json-heroku-shubham.herokuapp.com/jobDetails/${id}`)
          .then(res=>{setDis(res.data)})
          .catch((err) => console.log("err"));
         

      }
    
      React.useEffect(handleSearch, [page]);




    return (
        <div style={{display:"flex",height:"80vh"}}>
            <div >
                <div className={styles.right} style={{width:"320px",overflowY:"auto",overflow:"scroll",padding:"10px",backgroundColor:"#f8f8f8",height:"80vh",position:"sticky",top:"0"}}>
                    <h1 style={{color:"#303e4b",fontWeight:"400",fontSize:"16px"}}>Customer Focus Jobs</h1>
                    {data.map((el)=>(
                    <div key={el.id} onClick={()=>getData(el.id)} className={styles.box} style={{width:"300px", height:"100px",padding:"5px"}}>
                        <div>
                            <div className={styles.pre}></div>
                            <div style={{float:"left",color:"#303E4B",fontSize:"17px",marginLeft:"5px"}}><h1 style={{float:"left",color:"#303E4B",fontSize:"17px"}}>{el.title}</h1></div>
                            <div style={{clear:"both"}}></div>
                            <span style={{color:"#505E6B",fontSize:"14px",float:"left",marginLeft:"25px"}}>{el.subTitle}</span>
                            <div style={{clear:"both"}}></div>
                            <span style={{color:"#505E6B",fontSize:"14px",float:"left",marginLeft:"25px"}}><div className={styles.point}></div> 0 to {el.Experience}Yrs</span>
                            <span style={{color:"#505E6B",fontSize:"14px",float:"left",marginLeft:"25px"}}><div className={styles.point}></div> {el.location}</span>

                        </div>
                        

                    </div>))}
                    {<div>
                    <button style={{backgroundColor:"transparent",color:"#5364C4",marginTop:"15px",border:"0"}} disabled={page === 1} onClick={() => setPage(page - 1)}>
                    {"<<prev"}
                    </button>
                    <strong style={{color:"#5364C4",fontSize:"14px"}}> {page}</strong>
                    <button style={{backgroundColor:"transparent",color:"#5364C4",marginTop:"15px",border:"0"}} disabled={data.length>5} onClick={() => setPage(page + 1)}>
                    {"next>>"}
                    </button>
                    </div>}
                        

                </div>

            </div>
                
            <div>
                <JobDescription dis={dis}/>
            </div>

            
        </div>
    )
}

export default JobDescriptionSidebar