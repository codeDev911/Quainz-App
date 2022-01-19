let Quaizs = [
    {
        question : 'Q 1:HTML stands for?',
        a: 'High text maker language',
        b: 'Hyper text markup language',
        c: 'Hi they make laugh',
        d: 'None of the above',
        corr_opt: 'option_2', // Correct option
    },
    {
        question : 'Q 2:Which one is correct?',
        a: 'var 2ab = "name"',
        b: 'var 1-ab = "name"',
        c: 'var ab_w = "name"',
        d: 'var #ab = "name"',
        corr_opt: 'option_3', // Correct option
    },
    {
        question : 'Q 3:Change the text size. we use?',
        a: 'text-size',
        b: 'size',
        c: 'font-size',
        d: 'size-text',
        corr_opt: 'option_3', // Correct option
    },
    {
        question : 'Q 4:Which function is correct?',
        a: 'const fun = () =>{}',
        b: 'fun = (){}',
        c: 'const = () =>{}',
        d: 'None of the above',
        corr_opt: 'option_1', // Correct option
    },
    {
        question : 'Q 5:Change Background color.. we use?',
        a: 'bg-color',
        b: 'background-color',
        c: 'color',
        d: 'backgound-colour',
        corr_opt: 'option_2', // Correct option
    },



];

let Question = document.getElementById('question');

let opt_1 = document.getElementById('opt_1');
let opt_2 = document.getElementById('opt_2');
let opt_3 = document.getElementById('opt_3');
let opt_4 = document.getElementById('opt_4');
let outOf = document.getElementById('outOf');

let AllOptions = document.querySelectorAll('.option')
 
let Question_count = 0; // Increase one After click Next button
let score = 0;

// Funciton to Auto load Quaiz Questions and option

const autoLoadQuaiz = () =>{
    let QuaizDB = Quaizs[Question_count];
    Question.innerHTML = QuaizDB.question;
    opt_1.innerHTML = QuaizDB.a;
    opt_2.innerHTML = QuaizDB.b;
    opt_3.innerHTML = QuaizDB.c;
    opt_4.innerHTML = QuaizDB.d;

    outOf.innerHTML = `${Question_count+1} / ${Quaizs.length}`
     
}
autoLoadQuaiz();


const GetCorrOpt = () =>{ // find the selected option
    let ans 
    
    for (let i = 0; i < AllOptions.length; i++) {
        let select_opt = AllOptions[i];
        if (select_opt.checked) { // if Option is selected
            ans = select_opt.id;
            
        }
        
    }
    return ans;

}

const Deselect_check = () =>{
    for (let i = 0; i < AllOptions.length; i++) {
        let select_opt = AllOptions[i];
        if (select_opt.checked == true){
            select_opt.checked = false;
        }
    }
}
 
function nextClick() {
 
    let check_opt = GetCorrOpt();
    console.log(check_opt);

    if (check_opt == Quaizs[Question_count].corr_opt) {
        score++;
    }
    Deselect_check();
    Question_count++;  
    
    if(Question_count < Quaizs.length){
        autoLoadQuaiz();
    }else{
        let resultBody = document.querySelector('.result')
        resultBody.style.visibility = 'visible';
        resultBody.innerHTML = `  <h3> You Scored ${score}</h3>
             <button class='play_again' onclick = 'location.reload()'>Play Again</button>
        `;
    }

}

