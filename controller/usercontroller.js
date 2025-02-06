var user = require('../model/usermodel');

var login_status = 0;

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

exports.login = async (req,res) => {
    var data = await user.find({"email" : req.body.email});

    if(login_status==0)
    {
        if(data.length==1)
        {
            login_status=1;
            if(data[0].password==req.body.password)
            {
                res.status(200).json({
                    status : "login success"
                })
            }
            else
            {
                res.status(200).json({
                    status : "invalid email and password"
                })
            }
        }
        else
        {
            res.status(200).json({
                status : "invalid email and password"
            })
        }
    }
    else
    {
        res.status(200).json({
            status : "user already login"
        })
    }
}
