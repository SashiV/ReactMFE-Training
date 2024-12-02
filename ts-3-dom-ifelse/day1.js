var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var userArea = document.getElementById('users');
    var el1 = "<li>".concat(user1.name, " ").concat(user1.age, " ").concat(user1.loggedIn, "</li>");
    var el2 = "<li>".concat(user2.name, " ").concat(user2.age, " ").concat(user2.loggedIn, "</li>");
    var ul = "<ul>".concat(el1, " ").concat(el2, "</ul>");
    userArea.innerHTML = ul;
    var trans1 = {
        description: 'Deposit',
        amount: 2000,
        date: new Date()
    };
    var trans2 = __assign(__assign({}, trans1), { amount: 3000 });
    console.log(trans2.amount);
    var description = trans2.description, date = trans2.date;
    console.log(date);
}
