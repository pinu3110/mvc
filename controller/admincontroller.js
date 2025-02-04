var user = require('../model/usermodel');
exports.insert=async(req,res)=>{
    user.create(req.body);
    res.status(200).json({
        status:"success"
    })
} 

exports.getdata = async(req,res)=>{
    // var limit =3;
    // var page_no = req.body.page_no;
    // if(page_no==undefined){
    //     page_no = 1 ;
    // }
    // var start = (page_no - 1)*limit;
    // var total_reco = await user.find().countDocuments();
    // var total_page = Math.ceil(total_reco/limit);

    // var data = await user.find().skip(start).limit(limit);
    var data =await user.find();
    res.status(200).json({
        status:'get all data',
        data,
        // page_no,
        // total_page,
    })
}

exports.get_data_update = async(req,res)=>{

        var id = req.params.id;
        var update = await user.findById(id);
        res.status(200).json({
            status:'get all data',
            update
        })   
    
}
exports.update = async(req,res)=>{

    var id = req.params.id;
    // var updatedata = req.body;
    var data_update = await user.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:'update successfully',
        data_update
    })


}


exports.delete = async(req,res)=>{

    const id = req.params.id;
    var data = await user.findByIdAndDelete(id);
    res.status(200).json({
        status:'delete data',
        data
    })
}
