var readlineSync = require('readline-sync');

const chalk = require('chalk');
var score=0;
var userInput = readlineSync.question('What is your name? ');
console.log("\n");
console.log("Welcome "+ userInput+" to "+ chalk.blue(chalk.bgWhite("'The Doraemon Quiz!'")));
console.log(chalk.magenta("................................"));



//function definition
function quiz(question, answer){
  
var ques=readlineSync.question(question);

if (ques.toUpperCase() === answer.toUpperCase()){
  console.log(chalk.green("Right \n"))
  score++;
}
  else{
    console.log(chalk.red("Wrong \n"));
  }

console.log(chalk.yellowBright("------------------"))
}

//questions using object and key
var q1={
  question:"Q1 From century did Doraemon come from? \na) 23rd \nb) 21st\nc) 22nd\n",
  answer:"c"
}
var q2={
  question:"Q2 Does Doraemon have any sibling? \na) yes \nb) no\nc) Don't know\n",
  answer:"a"
}
var q3={
  question:"Q3 What is Doraemon most feared of? \na) cockroach \nb) mice\nc) snake\n",
  answer:"b"
}
var q4={
  question:"Q4 Who is Doraemon's crush? \na) Midori \nb) Ria Chan\nc )Mi Chan\n",
  answer:"c"
}
var q5={
  question:"Q5 Who is Nobita most afraid of? \na) Gian \nb) Suneo\nc )Dekisugi\n",
  answer:"a"
}



//array 
var q= [q1,q2,q3,q4,q5];



var start=readlineSync.question("If you want to continue,\nPress 'yes', otherwise 'no'\n");

console.log(chalk.magenta("................................"));


if (start == "yes"){
console.log(chalk.cyan("Welcome to Level 1"));
console.log("In order to go to next level you must score more than "+ chalk.bgMagentaBright("3 out of 5"));
console.log(chalk.black(chalk.bgWhite("\nLet's Start!")));
console.log(chalk.magenta("................................"));

//function call in loop
for(var i=0; i<q.length; i++){

  var currentQues=q[i];
  quiz(currentQues.question, currentQues.answer);
 }

}
  else{
  console.log("End!\nSee you soon");
  }
    


console.log(chalk.black(chalk.bgMagentaBright("Your score is "+score+"/5")));
if(score>=3){
if (start == "yes"){
console.log(chalk.yellowBright("\nCongratulations!") + "You go to next Level");
console.log("_____________________________________________");



if(score>=3){
console.log(chalk.cyan("\nWelcome " +userInput+ " to level 2"));
console.log("Answer 10 questions about Doraemon.\nIt's going to be a bit harder this time");
console.log(chalk.black(chalk.bgWhite("\nLet's Start!")));
console.log(chalk.yellowBright("------------------"))

//function definition
var score1=0;
function quiz2(question1,answer1){
var input= readlineSync.question(question1)

if(input.toUpperCase() === answer1.toUpperCase()){
console.log(chalk.green("Right \n"))
score1++;

}else{
console.log(chalk.red("Wrong \n"))
}
console.log(chalk.yellowBright("------------------"))

}


//objects
var x1={
  question1:"Q1 What is Nobita's mother's name? \na) Tamano \nb) Tamako \nc) Takamo\n",
  answer1:"b"
}
var x2={
  question1:"Q2 What is Doraemon's sister's name? \na) Domeri \nb) Doraemi \nc) Dorami\n",
  answer1:"c"
}
var x3={
  question1:"Q3 What is the color of Any where door? \na) Red \nb) Blue\nc) Pink\n",
  answer1:"c"
}
var x4={
  question1:"Q4 How many mini Doraemon's are there? \na) 3 \nb) 4 \nc) 5\n",
  answer1:"a"
}
var x5={
  question1:"Q5 What is Doraemon? \na) A Racoon Robot \nb) A Dog Robot \nc) A Cat Robot\n",
  answer1:"c"
}
var x6={
  question1:"Q6 Who is the only female main character in the show Doraemon? \na) Shizuka \nb) Tamako \nc) Dorami\n",
  answer1:"a"
}
var x7={
  question1:"Q7 Who is Gian's sister? \na) Tamako \nb) Jaiko  \nc) Jariko\n",
  answer1:"b"
}
var x8={
  question1:"Q8 What is Doraemon's favourite food? \na) Riceballs \nb) Icecream \nc) Doracakes\n",
  answer1:"c"
}
var x9={
  question1:"Q9 Who did voice over of Suneo's Voice in hindi? \na) Sanjay Keni \nb) Saurav Chakraborty \nc) Wajahat Hassan\n",
  answer1:"c"
}
var x10={
  question1:"Q10 What is the name of Gian's dog? \na) Wuku \nb) Hachi\nc) Ichi\n",
  answer1:"a"
}



//array define
var qu=[x1,x2,x3,x4,x5,x6,x7,x8,x9,x10];

//function call in loop
for(j=0; j<qu.length; j++){
currentQues=qu[j];
quiz2(currentQues.question1,currentQues.answer1);

}

console.log(chalk.black(chalk.bgMagentaBright("Your score is "+score1+"/10")));

console.log(chalk.blue("\nThank you for playing.")+" \nHave a nice day!");



}


}
}else{
  console.log("Sorry, you did not qualify for the next round."+chalk.red("\nTry again!"))
}