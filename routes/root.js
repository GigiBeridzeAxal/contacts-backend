const express = require('express')
const router = express.Router()
const {GetContacts, deletecontact , Getblock , createContacts} = require('../controllers/contactController')


router.route('/').post(GetContacts)
router.route('/').get(Getblock)

router.route('/delete').post(deletecontact)
router.route('/register').post(createContacts)



module.exports = router