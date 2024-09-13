const accountId = 3151
let accountEmail = "junaid@google.com"
var accountPassword = "123456"
accountCity = "Kurnool"

let accountState;

accountEmail = "junnu@google.com"
accountPassword = "121212"
accountCity = "bengaluru"

// accountId = 2 // cannot modify const variable
console.log(accountId);

/*
    Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
