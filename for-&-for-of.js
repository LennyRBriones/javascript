var students = ["Eduardo", "Juan", "Pedro", "Jose Manuel Alejandro"];

function grettostudent(student) {
    console.log(`Hi ${students}`);
}

for (var i = 0; i < students.length; i++) {
    grettostudent(students[i]);
}


// For of

var students = ["Eduardo", "Juan", "Pedro", "Jose Manuel Alejandro"];

function grettostudent(student) {
    console.log(`Hi ${students}`);
}

for (var i of students) {
    grettostudent(students[i]);
}
