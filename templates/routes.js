const string = require('../helpers/string');

module.exports = (name) => {
    return `const router = require('express').Router();

const ${string.firstUppercaseMult(name)}Controller = require('../controllers/${string.firstUppercaseMult(name)}Controller');

router.route('/')
    .get(${string.firstUppercaseMult(name)}Controller.getAll)
    .post(${string.firstUppercaseMult(name)}Controller.create);
router.route('/:id')
    .get(${string.firstUppercaseMult(name)}Controller.getOne)
    .put(${string.firstUppercaseMult(name)}Controller.edit)
    .delete(${string.firstUppercaseMult(name)}Controller.delete);

module.exports = router;
`
}
