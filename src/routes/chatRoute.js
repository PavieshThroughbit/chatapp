const express = require("express");
const { accessChat, fetchChats, createGroup, renameGroup, removeGroupMember, addGroupMember } = require("../controllers/chatController");
const { protect } = require("../controllers/userController");
const { celebrate, Joi, errors, Segments } = require('celebrate');
const router = express.Router();


router.post("/accessChat", celebrate({
    [Segments.BODY]: Joi.object().keys({
        userId: Joi.string().required(),
    }),
}), protect, accessChat);

router.get("/fetchChats", protect, fetchChats);

router.post("/createGroup", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        users: Joi.string().required(),
    }),
}), protect, createGroup);

router.put("/renameGroup", celebrate({
    [Segments.BODY]: Joi.object().keys({
        chatId: Joi.string().required(),
        chatName: Joi.string().required(),
    }),
}), protect, renameGroup);

router.put("/removeGroupMember", celebrate({
    [Segments.BODY]: Joi.object().keys({
        chatId: Joi.string().required(),
        userId: Joi.string().required(),
    }),
}), protect, removeGroupMember);

router.put("/addGroupMember", celebrate({
    [Segments.BODY]: Joi.object().keys({
        chatId: Joi.string().required(),
        userId: Joi.string().required(),
    }),
}), protect, addGroupMember)


module.exports = router;