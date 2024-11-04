const parent=document.getElementById("root")
// const h2=document.createElement("h2");
// h2.innerText="HELLO JS";
// parent[0].appendChild(h2);
// console.log("Hello guys")

//React-------------------------------------------------------------------------------------------
// console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"red", background:"yellow"}},"Hello React JS");
// root.render(h2);

// const li1=React.createElement("li",{}, "Orange");
// const li2=React.createElement("li",{}, "Apple");
// const li3=React.createElement("li",{}, "Banana");
// const ul=React.createElement("ul",{}, li1,li2,li3);
// const div=React.createElement("div",{style:{background:"cyan"}}, h2,ul);
// root.render(div);       //render sirf ek hi cheez hoti h ek baar mein , baaki pehle ka kuch nahi dikhta fir 


//JSX-----------------------------------------------------------------------------------------------------
const h2=React.createElement("h2",{}, "Heading Tag");
const h21=<h2>Hello JSX in JS</h2>;   //using html code directly in JS file through JSX
const li1=<li>Orange</li>;
const li2=<li>Apple</li>;
const li3=<li>Banana</li>;
const ul=<ul style={{color:"red", background:"cyan"}}>{li1}{li2}{li3}</ul>;


const container=(
<div>
<div>{ul}</div>
<div>{h21}</div>
</div>
);
root.render(container);