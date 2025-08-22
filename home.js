// Home & Add mone page
const addMoneyBtn = document.getElementById('add-money-btn');
const pin = 1234;
let total = document.getElementById('total-blance');
let totalBlance = parseInt(total.innerText);

addMoneyBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const bank = document.getElementById('bank').value;
    const account = parseInt(document.getElementById('account').value);
    const ammount = parseInt(document.getElementById('ammount').value)
    const pin = parseInt(document.getElementById('pin').value);
    totalBlance += ammount;
    total.innerText = totalBlance;
    document.getElementById('ammount').value='';
})