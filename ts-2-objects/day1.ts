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
}