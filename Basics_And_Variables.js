 
//1)[Easy]
const favoriteFood = "Chicken Biryani"
console.log(favoriteFood)

//2)[Easy]
let numA=5
let numB=6
if(numA>numB){
    console.log(`${numA} is larger than ${numB}`)
}
else if(numB>numA){
    console.log(`${numB} is larger than ${numA}`)
}
else {
    console.log(`${numA} is equal to ${numB}`)
}

//3) Medium
for(let i=1;i<=20;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
         console.log("Buzz");
    }
    else{
        console.log(i);
    }
}