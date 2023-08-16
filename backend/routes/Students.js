const router = require("express").Router();
//const Student = require("../models/student");
let Student = require("../models/student");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({//create object
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student added");//give a response to frontend
    }).catch((err)=>{
        console.log(err);
    });//parse the object data to the mongoDB database
})

router.route("/").get((req,res)=>{//data fetching
    Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;//getting the user id withing th e URL
    const {name, age, gender} = req.body;//destructuring. Get the values from the front end

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{//by this await request will not be crashed
        res.status(200).send({status:"user details updated"});//update will give updated values
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Erro with updating data"});//like this we can give a respond to frontend
    });

})

router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;
    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.name);
    })
})

router.route("/get/:id").get(async ()=>{
    let userId = req.params.id;
    const user = await Student.findById(userId).then(()=>{
        res.status(200).send({status:"user data fetched", user:user});
    }).catch((err)=>{
        console.log(err.name);
    })
})


module.exports =router;