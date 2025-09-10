console.log('Hello World')
let nr = 2;
console.log(nr++);
console.log(nr);

//Manipulating an array
let cat1 = ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"];
cat1.shift();
cat1.pop();
console.log(cat1);
cat1.unshift("FIRST")
console.log(cat1);
cat1.push("MIDDLE");
console.log(cat1);
cat1[3] = "hello world";
console.log(cat1);
cat1[cat1.length-1] = "LAST";
console.log(cat1);

//Objects

let myCar = {
    carName : "Fortuner",
    model : 2024,
    workingCondition : true,
    color : "White",
};
myCar["color"] = "snowWhite";
console.log(myCar);
myCar["forSale"] = true;
console.log(myCar);

/* code unsuccessful
let people = {
    friends:[a, b, c],
    friend1:{firstName: a ,
        lastName: b ,
        id : 1
    },
    
    friend2:{firstName: c ,
        lastName: d ,
        id : 2
    },
    
    friend3:{firstName: e,
        lastName: f,
        id : 3
    },  
};*/

let Id = true ? console.log("ID is valid, allow him to venue") : console.log("ID invalid, Dont allow him to venue");

/*switch statements
let a;
switch(a) {
 case a = "getUp":
 console.log("It is 6:30AM");
 break;
 case "Breakfast":
 console.log("It is 7:00AM");
 break;
 case "Drive to work":
 console.log("It is 8:00AM");
 break;
 case "Lunch":
 console.log("It is 12:00PM");
 break; 
 case "Drive home":
 console.log("It is 5:00PM");
 break; 
 case "Dinner":
 console.log("It is 6:30PM");
 break;
}*/

let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
 output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
 output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
 output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
 output = "Dinner time";
} else if (myTime >= 22) {
 output = "Time to go to sleep";
} else {
 output = "You should be sleeping";
}
console.log(output)

number = prompt("Please enter a number between 0 and 100: ");
console.log(number)

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
for (let i = 0; i < names.length; i ++){ 
 if(names[i].startsWith("M")){
 delete names[i];
 continue;
 }
 names[i] = "hello " + names[i]; 
} 
console.log(names)

function getRecursive(nr) {
 console.log(nr);
 if (nr > 0) {
 getRecursive(--nr);
 }
}
getRecursive(3)

