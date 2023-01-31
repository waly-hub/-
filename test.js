/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let index = 0
    // console.log(!students.includes(sandwiches[0]));
    while (students.includes(sandwiches[0])) {
        if (students[index] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
        }else if (students[index] !== sandwiches[0]) {
            console.log(students.shift());
            students.push(students.shift())
        }
    }
    return students.length
};

console.log(countStudents([1,1,0,0],[0,1,0,1]));