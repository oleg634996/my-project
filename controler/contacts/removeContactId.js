    const contacts = require("../../models/contacts");
    const ReaquestError = require("../../helpers"); 

const removeContactId = async (req, res, next) => {
      
        const { contactId } = req.params;

        const result = await contacts.removeContact(contactId);
        if (!result) {
          throw ReaquestError(404, "Not Found");
        }
        res.json({ message: "book remove" });
    
};
    
module.exports= removeContactId