//database connection
const mongoose=require('mongoose') //to connect to mongodb

//mongodb and nodejs connection 
mongoose.connect('mongodb://localhost:27017/ems',()=>{
    console.log('Mongodb conection established');
})

//schema creation
const Employee = mongoose.model('Employee',{
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={
    Employee
}