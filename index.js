const readLineSync = require('readline-sync');
const quizQA = {
  description: "Let's play quiz on Big-Bang Theory TV show.(Yes/No?)",
  entry: [
      {
        question: "Who is Sheldon's nemesis?",
        option: ['Wallowitz','Rajesh','Will Wheaton','Leslie Winkle'],
        answer: '3'
      },{
        question: 'Which song Penny sings when Sheldon is sick?',
        option: ['Smelly Cats','Soft Kitty','Shelly Sea shells','Big-Bang Theory'],
        answer: '2'
      },{
        question: 'What is Howard allergic to?',
        option: ['Nuts','Sheldon','Doing a Phd','Burgers'],
        answer: '1'
      },{
        question: "What is Raj's dog name?",
        option:['Shelly','Chihuahua','Cinammon','Kelly'],
        answer: "3"
      },{
        question: "How did the group teach Sheldon to drive?",
        option: ['Time-travel','Actually-drive','Driving-school','Driving-simulator'],
        answer: '4'
      }
  ]
};



let play = readLineSync.question(quizQA.description);

const print = (optelement)=> console.log(optelement+"\n");

function callback(element){
  print(element.question);
  element.option.forEach(print);
  const userAnswer = readLineSync.question("Enter 1 or 2 or 3 or 4 for responses\n");
     
     if(userAnswer===element.answer){
       console.log("It's correct\n");
       return 1;
     }
     else{
       console.log("Wrong Answer!\n");
       return 0;
     }
       
  
}
while(play==='Yes'){
  let qScore=0;
  quizQA.entry.forEach((element)=> qScore += callback(element));
  console.log(`Your Score is : ${qScore} / ${quizQA.entry.length}`)
  play = readLineSync.question("Do you want to play again?(Yes or No)");
  
}