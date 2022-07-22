// user input currency
const currencyOne = document.getElementById('currency-one');
//change curr
const currencyTwo = document.getElementById('currency-two')
//input amount
const amountOne  = document.getElementById('amount-one');
//translate amount
const amountTwo = document.getElementById('amount-two')


const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap'); //swap btn


// fetching rate 
async function calculateChange(){
    // console.log("😎😎")
    // get value
    const curr_one  = currencyOne.value;
    const curr_two = currencyTwo.value;

    // don't use mine key get it form https://www.exchangerate-api.com/
    const response = await fetch(`https://v6.exchangerate-api.com/v6/6a75378d1916d987dcc8af1c/latest/USD`);

    const data = await response.json();
    // get reates
    const rate = data.conversion_rates[curr_two];

    rateEl.innerHTML =`1 ${curr_one}= ${rate} ${curr_two}`

    //convert
    amountTwo.value = (amountOne.value*rate).toFixed(3);
}

//adding Event Listner 
currencyOne.addEventListener('change',calculateChange);
amountOne.addEventListener('input',calculateChange);
currencyTwo.addEventListener('change',calculateChange);
amountTwo.addEventListener('input',calculateChange);

swap.addEventListener('click',()=>{
    const tmp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = tmp;
    calculateChange();
})


calculateChange(); 