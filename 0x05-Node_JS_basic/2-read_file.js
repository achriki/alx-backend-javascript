const fs = require('fs');

const countStudents = (filePath) => {
    if(!fs.existsSync(filePath)){
        throw new Error('Cannot load the database');
    }
    if(!fs.statSync(filePath).isFile()){
        throw new Error('Cannot load the database');
    }
    const fileLines = fs.readFileSync(filePath)
        .toString('utf-8')
        .trim()
        .split('\n');

    let totalNumber = 0;
    const dbFieldNames = fileLines[0].split(',')
    const dbFieldGroup = new Set();
    const studentGroups = {};

    for(const line of fileLines.slice(1)){
        if(line !== ''){
            totalNumber ++;
        }
        dbFieldGroup.add(line.split(',')[dbFieldNames.length - 1]);
    }
    console.log('Number of students:', totalNumber);

    for (const field of dbFieldGroup){
        studentGroups[field] = [];
    }

    for(const line of fileLines.slice(1)){
        const studentField = line.split(',')[dbFieldNames.length - 1]
        if(dbFieldGroup.has(studentField)){
            studentGroups[studentField].push(line.split(',')[0]);
        }
    }

    for (const [field, students] of Object.entries(studentGroups)) {
        const numberOfStudent = students.length;
        const studentsList = students.join(', ');

        console.log(`Number of students in ${field}: ${numberOfStudent}. List: ${studentsList}`);
    }
}

module.exports = countStudents;
