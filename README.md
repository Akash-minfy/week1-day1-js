***CODES WITH OUTPUT ---***<br>

**PART 1: BASICS & VARIABLES** <br>

**1) [Easy] Declare a variable named favoriteFood using const and assign it a string value of your favorite food. Print it to the console.**
```js
const favoriteFood = "Chicken Biryani"
console.log(favoriteFood)
```
![Screenshot 50](https://github.com/user-attachments/assets/9e8ee4fd-4b66-436e-b288-02dd27e1ba14)

**2)[Easy] Create two variables, numA and numB, and assign them number values. Write an if/else statement to print which number is larger or if they are equal.**
```js
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
```
![Screenshot (50)](https://github.com/user-attachments/assets/6ea48c9a-c231-4b2c-bb78-6820a47faf3b)

**3)[Medium] Write a for loop that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".**
```js
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
```

![Screenshot (51)](https://github.com/user-attachments/assets/d8507e40-f407-4fc8-9bd8-df76004183d6)



**PART 2: ARRAYS**<br>
**1) **[Easy]** Create an array named `colors` with three of your favorite colors.
    - Add a fourth color to the end of the array.
    - Add a new color to the beginning of the array.
    - Print the final array to the console.**

  ```js
let colors=["Black","Green","Blue"];
colors.push("white");
colors.unshift("Orange");
console.log(colors)
```
![Screenshot (47)](https://github.com/user-attachments/assets/342f6036-a443-4692-ad22-68d6f96fa04e)

**2)[Medium] Given the array let numbers = [10, 20, 30, 40, 50];, use the map method to create a new array where each number is increased by 5.**
```js
let numbers = [10, 20, 30, 40, 50];
let newNumbers=numbers.map((n)=> n+5);
console.log(newNumbers);
```
![Screenshot (33)](https://github.com/user-attachments/assets/658a7d71-73d5-4d48-a97b-7200f4293bb5)


**3)[Medium] Given the array let scores = [25, 80, 45, 95, 60, 75];, use the filter method to create a new array containing only the scores that are 70 or higher.**
```js
let scores = [25, 80, 45, 95, 60, 75];
let newScores=scores.filter((n)=>n>=70);
console.log(newScores);
```
![Screenshot (52)](https://github.com/user-attachments/assets/b0306a91-b49e-4e5d-9709-7038f3a5ce5e)
**4)[Hard] Use the reduce method on the scores array from the previous question to calculate the average score. (Hint: sum all scores and then divide by the number of scores).**
```js
let avgScore=scores.reduce((sum,n)=>sum+n)/scores.length;
console.log(avgScore)
```
![Screenshot (34)](https://github.com/user-attachments/assets/1980d5c4-11ac-42b1-ae1f-0c6e9ab96f17)

**Part 3: Objects & Functions**<br>
**1)[Easy] Create an object named movie with properties for title, director, and releaseYear. Print the title of the movie to the console.**
```js
let movie={
    title:"Life of an SDE Intern",
    director:"Akash Kumar",
    releaseYear:2025
}
console.log(movie["title"]);
```

![Screenshot (35)](https://github.com/user-attachments/assets/62de5715-4e7d-4965-8725-bcfde97cb25b)

**2)[Medium] Write a function called printUserDetails that takes a user object as an argument. The user object will have name, email, and age properties. The function should use object destructuring in its parameters to print a string like: "User's name is [NAME], and they are [AGE] years old."**
```js
let printUserDetails=({name,email,age})=>{
    console.log(`User's name is ${name} , and he is ${age} years old.`)
}
let user={
    name:"Akash",
    email:"akash@gmail.com",
    age:23
}
printUserDetails(user);
```

![Screenshot (36)](https://github.com/user-attachments/assets/1b53f630-d9a7-4d2a-bd74-f79dff99283e)
**3)[Medium] Create an array of user objects. Each object should have an id and a username. Use the find method to find the user with a specific id.**
```js
let users=[{id:1,username:"Akash"},{id:2,username:"Shivam"}]
let importantUser=users.find((user)=>user.id===1)
console.log(importantUser);
```
![Screenshot (37)](https://github.com/user-attachments/assets/79fbf45e-b200-45f9-b77a-e432601670f6)

**4)Part 4: Putting It All Together (Advanced)**<br>
**1)[Hard] Write a function called `getHighAchievers`. This function should accept two arguments: an array of student objects and a `passingScore` number. Each student object will look like this: `{ id: 1, name: 'Alice', score: 85 }`.
    - The function should **filter** the students to get only those with a score greater than or equal to `passingScore`.
    - It should then use **map** to return a new array containing only the names of the high-achieving students, in all uppercase letters.
    - Example: `getHighAchievers(students, 80)` might return `["ALICE", "BOB"]`.**
```js
    let getHighAchievers=(students,passingScore)=>{
    let passedStudent=students.filter((s)=>s.score>=passingScore)
    let passedStudentNames=passedStudent.map((s)=>s.name.toUpperCase())
    return passedStudentNames;
}

students=[
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Akash', score: 95 },
    { id: 3, name: 'BOB', score: 75 }
]
console.log(getHighAchievers(students,80));
```
![Screenshot (38)](https://github.com/user-attachments/assets/33082f9d-9718-474b-9c99-cbd35f057fc4)


**2)[Hard] Write a function called `createGame`.
    - This function should not take any arguments.
    - Inside `createGame`, create a "private" variable called `secretNumber` and assign it a random number between 1 and 10.
    - `createGame` should return another function. Let's call this inner function `guess`.
    - The returned `guess` function should accept one argument, a number.
    - When you call `guess`, it should compare the guessed number to the `secretNumber` it remembers (this is a closure!).
    - It should log "You guessed it!", "Too high!", or "Too low!".**
```js
let createGame=()=>{
    let secretNumber= Math.floor(Math.random() * 10) + 1;
    return guess = (number)=>{
            if(number===secretNumber){
                console.log("You guessed it");
            }
            else if(number>secretNumber){
                console.log("Too high");
            }
            else{
                console.log("Too low");
            }
    }
}

let x=createGame();
x(5);
```
![Screenshot (39)](https://github.com/user-attachments/assets/d39dc5c5-1771-407b-a9a0-faea855e5de9)
