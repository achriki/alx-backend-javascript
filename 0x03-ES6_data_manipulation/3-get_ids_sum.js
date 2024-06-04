const getStudentIdsSum = (studentsList)=>{
    const initValue = 0;

    if (!(studentsList instanceof Array)) {
        return 0
    }
    
    return studentsList.reduce((accumulator, currentStd)=> accumulator + currentStd.id, initValue)
}

export default getStudentIdsSum;