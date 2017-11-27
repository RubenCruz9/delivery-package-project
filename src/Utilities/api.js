var api = {
  getRovers(){
    var url= 'https://api-soft.herokuapp.com/clients';/*'https://api-soft.herokuapp.com/tasks'*//*'http://api-soft.herokuapp.com/tasks/5a0a5ad2734d1d4ef311991a'; *//*'https://api-soft.herokuapp.com/tasks';*/
   return fetch(url).then((res)=> res.json());

 },

  getProduct(){
    var url= 'https://api-soft.herokuapp.com/products';/*'https://api-soft.herokuapp.com/tasks'*//*'http://api-soft.herokuapp.com/tasks/5a0a5ad2734d1d4ef311991a'; *//*'https://api-soft.herokuapp.com/tasks';*/
   return fetch(url).then((res)=> res.json());

  }
}

module.exports =api;
