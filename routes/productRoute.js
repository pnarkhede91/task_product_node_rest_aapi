module.exports = function(app) {
    var todoList = require('../controller/productController');

    
  
    // todoList Routes
    app.route('/products')
        .get(todoList.productsList)
        .post(todoList.addProduct);
     
     app.route('/products/:productId')
     .get(todoList.read_a_product);
    //   .put(todoList.update_a_task)
    // .delete(todoList.delete_a_task);


      };