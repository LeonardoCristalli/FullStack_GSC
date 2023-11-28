// Implemente su propia función find

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

Array.prototype.my_find = function(callback){
  for (let i = 0; i < this.length; i++){
    if (callback(this[i])) {
      return this[i];
    }
  }
  return undefined;
};

let seeked_user = users.my_find(user => (user.id === 7) && (user.baja !== true));

console.log('Encuentra:', seeked_user);

seeked_user = users.my_find(user => (user.id === 9) && (user.baja !== true));

console.log('No encuentra:', seeked_user);