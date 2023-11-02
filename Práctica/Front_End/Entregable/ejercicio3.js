// Implemente su propia función filter.

const users = [
  {id: 1, name: 'Leo', baja: true},
  {id: 2, name: 'Juan', baja: false},
  {id: 3, name: 'María', baja: false},
  {id: 4, name: 'Antonio', baja: false},
  {id: 5, name: 'Laura', baja: false},
  {id: 6, name: 'Diego', baja: false},
  {id: 7, name: 'Wei', baja: false},
  {id: 8, name: 'Jing', baja: false}
]

Array.prototype.my_filter = function(callback){
  filtered_array = [];
  for (let i = 0; i < this.length; i++){
    if (callback(this[i])){
      filtered_array.push(this[i]);
    }
  }
return filtered_array;
};

const query_result = users.my_filter(user => (user.id % 2 != 0) && (/^[wl]/i.test(user.name)) && (user.baja !== true));
console.log(query_result);