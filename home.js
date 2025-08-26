// Home & Add mone page
const addMoneyBtn = document.getElementById('add-money-btn');
const pin = 1234;
let total = document.getElementById('total-blance');
let totalBlance = parseInt(total.innerText);

let allTrx = [];

addMoneyBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const bank = document.getElementById('bank').value;
    const account = parseInt(document.getElementById('account').value);
    const ammount = parseInt(document.getElementById('ammount').value);
    const pinInput = parseInt(document.getElementById('pin').value);

    if (pin !== pinInput) {
        return alert('Invalid Pin')
    }
    if (document.getElementById('account').value.length != 11) {
        return alert('Please Enter Valid 11 Digit Account Number');
    }
    if (isNaN(account)) {
        return alert('Please Enter Valid Account Number');
    }
    if (isNaN(ammount) || ammount < 1) {
        return alert('Please Enter Valid Amount');
    }
    totalBlance += ammount;
    total.innerText = totalBlance;
    document.getElementById('ammount').value = '';
    document.getElementById('account').value = '';
    document.getElementById('pin').value = '';

    let data = {
        title: 'Add Money',
        date: new Date().toLocaleString()
    }
})

// cash out function
const cashOutBtn = document.getElementById('cash-out-btn');

cashOutBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const agentNumber = parseInt(document.getElementById('agent-number').value);
    const ammount = parseInt(document.getElementById('cash-out-ammount').value);
    const pinInput = parseInt(document.getElementById('cash-pin').value);

    if (pin !== pinInput) {
        return alert('Invalid Pin')
    }
    if (document.getElementById('agent-number').value.length != 11) {
        return alert('Please Enter Valid 11 Digit Agent Number');
    }
    if (isNaN(agentNumber)) {
        return alert('Please Enter Valid Account Number');
    }
    if (isNaN(ammount) || ammount < 1) {
        return alert('Please Enter Valid Amount');
    }
    if (totalBlance > ammount) {
        totalBlance -= ammount;
        total.innerText = totalBlance;
        document.getElementById('agent-number').value = '';
        document.getElementById('cash-out-ammount').value = '';
        document.getElementById('cash-pin').value = '';
    } else {
        return alert('Your blance is low')
    }

    let data = {
        title: 'Cash Out',
        date: new Date().toLocaleString()
    }
    allTrx.push(data)
})


// transfer function

const transferBtn = document.getElementById('transfer-btn');

transferBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const userAccount = parseInt(document.getElementById('user-number').value);
    const ammount = parseInt(document.getElementById('transfer-ammount').value);
    const pinInput = parseInt(document.getElementById('transfer-pin').value);

    if (pin !== pinInput) {
        return alert('Invalid Pin')
    }
    if (document.getElementById('user-number').value.length != 11) {
        return alert('Please Enter Valid 11 Digit Agent Number');
    }
    if (isNaN(userAccount)) {
        return alert('Please Enter Valid Account Number');
    }
    if (isNaN(ammount) || ammount < 1) {
        return alert('Please Enter Valid Amount');
    }
    if (totalBlance > ammount) {
        totalBlance -= ammount;
        total.innerText = totalBlance;
        document.getElementById('user-number').value = '';
        document.getElementById('transfer-ammount').value = '';
        document.getElementById('transfer-pin').value = '';
    } else {
        return alert('Your blance is low')
    }
    let data = {
        title: 'Transfer Money',
        date: new Date().toLocaleString()
    }
    allTrx.push(data)
})
// bonus-btn function

const bonusBtn = document.getElementById('bonus-btn');

bonusBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let couponCode = document.getElementById('coupon-number').value;
    couponCode = couponCode.toLowerCase();
    console.log(couponCode)
    if (couponCode == 'sumer10') {
        totalBlance += 100;
        total.innerText = totalBlance;
        document.getElementById('coupon-number').value = '';
    } else {
        return alert('Invalid coupon code or expried')
    }
    let data = {
        title: 'Bonus Added',
        date: new Date().toLocaleString()
    }
    allTrx.push(data)
})

// pay bill function
const billBtn = document.getElementById('bill-btn');

billBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const billerAccount = parseInt(document.getElementById('biller-account').value);
    const ammount = parseInt(document.getElementById('pay-ammount').value);
    const pinInput = parseInt(document.getElementById('pay-pin').value);

    if (pin !== pinInput) {
        return alert('Invalid Pin')
    }
    if (document.getElementById('biller-account').value.length != 11) {
        return alert('Please Enter Valid 11 Digit Agent Number');
    }
    if (isNaN(billerAccount)) {
        return alert('Please Enter Valid Account Number');
    }
    if (isNaN(ammount) || ammount < 1) {
        return alert('Please Enter Valid Amount');
    }
    if (totalBlance > ammount) {
        totalBlance -= ammount;
        total.innerText = totalBlance;
        document.getElementById('biller-account').value = '';
        document.getElementById('pay-ammount').value = '';
        document.getElementById('pay-pin').value = '';
    } else {
        return alert('Your blance is low')
    }

    let data = {
        title: 'Pay Bill',
        date: new Date().toLocaleString()
    }
    allTrx.push(data)
})

