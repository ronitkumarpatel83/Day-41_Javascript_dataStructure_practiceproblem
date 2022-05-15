var dice=Math.floor((Math.random()*10)%6+1);

console.log("The random dice mumber is: ",dice)

var a=0;
var b=0;
var c=0,d=0,e=0,f=0;

var diceArr=[];
var i=1;

while(a<10 && b<10 && c<10 && d<10 && e<10 && f<10){
    var check=Math.floor((Math.random()*10)%6+1);
    diceArr[i]=check;
    i++;
    if(check==1){
        a++;
        
    }
    else if (check==2){
        b++;
    }
    else if (check==3){
        c++;
    }
    else if (check==4){
        d++;
    }
    else if (check==5){
        e++;
    }
    else{
        f++;
    }
}

console.log("All the dice number as follows: ")
for(var j=0;j<diceArr.length;j++){
    console.log(diceArr[j]);
}

console.log("All the dice number as follows in sorted manner: ")
diceArr.sort();
for(var j=0;j<diceArr.length;j++){
    console.log(diceArr[j]);
}
