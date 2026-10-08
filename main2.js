const Login = document.querySelector("#Login")

Login.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const error = document.querySelector("#error")
    
    error.textContent = ""
    error.style.color = "red"
    if (!email || !password) {
        // alert("All fields must be filled")
        error.textContent("All fields must be filled")
        return 
    }

    const saveUser = JSON.parse(localStorage.getItem("User"))

    if (!saveUser ) {
        // alert("No account found. Pls signup first")
        error.textContent("No account found. Pls signup first")
        return
    }

    if (email === saveUser.email && password === saveUser.password){
        alert(`Welcome ${saveUser.fullname}`)
        Login.reset()
        window.location.href = "home.html"
        // alert("Login successful")
        error.textContent("Login Successful");
        
        
    } else {
        // alert("Invalid email and password")
        error.textContent("Invalid email and password")
    }

    
})
