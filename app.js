var namee, age, email, pass, confPass, okBtn, flag, quesDiv, question, radio1, radio2,
    radio3, radio4, numOfQue, random, randomQues, nextBtn, myQuestionNW,
     arrOfRandom, myRandom, flagForNext, current, lastNum, btnSkip;
validationDiv = document.querySelector(".bigDiv");
namee = document.querySelector(".inp-1");
age = document.querySelector(".inp-2");
email = document.querySelector(".inp-3");
pass = document.querySelector(".inp-4");
confPass = document.querySelector(".inp-5");
okBtn = document.querySelector(".ok");
quesDiv = document.querySelector(".questions");
question = document.querySelector("#ques");
radio1 = document.querySelector("#ans-0");
radio2 = document.querySelector("#ans-1");
radio3 = document.querySelector("#ans-2");
radio4 = document.querySelector("#ans-3");
numOfQue = document.querySelector("#numOfQue");
nextBtn = document.querySelector(".next");

var ch1 = document.querySelector("#rad-0");
var ch2 = document.querySelector("#rad-1");
var ch3 = document.querySelector("#rad-2");
var ch4 = document.querySelector("#rad-3");

var skipBtn = document.querySelector(".skip");
var skipDiv = document.querySelector(".skipList");

var testSH = document.querySelector(".testSH");

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validation(namee, age, email, pass, confPass) {
    flag = true;
    if (namee == null || (namee.length) < 5 || namee == "" || namee == 0 || (/^[a-zA-Z]+$/.test(namee) == false)) {
        alert("name is not valid");
        flag = false;
    }
    if (!(age > 10 && age < 90) || age == "" || age == null || (/^[a-zA-Z]+$/.test(age) == true) || age < 0) {
        alert("age is not valid");
        flag = false;
    }
    if (email == null || (validateEmail(email)) == false || email == "" || email == 0) {
        alert("email is not valid");
        flag = false;
    }
    if (!((pass.length) > 4) || pass == "" || pass == null || pass == 0) {
        alert("password is not valid");
        flag = false;
    }
    if (confPass != pass || confPass == "" || confPass == null || confPass == 0) {
        alert("confirm password is not valid");
        flag = false;
    }

    if (flag == true) {
        validationDiv.style.display = "none";
        testSH.style.display = "block";
    } else {
        validationDiv.style.display = "block";
    }

}

okBtn.addEventListener("click", function () {
    validation(namee.value, age.value, email.value, pass.value, confPass.value);
});

function QuesAndAns(num, que, ans1, ans2, ans3, ans4, correctAnr) {
    this.num = num;
    this.que = que;
    this.ans1 = ans1;
    this.ans2 = ans2;
    this.ans3 = ans3;
    this.ans4 = ans4;
    this.correctAnr = correctAnr;
}


var question1 = new QuesAndAns(0, "WHAT IS THE FIRST CHAR OF APPLE?", "C", "A", "F", "Y", "A");
var question2 = new QuesAndAns(1, "WHAT IS THE FIRST CHAR OF EAT?", "A", "B", "E", "F", "E");
var question3 = new QuesAndAns(2, "WHAT IS THE FIRST CHAR OF CAR?", "D", "E", "C", "R", "C");
var question4 = new QuesAndAns(3, "WHAT IS THE FIRST CHAR OF POWER?", "R", "P", "W", "P", "P");
var question5 = new QuesAndAns(4, "WHAT IS THE FIRST CHAR OF MOBILE?", "M", "Q", "L", "D.", "M");
var question6 = new QuesAndAns(5, "WHAT IS THE FIRST CHAR OF DAY?", "S", "D", "A", "N", "D");
var question7 = new QuesAndAns(6, "WHAT IS THE FIRST CHAR OF MOVIE?", "K", "M", "E", "I", "M");
var question8 = new QuesAndAns(7, "WHAT IS THE FIRST CHAR OF HAND?", "H", "L", "R", "S", "H");
var question9 = new QuesAndAns(8, "WHAT IS THE FIRST CHAR OF Ice?", "P", "I", "N", "T", "I");
var question10 = new QuesAndAns(9, "WHAT IS THE FIRST CHAR OF GOOD?", "F", "E", "G", "V", "G");

var arr = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

function firstQues() {
    numOfQue.innerHTML = arr[0].num;
    question.innerHTML = arr[0].que;
    radio1.innerHTML = arr[0].ans1;
    radio2.innerHTML = arr[0].ans2;
    radio3.innerHTML = arr[0].ans3;
    radio4.innerHTML = arr[0].ans4;
}

