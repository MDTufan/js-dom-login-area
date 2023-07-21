
function getInput(ID){
    const inputfild = document.getElementById(ID);
    const inputvalue = inputfild.value;
    const inputAmount = parseFloat(inputvalue);
        // console.log(inputAmount);
        inputfild.value="";
     return inputAmount;   
};


function previous(previousAmout){
     const previousfild = document.getElementById(previousAmout) ;
     const previousvalue = previousfild.innerText;
     
    const preAmount = parseFloat(previousvalue); 
    return preAmount;

    

};


function updateamout(updateid, inputA, preA, balance, addnumber){
    const updateF = document.getElementById(updateid) ;  
    const newA = inputA + preA;
    updateF.innerText = newA;
    if(addnumber == true){
        const newblance =inputA + balance;
        document.getElementById('balance-amount').innerText = newblance;
    }else{
        const newblance =balance - inputA;
        console.log(newblance);
        document.getElementById('balance-amount').innerText = newblance;
    }
    
};


document.getElementById('deposit-btn1').addEventListener('click',function(){
     const inputAmount=getInput("deposit-field");
     if(isNaN(inputAmount)){
        alert("plase Enter a Valid Namber..")
     }else{
        const preAmount = previous('deposit-amount') ;
        const preblance = previous('balance-amount');
        updateamout('deposit-amount',inputAmount,preAmount,preblance, true);
     }
    });




    
document.getElementById('withdraw-btn2').addEventListener('click',function(){
        const inputAmount=getInput("withdraw-field");
        if(isNaN(inputAmount)){
                alert("plase Enter a Valid Namber..")     
        }else{
                const preAmount = previous('withdraw-amount');
                const preblance = previous('balance-amount');
                if(preAmount>preblance){
                        alert('je vai tomar balance taka nai.')
                }else{
                        updateamout('withdraw-amount',inputAmount,preAmount,preblance, false);
                }
                
        }
        
});































// btn

// const depositBtn = document.querySelector('#deposit-btn1');
// const withdrawBtn = document.querySelector('#withdraw-btn2');
// // input field
// const depositField = document.querySelector('#deposit-field');
// const withdrawField = document.querySelector('#withdraw-field');
// // amount
// const depositAmount = document.querySelector('#deposit-amount');
// const withdrawAmount = document.querySelector('#withdraw-amount');
// const balanceAmount = document.querySelector('#balance-amount');

// depositBtn.addEventListener('click', function(){
//         const depositFieldValue = depositField.value;
//         // console.log(depositFieldValue);
//         const depositConvertAmount = parseFloat(depositFieldValue)

//         const previousDeposit = depositAmount.innerText;
//         const previousDepositConvert = parseFloat(previousDeposit);
//         // console.log(previousDepositConvert);

//         const totalDeposit = depositConvertAmount + previousDepositConvert;
//         // console.log(totalDeposit);
//         const previousBalance = balanceAmount.innerText;
//         const previousBalanceConvert = parseFloat(previousBalance)

//         const totalBalance = depositConvertAmount + previousBalanceConvert;

        
//        let mm= depositAmount.innerHTML = totalDeposit;
//     //    console.log(mm);
//         balanceAmount.innerHTML = totalBalance;

//         depositField.value = "";

// });

// withdrawBtn.addEventListener('click', function(){
//         const withdrawFieldValue =  withdrawField.value;
//         // console.log(depositFieldValue);
//         const withdrawConvertAmount = parseFloat(withdrawFieldValue)

//         const previouswithdraw = withdrawAmount.innerText;
//         const previouswithdrawConvert = parseFloat(previouswithdraw);
//         // console.log(previousDepositConvert);

//         const totalwithdraw = withdrawConvertAmount+previouswithdrawConvert;
//         // console.log(totalDeposit);
//         const previousBalance = balanceAmount.innerText;
//         const previousBalanceConvert = parseFloat(previousBalance)

//         const totalBalance = withdrawConvertAmount - previousBalanceConvert;

        
//        let mm= withdrawAmount.innerHTML = totalwithdraw;
//     //    console.log(mm);
//         balanceAmount.innerHTML = totalBalance;

//         withdrawField.value = "";

// })