var students = ["Eduardo", "Juan", "Pedro", "Jose Manuel Alejandro"];

function grettostudent(student) {
    console.log(´Hola, ${ student }´);
}

for (var i = 0; i < students.length; i++) {
    grettostudent(students[i]);
}


// For of

var students = ["Eduardo", "Juan", "Pedro", "Jose Manuel Alejandro"];

function grettostudent(student) {
    console.log(´Hola, ${ student }´);
}

for (var student of students) {
    grettostudent(students[i]);
}
