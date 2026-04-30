let {body,validationResult}=require('express-validator')
let validatorRules=[
  body('firstName')
  .notEmpty()
  .escape()
  .withMessage('First name is required')
  .isLength({min:2})
  .withMessage('First name must be at least 2 characters long'),


  body('lastName')
  .notEmpty()
  .escape()
  .withMessage('Last name is required')
  .isLength({min:2})
  .withMessage('Last name must be at least 2 characters long'),

  body('email')
  .notEmpty()
  .withMessage('Email is required')
  .isEmail()
  .withMessage('Invalid email format')
  .normalizeEmail(),

  body('password')
  .notEmpty()
  .withMessage('Password is required')
  .isLength({min:6})
  .withMessage('Password must be at least 6 characters long'),

  body('confirmPassword')
  .notEmpty()
  .withMessage('Confirm password is required')
  .custom((value,{req})=>{
    if(value!==req.body.password){
      throw new Error('Passwords do not match')
    }
    return true
  }),

  body('dob')
  .notEmpty()
  .withMessage('Date of birth is required')
  .isDate()
  .withMessage('Invalid date format'),

  body('divition')
  .notEmpty()
  .withMessage('Division is required')
  .isIn(['Dhaka','Chittagong','Khulna','Rajshahi','Barisal','Sylhet','Rangpur','Mymensingh'])
  .withMessage('Invalid division'),

  body('gender')
  .notEmpty()
  .withMessage('Gender is required')
  .isIn(['Male',' Female','Other'])
  .withMessage('Invalid gender'),
  
]