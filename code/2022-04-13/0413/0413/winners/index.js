let winners = [];
let names = [];

for (let i = 0; i < 8; i++) {
  let random = Math.floor(Math.random() * names.length);
  winners.push(names[random]);
  names.concat(names.splice(random, 1));
}

console.log(winners);
