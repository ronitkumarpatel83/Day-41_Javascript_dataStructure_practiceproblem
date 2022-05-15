var arr=[];

for (var i=0;i<10;i++){
    arr[i]=Math.floor(Math.random()*900+100);
}

console.log("Random number with out sorting: ");
for (i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr.sort();
console.log("Random number after sorting: ");
for (var j=0;j<arr.length;j++){
    console.log(arr[j]);
}