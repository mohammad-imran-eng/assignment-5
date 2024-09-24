
function removedElement(id){
    document.getElementById(id).classList.add('hidden')
}

function showElement(id){
    document.getElementById(id).classList.remove('hidden')
}

document.getElementById('donate-noakhali').addEventListener('click',()=>{

    

    const donateamount = parseFloat(document.getElementById('amount').value);
    

    if(donateamount > 0 && isNaN){
        const historyContainer = document.getElementById('history-container');
        const headline = document.getElementById('headline').innerText;
        const date = new Date();
        const historyItem = document.createElement('div');
        historyItem.innerHTML = `
        <h1 class="font-bold text-2xl"> ${donateamount} Taka ${headline}</h1>
        <h1> Date: ${date.toLocaleString()}</h1>
        `
        historyContainer.insertBefore(historyItem,historyContainer.firstChild)

        const balance = parseFloat(document.getElementById('balance').innerText);
        const balanceElement = document.getElementById('balance');
        balanceElement.innerText = donateamount + balance;
        const accountBalance = document.getElementById('account-balance').innerText;
        document.getElementById('account-balance').innerText = accountBalance - donateamount;
        document.getElementById('amount').value = ""
    }
    else{
        alert('Enter a valid Amount')
        document.getElementById('amount').value = ""
    }

    
        

    

})

document.getElementById('donate-feni').addEventListener('click',()=>{

    const donateamount = parseFloat(document.getElementById('feni-amount').value);

    if(donateamount > 0 && isNaN){
        const balance = parseFloat(document.getElementById('feni-balance').innerText).toFixed(2);
        const balanceElement = document.getElementById('feni-balance').toFixed(2);
        balanceElement.innerText = donateamount + balance;
        const accountBalance = parseFloat(document.getElementById('account-balance').innerText).toFixed(2);
        document.getElementById('account-balance').innerText = accountBalance - donateamount;
        document.getElementById('feni-amount').value = ""
        const historyContainer = document.getElementById('history-container');
        const headline = document.getElementById('headline-two').innerText;
        const date = new Date();
        const historyItem = document.createElement('div');
         historyItem.innerHTML = `
        <h1 class="font-bold text-2xl"> ${donateamount} Taka ${headline}</h1>
        <h1> Date: ${date.toLocaleString()}</h1>
         `
         historyContainer.insertBefore(historyItem,historyContainer.firstChild)
    }
    else {
        alert('Enter a valid Amount')
        document.getElementById('feni-amount').value = ""
    }
    
   
})

document.getElementById('donate-quota').addEventListener('click',()=>{
    const donateamount = parseFloat(document.getElementById('quota-amount').value);
    const balance = parseFloat(document.getElementById('quota-balance').innerText);
    const balanceElement = document.getElementById('quota-balance');
    balanceElement.innerText = donateamount + balance;
    const accountBalance = document.getElementById('account-balance').innerText;
    document.getElementById('account-balance').innerText = accountBalance - donateamount;
    document.getElementById('quota-amount').value = ""
    const historyContainer = document.getElementById('history-container');
    const headline = document.getElementById('headline-three').innerText;
    const date = new Date();
    const historyItem = document.createElement('div');
     historyItem.innerHTML = `
    <h1 class="font-bold text-2xl"> ${donateamount} Taka ${headline}</h1>
    <h1> Date: ${date.toLocaleString()}</h1>
     `
     historyContainer.insertBefore(historyItem,historyContainer.firstChild)
})



document.getElementById('donate-change').addEventListener('click',()=> {
    document.getElementById('history-change').classList.remove('btn');
    document.getElementById('donate-change').classList.remove('btn', 'btn-outline', 'btn-primary')
    document.getElementById('donate-change').classList.add('btn','btn-primary');
    document.getElementById('history-change').classList.add('btn', 'btn-outline', 'btn-primary');
    showElement('removed-noakhali')
    showElement('removed-feni')
    showElement('removed-quota')
    document.getElementById('history').classList.add('hidden')
})

document.getElementById('history-change').addEventListener('click',()=> {
    document.getElementById('history-change').classList.remove('btn', 'btn-outline', 'btn-primary');
    document.getElementById('history-change').classList.add('btn','btn-primary');
    document.getElementById('donate-change').classList.remove('btn','btn-primary');
    document.getElementById('donate-change').classList.add('btn', 'btn-outline', 'btn-primary')

    removedElement('removed-noakhali')
    removedElement('removed-feni')
    removedElement('removed-quota')
    document.getElementById('history').classList.remove('hidden')
})
