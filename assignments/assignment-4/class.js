// constructor(name: string): This method will be used to construct a new Person instance with a name. The name should be a string value.
// introduceYourself(): This instance method should console log a generic self-introduction such as "Hello, my name is (name)".
// getRole(): This instance method should return 'Person' indicating the role of this instance.
// countInstances(): This static method should keep track of how many instances of the Person class have been created. Increment the count each time a new instance is created.
class Person {
    static instanceCount = 0;
    constructor(name) {
        this.name = name;
        Person.instanceCount++;
    }
    introduceYourself() {
        console.log(`Hello, my name is ${this.name}`);
    }
    getRole() {
        return "Person";
    }
    static countInstances() {
        return Person.instanceCount;
    }
}
// constructor(): This method will be used to construct a new GradeBook instance. The GradeBook should be an empty object upon creation.
// addGrade(subject: string, grade: number): This method is used to add a grade for a specific subject. If the subject doesn't exist in the GradeBook, it should create an array for the subject.
// getGrades(subject: string): This method should return an array of grades for a specific subject. If there are no grades for that subject, it should return an empty array.
// getAllGrades(): This method should return the whole GradeBook which is an object where each property is a subject and the value is an array of grades.
// format(): This static method should return a format for storing grades in the GradeBook.

class GradeBook {
    constructor() {
        this.grades = {};
    }

    addGrade(subject, grade) {
        if (!this.grades[subject]) {
            this.grades[subject] = [];
        }
        this.grades[subject].push[grade];
    }
    getGrades(subject) {
        if (!this.grades[subject]) {
            return this.grades[subject];
        } else {
            return [];
        }
    }

    getAllGrades() {
        return this.grades;
    }

    static format() {
        return {
            subject: "",
            grade: 0
        };
    }
}
// constructor(name: string, subject: string): This method will be used to construct a new Teacher instance with a name and a subject that they teach. The subject should be a string value.
// introduceYourself(): This method should console log a teacher-specific self-introduction, such as "Hello, my name is (name) and I teach (subject)". This method overrides the introduceYourself() from the Person class.
// teach(student: Student, grade: number): This method is used to add a grade to a student's GradeBook for the subject that the teacher teaches. The grade is a number representing the grade that the student received.
// getSubject(): This method should return the subject that the teacher is responsible for teaching.
// getStudentGrade(student: Student): This method should return an array of grades a student has received for the subject the teacher is responsible for. If the student hasn't received a grade for that subject, it should return an empty array.
// dressCode(): This method should return a standard teacher attire such as "Formal shirt and pants".
// getRole(): This method should return 'Teacher' indicating the role of this instance. This method overrides the getRole() from the Person class.
// countInstances(): This static method should keep track of how many instances of the Teacher class have been created.
class Teacher extends Person {
    static instanceCount = 0;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.instanceCount++;
    }
    introduceYourself() {
        console.log(
            `Hello, my name is ${this.name} and I teach ${this.subject}`
        );
    }
    teach(student, grade) {
        student.getGradeBook().addGrade(this.subject, grade);
    }
    getSubject() {
        return this.subject;
    }
    getStudentGrade(student) {
        return student.getGrade(this.subject);
    }
    dressCode() {
        return "Formal shirt and pants";
    }
    getRole() {
        return "Teacher";
    }
    static countInstances() {
        return Teacher.instanceCount;
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }
    enroll(student) {
        if (student.instanceOf.Student) {
            this.students.push(student);
        }
    }
    expel(student) {
        if (student.instanceOf.Student) {
            this.students.splice(this.students.indexOf(student), 1);
        }
    }
    hire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        }
    }
    fire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.splice(this.teachers.indexOf(teacher), 1);
        }
    }
}
