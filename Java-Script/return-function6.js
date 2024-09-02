function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
    
  console.log("buy " + calcOfMoney(money, 1.5) + " Bottles of milk");
  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, 1.5);
}
function calcOfMoney(startingMoney, costPerbottle) {
  var numberofBottles = Math.floor(startingMoney / costPerbottle);
  return numberofBottles;
}

function calcChange(startingMoney, costPerbottle) {
  var changeOfMoney = startingMoney % costPerbottle;
  return changeOfMoney;
}

console.log("here is your change master," + getMilk(9));


