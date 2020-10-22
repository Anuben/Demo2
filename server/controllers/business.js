
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let Business = require('../models/business');

module.exports.displayBusinessList =  (req, res, next) =>{
    Business.find((err, BusinessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BusinessList);

            res.render('business/list', {title: ' Business List', BusinessList: BusinessList});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => { 
    res.render('business/add', {title: ' Add BusinessList'});
        
}
module.exports.processAddPage = (req, res, next) => { 
    let newBusiness = Business({
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone
    });

    Business.create(newBusiness, (err, Business) => {  
        if(err)
        {
            console.log(err)
            res.end(err);
        }
        else
        {
            //refresh the business list
            res.redirect('/business-list');
        }

    });
}
module.exports.displayEditPage =  (req, res, next) => { 
    let id = req.params.id;
    Business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            //show the edit view
            res.render('business/edit', {title: 'Update Business', business: businessToEdit});
        }
    });

}

module.exports.processEditPage = (req, res, next) => { 
    let id = req.params.id

    let updatedBusiness = Business({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone 
    });

    Business.updateOne({_id:id}, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the Business list
            res.redirect('/business-list');
        }

    });

}
module.exports.performDelete = (req, res, next) => { 
    let id = req.params.id;
    
    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
          //refresh the Business list
          res.redirect('/business-list');

        }
    });

}