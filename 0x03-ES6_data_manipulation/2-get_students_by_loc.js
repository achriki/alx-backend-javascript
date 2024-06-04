const getStudentsByLocation = (listObjs, city)=>{
    let newList = [];
    if (!(listObjs instanceof Array)){
        return listObjs;
    }
    newList = listObjs.filter((stds) => stds.location == city);
    return newList;
}

export default getStudentsByLocation;