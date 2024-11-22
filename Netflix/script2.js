function createPopcorn() {
    const popcornContainer = document.querySelector('.popcorn-container');

    function generatePopcorn() {
        const popcorn = document.createElement('div');
        popcorn.classList.add('popcorn');

       
        popcorn.style.left = `${Math.random() * 100}vw`;

       
        popcorn.style.top = `-${Math.random() * 100}px`;  

        
        const duration = Math.random() * 5 + 5;
        popcorn.style.animationDuration = `${duration}s`;

        
        popcorn.style.fontSize = `${Math.random() * 20 + 20}px`;

       
        popcorn.innerHTML = '<i class="bi bi-egg-fried"></i>';

        
        popcornContainer.appendChild(popcorn);
    }

   
    setInterval(generatePopcorn, 200); 
}


document.addEventListener('DOMContentLoaded', () => {
    createPopcorn();
});


function Login() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    let emailValue = email.value.trim().toLowerCase();
   
    let passwordValue = password.value.trim();
    
    if (emailValue === "danielehokage@gmail.com" && passwordValue === "DanieleBestTeacher2024") {
        window.location.href = 'index.html';  
    } else {
        alert("Email o password non corrette Hokage Sama! Riprova!");
    }
}



