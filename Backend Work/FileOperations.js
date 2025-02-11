const fs=require('fs');

function datawrite()
{

    try{
fs.writeFileSync("data.txt","Hello I am written using fs module");
console.log("Data written ");
    
}catch(err)
{
 console.log("Error while writing data :"+err)
}
}
const rf=fs.readFileSync('data.txt', {encoding:'utf-8'});
console.log(rf);
datawrite();
fs.appendFileSync('data.txt', '\nappending using fs module');
console.log("Data appended")
