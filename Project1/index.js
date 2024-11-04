function showInput()
{
    console.log("ShowInput funtion called");
     const d= document.getElementById("container")
     d.innerHTML='<form onsubmit="getImage(); return false;"><input type="number" placeholder="Enter number of bulbs" id="no_input"> <input type="submit" value="submit"> </form>';
}
function getImage()
{
    const number=document.getElementById("no_input").value;
    console.log(number);
    const image= document.getElementById("image_container");
    image.innerHTML="";
    for(let i=0;i<number;i++)
    {
        let img=document.createElement('img');
        img.src="bulb_off.png";
        image_container.appendChild(img);
    } 
}