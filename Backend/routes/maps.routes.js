const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const mapController = require("../controllers/maps.controller");
const {query} = require("express-validator")

const router = express.Router();


router.get("/get-coordinates", query("address").isString().isLength({ min: 3 }), authMiddleware.authUser, mapController.getCoordinates)

module.exports = router;