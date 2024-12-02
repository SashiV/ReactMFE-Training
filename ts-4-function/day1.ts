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

    const userArea:HTMLDivElement = document.getElementById('users') as HTMLDivElement
    //const el1 = `<li>${user1.name} ${user1.age} ${user1.loggedIn}</li>`
    //const el2 = `<li>${user2.name} ${user2.age} ${user2.loggedIn}</li>`
    //let ul = `<ul>${el1} ${el2}</ul>`

    let el = "<ol>"
    users.forEach(user => {
        if (user.loggedIn) {
            console.log('Logged In: True')
            el += `<li>${user.name} ${user.age} ${user.loggedIn}</li>`
        }
    });

    el += "<ol>"
    userArea.innerHTML = el

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