const { check, validationResult } = require("express-validator");
const User = require("../models/User"); // Assuming you have a User model

// Dynamic validation for fields
exports.dynamicValidation = (fields) =>
  fields.map((field) =>
    check(field).notEmpty().withMessage(`${field} is required`)
  );

// User-specific validation for userId
exports.userValidation = [
  check("userId")
    .notEmpty()
    .withMessage("User ID is required")
    .isMongoId()
    .withMessage("Invalid User ID")
    .custom(async (value) => {
      const user = await User.findById(value);
      if (!user) {
        throw new Error("User not found");
      }
    }),
];

// Run validation and handle errors
exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ success: false, errors: errors.array() });
  next();
};
