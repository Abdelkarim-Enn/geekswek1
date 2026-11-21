const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false },
];

const passedStudents = students.filter(({ isPassed }) => isPassed);
console.log(passedStudents);

students
    .filter(({ isPassed }) => isPassed)
    .forEach(({ name, course }) => {
        console.log(`Good job ${name}, you passed the course in ${course}`);
    });
