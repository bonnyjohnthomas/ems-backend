const express = require('express')

const cors =require('cors')

const logic =require('./services/logic')

const server=express()

server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
      console.log('Listening in port 8000');
})

//get all employee api
server.get('/allEmployee',(req,res)=>{
    logic.allEmployees().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//add a new employee
server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//delete employee api
server.delete('/deleteEmployee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//fetch employee api
server.get('/getEmployee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//update employee api
server.post('/updateEmployee',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
