const user = {
    username :"Shubham",
    logInCount : 10,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from Database");
    }
}
console.log(user.username);
console.log(user.getUserDetails());