const UserService = require('./service');
const User = require ('../../Models/User.js')


async function findAll(req, res) {
    try {
        const demo = await UserService.findAll()
        return res.status(200).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findUser(req, res) {
    try {
        const demo = await UserService.findUser(req.params.id)
        return res.status(200).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function update(req, res) {
    console.log('query', req.query)
    console.log('params', req.params.id)
    try {
        const demo = await UserService.updateBase(req.body, req.params.id);
        return res.status(200).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function deleteUser(req, res) {
    console.log('params', req.params.id)
    try {
        const demo = await UserService.deleteFromBase(req.params.id);
        return res.status(200).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function create(req, res) {
    try {
      const allBase = await UserService.findAll()
      console.log('allBase', allBase)
      let isExistName = allBase.findIndex(el => el.name === req.body.name)
      console.log('isExistName', isExistName)
      if(isExistName < 0) {
        const demo = await User.create(req.body)
        return res.status(201).json({
            data: demo,
        })
      } else {
        return res.status(400).json({
            data: "error",
            details: "this name is existed"
        })
      }
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    findAll,
    findUser,
    update,
    deleteUser,
    create,
};
