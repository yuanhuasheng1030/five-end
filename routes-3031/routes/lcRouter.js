var express = require('express');
var router = express.Router();
const client = require("ykt-http-client");
var lodash = require("lodash");
const multiparty = require('multiparty');
const path = require('path');
client.url("127.0.0.1:8080");

// router.get("/",async function(req,res){
//     //设置允许跨域
//     // res.setHeader("Access-Control-Allow-Origin","*"); 
//     // res.setHeader("Access-Control-Allow-Methods","GET,POST");
 
//     console.log("44",req.query);
    
//     // let {type,value,page,rows} = req.query;
//     // let searchObj = {};
//     // if(type){
//     //     searchObj[type] = value;
//     // }
//     // ,{page,rows,submitType:'findJoin',ref:"classes",...searchObj}
//     let data = await client.get("/orders");
//     console.log(data,"22");
      
//     res.send(data);    
// });

//增加门店
router.post('/',async function(req,res){
    
    let body = req.body;
    // body.classes = {
    //     $ref:"classes",
    //     $id:body.classes
        
    // }
    console.log("13",body);
    
    await client.post("/shops",body);
    res.send("suc");
});

router.post('/upload', function (req, res) {
    let form = new multiparty.Form({ uploadDir: './public/upload' })
    form.parse(req, function (err, fields, files) {
        if (err) {
            res.send(err)
        } else {
            console.log('1',files.file[0].path);
            
            res.send(path.basename(files.file[0].path));

        }
    })
})

router.get("/rooms/:id", async function (req, res) {
    let id = req.params.id;
    let shops = await client.get("/shops/" + id);
    res.send(shops);
})

//显示主界面数据
router.get("/", async function (req, res) {
    let {
        // searchData,
        page,
        rows
    } = req.query;
    // if (searchData) {
    //     res.send(searchData);
    //     return;
    // }
    // console.log("11");

    
    let data = await client.get('/orders', {
        page,rows,
        submitType: 'findJoin',
        ref: ["shops","goods","services","petsKeepers"],
        // ...searchData
    });
    res.send(data);
})

//删除
router.delete('/:id',async function(req,res){
    let id = req.params.id; 
   
     
    await client.delete('/orders/'+id);
    // let data = await client.get('/orders', {
        
    //     submitType: 'findJoin',
    //     ref: ["shops","goods","services","petsKeepers"],
    //     // ...searchData
    // });
    // res.send(data);
    res.send("suc");
});
module.exports = router;