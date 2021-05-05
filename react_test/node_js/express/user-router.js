const express = require('express');
const  router = express.Router();
router.get('/', (req, res) => {
    res.send('Users list: [....]');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sorting = req.query.sorting;
    res.send(`You have received data on user #${id} whith ${sorting} sorting`);
});

router.post('/', (req, res) => {
    res.send('Post req to /users');
});

module.exports = {
    usersRouter: router
};