import ingridents from "./Ingridents.json" assert {type: "json"};
import seasonings from "./Seasonings.json" assert {type: "json"};





//Ingridents
var Apple = ingridents[0];
var Avocado = ingridents[1];
var Bacon = ingridents[2];
var Banana = ingridents[3];
var Basil = ingridents[4];
var Cheese = ingridents[5];
var CherryTomatoes = ingridents[6];
var Chorizo = ingridents[7];
var Cucumber = ingridents[8];
var Egg = ingridents[9];
var FriedFillet = ingridents[10];
var GreenBellPepper = ingridents[11];
var Ham = ingridents[12];
var Hamburger = ingridents[13];
var HerbedSausage = ingridents[14];
var Jalapeno = ingridents[15];
var Kiwi = ingridents[16];
var KlwafStick = ingridents[17];
var Lettuce = ingridents[18];
var Noodles = ingridents[19];
var Onion = ingridents[20];
var Pickle = ingridents[21];
var Pineapple = ingridents[22];
var PotatoSalad = ingridents[23];
var PotatoTortilla = ingridents[24];
var Prosciutto = ingridents[25];
var RedBellPepper = ingridents[26];
var RedOnion = ingridents[27];
var Rice = ingridents[28];
var SmokedFillet = ingridents[29];
var Strawberry = ingridents[30];
var Tofu = ingridents[31];
var Tomato = ingridents[32];
var Watercress = ingridents[33];
var YellowBellPepper = ingridents[34];


//Seasonings
var Butter = seasonings[0];
var ChiliSauce = seasonings[1];
var CreamCeese = seasonings[2];
var CurryPowder = seasonings[3];
var Horseradish = seasonings[4];
var Jam = seasonings[5];
var Ketchup = seasonings[6];
var Marmalade = seasonings[7];
var Mayonnaise = seasonings[8];
var Mustard = seasonings[9];
var OliveOil = seasonings[10];
var PeanutButter = seasonings[11];
var Pepper = seasonings[12];
var Salt = seasonings[13];
var Vinegar = seasonings[14];
var Wasabi = seasonings[15];
var WhippedCream = seasonings[16];
var Yogurt = seasonings[17];
var BitterHerbaMystica = seasonings[18];
var SpicyHerbaMystica = seasonings[19];
var SaltyHerbaMystica = seasonings[20];
var SourHerbaMystica = seasonings[21];
var SweetHerbaMystica = seasonings[22];

const btn = document.getElementById("btn");
btn.addEventListener("click", (clickLog));

