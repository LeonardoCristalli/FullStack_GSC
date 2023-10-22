// Implemente su propia función find

const users = [
  {id: 1, name: 'Leo'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'María'},
  {id: 4, name: 'Antonio'},
  {id: 5, name: 'Laura'},
  {id: 6, name: 'Diego'},
  {id: 7, name: 'Wei'},
  {id: 8, name: 'Jing'}
]

const seeked_user = users.find(user => user.id === 7);

console.log(seeked_user);