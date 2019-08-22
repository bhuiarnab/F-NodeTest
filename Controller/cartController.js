var cartModel = require('../Model/cartModel.js');
var promotionRule = require('../Utility/promotionRule.js');
module.exports = {

    getProductList : (req,res,next) => {

     cartModel.find({}).then(result => {
 
        res.send({
            status : 200,
            success : true,
            recordSet : result
        });

     }).catch(err => {
       next(err);
     });

    },

    addProduct : (req,res,next) => {

        cartModel.create(req.body,(err,result) => {
            if(err) next(err);
            else 
            res.send({
                status : 200,
                success : true,
                item : result
            })
        })

    },

    getTotalPrice : (req,res,next) => {

    cartModel.find({}).then(result => {

        var priceObj = {};

        result.map(ele => {
         priceObj[ele.name] = ele.price;
        });

        if(Array.isArray(req.body) && req.body != 0){

            promotionRule.applyPromotionRule(req.body,priceObj,val => {

                res.send({
                    cart : req.body,
                    totalPrice : val
                });
            });

        }else{
            next({
                status : 400,
                success : false,
                error : 'NO Item Found!!'
            })
        }

    }).catch(err => {
        next(err);
    });
    }
};