function clickLog() {
    var ingrident1 = document.getElementById("ingridents1").selectedIndex;
    var ingrident2 = document.getElementById("ingridents2").selectedIndex;
    var ingrident3 = document.getElementById("ingridents3").selectedIndex;
    var ingrident4 = document.getElementById("ingridents4").selectedIndex;
    var ingrident5 = document.getElementById("ingridents5").selectedIndex;
    var ingrident6 = document.getElementById("ingridents6").selectedIndex;
    
    var seasoning1 = document.getElementById("seasonings1").selectedIndex;
    var seasoning2 = document.getElementById("seasonings2").selectedIndex;
    var seasoning3 = document.getElementById("seasonings3").selectedIndex;
    var seasoning4 = document.getElementById("seasonings4").selectedIndex;

    /*
    console.log("Ingrident 1 = " + ingrident1 + " which is " + ingridents[ingrident1].Name);
    console.log("Ingrident 2 = " + ingrident2 + " which is " + ingridents[ingrident2].Name);
    console.log("Ingrident 3 = " + ingrident3 + " which is " + ingridents[ingrident3].Name);
    console.log("Ingrident 4 = " + ingrident4 + " which is " + ingridents[ingrident4].Name);
    console.log("Ingrident 5 = " + ingrident5 + " which is " + ingridents[ingrident5].Name);
    console.log("Ingrident 6 = " + ingrident6 + " which is " + ingridents[ingrident6].Name);
    
    console.log("Seasoning 1 = " + seasoning1 + " which is " + seasonings[seasoning1].Name);
    console.log("Seasoning 2 = " + seasoning2 + " which is " + seasonings[seasoning2].Name);
    console.log("Seasoning 3 = " + seasoning3 + " which is " + seasonings[seasoning3].Name);
    console.log("Seasoning 4 = " + seasoning4 + " which is " + seasonings[seasoning4].Name);
    */
    

    
    
    const indexArr = [ingrident1, ingrident2, ingrident3, ingrident4, ingrident5, ingrident6];
    const indexArr2 =  [seasoning1, seasoning2, seasoning3, seasoning4];
    
    const filteredArr = [];
    //Pushes Ingridents into a flitered Array
    for(var i = 0; i < indexArr.length; i++) {
        var index = indexArr[i];
        filteredArr.push(ingridents[index]);
    };
    //Pushes Seasonings into a filtered Array
    for(var i = 0; i < indexArr2.length; i++) {
        var index = indexArr2[i];
        filteredArr.push(seasonings[index]);
    };
    //Multiplies the properties of the ingridents with the amount
    
    for(var i = 0; i < filteredArr.length; i++) {
        for (const property in filteredArr[i]) {
            if (property != "Name" && property != "Amount") {
                filteredArr[i][property] = filteredArr[i][property] * filteredArr[i].Amount;   
            };              
        };    
    };
    
    
    
    
    const total = [];
    
    for (const property in filteredArr[0]) {
        const obj = {};
        obj['name'] = property; 
        obj['value'] = filteredArr[0][property] + filteredArr[1][property] + filteredArr[2][property] + filteredArr[3][property] + filteredArr[4][property] + filteredArr[5][property] + filteredArr[6][property] + filteredArr[7][property] + filteredArr[8][property] + filteredArr[9][property];
        
        total.push(obj);
    };
    
    //console.log(total);

    const PowerFilter = [];
    const TypeFilter = [];
    const TasteFilter = [];

        for(i = 1; i < 6; i++) {
        TasteFilter.push(total[i]);
    }
    
    for(i = 6; i < 16; i++){
        PowerFilter.push(total[i]);
    };

    for(i = 16; i < 34; i++){
        TypeFilter.push(total[i]);
    };

    
    


 
    
    
    const sortedTypeFilter = TypeFilter.sort((a, b) => b.value - a.value);
    const sortedTasteFilter = TasteFilter.sort((a, b) => b.value - a.value);
    
    
    

    
    if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSweetTasteSalty" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSweetTasteBitter") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerEgg';
        });
    
        foundItem['value'] = foundItem.value + 100;
        
    }
    else if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSweetTasteSour" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSourTasteSweet") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerCatch';
        });
    
        foundItem['value'] = foundItem.value + 100;


    }
    else if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSaltyTasteBitter" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteBitterTasteSalty") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerExp';
        });
    
        foundItem['value'] = foundItem.value + 100;
    }
    else if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteBitterTasteSweet" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteBitterTasteSour" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteBitterTasteHot") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerItem';
        });
    
        foundItem['value'] = foundItem.value + 100;
    }
    else if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSweetTasteHot" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteHotTasteSweet") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerRaid';
        });
    
        foundItem['value'] = foundItem.value + 100;
    }
    else if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteHotTasteSalty" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteHotTasteSour" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteHotTasteBitter") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerHumungo';
        });
    
        foundItem['value'] = foundItem.value + 100;
    }
    else if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSourTasteSalty" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSourTasteBitter" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSourTasteHot") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerTeensy';
        });
    
        foundItem['value'] = foundItem.value + 100;
    }
    else if (sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSaltyTasteSweet" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSaltyTasteSour" || sortedTasteFilter[0].name + sortedTasteFilter[1].name == "TasteSaltyTasteHot") {
        const foundItem = PowerFilter.find((item) => {
            return item.name === 'PowerEncounter';
        });
    
        foundItem['value'] = foundItem.value + 100;
    }

    var sortedTasteSum = sortedTasteFilter.reduce((currentTotal, item) => {
        return item.value + currentTotal
    }, 0);
   
   
    //Check how many herbas in recipe
    var herba = 0;
    for(var i = 6; i < filteredArr.length; i++) {
        if (filteredArr[i].TasteBitter == 500 || filteredArr[i].TasteHot == 500 || filteredArr[i].TasteSalty == 500 || filteredArr[i].TasteSour == 500 || filteredArr[i].TasteSweet == 500 ) {
        herba++       
        }
    }
    
    
    
    var sortedPowerFilter = PowerFilter.sort((a, b) => b.value - a.value);
    
    if (herba < 2) {
        const found = sortedPowerFilter.find(element => element.name == "PowerSparkling");
        found.value = -2000;
        var sortedPowerFilter = sortedPowerFilter.sort((a, b) => b.value - a.value);
        
    };
    
    const predictPowerOne = sortedPowerFilter[0].name;
    const predictPowerTwo = sortedPowerFilter[1].name;
    const predictPowerThree = sortedPowerFilter[2].name;
    

    var predictTypeOne;
    var predictTypeTwo;
    var predictTypeThree;
    
    var type;
    //typing prediction based on First type Power
    if (sortedTypeFilter[0].value > 480) {
        predictTypeOne = sortedTypeFilter[0].name
        predictTypeTwo = sortedTypeFilter[0].name
        predictTypeThree = sortedTypeFilter[0].name
        type = 1;
    }
    else if (sortedTypeFilter[0].value > 280) {
        predictTypeOne = sortedTypeFilter[0].name
        predictTypeTwo = sortedTypeFilter[0].name
        predictTypeThree = sortedTypeFilter[2].name
        type = 2;
    }
    else if (sortedTypeFilter[0].value <= 280) {
        predictTypeOne = sortedTypeFilter[0].name
        predictTypeTwo = sortedTypeFilter[2].name
        predictTypeThree = sortedTypeFilter[1].name
        type = 3;
    }







    
    var predictLevelOne = 1;
    var predictLevelTwo = 1;
    var predictLevelThree = 1;

    
    if (herba >= 2) {
        var predictLevelOne = 3;
        var predictLevelTwo = 3;
        var predictLevelThree = 3;
    }
    else if (herba == 1) {
        var predictLevelOne = 2;
        var predictLevelTwo = 2;
        if (type == 1 && sortedTypeFilter[0].value >= 180 && sortedPowerFilter[2].value >= 100) {
            var predictLevelThree = 2;
        }
        else if (type == 2 && sortedTypeFilter[2].value >= 180 && sortedPowerFilter[2].value >= 100) {
            var predictLevelThree = 2;
        }
        else if (type == 3 && sortedTypeFilter[1].value >= 180 && sortedPowerFilter[2].value >= 100) {
            var predictLevelThree = 2;
        };
    }
    else {
        if (type == 1) {
            if (sortedTypeFilter[0].value >= 180 && sortedPowerFilter[0].value >= 100) {
                var predictLevelOne = 2;
            }
            
            if (sortedTypeFilter[0].value >= 180 && sortedPowerFilter[1].value >= 100) {
                var predictLevelTwo = 2;
            }
            
            if (sortedTypeFilter[0].value >= 180 && sortedPowerFilter[2].value >= 100) {
                var predictLevelThree = 2;
            };
        }
        else if (type == 2) {
            if (sortedTypeFilter[0].value >= 180 && sortedPowerFilter[0].value >= 100) {
                var predictLevelOne = 2;
            }
            
            if (sortedTypeFilter[0].value >= 180 && sortedPowerFilter[1].value >= 100) {
                var predictLevelTwo = 2;
            }
            
            if (sortedTypeFilter[2].value >= 180 && sortedPowerFilter[2].value >= 100) {
                var predictLevelThree = 2;
            };
        }
        else if (type == 3) {
            if (sortedTypeFilter[0].value >= 180 && sortedPowerFilter[0].value >= 100) {
                var predictLevelOne = 2;
            }
            
            if (sortedTypeFilter[2].value >= 180 && sortedPowerFilter[1].value >= 100) {
                var predictLevelTwo = 2;
            }
            
            if (sortedTypeFilter[1].value >= 180 && sortedPowerFilter[2].value >= 100) {
                var predictLevelThree = 2;
            };
        }
    };
    

    



    


  



    

    console.log(herba);
    console.log(filteredArr);
    console.log(sortedTypeFilter);
    console.log(sortedTasteFilter);
    console.log(`Power One is ${predictPowerOne} and the type is ${predictTypeOne} and the level is ${predictLevelOne}`);
    console.log(`Power Two is ${predictPowerTwo} and the type is ${predictTypeTwo} and the level is ${predictLevelTwo}`);
    console.log(`Power Three is ${predictPowerThree} and the type is ${predictTypeThree} and the level is ${predictLevelThree}`);

    
    
    console.log(sortedPowerFilter);
    
    console.log(sortedTasteSum);
    console.log(type);
    console.log(sortedTypeFilter[0].value);
    console.log()
    
    
    
    
    
    
    
    
    
    //Reset bitch ass bitch fucking bitch ass fucking bitch array fucking fuck.
    for(var i = 0; i < filteredArr.length; i++) {
        for (const property in filteredArr[i]) {
            if (property != "Name" && property != "Amount") {
                filteredArr[i][property] = filteredArr[i][property] / filteredArr[i].Amount;   
            };              
        };    
    };

    

    herba = 0;
}







/*for(let i = 0; i < seasonings.length; i++){
    console.log("<option value=\"" + seasonings[i].Name + "\">" + seasonings[i].Name + "</option>") ;
}*/



