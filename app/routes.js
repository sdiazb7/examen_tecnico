const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

// Controllers
const AuthController = require('./controllers/AuthController');
const ProductController = require('./controllers/ProductController');
const BillController = require('./controllers/BillController');
const BillDetailController = require('./controllers/BillDetailController');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));

// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

// Rutas
router.post('/api/product', auth, ProductController.save);
router.get('/api/product', auth, ProductController.index);
router.get('/api/product/:id',auth, ProductController.show);
router.patch('/api/product/:id',auth, ProductController.update);
router.delete('/api/product/:id',auth, ProductController.delete);
router.post('/api/bill',auth, BillController.save,BillDetailController.save);
router.get('/api/bill/:bill_id/:client_id',auth, BillDetailController.billDetail);
router.get('/api/bill/:client_id',auth, BillDetailController.billHistory);
router.get('/api/bill',auth, BillDetailController.customerPurchaseList);
module.exports = router;