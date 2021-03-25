import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@sgtickets/common';
import { Password } from '../../services/password'
import { User } from '../../models/user';
import { config } from '../../config';
const router = express.Router();

router.post(
  '/user/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      throw new BadRequestError('email in use');
    }

    // const user = User.build({ email, password });
    // await user.save();

    const hashedPassword = await Password.toHash(password);
    const user = await User.create({ email, password: hashedPassword });

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      config.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };