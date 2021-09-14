const { Bill } = require('../models/index');

module.exports = {
	
	async save(req, res, next) {
       

	   Bill.create({
            client_id:req.body.client_id,
		    date_purchase: now= new Date()
			}).then(rs => {
                req.body.bill_id=rs.id;
				next();
			}).catch(err => {
                res.status(500).json(err);
            })                
	},


}