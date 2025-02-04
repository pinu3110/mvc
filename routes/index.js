var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

/* GET home page. */


router.post('/',user.insert);
router.get('/',user.getdata);
router.get('/update_data/:id',user.get_data_update);
router.post('/update/:id',user.update);
router.get('/delete/:id',user.delete);





module.exports = router;