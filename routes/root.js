const express = require('express')
const router = express.Router()
const {GetContacts,createContacts} = require('../controllers/contactController')


router.route('/').get(GetContacts)

router.route('/').post(createContacts)



module.exports = router