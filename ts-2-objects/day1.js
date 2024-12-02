{
    var user1 = {
        name: "Sashi",
        age: 40,
        loggedIn: true
    };
    var user2 = {
        name: "Kumar",
        age: 25,
        loggedIn: false
    };
    console.log(user1, user2);
    console.log(user1.age, user2.age);
    var users = [{
            name: "Sashi",
            age: 40,
            loggedIn: true
        },
        {
            name: "Kumar",
            age: 25,
            loggedIn: false
        }
    ];
    console.log(users[0]);
    console.log(users[0].age, users[1].age);
}
