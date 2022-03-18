console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split("\n")[3]; // Use split and array operations on the login_text string to extract the question

let answer; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

function captchasolve(){
    if(question.includes("first value")){
        answer = question.split(" ")[4];
    }
    else if(question.includes("second value")){
        answer = question.split(" ")[6];
    }
    else if(question.includes("subtract")){
        let array1 = question.split(" ");
        answer = array1[2]- array1[4];
    }
    else if(question.includes("add")){
        let array1 = question.split(" ");
        answer = +array1[2] + +array1[4];
    }
}

captchasolve();


const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
