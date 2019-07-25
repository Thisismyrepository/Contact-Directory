const router = require('express').Router();
console.log('Routes running');

const Contacts = require('../db/models/dataschema');
router.post('/create',(req,res)=>{
    var newContact = new Contacts({
        name:req.body.name,
        contact:req.body.contact
    });

    newContact.save((err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error on create Contact', err:err});
        }
        else{
            res.status(200).json({message:'New Contact Saved', doc:doc});
        }
        
    })
    
});
router.get('/read',(req,res)=>{
    Contacts.find({},(err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error in find Contact'});
        }
        else{
            res.status(200).json({message:doc});
        }
    })
    
});
router.put('/update/:name',(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.newName);
    console.log(req.body.newContact);
    Contacts.findOne({name:req.body.name},(err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error in find Contact'});
        }
        else{
            doc.name=req.body.newName;
            doc.contact=req.body.newContact;
            doc.save((err,doc)=>{
                if(err){
                    res.status(500).json({messgae:'Error in Update Contact'});
                }
                else{
                    res.status(200).json({message:doc});
                }
            })
        }
    })
    
});
router.post('/delete/:name',(req,res)=>{
    console.log(req.param.name);
    console.log(req.body.name);
    console.log(req.body);
    // res.status(200).json({message:'Delete is running'});
    Contacts.findOneAndRemove({name:req.body.name},(err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error in Delete Contact'});
        }
        else{
            res.status(200).json({message:'Contact Deleted',contact:doc});
        }
    })
})

module.exports = router;