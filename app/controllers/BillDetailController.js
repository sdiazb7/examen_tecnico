const { Bill,BillDetail,Product } = require('../models/index');
var sequelize = require('sequelize');

module.exports = {
	
	async save(req, res) {
		try {
                for (var i=0; i< req.body.prod.length; i++){
                    const ok = await BillDetail.create({ bill_id: req.body.bill_id, product_id: req.body.prod[i].product_id , quantity:req.body.prod[i].quantity, quantity_value_total:req.body.prod[i].quantity_value_total });
            }
			} catch (err) {
                res.status(500).json(err);
		    }
			res.json({ msg:"Compra realizada con exito"});
	},
	
    async billDetail(req, res) {
		
        // Buscar factura
        let bills = await Bill.findAll({
           where: { id:req.params.bill_id,client_id:req.params.client_id },
			attributes: ['id','date_purchase','value_total_bill'],
			include: [{
                model: BillDetail,
                as: 'BillDetails',
                attributes: ['quantity','quantity_value_total'],
                include: [{
                    model: Product,
                    as: 'BillDetailProduct',
                    attributes: ['product_name','price']
                }]
			
			}]
        });
		res.json(bills);
    },
    async billHistory(req, res) {
		
        // Buscar factura
        let bills = await Bill.findAll({
           where: { client_id:req.params.client_id },
			attributes: ['id','date_purchase','value_total_bill'],
			include: [{
                model: BillDetail,
                as: 'BillDetails',
                attributes: ['quantity','quantity_value_total'],
                include: [{
                    model: Product,
                    as: 'BillDetailProduct',
                    attributes: ['product_name','price']
                }]
			
			}]
        });
		res.json(bills);
    },
	async customerPurchaseList(req, res) {
		
        // Buscar factura
        let bills = await Bill.findAll({
           attributes: ['id','date_purchase','value_total_bill'],
		   include: [{
                model: BillDetail,
                as: 'BillDetails',
                attributes: ['quantity','quantity_value_total'],
                include: [{
                    model: Product,
                    as: 'BillDetailProduct',
                    attributes: ['product_name','price']
                }]
			
			}]
        });
		res.json(bills);
    },
}