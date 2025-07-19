import React,{useState} from "react"
import Study from "./Study"

const Allcourses=()=>
{
    const [courses,setCourses ]=useState([
      {title: "Java course", description:"There is a java course for beginers"},
      {title: "C course", description:"There is a C course for beginers"},
      {title: "Python course", description:"There is a Python course for beginers"},
      {title: "Django course", description:"There is a Django course for beginers"},
    ]);
    return (
        <div>
            <h1>All courses</h1>
            <p>List of courses are follows</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Study Study={item}/>
                )): "No courses are available"
            }
        </div>
    );
    
};
export default Allcourses;