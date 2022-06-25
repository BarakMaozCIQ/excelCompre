const getData = require('./createCompereXcell.js');

let data = getData(); //get the data from the excell files

let dataBoss = data[0]; 
let dataMaya = data[1]; 


//compere the data
let totalPrice = 0;
let totalPriceMissmatch = 0;

console.log(" Boss in Maya");

dataBoss.forEach( persionBoss => {
      
    let persionMaya = dataMaya.filter(persionMaya => persionMaya.id == persionBoss.id);
    
    if(persionMaya.length > 0)
    {   
        if(persionMaya.length > 1)
        {
         console.log("Duplicte Data issue! found the id ===> " + persionBoss.id + " ==> "+persionMaya.length+" times on Maya Data");
        }
        if(Math.floor(persionMaya[0].price * 100) / 100 != persionBoss.price)
        {   
            console.log("Maya Data Price for id ==> "+persionBoss.id +" is ===> " + Math.floor(persionMaya[0].price * 100) / 100 + " but found in Boss Data Price ===> " +persionBoss.price);
            totalPriceMissmatch = totalPriceMissmatch + (persionBoss.price - Math.floor(persionMaya[0].price * 100) / 100) ;
        }
        // console.log("found ===> " + persionBoss.name);
    }
    else{
        console.log("Not found in Maya Data ===> " + persionBoss.name + " the id for the persion ===> " +persionBoss.id +" the price is ===> " + persionBoss.price);
        totalPrice = totalPrice + persionBoss.price
    }
})

console.log(" the missing Money from missing pepole is ===> " + totalPrice);
console.log(" the missing Money Gap is  ===> " + totalPriceMissmatch);
console.log(" ------------------------------------------------------------------------------------------------------------------ ");
console.log(" Maya  in Boss");
let totalPrice2 = 0;
let totalPriceMissmatch2 = 0;
dataMaya.forEach(persionMaya => {

    let persionDataBoss = dataBoss.filter(persionData => persionMaya.id == persionData.id);
    
    if(persionDataBoss.length > 0)
    {   
        if(persionDataBoss.length > 1)
        {
         console.log("Duplicte Data issue! found the id ===> " + persionMaya.id + " ==> "+persionDataBoss.length+" times on Maya Data");
        }
        else{
            if(Math.floor(persionMaya.price * 100) / 100 != persionDataBoss[0].price)
            {   
                console.log("Maya Data Price for id ==> "+persionMaya.id +" is ===> " + Math.floor(persionMaya.price * 100) / 100 + " but found in Boss Data Price ===> " +persionDataBoss[0].price);
                totalPriceMissmatch2 = totalPriceMissmatch2 + (persionDataBoss[0].price - Math.floor(persionMaya.price * 100) / 100) ;
            }
        }
    }
    else{
        console.log("Not found in Boss Data ===> " + persionMaya.name + " the id for the persion ===> " +persionMaya.id +" the price is ===> " + persionMaya.price);
        totalPrice2 = totalPrice2 + persionMaya.price
    }

})


console.log(" the missing Money from missing pepole is ===> " + totalPrice2);
console.log(" the missing Money Gap is  ===> " + totalPriceMissmatch2);