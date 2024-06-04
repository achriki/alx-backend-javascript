const getListStudentIds = (listObjs) => {
    let newList = [];

    if (!(listObjs instanceof Array)) {
        return listObjs;
    }

    newList = listObjs.map((stds) => stds.id);
    
    return newList;
}

export default getListStudentIds;