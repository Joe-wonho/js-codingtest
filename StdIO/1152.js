let test1 = 'The Curious Case of Benjamin Button';
let test2 = ' The last character is a blank ';

const sol = (data) => {
  let trimString = data.trim().split(' ').length;
  console.log(trimString);
};

console.log(sol(test2));
