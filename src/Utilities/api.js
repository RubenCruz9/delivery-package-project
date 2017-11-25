var api = {
  getRovers(){
    var url= 'https://api-soft.herokuapp.com/tasks';/*'http://api-soft.herokuapp.com/tasks/5a0a5ad2734d1d4ef311991a'; *//*'https://api-soft.herokuapp.com/tasks';*/
  //  return fetch(url).then((res)=> res.json());
  return Promise.resolve({

    "_id": "5a0a5ad2734d1d4ef311991a",
    "basic_info": {
    "nombre": "Sondley",
    "appellido": "Northecide",
    "user": "leyloo",
    "passWord": "Sondley123"
    },
    "status": [
    "pending"
    ],
    "Created_date": "2017-11-15T22:37:19.105Z"

  })
  }
};

module.exports =api;
