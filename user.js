
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
// function to empty div
function emptyDiv(div){
     div.innerHTML=('')
}
// buttons for login 
let login_button=document.getElementById("login-button")
let signup_button=document.getElementById("signup-button")

// signin info
let login_email=document.getElementById("login-email")
let login_password=document.getElementById("signin-password")

// signup info
let signup_name=document.getElementById("signup-name")
let signup_email=document.getElementById("signup-email")
let signup_password=document.getElementById("signup-password")


login_button.addEventListener("click",submitLoginInfo)
function submitLoginInfo(e){
    e.preventDefaule()
  let data=new FormData()
  data.append('email',login_email.value)
  data.append('password',login_password.value)
  axios({
      method:"get",
      url:"",
      data:data,
  }).then((response)=>{
      if (response.data==["message"]){
        //   gives authorisation to like the items
      }
  }).catch((error)=>{
    console.log(error)
})
  emptyDiv(user_signup)
}


signup_button.addEventListener("click",submitSignupInfo)
function submitSignupInfo(){
    let data = new FormData()
    data.append('name',signup_name.value)
    data.append('email',signup_email.value)
    data.append('password',signup_password.value)
    axios({
        method:"get",
        url:"",
        data:data,

    }).then((response)=>{
        if (response.data==['message']){
            // gives authorisation to like 
        }
    })
    emptyDiv(user_signup)

}

