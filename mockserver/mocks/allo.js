let router = require('express').Router();

router.get('/', (req, res) => {
    res.send('allo')
})

module.exports = router