//1)Easy
let movie={
    title:"Life of an SDE Intern",
    director:"Akash Kumar",
    releaseYear:2025
}
console.log(movie["title"]);

//2)Medium
let printUserDetails=({name,email,age})=>{
    console.log(`User's name is ${name} , and he is ${age} years old.`)
}
let user={
    name:"Akash",
    email:"akash@gmail.com",
    age:23
}
printUserDetails(user);

//3) Medium
let users=[{id:1,username:"Akash"},{id:2,username:"Shivam"}]
let importantUser=users.find((user)=>user.id===1)
console.log(importantUser);