arrOfRandom = new Array(5);
arrOfRandom[0] = 0;

function makeRndomNum(count) {
    //   if (count < 4) {
    do {
        random = Math.floor(Math.random() * 10);
        // console.log("the random num is: " + random);
    } while (arrOfRandom.includes(random));
    arrOfRandom[++count] = random;
    return random;
    // }
}

function putQuestions(random) {
    numOfQue.innerHTML = arr[random].num;
    question.innerHTML = arr[random].que;
    radio1.innerHTML = arr[random].ans1;
    radio2.innerHTML = arr[random].ans2;
    radio3.innerHTML = arr[random].ans3;
}

function catchAns() {
    var form = document.forms[1];
    for (var i = 0; i < form.length; i++) {
        if (form[i].checked) {
            var mytxt = form[i].nextSibling.innerHTML;
            return mytxt;
        }
    }
}

function uncheckedRadio() {
    var form = document.forms[1];
    for (let index = 0; index < form.length; index++) {
        if (form[index].checked) {
            form[index].checked = false;
        }
    }
}

var degree = 0;
function checkCorrectAns(answer, myRandom, count, skipLenght) {
    if (answer == arr[myRandom].correctAnr) {
        degree++;
        console.log("num of ques: " + myRandom);
        console.log("num of degree: " + degree);
    }
    if ((count == 4) && (skipLenght == 0)) {
        alert("yor degree is: " + degree + " / 5");
    }
}


firstQues();
var countNum = 0;
nextBtn.addEventListener("click", function () {
    nextButton();
});

flagForNext = true;
function nextButton() {
    // debugger;
    if (countNum == 4) {  
        if ((skipArr.length != 0) || (flagNum == 1) ) {
            var ans = catchAns();          
            checkCorrectAns(ans, myRandom, countNum, skipArr.length);       
        }else{
            checkCorrectAns(ans, myRandom, countNum, skipArr.length);       
            var ans = catchAns();
        }      
        uncheckedRadio();      
        if (skipArr.length != 0) {
            myRandom = returnSkipQues();                       
        } else{
            countNum++;
        }
            

    } else if (countNum < 4) {
        // debugger;
        var ans = catchAns();
        uncheckedRadio();

        if (flagForNext) {
            // debugger;
            if (countNum == 0) {
                checkCorrectAns(ans, 0, 0);
            } else {
                checkCorrectAns(ans, myRandom, countNum, skipArr.length);
            }
            myRandom = makeRndomNum(countNum);
            putQuestions(myRandom);           
        }else{
            // debugger;
            if (countNum == 0) {
                checkCorrectAns(ans, 0, 0);
            } else {
                checkCorrectAns(ans, lastNum, countNum, skipArr.length);
            }
            putQuestions(current);    
            flagForNext = true;   
            countNum--;
        }
        countNum++;       
    
    } else {
        alert("the exam is finished");
    }
}

skipBtn.addEventListener("click", function () {
    createSkipButton();
});

var skipArr = new Array();
var iArr = 0;
function createSkipButton() {
    // debugger;
   lastNum = lastIndex();
    
    if ((!skipArr.includes(lastNum)) && (lastNum != undefined)) {
        skipArr[iArr] = lastNum;
        btnSkip = document.createElement("BUTTON");
        btnSkip.classList.add("forBtn");
        var txtSkip = document.createTextNode("question"+" "+ lastNum);
        btnSkip.addEventListener("click", function () {
            var myString = this.innerText;
            // console.log(myString[myString.length-1]);
            putQuestions(myString[myString.length-1]);
            current = lastIndex();
            flagForNext = false;
        });
        btnSkip.appendChild(txtSkip);
        skipDiv.appendChild(btnSkip);
        var newLine1 = document.createElement("br");
        var newLine2 = document.createElement("br");
        skipDiv.appendChild(newLine1);
        skipDiv.appendChild(newLine2);
        iArr++;
    }
    nextButton();
}

function lastIndex() {
    for (let index = 0; index < arrOfRandom.length ; index++) {
        if (arrOfRandom[index] == undefined) {
            return arrOfRandom[--index];
        }
    }
}

// var tesst = document.getElementsByClassName("fotBtn");
var numOfSkipQue = 0;
var flagNum = 0;
function returnSkipQues(){
    var skipEl = skipArr[(skipArr.length-1)]; 
    // var ind = skipArr.indexOf(skipArr.length-1);
    putQuestions(skipEl);
    skipArr.pop();
    // tesst[ind].remove();
    btnSkip.remove();
    if(skipArr.length == 0){
        flagNum = 1;
    }
    return skipEl;
}