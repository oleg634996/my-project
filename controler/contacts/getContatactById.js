
const contacts = require("../../models/contacts");
const ReaquestError =require("../../helpers")

const getContactById = async (req, res, next) => {
  
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);
    if (!result) {
      throw ReaquestError(404, "Not Found");
    }
    res.json(result);
 
};

module.exports= getContactById