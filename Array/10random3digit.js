var arr=[];

for (var i=0;i<10;i++){
    arr[i]=Math.floor(Math.random()*900+100);
}
console.log("Random number generated are as follow:");
for (var j=0;j<arr.length;j++){
    console.log(arr[j]);
}

arr.sort();

console.log("The second smaleest number is: ",arr[1]);
console.log("The second largest number is: ",arr[8]);