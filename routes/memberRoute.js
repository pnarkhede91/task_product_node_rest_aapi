module.exports = function(app) {
    var Member = require('../controller/memberController');

    
  
    
    // todoList Routes
    app.route('/member/login/:username/:password')
    .get(Member.memberLogin);
  

    
        //.post(member.addProduct);
     
    //  app.route('/products/:productId')
    //  .get(todoList.read_a_product)
    //  .put(todoList.update_a_product)
    //  .delete(todoList.delete_a_product);


      };