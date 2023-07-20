const foods = [];

 foods.push("pizza", "cheeseburger");
 
 
foods[3] = "tacos";
foods[0] = "pizza";
foods[1] = "tofu";
foods[2] = "cheeseburger";

 foods.unshift(foods.pop());

const favFood = foods[1];

foods[1] = "sushi & cupcake";

const yummy = foods.slice(1,2);

console.log(yummy);

const newArray = yummy;

const tofu = "tofu";

let  soyIdx = foods.indexOf(tofu);

const allFoods = foods.join();

console.log(allFoods);


const hasSoup = allFoods.includes("soup");

console.log(hasSoup);



const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach(function(numElement) {
    console.log(numElement);

    if(numElement % 3 == 0) {
        fizz.push(numElement);
    } else if (numElement % 5 == 0) {
        buzz.push(numElement);
    } else if (numElement % 3 || numElement % 5 == 0 ) {
        fizzbuzz.push(numElement);
    }
})

console.clear()

console.log(" fizz:", fizz);
console.log(" buzz:", buzz);
console.log(" fizzbuzz:", fizzbuzz);



const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
  ];
  const numList =  numArrays[3];
  const num = numArrays[2][1];


console.log(numList);
console.log(num);
 

let total = 0;


numArrays.forEach(function(a) {
    a.forEach(function(average) {
        total += average;
    })
});

console.log(total);

  
















































