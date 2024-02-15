import productDao from "../dao/products.dao.js";

const getAll = async (req, res) => {
   productDao.getAll()
   //PROMESA
   .then(products => res.render('../src/views/index',{products}))
   .catch(err => res.json({
      status: "error"
   }));
}
const getOne =  (req, res) => {
   productDao.getOne(req.params.barcode)
   .then(product => {
      res.render('../src/views/edit',{product});
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })
}

const insertOne = async (req, res) => {
productDao.insertOne(req.body)
.then(result => {
  if(result)
   res.redirect('/api/products/')
}).catch(err => {
   res.json({
      status:"error"
   })
})
}

const updateOne = async (req, res) => {
   productDao.updateOne(req.params.barcode, req.body)
   .then(product => {
      if(product){
         res.redirect('/api/products/')
      }else{
         res.status(404).json({"status":"Product not found"})
      }
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })
}

const deleteOne = async (req, res) => {
   productDao.deleteOne(req.params.barcode)
   .then(product => {
      if(product){
         res.redirect('/api/products/')
      }else{
         res.status(404).json({"status":"Product not found"})
      }
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })
}

export {getAll, getOne, insertOne, updateOne, deleteOne}