document.getElementById('btn-login').addEventListener('click', function(){
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const emailValue = email.value;
    const passwordValue = password.value;

    // condition

    if(emailValue == 'alitufan702@gmail.com' && passwordValue == 'tufan'){
            
            window.location.href = ('dashboard.html');
        //     alert("you are successfully runing");
    }
    else{
            
            alert('YOU ARE HAKER');
    }

})