const express = require('express');
const route = express.Router();
var appzuiTable = require('../database/databseSchema');


route.get('/',(req,res)=>{
    appzuiTable.find({}).exec((err, result) => {
        if (!err) {
            res.json(result);
        } else {
            res.json(err);
        }
    });

});

route.post('/',(req,res)=>{
    var data = req.body;
    appzuiTable.find({}).exec((err, result) => {
        if (!err) {
        data.indexnumber = result.length + 1;
        appzuiTable.create(data, function(err, resultData){
                if(err){
                throw err;
                }
                res.json(resultData);
            });
        } else {
            res.json(err);
        }
    });


});



route.put('/',(req,res)=>{
    
    res.send('USer put');

});

route.delete('/',(req,res)=>{
    res.send('USer delete');
});

module.exports = route;