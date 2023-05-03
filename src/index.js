import "./styles.css";
import typeScript from "./typeScript.ts";
import newsImage from './news-image.png';

const newsIcon = document.createElement("img");
newsIcon.src = newsImage;
newsIcon.setAttribute("id","newsIcon");
document.body.appendChild(newsIcon);

const buttonElement = document.createElement("button");
buttonElement.innerText="Click to fetch News..";
buttonElement.classList.add("textElement");
document.body.appendChild(buttonElement);

buttonElement.addEventListener("click",()=>{
    import("./fetchDataFromAPI.js").then((module) => module.clickHandler());
});

// ES6 features for babel transpiler

const arrowFunction = ()=>{
    console.log("Inside arrow function");
}
arrowFunction();

class MyClass{
    constructor(){
        this.name="Hello world";
    }
    method1(){
        console.log(`Method name is ${this.name}`);
    }
}

// ES7+ features for babel transpiler

// padStart , padEnd
let stringForPadding = "1";
console.log(stringForPadding.padStart(3,"0"));
console.log(stringForPadding.padEnd(3,"0"));

// Exponential operator
console.log(2**3);

// Array includes method
console.log(["hello","world"].includes("hello"));


