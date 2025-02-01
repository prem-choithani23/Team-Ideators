function selectUserType(type) {  
    const loginForm = document.getElementById('loginForm');  
    const signupForm = document.getElementById('signupForm');  
    const toggleButton = document.getElementById('toggle');  

    if (type === 'student') {  
        loginForm.style.display = 'block';  
        signupForm.style.display = 'none';  
        toggleButton.textContent = 'Toggle to Signup';  
        toggleButton.onclick = () => showSignup();  
        
        // Highlight selected button  
        document.getElementById('studentButton').classList.add('selected');  
        document.getElementById('adminButton').classList.remove('selected');  
    } else {  
        loginForm.style.display = 'none';  
        signupForm.style.display = 'block';  
        toggleButton.textContent = 'Toggle to Login';  
        toggleButton.onclick = () => showLogin();  
        
        // Highlight selected button  
        document.getElementById('adminButton').classList.add('selected');  
        document.getElementById('studentButton').classList.remove('selected');  
    }  
}  

function showSignup() {  
    selectUserType('admin');  
}  

function showLogin() {  
    selectUserType('student');  
}