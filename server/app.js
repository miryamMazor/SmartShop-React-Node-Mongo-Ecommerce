// ספריה שמאפשרת ליצור שרת
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors=require('cors')

const adminRouter = require('./api/routes/admin')
const userRouter = require('./api/routes/user')
const categoryRouter = require('./api/routes/category')
const productRouter = require('./api/routes/product')

// יצירת השרת
const app = express()
const port = 3001

//YGRxGXwVOImb98TY

// פונקציית חיבור למסד הנתונים
mongoose.connect("mongodb+srv://miryammazor62:YGRxGXwVOImb98TY@shoppingdb.hui8guq.mongodb.net/", {})//לשנות
    .then(() => {
        console.log(`connect to mongoDB succeed!`);
    })
    .catch(error => {
        console.log({ error: error.message });
    })

// middlewares
app.use(bodyParser.json())
app.use(cors())
app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/category', categoryRouter)

// endpoints - קריאות שרת
app.get('', (req, res) => {
    res.status(200).send({ message: `👏😜❤` })
})

app.get('/hello', (req, res) => {
    res.status(200).send({ message: `😂👍😉✌😃` })
})


// יצירת מאזין
// הגדרת פורט שעליו ירוץ השרת
app.listen(port, () => {
    console.log(`my application is running on http://localhost:${port}`);
})