const express = require("express");

const router = express.Router();
const registerUser = require("./UserController");

router.route("/api/v1/register").post(registerUser).get((req,res) => {
    res.send("working")
})

module.exports = router;
