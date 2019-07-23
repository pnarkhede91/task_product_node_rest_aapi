var db=require('../dbConnection'); //reference of dbconnection.js
//Task object constructor
var Task = function(task){
    // this.task = task.task;
    // this.status = task.status;
    // this.created_at = new Date();
};
Task.getAllTask = function (result) {
    db.query("Select * from tasks", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

Task.createTask = function (newTask, result) { 
    
    db.query("Insert into tasks values(?,?,?,?)",[null,newTask.task,newTask.status,newTask.created_at], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
               result(null, res.insertId);
            }
        });           
};

Task.getTaskById = function (taskId, result) { 
    
    db.query("Select * from tasks where id=?",[taskId], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('tasks : ', res);  

         result(null, res);
        }
    });   
};


module.exports= Task;