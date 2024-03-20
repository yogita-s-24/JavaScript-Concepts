const user = {
    userName : "Yogita",
    price: 999,

    welcomeMessage : function (){
        console.log(`${this.userName},  Welcome to website.`);
        // console.log(this);
    }
}
user.welcomeMessage();
user.userName = 'Samy';
user.welcomeMessage();