const { default: axios } = require('axios');
const express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');

const api_key = require('./apiKey');

const dist_dir = process.env.DIST_DIR || path.resolve(__dirname,'dist');

let publicPath = '/static/';
try {
    idxStr = fs.readFileSync(path.resolve(dist_dir,"index.html")).toString();
    publicPath = idxStr.substring(0, idxStr.indexOf('/favicon.ico'));
    publicPath = publicPath.substring(publicPath.lastIndexOf('/')) + '/';
} catch (e) {
    console.error(e);
}


//--------------------serve static---------------------




app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//function will be attached to another site which is already hosted online on Alwaysdata
app.get('/serpapi/*', (req, resp) => {
    let url = req.url.substring('/serpapi'.length);
    url = url + ((url.indexOf('?') < 0) ? '?' : '&');
    url = url + `tbm=isch&engine=google&api_key=${api_key}`;
    console.log(url);
    axios.get('https://serpapi.com' + url).then(r => {
        resp.set("Access-Control-Allow-Origin", "*");
        resp.set("Access-Control-Allow-Headers", "*");
        resp.set("Access-Control-Allow-Methods", "*");
        resp.json(r.data);
    }).catch((e) => {
        resp.status(500).json(e);
        console.error(e);
    });
});


const alegra_auth = 'Basic ZHZlZ2FwOTVAZ21haWwuY29tOjc2NWQ2NTlmMDFiMTgyZjNkYmFh';

app.get('/alegra/*', (req, resp) => {
    let url = req.url.substring('/alegra'.length);
    // url = url + ((url.indexOf('?') < 0) ? '?' : '&');
    // url = url + `tbm=isch&engine=google&api_key=${api_key}`;
    console.log(url);
    axios.get('https://api.alegra.com' + url,{headers:{Authorization:alegra_auth}}).then(r => {
        resp.set("Access-Control-Allow-Origin", "*");
        resp.set("Access-Control-Allow-Headers", "*");
        resp.set("Access-Control-Allow-Methods", "*");
        resp.json(r.data);
    }).catch((e) => {
        resp.status(500).json(e);
        console.error(e);
    });
});


app.get('/update',(req,res)=>{
    console.log('site update required');
    res.status(200).send('updating...');
    process.exit();
})

app.use(publicPath, express.static(dist_dir, { extensions: ["js"] }));
// app.get(publicPath,(req, res, next) => {
//     res.sendFile(process.env.DIST_DIR + "/index.html");
// });




//---------------------------serve static fallback-------------------------------

app.use((req, res, next) => {
    res.sendFile(path.resolve(dist_dir,"index.html"));
});


app.listen(4000);