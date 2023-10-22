// Implemente su propia función filter.

const users = [
  {id: 1, name: 'wLeo', baja: true},
  {id: 2, name: 'Juan', baja: false},
  {id: 3, name: 'María', baja: false},
  {id: 4, name: 'Antonio', baja: false},
  {id: 5, name: 'Laura', baja: false},
  {id: 6, name: 'Diego', baja: false},
  {id: 7, name: 'Wei', baja: false},
  {id: 8, name: 'Jing', baja: false}
]

const query_result = users.filter(user => (user.id % 2 != 0) && (/^w/i.test(user.name)) && (user.baja === false)); 
console.log(query_result);