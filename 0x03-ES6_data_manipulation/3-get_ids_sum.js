const getStudentIdsSum = (studentsList)=>{
    return studentsList.reduce((agg, student) => agg + student.id, 0)
}

export default getStudentIdsSum;