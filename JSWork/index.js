console.dir(document);
const div=document.getElementsByClassName("parent");
console.log(div);
// div[0].innerText="ABES Engineering College";
// div[0].innerHTML="<h2>ABES ENGINEERING COLLEGE<\h2>";
// const h1=document.createElement("h1");
// h1.innerText="Element is created by DOM function";
// h1.style.backgroundColor="Cyan";
// h1.style.color="Red";
// div[0].appendChild(h1);
// console.log(h1);
const img=document.createElement("img");
img.src="chuha.jpg";
console.log(img);
// div[0].appendChild(img);

const display=document.getElementById("disp");
const button=document.getElementById("btn")
console.log(display);
function getData()
{
     console.log("Calling Get Data function");
    div[0].appendChild(img);
    display.innerHTML="<h3>Hello Guys I hate Cats</h3>";
}
button.addEventListener("click", getData);



