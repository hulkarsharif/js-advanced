class Person {
    constructor(name) {
        this.name = name;
    }
    introduceYourself() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    getRole() {
        return "Person";
    }
    static countInstances() {
        return this.instanceCount;
    }
}
class Student extends Person {
    static instanceCount = 0;
    gradeBook = new GradeBook();
    constructor(name) {
        super(name);
        Student.incrementInstanceCount();
    }
    introduceYourself() {
        console.log(`Hello, my name is ${this.name} and I am a student.`);
    }
    getGradeBook() {
        return this.gradeBook;
    }
    getGrade(subject) {
        return this.gradeBook.getGrades(subject);
    }
    schoolUniform() {
        return "School shirt and pants";
    }
    getRole() {
        return "Student";
    }
    static incrementInstanceCount() {
        Student.instanceCount++;
    }
    static countInstances() {
        return Student.instanceCount;
    }
}
class Teacher extends Person {
    static instanceCount = 0;
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.incrementInstanceCount();
    }
    introduceYourself() {
        console.log(
            `Hello, my name is ${this.name} and I teach ${this.subject}.`
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
    static incrementInstanceCount() {
        Teacher.instanceCount++;
    }
    static countInstances() {
        return Teacher.instanceCount;
    }
}
class GradeBook {
    constructor() {
        this.grades = {};
    }
    addGrade(subject, grade) {
        if (!this.grades[subject]) {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }
    getGrades(subject) {
        return this.grades[subject] || [];
    }
    getAllGrades() {
        return this.grades;
    }
    static format() {
        return {
            /* Define the format for storing grades here if needed */
        };
    }
}
class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }
    enroll(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            console.log(
                "Error: Can only enroll instances of the Student class."
            );
        }
    }
    expel(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        } else {
            console.log("Error: Student not found in the school.");
        }
    }
    hire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        } else {
            console.log("Error: Can only hire instances of the Teacher class.");
        }
    }
    fire(teacher) {
        const index = this.teachers.indexOf(teacher);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        } else {
            console.log("Error: Teacher not found in the school.");
        }
    }
}
// Example usage:
const school = new School("Example School");
const student1 = new Student("Alice");
const student2 = new Student("Bob");
const teacher1 = new Teacher("Mr. Smith", "Math");
const teacher2 = new Teacher("Mrs. Johnson", "English");
school.enroll(student1);
school.enroll(student2);
school.hire(teacher1);
school.hire(teacher2);
teacher1.teach(student1, 90);
teacher1.teach(student2, 85);
teacher2.teach(student1, 78);
teacher2.teach(student2, 92);
console.log(student1.getGrade("Math")); // Output: [90, 78]
console.log(student2.getGrade("Math")); // Output: [85, 92]
console.log(teacher1.getStudentGrade(student1)); // Output: [90, 85]
console.log(teacher2.getStudentGrade(student1)); // Output: [78, 92]
console.log(student1.schoolUniform()); // Output: "School shirt and pants"
console.log(teacher1.dressCode()); // Output: "Formal shirt and pants"
console.log(Student.countInstances()); // Output: 2
console.log(Teacher.countInstances()); // Output: 2
