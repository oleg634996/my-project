
const ReaquestError = require("../../helpers")
const Contact = require("../../models/contact")
const {contactSchema} = require("../../Schema/contactSchema")


const add = async (req, res, next) => {
 
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw ReaquestError(400, error.message);
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  
};

module.exports = add;
