{
    type Signature = {
        name: string,
        age: number,
        loggedIn: boolean
    }

    let user1:Signature = {
        name: "Sashi",
        age: 40,
        loggedIn: true
    }

    let user2:Signature = {
        name: "Kumar",
        age: 25,
        loggedIn: false
    }

    console.log(user1, user2)
    console.log(user1.age, user2.age)

    let users:Signature[] = [{
        name: "Sashi",
        age: 40,
        loggedIn: true
    },
    {
        name: "Kumar",
        age: 25,
        loggedIn: false
    },
    {
        name: "Suraj",
        age: 13,
        loggedIn: true
    }
    ]

    console.log(users[0])
    console.log(users[0].age, users[1].age)

    function logIn(user: Signature): void {
        user.loggedIn = true
        const userArea:HTMLParagraphElement = document.getElementById('welcomeUser') as HTMLParagraphElement
        const welcomeMessage = 'Welcome'
        userArea.innerHTML = `${welcomeMessage} ${user.name}`
        console.log(user.name, 'Logged In')
    }

    type Transaction = {
        description: string,
        amount: number,
        date: Date
    }

    const trans1: Transaction = {
        description: 'Deposit',
        amount: 2000,
        date: new Date()
    }

    const trans2 = {...trans1, amount: 3000}
    console.log(trans2.amount)

    const {description, date} = trans2

    console.log(date)

    const transactions: Transaction[] = [trans1, trans2];

    function newTransaction(): void {
        const totalAmount:HTMLSpanElement = document.getElementById('balance') as HTMLSpanElement
        const amt = document.getElementById('amount') as HTMLInputElement
        const totAmt = document.getElementById('balance') as HTMLInputElement
        totAmt.value += amt.value
        const trans: Transaction = {...trans1, amount: Number(amt.value)}
        transactions.push(trans)
        console.log('Total Balance: ', totAmt.value)
        totalAmount.textContent = totAmt.value
    }
}