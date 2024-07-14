import express from 'express'
import admin from 'firebase-admin'

const app = express();

admin.initializeApp({
  credential: admin.credential.cert('serviceAccountKey.json')
});

app.get('/cep', (req, resp) => {

    admin.firestore()
        .collection('cep')
        .where("cep", "==", req.query.cep)
        .get()
        .then(snapshot => {
            const cep = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }))
         resp.json(cep)
        })
})

app.listen(3001, () => console.log('API rest iniciada'));