const { Bill,BillDetail } = require('../models/index');
var sequelize = require('sequelize');

module.exports = {
	
	async save(req, res) {
		try {
                for (var i=0; i< req.body.prod.length; i++){
                    const jane = await BillDetail.create({ bill_id: req.body.bill_id, product_id: req.body.prod[i].product_id , quantity:req.body.prod[i].quantity });
            }
			} catch (err) {
                res.status(500).json(err);
		    }
			res.json({ msg:"Compra realizada con exito"});
	},
	
    async show(req, res) {
		
        // Buscar producto
        let bills = await Bill.findAll({
           where: { id:req.params.bill_id,client_id:req.params.client_id },
			attributes: ['date_purchase'],
			include: [{
                model: BillDetail,
                as: 'Bill-Detail',
                attributes: ['quantity']
            }]
        });
		res.json(bills);
    },

}