{
    console.log("Hello Tampa!!");
    //alert("WARNING!!!")
    var balance = 1000;
    console.log(typeof balance);
    var mBalance = 1000;
    mBalance = 20000;
    console.log(mBalance);
    var deposit = Number(prompt('Deposit Amount'));
    mBalance += +deposit;
    console.log('Your new balance is:', mBalance);
}
