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

Array.prototype.my_map = function(callback){
  const new_array = [];
  for (let i = 0; i < this.length; i++){
    new_array.push(callback(this[i]));
  }
  return new_array;
};

users.my_map(user => {
  if (user.baja === false){
    console.log(`ID: ${user.id}, Name: ${user.name}`);
  }
});