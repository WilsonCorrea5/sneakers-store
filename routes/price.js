const { Router } = require("express");
const getPrice = require("../controllers/price");

const router = Router();
router.get("/:userId/:productName", getPrice);

module.exports = router;
