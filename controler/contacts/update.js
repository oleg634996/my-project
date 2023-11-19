const contacts = require("../../models/contacts");
const ReaquestError = require("../../helpers");
const { contactSchema } = require("../../Schema/contactSchema");

const update = async (req, res, next) => {
  
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw ReaquestError(400, error.message);
    }
    const { contactId } = req.params;
    console.log(req.body);
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
      throw ReaquestError(404, "Not Found");
    }
    res.json(result);
};

module.exports = update;
