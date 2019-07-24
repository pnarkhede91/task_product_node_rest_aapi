var db=require('../dbConnection'); //reference of dbconnection.js

//Task object constructor
var Member ={};
Member.memberLogin = function (username,password,result) {
    db.query("SELECT `mt_id`, `mt_name`, `mt_age`, `mt_email`, `mt_phone`, `mt_address`, `mt_balance`, `mt_company`, `mt_status` \
    FROM `member_tbl` WHERE `mt_email`=? AND  `mt_phone`=?",[username,password], function (err, res) {

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

/*

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

Task.update_a_product = function(id, task, result){

   
    db.query("UPDATE product_tbl SET product_name = ?,product_rate=?,fk_comp_id=? WHERE product_id = ?", [task.product_name,task.product_rate,task.fk_comp_id, id], function (err, res) {
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
    db.query("DELETE FROM `product_tbl` WHERE `product_id`= ?", [id], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
              
                result(null, res);
               }
           }); 
};

*/

module.exports= Member;