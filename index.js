const express = require('express')
const app = express()
const port = process.env.port || 3000
const qnaLogic = require('@muchrm/qna-logic');

app.get('/', async (req, res) => {
    qnaLogic.getAll().then((qnaList)=>{
        res.json({qnaList})
    })
})

app.get('/:id', async (req, res) => {
    qnaLogic.getAnswerByQuestion(req.params.id).then((answer)=>{
        res.json({answer})
    }).catch((error)=>{
        res.status(404).json({answer:null})
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})