
var score = 0;

function Check(){
    
var result1 = document.getElementById('Q1-A3');
var  q1a1 = document.getElementById('Q1-A1');
var q1a2 = document.getElementById('Q1-A2');

    if(result1.checked == true){
        score++
        alert("Q1 correct answer")
    }else{
        alert("Q1 wrong answer")
    }

    var result2 = document.getElementById('Q2-A3');
var  q2a1 = document.getElementById('Q2-A1');
var q2a2 = document.getElementById('Q2-A2');

    if(result2.checked == true){
        score++
        alert("Q2 correct answer")
    }else{
        alert("Q2 wrong answer")
    }

    var result3 = document.getElementById('Q3-A1');
var  q3a2 = document.getElementById('Q3-A2');
var q3a3 = document.getElementById('Q3-A3');

    if(result3.checked == true){
        score++
        alert("Q3 correct answer")
    }else{
        alert("Q3 wrong answer")
    }
alert("your score is " + score)
}