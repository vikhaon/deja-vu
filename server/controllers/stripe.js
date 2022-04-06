import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(secretKey);

export const stripePayment = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
