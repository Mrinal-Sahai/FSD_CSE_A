//DOM................................................................................................

// console.dir(document);
// const div=document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerText="ABES Engineering College";
// div[0].innerHTML="<h2>ABES ENGINEERING COLLEGE<\h2>";
// const h1=document.createElement("h1");
// h1.innerText="Element is created by DOM function";
// h1.style.backgroundColor="Cyan";
// h1.style.color="Red";
// div[0].appendChild(h1);
// // console.log(h1);
// const img=document.createElement("img");
// img.src="chuha.jpg";
// console.log(img);
// // div[0].appendChild(img);

// const display=document.getElementById("disp");
// const button=document.getElementById("btn")
// console.log(display);
// function getData()
// {
//      console.log("Calling Get Data function");
//     div[0].appendChild(img);
//     display.innerHTML="<h3>Hello Guys I hate Cats</h3>";
// }
//button.addEventListener("click", getData);




//PROMISE........................................................................................


// const promise1=new Promise(

//     (resolve,reject)=>
//     {
//         let a=Math.random()*1000;
//         if(a>99 && a<201)
//         {
//             resolve("value of a="+a+" is resolved");
//         }
//         else
//         {
//             reject("a="+a+" is rejected");
//         }
//     }
// );

// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")});

// const promise2=new Promise(
// (resolve,reject)=>
// {
//     resolve({name:"Asmit", branch:"CSE"});
// }
// );
// promise2.then((data)=>{console.log(data)})
// .catch(error=>(console.log(error)));

//FETCH API.......................................................................................
let a=[];
const disp=document.getElementById("disp");
const response=fetch("https://dummyjson.com/products");
response.then(
    data=>
    {
        console.log(data);
        data.json().then(res=>{
            for(let i=0;i<res.products.length;i++)
            {
                a.push(res.products[i].title);
                disp.innerHTML+= "<br>"+ (i+1)+")   " + a[i];
                
            }
            });
            
    }
    )

