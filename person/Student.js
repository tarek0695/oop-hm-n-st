const UniPerson = require('./UniPerson');

const _studentID = Symbol('studentID');
const _guardian = Symbol('guardian');
const _exams = Symbol('exams');
const _fee = Symbol('fee');

class Student extends UniPerson {
    constructor(id, name, studentId, guardian){
        super(id, name);
        this[_studentID] = studentId;
        this[_guardian] = guardian;
        this[_exams] = [];
        this[_fee] = null;
    }

    get studentId(){
        return this[_studentID];
    }

    get guardian(){
        return this[_guardian];
    }
    
    get exams(){
        return this[_exams];
    }

    set exams(value){
        this[_exams] = value;
    }

    addExam(exam){
        this[_exams].push(exam);
    }

    get fee(){
        return this[_fee];
    }

    set fee(value){
        this[_fee] = value;
    }

    toString(){
       return `${super.toString()}, StudentID: ${this[_studentID]}`;
    }
}

module.exports = Student;