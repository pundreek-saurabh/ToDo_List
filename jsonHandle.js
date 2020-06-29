//Basics of an API (in the video "Parsing JSON and STRINGIFY")

const student = {
    name: 'John',
    age: 23,
    isActive: true
}

//convert this object into a string to be stored in a local storage 

const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString);

//localStorage.setItem('student',studentObjToString)

//to convert this string back into jason. :-
const toJSONStudent = JSON.parse(studentObjToString);
console.log(typeof toJSONStudent); //to check its type. 
console.log(toJSONStudent.age);