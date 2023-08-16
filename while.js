var students = ["Eduardo", "Juan", "Pedro", "Jose Manuel Alejandro"];

function greettostudent(student) {
    console.log(`Hi ${students}`);
}

while (students.length > 0) {
    console.log();
    var student = students.shift();
    greettostudent(student);
}