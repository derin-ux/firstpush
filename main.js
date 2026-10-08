const SignUp = document.querySelector("#SignUp")

SignUp.addEventListener("submit", (event) => {
    event.preventDefault()
    const fullname = document.querySelector("#fullname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirmPassword = document.querySelector("#confirmPassword").value
    const error = document.querySelector("#error")
    


    error.textContent = ""
    error.style.color = "red"
    error.style.fontSize = "15px"
    // error.style.backgroundColor = "grey"

    if (!fullname || !email || !password) {
        // alert("All fields must be filled")
        error.style.color = "red"
        error.textContent = "All fields must be filled"
        return 
    } 
    
    if (password.length <= 5 || password !== confirmPassword) {
        // alert("confirm password")
        error.style.color = "blue"
        error.textContent = "Confirm password"
        return
    } 

    const user = {
        fullname:fullname,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    }

    localStorage.setItem("User",JSON.stringify(user))
    

    // alert("Account created successfully")
    error.textContent = "Account Created Successfully"

    SignUp.reset()
    window.location.href = "login.html"
})
