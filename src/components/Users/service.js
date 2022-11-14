const User = require ('../../Models/User.js')

function findAll() {
    const allUsers = User.find()
    return allUsers
}
function findUser(id) {
    console.log('findUser', id)
    let isObjExist = User.findById(id)
    console.log(isObjExist)
    if(Object.keys(isObjExist).length == 0) {
        return "this user is not existed"
    } else {
        return isObjExist
    }
}
function updateBase(data, id) {
    console.log('update', id)
    let isObjExist = User.findById(id)
    console.log(isObjExist)
    if(Object.keys(isObjExist).length == 0) {
        return "this user is not existed"
    } else {
        const obj = User.findByIdAndUpdate(id, {name: data.name}, function (err, docs) {
            if (err){
              console.log('Error', err)
              return {status: "false", data: err}
            } else {
              console.log("Updated User : ", docs);
              return {status: "false", data: docs}
            }
          })
          return {status: "success"}
    }
}

async function deleteFromBase(id) {
    console.log('update', id)
    let isObjExist = User.findById(id)
    console.log(isObjExist)
    if(Object.keys(isObjExist).length == 0) {
        return "this user is not existed"
    } else {
        const removed = await isObjExist.deleteOne()
        if (!removed)
          throw Error('Something went wrong while trying to delete the Message')
        return {status: "success", data: removed}
    }
}
/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function create(msg) {
    const newObj = User.create(msg)
    return {
        message: 'Created',
        data: newObj
    };
}

module.exports = {
    findUser,
    updateBase,
    deleteFromBase,
    create,
    findAll,
};
