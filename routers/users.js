const userRouter = require('express').Router();
const { body, validationResult } = require('express-validator');

const { userDoc } = require('../db/mongoose');

/** create a new user */
userRouter.post(
  '/',
  [
    body('username').isString().isLength({ min: 5 }),
    body('password').isString().isLength({ min: 6 }),
    body().custom((body) =>
      Object.keys(body).length < 4 ? Promise.resolve() : Promise.reject()
    ),
  ],
  async (req, res) => {
    try {
      console.log('POST');
      console.log(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //validate every property from start to finish
      //here we skipped password hashing and strength
      //here we skipped username validation (is string length min max)
      if (req.body.password !== req.body.password2) {
        return res.sendStatus(401);
      }
      const newUser = new userDoc(req.body);
      const userRes = await newUser.save();
      if (!userRes) {
        throw new Error('failed to make user');
      }

      return res.json(userRes);
    } catch (e) {
      console.error(e);
      return res.sendStatus(400);
    }
  }
);

module.exports = userRouter;
