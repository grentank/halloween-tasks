const isHalloweenNumber = require('./tasks/isHalloweenNumber');

for (let index = -100; index < 100; index++) {
  console.log(`${index}: ${isHalloweenNumber(index)}`);
}
