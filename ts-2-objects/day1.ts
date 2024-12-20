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
    }
    ]

    console.log(users[0])
    console.log(users[0].age, users[1].age)

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
}