const fs = require('fs').promises; 

async function copyData() {
    try{
        const data = await fs.readFile("StudentData.json", 'utf-8');
        await fs.writeFile("UpdatedStudentData.json", data); 
        console.log('Data copied');
    } catch (error) {
        console.error('Error copying data:', error);
    }
}

const obj=
{
    copyData:copyData
};
module.exports=obj;