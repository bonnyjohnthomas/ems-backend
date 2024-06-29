const db = require('./db')

//get all employees

const allEmployees=()=>{
    return db.Employee.find().then((result)=>{
        if(result){
            return {
                statusCode:200,
                employee:result
            }
        }else{
            return {
                statusCode:401,
                message:'No employee found'
            }
        }
    })
}

//adding new employee

const addEmployee=(id,empname,age,designation,salary)=>{
        return db.Employee.findOne({id}).then((result)=>{
            if(result){
                return{
                    statusCode:401,
                    message:'Employee already exists'
                }
            }else{
                const newEmployee=new db.Employee({id,empname,age,designation,salary})
                //to save employee details
                newEmployee.save()
                return{
                    statusCode:200,
                    message:'Employee added Succesfully'
                }
            }
        })
}

//delete employee

const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        return{
            statusCode:200,
            message:'Employee deleted Succesfully'
        }
    })
}

//fetch employee

const getAnEmployee=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result) {
            return{
                statusCode:200,
                employee:result
            }
            
        } else {
            return{
                statusCode:401,
                message:'Employee not found'
            }
            
        }
        
    })
}

 //update employee

 const updateEmployee=(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            result.id=id;
            result.empname=empname;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save()
            return{
                statusCode:200,
                message:'Employee details updated successfully'
            }
            
        } else {
            return{
                statusCode:401,
                message:'Employee details not updated'
            }
            
        }

        
    })
}



module.exports={
    allEmployees,
    addEmployee,
    deleteEmployee,
    getAnEmployee,
    updateEmployee
}