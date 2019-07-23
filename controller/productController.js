var Task = require('../models/productModel');

exports.productsList = function(req, res) {
  Task.productsList(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.addProduct=function(req,res){
 if(!req.body.product_name){
    res.status(400).send({ error:true, message: 'Please provide product_name' });
}
else
{
    Task.addProduct(req.body,function(err,task){

                        if (err)
                        res.send(err);
                        res.json(task);
       
        });
    }
}


exports.read_a_product = function(req, res) {
    Task.read_a_product(req.params.productId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

exports.update_a_task=function(req,res)
{
    Task.updateById(req.params.taskId,req.body,function(err,task){
      if (err)
        res.send(err);
      res.json(task);
    });
}

exports.delete_a_task=function(req,res)
{
  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });

}