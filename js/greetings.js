const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");

// document에서 login-form 을 불러들였으므로, login-form 아래에 속해 있는 input, button 등은 login-form에서 찾으면 된다
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");
// 혹은, 위의 두 과정을 한 줄로 작성할 수도 있다.
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){

    // 사용자의 input 제한
    // const username = loginInput.value; //사용자가 입력하는 값인 value를 변수 username으로 받음
    // if(username === ""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("Your name is too long");
    // }

    // 위의 기능을 html의 (input은 form 아래 속해있어야함) input 에서 추가 조건을 작성하여 설정할 수 있음.
    // const username = loginInput.value;
    // console.log(username);

    event.preventDefault(); //preventDefault() 함수 : 어떤 event의 기본행동 디폴트 값이 발생되지 않도록 한다
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

    
}

// loginButton.addEventListener("click", onLoginBtnClick);

// loginForm.addEventListener("submit", onLoginSubmit);

// 링크 연결 ~ 디폴트 값 없애보기
// const link = document.querySelector("a");

// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");
// }


// link.addEventListener("click", handleLinkClick);

function paintGreetings(username){

    const date = new Date();
    const hours = date.getHours();

    if( hours >= 6 && hours < 12){
        greeting.innerText = `Good Morning, ${username}`;
    } else if(hours >= 12 && hours < 18){
        greeting.innerText = `Good Afternoon, ${username}`;
    } else if(hours >= 18 && hours < 24){
        greeting.innerText = `Good Evening, ${username}`;
    } else if(hours >= 0 && hours < 6){
        greeting.innerText = `Good Night, ${username}`;
    }

    greeting.classList.remove(HIDDEN_CLASSNAME);

}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);
    
}
