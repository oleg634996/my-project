const {ReaquestError}= require("../helpers")


const validateBody = schema => {
    const func = (req, res, next)=>{
         const { error } = schema.validate(req.body);
         if (error) {
           next(ReaquestError(400, error.message)) 
        }
        next()
    }
    return  func
}
module.export = validateBody