const getContact = (req, res) => {
    res.status(200).json({ message: 'get all contacts' })
}
const postContact = (req, res) => {
    res.status(200).json({ message: `create contacts ${req.body.name}` })
}

const updateContact = (req, res) => {
    res.status(200).json({ message: `update contacts for ${req.params.id}` })
}


const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contacts for ${req.params.id}` })
}



module.exports = { getContact,postContact,updateContact,deleteContact }
