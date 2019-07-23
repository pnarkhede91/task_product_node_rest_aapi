var db=require('../dbConnection'); //reference of dbconnection.js
//Task object constructor
var Task = function(task){
    // this.task = task.task;
    // this.status = task.status;
    // this.created_at = new Date();
};
Task.productsList = function (result) {
    db.query("Select * from product_tbl", function (err, res) {

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

Task.addProduct = function (p, result) { 

   
    
    db.query("Insert into product_tbl values(?,?,?,?,?)",[null,p.product_id,p.product_name,p.product_rate,p.fk_comp_id,p.product_img], function (err, res) {
            
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

Task.read_a_product = function (productId, result) { 
    
    db.query("SELECT `product_id`, `product_name`, `product_rate`, `fk_comp_id`, `product_img` FROM `product_tbl` \
    WHERE `product_id`=?",[productId], function (err, res) {

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

Task.updateById = function(id, task, result){

    db.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

  Task.remove = function(id, result){
    db.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
              
                result(null, res);
               }
           }); 
};



module.exports= Task;