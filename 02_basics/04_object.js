//const user_Data = new Object    //singleton
const user_Data = {}
user_Data.id = "a1s2"
user_Data.name = "Shubham"
user_Data.loginStatus = false
// console.log(user_Data);

//nested object
const regular_user ={
    email :"a1100@google.com",
    userFullName :{
        FullName :{
            FirstName : "Shubham",
            LastName : "Jangir"
        }
    }
}
// console.log(regular_user);
// console.log(regular_user.userFullName.FullName.FirstName);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "b"}
const obj4 = {5 : "e" , 6 : "b"}

// const obj3 ={obj1,obj2}     // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'b' } }
// const obj3 = Object.assign(obj1,obj2,obj4)    //(target,source1,...)   output obj1==obj3

// const obj3 = Object.assign({},obj1,obj2,obj4)    
// output   { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e', '6': 'b' }

const obj3 ={...obj1,...obj2,...obj4} //spread

// console.log(obj3);

// data from server 
const user = [
    {
        id : 1,
        name : "abc"
    },
    {
        id : 2,
        name : "pqr"
    },
    {
        id : 3,
        name : "xyz"
    }
]

// console.log(user[1].id);

// console.log(user_Data);
// console.log(Object.keys(user_Data));        // [ 'id', 'name', 'loginStatus' ]
// console.log(Object.values(user_Data));      // [ 'a1s2', 'Shubham', false ]
// console.log(Object.entries(user_Data));     // [ [ 'id', 'a1s2' ], [ 'name', 'Shubham' ], [ 'loginStatus', false ] ]

// console.log(user_Data.hasOwnProperty('loginStatus'));     //true

const anotherObject = {
    name : "Shubham",
    phone : "9632587412",
    email : "shubham@google.com"
}
// console.log(anotherObject.email);
const {email : mail} = anotherObject
// console.log(email);
// console.log(mail);


// data from api


// {
//     "userId" : "Shubham1",
//     "password" : "Shuabham@123",
//     "loginStaus" : false
// }

[
    {},
    {},
    {}
]