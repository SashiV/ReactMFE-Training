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
    var nBalance = 'Your new balance is:';
    var zeroBalance = true;
    console.log(typeof nBalance, typeof mBalance, typeof zeroBalance);
    console.log(nBalance, mBalance, zeroBalance = mBalance === 0);
    var greeting = 'Hello';
    var clientName = String(prompt("Enter your Name"));
    console.log(greeting, clientName, nBalance, mBalance);
}
