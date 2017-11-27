var api = {
  getRovers(){
    var url= 'https://api-soft.herokuapp.com/clients';/*'https://api-soft.herokuapp.com/tasks'*//*'http://api-soft.herokuapp.com/tasks/5a0a5ad2734d1d4ef311991a'; *//*'https://api-soft.herokuapp.com/tasks';*/
   return fetch(url).then((res)=> res.json());

 },

  getProduct(){
    var url= 'https://api-soft.herokuapp.com/products';/*'https://api-soft.herokuapp.com/tasks'*//*'http://api-soft.herokuapp.com/tasks/5a0a5ad2734d1d4ef311991a'; *//*'https://api-soft.herokuapp.com/tasks';*/
   return fetch(url).then((res)=> res.json());

 },
 validateUser(email, password) {
   var url= `https://api-soft.herokuapp.com/logon/${email}/${password}`;
   return fetch(url).then((res)=> res.json());
 },
 getLoginInfo(){
   var url= 'https://api-soft.herokuapp.com/clients';/*'https://api-soft.herokuapp.com/tasks'*//*'http://api-soft.herokuapp.com/tasks/5a0a5ad2734d1d4ef311991a'; *//*'https://api-soft.herokuapp.com/tasks';*/
  //return fetch(url).then((res)=> res.json());
  return Promise.resolve({


    "_id": "5a0a5ad2734d1d4ef311991a",
    "nombre": "change",
    "apellido": "change1",
    "user": "Jeff",
    "passWord": "Maxly123",
    "email": "jeffy@gmail.com",
    "tipo": "vendedor",
    "status": [
    "pending"
    ],
    "Created_date": "2017-11-27T03:09:48.154Z"
    },
    {
    "_id": "5a0cc375f36d2803b8e34787",
    "nombre": "Paola",
    "apellido": "Alexis",
    "user": "Alex",
    "passWord": "Alex123",
    "email": "Alexis@gmail.com",
    "tipo": "vendedor",
    "status": [
    "pending"
    ],
    "Created_date": "2017-11-27T03:09:48.154Z"


  })

  },
}

module.exports =api;
