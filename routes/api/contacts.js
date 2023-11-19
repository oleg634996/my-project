const express = require("express");

const ctrl = require("../../controler/contacts")
const { ctrlWrapper } = require("../../helpers")
// const { validateBody } = require("../../middleware")
// const contactSchema = require("../../Schema/contactSchema")

const router = express.Router();

// ========================== ROUTERs=====================================

router.get("/",ctrlWrapper(ctrl.getAll ));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/",ctrlWrapper(ctrl.add));

router.delete(
  "/:contactId",
  ctrlWrapper(ctrl.removeContactId)
);

router.put("/:contactId", ctrlWrapper(ctrl.update));

module.exports = router;
