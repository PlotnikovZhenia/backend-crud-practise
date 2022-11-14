const { Router } = require('express');
const DemoComponent = require('./index');

const router = Router();

router.get('/', DemoComponent.findAll);

router.post('/', DemoComponent.create);

router.put('/:id', DemoComponent.update);

router.delete('/:id', DemoComponent.deleteUser);

module.exports = router;
