const HttpException = require("../exceptions/http.exception");
const Tag = require("../models/tag");

//获取标签
module.exports.getTags = async(req,res,next) =>{
    try{
       const tagsAll= await Tag.findAll()
       console.log("tags:",tagsAll)

       //标签处理：[tag1,tag2,...]
       const tags=[]
       if(tagsAll.length>0){
           for(const t of tagsAll){
               tags.push(t.dataValues.name)
           }
       }
       
       //响应数据
        res.status(200)
            .json({
                status: 1,
                message: '获取标签成功',
                data: tags
            })



    }
    catch(error){
        next(error)
    }
};

//创建标签
module.exports.createTag = async (req, res, next) => {
    try {
        
        const tag= req.body.tag
        console.log(tag);
        //标签验证 同util=>user

        //标签存储
        const tagResult = await Tag.create({name:tag})
        console.log(tagResult);

        res.status(200)
            .json({
                status:1,
                message:'创建标签成功',
                data: tagResult.dataValues.name
            })
    }
    catch (error) {
        next(error)
    }
};