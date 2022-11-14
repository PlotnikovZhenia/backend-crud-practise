let baseData = []
function findAll() {
    return baseData;
}
function updateBase(data, id) {
    console.log('update', id)
    console.log(baseData)
    let isObjExist = baseData.findIndex(el => el.id == id)
    console.log(isObjExist)
    if(isObjExist < 0) {
        return "this user is not existed"
    } else {
        let obj = Object.assign({},baseData[isObjExist])
        console.log ('old', obj)
        obj.name = data.name
        baseData.splice(isObjExist, 1, obj)
        return obj
    }
}

function deleteFromBase(id) {
    console.log('update', id)
    console.log(baseData)
    let isObjExist = baseData.findIndex(el => el.id == id)
    console.log(isObjExist)
    if(isObjExist < 0) {
        return "this user is not existed"
    } else {
        let obj = Object.assign({},baseData[isObjExist])
        baseData.splice(isObjExist, 1)
        return obj
    }
}
/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function create(msg) {
    console.log(msg)
    let obj = Object.assign({}, msg)
    obj.id=Date.now()
    console.log(obj)
    baseData.push(obj)
    return {
        message: 'Created',
    };
}

module.exports = {
    baseData,
    updateBase,
    deleteFromBase,
    create,
    findAll,
};
