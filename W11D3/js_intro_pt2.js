function titleize(arr, callback) {
  let newArr = arr.map(name => 
    `Mx. ${name} Jingleheimer Schmidt`);
  callback(newArr);
};

// titleize(["Mary", "Brian", "Leo"], names => {
//   names.forEach(name => console.log(name));
// });


//-----------------------------------------------------------------


function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height; 
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  return `${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`; 
}
Elephant.prototype.grow = function () {
  this.height += 12; 
  return this.height;
}
Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
  return this.tricks;
}
Elephant.prototype.play = function () {
  let rand = this.tricks[Math.floor(Math.random() * this.tricks.length)];
  return `${this.name} is ${rand}!`;
}

// let dumbo = new Elephant("Dumbo", 50, ["playing", "rolling"]);
// console.log(dumbo.name);
// console.log(dumbo.trumpet());
// console.log(dumbo.play());
// console.log(dumbo.addTrick("smiling"));
// console.log(dumbo.grow());


//-----------------------------------------------------------------


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// function paradeHelper (elephant) {
//   console.log(`${elephant.name} is trotting by!`)
// }
// herd.forEach(ele => paradeHelper(ele));

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};
herd.forEach(function (ele) {
  Elephant.paradeHelper(ele);
});


//-----------------------------------------------------------------

function dinerBreakfast () {
  let order = "I would like cheesy scrambled eggs please.";
  
  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  }
} 


let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
bfastOrder("hash browns");