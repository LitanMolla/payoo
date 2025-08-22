// Login page
const loginBtn = document.getElementById('login-btn');
const number = 12345678910;
const pin = 1234;

loginBtn.addEventListener('click',function (event) {
    event.preventDefault();
    const numberInput = parseInt(document.getElementById('number-input').value);
    const pinInput = parseInt(document.getElementById('pin-input').value);
    
    if (number === numberInput && pin === pinInput) {
        window.location.href='home.html';
    } else{
        alert('Invalid credentials')
    }
});

