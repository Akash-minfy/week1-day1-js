//1)Easy
let colors=["Black","Green","Blue"];
colors.push("white");
colors.unshift("Orange");
console.log(colors)

//2) Medium
let numbers = [10, 20, 30, 40, 50];
let newNumbers=numbers.map((n)=> n+5);
console.log(newNumbers);

//3) Medium
let scores = [25, 80, 45, 95, 60, 75];
let newScores=scores.filter((n)=>n>=70);
console.log(newScores);

//4) Hard
let avgScore=scores.reduce((sum,n)=>sum+n)/scores.length;
console.log(avgScore)