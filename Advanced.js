//1) Hard
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

//2)Hard
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