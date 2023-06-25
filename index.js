const { Guardian, Student, Teacher } = require('./person');
const { Contact, Address } = require('./contact');
const { Department, Subject, Exam } = require('./university');


/**
 * Guardian id 1
 */
const guardian = new Guardian(1, 'Hasan', 'retired', 30000);
guardian.blood = 'a+';
guardian.contact = new Contact({
    id:1,
    email: 'hasan@gmaiil.com',
    phone: '0171231',
    alternativePhone: '123',
    // address: new Address({
    //     id: 1,
    //     roadNo: 123,
    //     city: 'sunamganj',
    //     region: 'sylhet',
    //     country: 'BD',
    //     postalCode: '3000'
    // })
});

guardian.contact.address = new Address({
        id: 1,
        roadNo: 123,
        city: 'sunamganj',
        region: 'sylhet',
        country: 'BD',
        postalCode: '3000'
})

/**
 * student id 1
 */
const student = new Student(1, 'tarek', 'ST001' , guardian);
student.blood = 'a+';
student.contact = new Contact({
    id:2,
    email: 'tarek@gmaiil.com',
    phone: '01718671',
    alternativePhone: student.guardian.contact.phone,
    address: student.guardian.contact.address
})

/**
 * Department id 1
 */
const department = new Department({id: 1, name: 'SWE'});
student.department = department;

department.subjects = [
    new Subject(1, 'Computer fundamental', 4),
    new Subject(2, 'Software engineering', 3),
    new Subject(3, 'Network engineering', 4)
]

/**
 * total credit
 */
const credit = student.department.subjects.reduce((a, b) => {
    a += b.credit;
    return a;
}, 0);

console.log('Total credit', credit);

/**
 * dean
 */

const dean = new Teacher(1, 'Mr Biplob', department.subjects[0], 'Emp1001');
dean.blood = 'b+';
dean.department = department;
dean.salary = 40000;
dean.contact = new Contact({
    id:1,
    email: 'biplop@gmaiil.com',
    phone: '000111222',
    address: new Address({
        id: 2,
        roadNo: 11,
        city: 'Dhaka',
        region: 'Dhaka',
        country: 'BD',
        postalCode: '4000'
    })
})

const teacher1 = new Teacher(2, 'Mr Afjal', department.subjects[1], 'Emp1002');
teacher1.blood = 'a+';
teacher1.department = department;
teacher1.salary = 30000;
teacher1.contact = new Contact({
    id:1,
    email: 'Afjal@gmaiil.com',
    phone: '000111222',
    address: new Address({
        id: 3,
        roadNo: 11,
        city: 'Comilla',
        region: 'Dhaka',
        country: 'BD',
        postalCode: '4000'
    })
})

const teacher2 = new Teacher(3, 'Mrs Ruma', department.subjects[2], 'Emp1003');
teacher2.blood = 'O+';
teacher2.department = department;
teacher2.salary = 60000;
teacher2.contact = new Contact({
    id:1,
    email: 'Ruma@gmaiil.com',
    phone: '3333333',
    address: new Address({
        id: 4,
        roadNo: 12,
        city: 'Rajshahi',
        region: 'Dhaka',
        country: 'BD',
        postalCode: '6000'
    })
})


department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

// department.teachers = dean;
// department.teachers = teacher1;
// department.teachers = teacher1;

// console.log(dean.department);

// student.department.teachers.forEach((teacher, index) => {
//     console.log(`${index+1}: ${teacher.name}, ${teacher.subject.name}`);
// });

guardian.addChild(student);

// console.log(guardian);

//find teachers salary by guardian
const teachersSalary = guardian.children[0].department.teachers.reduce((acc, cur) => {
    acc += cur.salary;
    return acc;
}, 0);

// console.log(teachersSalary);
// console.log(guardian.children.department.teachers);

//find blood group 
let count = 0;
if(student.blood === 'a+') count++;
if(student.guardian.blood === 'a+') count++;
student.department.teachers.forEach(teacher => {
    if(teacher.blood === 'a+') count++;
});
console.log(count);