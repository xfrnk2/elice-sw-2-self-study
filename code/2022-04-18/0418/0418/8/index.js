var numbers = [175, 50, 25];

document.write(numbers.reduce(myFunc));

function myFunc(total, num) {
  return total - num;
}
