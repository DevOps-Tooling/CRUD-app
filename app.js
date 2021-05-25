const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://admin:admin@cluster0-shard-00-00.kgid7.mongodb.net:27017,cluster0-shard-00-01.kgid7.mongodb.net:27017,cluster0-shard-00-02.kgid7.mongodb.net:27017/AlienDB?ssl=true&replicaSet=atlas-yd7prh-shard-0&authSource=admin&retryWrites=true&w=majority'
const app = express()


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){

    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routers/aliens')
app.use('/aliens',alienRouter)


app.listen(9000,function(){
    console.log('Server connected')
})