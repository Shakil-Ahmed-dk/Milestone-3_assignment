// feetToMile

function feetToMile(feet){
    if(feet>=0){
        var mile = feet/5280;
         return mile;
    }
    else{
        var warning="Warning! Distance value cannot be negative";
        return warning;
    }
    
}

var mileResult = feetToMile(1);
console.log(mileResult);

// woodCalculator


function woodCalculator(table, chair, bed){
    if(table<0 ||chair<0 || bed<0)
    {return "Invalid Input number!"}

    else{
        var tableWoodCount= table*1;
        var chairWoodCount= chair*3;
        var bedWoodCount= bed*5;

        var totalWoodCount= tableWoodCount+chairWoodCount+bedWoodCount;
        return totalWoodCount;
    }
    
}

var woodResult=woodCalculator(10,5,5);
console.log(woodResult);


// brickCalculator

function brickCalculator(floor){
    if(floor>=0 && floor%1==0){
        if(floor<=10){
            var brickcount = floor*15*1000;
            return brickcount;
        }
        if(floor<=20){
            var level2 = floor-10;
            var brickcount = (10*15*1000)+(level2*12*1000);
            return brickcount;
        }
    
        if(floor>20){
            var level3 = floor-20;
            var brickcount = (10*15*1000)+(10*12*1000)+(level3*10*1000);
            return brickcount;
        }
    }
    else{
        return "Invalide Floor number! ";
    }
}

var totalBrick = brickCalculator(1);
console.log(totalBrick);



// tinyFriend

function tinyFriend(n){
    var smallest=n[0];
    var nameLength= smallest.length;
    var j=0;
    
     for(var i=0; i<n.length;i++){
         
         var currentName= n[i];
         var currentNameLength=currentName.length;
      

         if(currentNameLength<nameLength){
            nameLength= currentNameLength;
            var j=currentName;
         }
     }
     return j;
    //  return nameLength;
}

var small=tinyFriend(["sh", "ilg", "kabiravai"]);
 console.log(small);