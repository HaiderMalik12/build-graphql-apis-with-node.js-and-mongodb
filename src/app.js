import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.json({
        msg: 'hello graphql'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})