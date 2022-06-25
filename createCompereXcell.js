const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 


module.exports = function () {

    const resultBoss = excelToJson({
        source: fs.readFileSync('./xcelfiles/BossFile.xlsx') // fs.readFileSync return a Buffer
    });
    
    const resultMaya = excelToJson({
        source: fs.readFileSync('./xcelfiles/MayaFile.xlsx') // fs.readFileSync return a Buffer
    });
    
    
    //find the last relvant line
    let lastUserNumber;
    
    for (let index = 7; index < Object.values(resultBoss)[0].length; index++) {
        let smallDataObj = Object.values(resultBoss)[0][index]; 
        let keysObj = Object.keys(smallDataObj);
        if(keysObj.some(key => key == 'A'))
        {
            lastUserNumber = index;
            break;
        }
    }
    
    //filter the relvant Data Boss File
    let arrBoss = []; 
    for (let index = 7; index < lastUserNumber; index++) {
    
        let smallDataObj = Object.values(resultBoss)[0][index];
        arrBoss.push({name: smallDataObj.M , id: smallDataObj.K , price: smallDataObj.P})   
    }
    
    //filter the relvant Data Maya File
    let arrMaya = []; 
    for (let index = 0; index < Object.values(resultMaya)[0].length - 1; index++) {
    
        let smallDataObj = Object.values(resultMaya)[0][index];
        arrMaya.push({name: smallDataObj.F , id: smallDataObj.H , price: smallDataObj.C})   
    }

    return [arrBoss,arrMaya]
}







