const Employee = require('./Employee');
const title = Symbol('title');

class Stuff extends Employee {
    constructor(id, name, subject){
        super(id, name);
        this[title] = subject;
    }

    get subject(){
        return this[title];
    }

    set subject(value){
        this[title] = value;
    }

    toString(){
        return `${super.toString()}, Subject: ${this[title]}`;
     }
}

module.exports = Stuff;