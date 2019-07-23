var Task = require('../models/Task');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.create_a_task=function(req,res){
 if(!req.body.task || !req.body.status){

        res.status(400).send({ error:true, message: 'Please provide task/status' });

    }
    else
    {
        Task.createTask(req.body,function(err,task){

                        if (err)
                        res.send(err);
                        res.json(task);
       
        });
    }
}
exports.read_a_task = function(req, res) {
    Task.getTaskById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };