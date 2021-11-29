// // console.log("Hello from Script.js");

// const stala = 29;
// let zmienna = 29;

// // Constów nie da sie nadpisać, a Let-y się da
const stala = 10; 
let zmienna = 10;

// console.log("stala: " + stala);
// console.log("zmienna: "+zmienna);
const text = "Mogę Tu coś wpisać";

const object = {
    name:"john",
    age: 29,
    dog: {
        name: "Azor",
        race: "Labrador"
    }
};

// console.log(object);
// console.log(object.name)
// console.log(object.dog.name)


// array (tablica)
const arr = ['a','b','c'];
// console.log9(arr);

// All in one

const img = [
    { id:1, src : "1jpg" },
    { id:2, src : "2.jpg"},
    { id:3, src : "3.jpg"}
]
// console.log(imgs)

// DOM
const container = document.querySelector(".container");
console.log(container);
// console.log(document)
container.innerHTML = document.querySelectorAll("img");
console.log(container);