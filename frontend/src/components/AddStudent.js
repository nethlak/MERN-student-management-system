import React,{useState} from "react";
import axios from "axios";

export default function AddStudent(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");

    function sendData(event){
        event.preventDefault();

        const newStudent ={
            name, 
            age,
            gender
        }

        axios.post("http://localhost:8070/student/add", newStudent).then(()=>{//by this https request will send to the backend
            alert("Student added");
            setName("");
            setAge("");
            setGender("");
        }).catch((err)=>{
            alert(alert);
        })
        
    }

    return(
        <div className="container">
            <div className="mb-3">
                <h1>Add Student</h1>
                <label for="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter student name" onChange={(event)=>{
                    setName(event.target.value);
                }}/>
            </div>

            <div className="mb-3">
                <label for="Student Age" className="form-label">Student Age</label>
                <input type="text" className="form-control" id="Student Age" placeholder="Enter student age" onChange={(event)=>{
                    setAge(event.target.value);
                }}/>
            </div>

            <div className="mb-3">
                <label for="Student gender" className="form-label">Student gender</label>
                <input type="text" className="form-control" id="Student gender" placeholder="Enter student gender"onChange={(event)=>{
                    setGender(event.target.value);
                }}/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={sendData}>Submit</button>
        </div>
    )
}
 