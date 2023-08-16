import React, {useState, useEffect} from "react";
import axios from "axios";

export default function AllStudent(){

    const [students,setStudents] = useState([]);

    useEffect(()=>{
        function getStudent(){
            axios.get("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
                //console.log(res.data);
            }).catch((err)=>{
                alert(err.message);
            });
        }
        getStudent();
    },[])

    

    return(
        <div>
            <h1>All Students</h1>

            <table className="table">

                <thead>
                    <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map(item => (
                        <tr key={item._id}>                        
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}