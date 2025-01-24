const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");
const { validationResult } = require("express-validator");

module.exports.registercaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;
  const iscaptainAlreadyExist = await captainModel.findOne({ email });
  if (iscaptainAlreadyExist) {
    return res.status(400).json({ message: "captain already exists" });
  }
  const hashedPassword = await captainModel.hashPassword(password);
  const captain = await captainService.createcaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

module.exports.logincaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, captain });
}

module.exports.getcaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
}

module.exports.logoutcaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successfully" });
}