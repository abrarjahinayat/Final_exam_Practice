const express = require('express');
const router = express.Router();

router.post("/signup", (req, res)=>{
      return res.send("signup route working");
})

module.exports = router;