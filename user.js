
const user_login=document.getElementById("user-login")
user_login.addEventListener("click",generateLoginForm)
function generateLoginForm(){
    const container=document.getElementById("login-signup-form")
    emptyDiv(container)
    container.innerHTML=`
     <div class="login-modal">
         <div class="login-form">
         <div class="login-user">
             <div class="login-header">
             <h3>LOGIN</h3>
             <p>your email and password please</p>
             </div>
         </div>
         <form class="login-form">
             <input type="text" placeholder="email" id="login-email"/>
             <input type="password" placeholder="password"id="signin-password"/>
             <button class="button-submit" id="login-button">login</button>
         </form>
         </div>
     </div>`        
}
const user_signup = document.getElementById("user-signup")
user_signup.addEventListener("click",generateSignupForm)
function generateSignupForm(){
    const container_signup=document.getElementById("signup-form")
    container_signup.innerHTML=`
     <div class="signup-modal ">
         <div class="login-form">
         <div class="login-user">
             <div class="login-header">
             <h3>SIGNUP</h3>
             <p>it will be an experience!</p>
             </div>
         </div>
         <form class="login-form none">
             <input type="text" placeholder="name"id="signup-name"/>
             <input type="text" placeholder="email" id="signup-email"/>
             <input type="password" placeholder="password" id="signup-password"/>
             <button class="button-submit id="signup-button">signup</button>
         </form>
         </div>
     </div>`
}
function emptyDiv(div){
     div.innerHTML=('')
}
let login_button=document.getElementById("login-button")
let signup_button=document.getElementById("signup-button")

login_button.addEventListener("click",submitLoginInfo)
function submitLoginInfo(){
    let login_email=document.getElementById("login-email")
    let login_password=document.getElementById("signin-password")
}


signup_button.addEventListener("click",submitSignupInfo)
function submitSignupInfo(){
    let signup_name=document.getElementById("signup-name")
    let signup_email=document.getElementById("signup-email")
    let signup_password=document.getElementById("signup-password")

}