// trx dom



// toggle card
const addCard = document.getElementById('card-add');
const cashOutCard = document.getElementById('card-cashout');
const transferCard = document.getElementById('card-transfer');
const bonusCard = document.getElementById('bonus-card');
const billCard = document.getElementById('card-bill');
const trxCard = document.getElementById('card-trx');

const forms = document.querySelectorAll('.form');
const cards = document.querySelectorAll('.card_item');

// add card
addCard.addEventListener('click', function () {
    for (const item of forms) {
        item.classList.add('hidden');
    }
    document.getElementById('form_add').classList.add('block');
    document.getElementById('form_add').classList.remove('hidden');

    for (const item of cards) {
        item.classList.remove('bg-[#0874F20D]');
        item.classList.add('border-[#0808081A]');
    }
    addCard.classList.remove('border-[#0808081A]');
    addCard.classList.add('bg-[#0874F20D]');
    addCard.classList.add('border-[#0874F2]');
});
// bill card
billCard.addEventListener('click', function () {
    for (const item of forms) {
        item.classList.add('hidden');
    }
    document.getElementById('form_bill').classList.add('block');
    document.getElementById('form_bill').classList.remove('hidden');

    for (const item of cards) {
        item.classList.remove('bg-[#0874F20D]');
        item.classList.add('border-[#0808081A]');
    }
    billCard.classList.remove('border-[#0808081A]');
    billCard.classList.add('bg-[#0874F20D]');
    billCard.classList.add('border-[#0874F2]');
});

// cashout card
cashOutCard.addEventListener('click', function () {
    for (const item of forms) {
        item.classList.add('hidden');
    }
    document.getElementById('form_cashout').classList.add('block');
    document.getElementById('form_cashout').classList.remove('hidden');

    for (const item of cards) {
        item.classList.remove('bg-[#0874F20D]');
        item.classList.add('border-[#0808081A]');
    }
    cashOutCard.classList.remove('border-[#0808081A]');
    cashOutCard.classList.add('bg-[#0874F20D]');
    cashOutCard.classList.add('border-[#0874F2]');
});

// transfer card
transferCard.addEventListener('click', function () {
    for (const item of forms) {
        item.classList.add('hidden');
    }
    document.getElementById('form_transfer').classList.add('block');
    document.getElementById('form_transfer').classList.remove('hidden');

    for (const item of cards) {
        item.classList.remove('bg-[#0874F20D]');
        item.classList.add('border-[#0808081A]');
    }
    transferCard.classList.remove('border-[#0808081A]');
    transferCard.classList.add('bg-[#0874F20D]');
    transferCard.classList.add('border-[#0874F2]');
});
// bonuos card
bonusCard.addEventListener('click', function () {
    for (const item of forms) {
        item.classList.add('hidden');
    }
    document.getElementById('form_bonus').classList.add('block');
    document.getElementById('form_bonus').classList.remove('hidden');

    for (const item of cards) {
        item.classList.remove('bg-[#0874F20D]');
        item.classList.add('border-[#0808081A]');
    }
    bonusCard.classList.remove('border-[#0808081A]');
    bonusCard.classList.add('bg-[#0874F20D]');
    bonusCard.classList.add('border-[#0874F2]');
});
// trx card
trxCard.addEventListener('click', function () {
    for (const item of forms) {
        item.classList.add('hidden');
    }
    document.getElementById('form_trx').classList.add('block');
    document.getElementById('form_trx').classList.remove('hidden');

    for (const item of cards) {
        item.classList.remove('bg-[#0874F20D]');
        item.classList.add('border-[#0808081A]');
    }
    trxCard.classList.remove('border-[#0808081A]');
    trxCard.classList.add('bg-[#0874F20D]');
    trxCard.classList.add('border-[#0874F2]');

    let trxContainer = document.getElementById('trx_container');
    for (const item of allTrx) {
        let trxDiv = document.createElement('div');
        trxDiv.innerHTML = `
        
                <div class="px-5 py-3 rounded-xl bg-white border border-[#0808081A]">
                    <div class="flex justify-between items-center">
                        <div class="flex gap-2 items-center">
                            <div class="bg-[#0808080D] p-3 rounded-full">
                                <img src="./assets/wallet1.png" alt="trx">
                            </div>
                            <div>
                                <h4 class="text-lg font-medium text-gray-700">${item.title}</h4>
                                <p class="text-sm text-gray-500">${item.date}</p>
                            </div>
                        </div>
                        <div class="">
                            <i class="fa-solid fa-ellipsis-vertical text-gray-700 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
        
        `
        trxContainer.appendChild(trxDiv);
    }
});


// dom

// log out function
document.getElementById('logout').addEventListener('click',function () {
    console.log('log out clicked')
    window.location.href='/index.html'
})