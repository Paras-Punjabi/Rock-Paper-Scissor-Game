let score_user = document.querySelector('.score_user');
let computer_score = 0;
let nameUser = document.querySelector('.name_user')
let user_score = 0;
let me = document.querySelector('.me');
let score_comp = document.querySelector('.score_comp');
let rock_image = document.querySelector('.rock_img');
let paper_image = document.querySelector('.paper_img');
let rock = document.querySelector('.rock')
let scissor = document.querySelector('.scissor')
let paper= document.querySelector('.paper')
let scissor_image = document.querySelector('.scissor_img');
let count = 0;// so that after 10 chances the game will be over
let btn = document.querySelector('.replay')

// computer choice array
let images = ['paper', 'scissor', 'rock'];

// user friendly code
// to get user name
let message = document.querySelector('.display_message')
message.addEventListener("click", Go=() => {
    let name = prompt("Enter your name");
    nameUser.innerHTML = name
    alert("The Game will continue for 10 chances. For draw there will be no points given to each one of you.")
    message.removeEventListener('click',Go)
    message.innerHTML = "Let's Play";
    me.style.display="block"
    me.style.backgroundColor = "darkkhaki";
    me.style.border = "2px solid darkkhaki"
    me.style.borderRadius = "30px"
    start();// without entering name you won't be able to play the game
})

// computer choice
function randomChoise() {
    let number = Math.floor(Math.random() * 3);
    let computer_option = images[number]
    return computer_option;
}

function check() {
    if (count == 9) {
        if (user_score > computer_score) {
            message.innerHTML = `${nameUser.innerHTML} is our overall Winner!! with ${parseInt(user_score-computer_score)} points `
        }
        else if (computer_score > user_score) {
            message.innerHTML = `Computer is our overall Winner!! with ${parseInt(computer_score-user_score)} points`;
        }
        else if (user_score == computer_score) {
            message.innerHTML = `DRAW!!`
        }
        rock.style.display="none"
        paper.style.display="none"
        scissor.style.display="none"
        me.style.display="none"
        btn.style.display="block"
    }
}



function start(){
    rock_image.addEventListener("click", () => {

        let number = Math.floor(Math.random() * 3);
    
        let computer_option = images[number]
    
        if (computer_option == 'paper') {
            message.innerHTML = "Computer chose Paper📃 <br> Computer Won!!";
    
            computer_score++;
            score_comp.innerHTML = computer_score;
        }
        else if (computer_option == 'scissor') {
            message.innerHTML = "Computer chose Scissor✂ <br> You Won!!";
            user_score++;
            score_user.innerHTML = user_score;
        }
        else if (computer_option == 'rock') {
            message.innerHTML = "Computer chose Rock🧱 <br> Draw!!"
        }
        check()
        count++;
    })
    
    scissor_image.addEventListener("click", () => {
    
        let number = Math.floor(Math.random() * 3);
        let computer_option = images[number]
    
    
        if (computer_option == "paper") {
            message.innerHTML = "Computer chose Paper📃 <br> You Won!!";
            user_score++;
            score_user.innerHTML = user_score;
        }
        else if (computer_option == "rock") {
            message.innerHTML = "Computer chose Rock🧱 <br> Computer Won!!"
            computer_score++;
            score_comp.innerHTML = computer_score;
    
        }
        else if (computer_option == "scissor") {
            message.innerHTML = "Computer chose Scissor✂ <br> Draw!!";
        }
        check()
        count++;
    })
    
    paper_image.addEventListener("click", () => {
    
        let number = Math.floor(Math.random() * 3);
        let computer_option = images[number]
    
        if (computer_option == "paper") {
            message.innerHTML = "Computer chose Paper📃 <br> Draw!!";
    
        }
        else if (computer_option == "rock") {
            message.innerHTML = "Computer chose Rock🧱 <br> You Won!!"
            user_score++;
            score_comp.innerHTML = user_score;
    
        }
        else if (computer_option == "scissor") {
            message.innerHTML = "Computer chose Scissor✂ <br> Computer Won!!";
            computer_score++;
            score_comp.innerHTML = computer_score;
        }
        check()
        count++;
    
    })
}

// reload play again
btn.addEventListener('click',()=>{
    window.location.reload();
})

