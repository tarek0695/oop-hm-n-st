const _id = Symbol('id');
const _name = Symbol('name');
const _credit = Symbol('credit');

class Subjects {
    constructor(id, name, credit){
        this[_id] = id;
        this[_name] = name;
        this[_credit] = credit;
    }

    get id(){
        return this[_id];
    }

    get name(){
        return this[_name];
    }
    
    set name(value){
        return this[_name] = value;
    }

    get credit(){
        return this[_credit];
    }

    set credit(value){
        this[_credit] = value;
    }

    toString(){
        return `
        Id: ${this[_id]},
        Name: ${this[_name]},
        Name: ${this[_credit]}
        `
    }
}

module.exports = Subjects;