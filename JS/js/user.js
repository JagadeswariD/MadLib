export default class User{
    constructor(email, name){
        this._email = email;
        this._name=name;
    }
    greetings(){
        console.log(`Hi ${this._name}`);
    }
}