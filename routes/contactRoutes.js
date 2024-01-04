const express = require('express')
const router = express.Router()



router.route('/').get((req, res) => {
    res.status(200).json({ message: "get all contacts" })
}).post((req, res) => {
    res.status(200).json({ message: `create contacts ${req.body}` })
})



router.route('/:id').put((req, res) => {
    res.status(200).json({ message: `update contacts for ${req.params.id}` })
}).delete((req, res) => {
    res.status(200).json({ message: `delete contacts for ${req.params.id}` })
})


module.exports = router