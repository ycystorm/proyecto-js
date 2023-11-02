const mongose= require('mongoose')

const  conectarDB = async ()  => {
  const conn = await mongose.connect(
    'mongodb://127.0.0.1:27017/devcamp-ptech'
  )
  console.log("mongodb  conectado".bgYellow);
} 
module.exports = conectarDB

