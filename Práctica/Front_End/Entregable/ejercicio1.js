//Implemente su propia función map

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

users.map(user => {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
});

/* Lo dejo por si pedia lo visto en clases (Clase Map) y no la función.

const rolls = 1000;
const dice_results = new Map();

for (let i = 0; i < rolls; i++) 
{
  const roll = Math.floor(Math.random() * 6) + 1;
  if (dice_results.has(roll))
  {
    dice_results.set(roll, dice_results.get(roll) + 1);  
  }
  else
  {
    dice_results.set(roll, 1);
  }
}

const dice_results_array = Array.from(dice_results);
dice_results_array.sort((a, b) => a[0] - b[0]);
const dice_results_sorted = new Map(dice_results_array);

console.log("Resultados de las tiradas de dado:");
for(const [number, count] of dice_results_sorted)
{
  console.log(`${number}: ${count}`);
} */