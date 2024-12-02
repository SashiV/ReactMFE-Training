{
    console.log("Hello Tampa!!")
    //alert("WARNING!!!")

    const balance = 1000
    console.log(typeof balance)

    let mBalance:number = 1000
    mBalance = 20000

    console.log(mBalance)

    let deposit:number = Number(prompt('Deposit Amount'))
    mBalance += +deposit

    console.log('Your new balance is:', mBalance)

    let nBalance:string = 'Your new balance is:'
    let zeroBalance:boolean = true

    console.log(typeof nBalance, typeof mBalance, typeof zeroBalance)
    console.log(nBalance, mBalance, zeroBalance = mBalance===0)

    let greeting:string = 'Hello'
    let clientName:string = String(prompt("Enter your Name"))

    console.log(greeting, clientName, nBalance, mBalance)

}

