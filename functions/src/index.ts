import { Product } from '../../src/app/model/product/product.model'
import { Request, Response } from 'express';

const functions = require("firebase-functions");
const express = require("express");
const cors=require('cors');

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();

app.use(cors({origin:true}))

app.get("/", async (req:Request, res:Response) => {
        const snapshot = await admin.firestore().collection("products").get();
        let products:Product[] = [];
        snapshot.forEach((doc:any) => {
            let id=doc.id
            let data=doc.data()
            products.push({ id, ...data });
        });
        res.status(200).send(JSON.stringify(products))
});

app.get("/:id", async (req:Request, res:Response) => {
        const snapshot = await admin.firestore().collection('products').doc(req.params.id).get()
        const productId = snapshot.id
        const productData = snapshot.data()
        res.status(200).send(JSON.stringify({id: productId, ...productData}))
});


app.post("/", async (req:Request, res:Response) => {
        const product = req.body
        await admin.firestore().collection("products").add(product);
        res.status(201).send()
});

app.put("/:id",async (req:Request, res:Response) => {
        const body = req.body
        await admin.firestore().collection('products').doc(req.params.id).update(body)
        res.status(200).send();
});

app.delete("/:id", async (req:Request, res:Response) => {
        await admin.firestore().collection("products").doc(req.params.id).delete()
        res.status(200).send()
})

exports.product = functions.https.onRequest(app);
