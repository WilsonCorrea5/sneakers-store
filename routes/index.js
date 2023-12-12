const { Router } = require("express");
const productRoute = require("./products");
const priceRoute = require("./price");
const brandRoute = require("./brands");

const router = Router();

router.use("/products", productRoute);
router.use("/brands", brandRoute);
router.use("/price", priceRoute);
module.exports = router;
