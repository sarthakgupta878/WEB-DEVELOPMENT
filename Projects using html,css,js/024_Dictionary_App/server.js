const express = require('express')
const path = require('path')
var axios = require("axios").default;
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"))
    
    
})
app.get('/searchword', (req, res) => {

    // res.send('Hello World!')
    var options = {
    method: 'GET',
    url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
    params: {entry: req.query.entry},
    headers: {
        'X-RapidAPI-Key': 'signup',
        'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
    }
    };

    // axios.request(options).then(function (response) {
    // console.log(response.data);
    
// res.json(response.data)

    // }).catch(function (error) {
    // console.error(error);
    // });
    let response = {}
    response.data ={
        'entry' : "sarthak"
    }
            // console.log(response.data)
            // response.data =      {
            //     "assoc_word": [
            //       "hide",
            //       "hat",
            //       "face"
            //     ],
            //     "assoc_word_ex": [
            //       "hide",
            //       "hat",
            //       "face",
            //       "veil",
            //       "disguise",
            //       "camouflage"
            //     ],
            //     "author": "twinword inc.",
            //     "email": "help@twinword.com",
            //     "entry": "mask",
            //     "request": "mask",
            //     "response": "mask",
            //     "result_code": "200",
            //     "result_msg": "Success",
            //     "version": "4.0.0"
            //   }

res.json(response.data)

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})