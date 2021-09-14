const { Product } = require('../models/index');

module.exports = {
	
	async save(req, res) {
        let { lot_number,product_name } = req.body;

        // Buscar producto
        Product.findOne({
            where: {
                lot_number:lot_number,
				product_name: product_name
            }
        }).then(r => {

            if (!r) {
                //Creamos el producto en la tabla product
			    Product.create({
                    lot_number:lot_number,
					product_name: req.body.product_name,
					price: req.body.price,
					quantity_available: req.body.quantity_available,
					admission_date: req.body.admission_date,
                }).then(rs => {
                    res.json({ msg: "Producto registrado" });
			    }).catch(err => {
                    res.status(500).json(err);
                });                
            } else {                
				res.json({ msg: "El producto ya se encuentra registrado" });
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    },

	async find(req, res, next) {
        let product = await Product.findByPk(req.params.id);

        if (!product) {
            res.status(404).json({ msg: "Producto no esta registrado" });
        } else {
            req.product = product;
            next();
        }
    },
	
    async index(req, res) {
        let products = await Product.findAll();

        res.json(products);
    },

    // Show
    async show(req, res) {
		
        // Buscar producto
        Product.findOne({
            where: {
                lot_number: req.params.lot_number,
				product_name: req.params.product_name
            }
        }).then(r => {

            if (!r) {
                res.json({ msg: "El producto no se encuentra registrado" });                   
            } else {                
                res.json(r);
			}
        }).catch(err => {
            res.status(500).json(err);
        })
    },

    // Update
    async update(req, res) {
        Product.findOne({
            where: {
                id:req.params.id,
			}
        }).then(r => {

            if (!r) {
                //Actualizamos el producto en la tabla product
			    res.json({ msg: "El producto no se encuentra registrado" });				                
            } else {                
				Product.update(req.body, {
                    where: { id: req.params.id }
                }).then(rs => {
                    res.json({ msg: "Producto actualizado" });
			    }).catch(err => {
                    res.status(500).json(err);
                });
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    },

    // Delete
    async delete(req, res) {
        Product.findOne({
            where: {
                id:req.params.id,
			}
        }).then(r => {

            if (!r) {
                //Actualizamos el producto en la tabla product
			    res.json({ msg: "El producto no se encuentra registrado" });				                
            } else {                
				Product.destroy({
                    where: { id: req.params.id }
            }).then(rs => {
                    res.json({ msg: "Producto eliminado" });
			    }).catch(err => {
                    res.status(500).json(err);
                });
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    },

}