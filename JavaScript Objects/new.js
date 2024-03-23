var name = "Johny";

let obj = {
    name : "Yogii",
    first(){
        console.log(`${this.name} is a doctor.`);
    },
    second :  ()=> {
        console.log(`${this.name} is a plumber.`);
    }
}
obj.first();
obj.second();