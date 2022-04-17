

import express from "express";

const app = express();
const port = 3000; //add your port here
const PUBLISHABLE_KEY = "pk_test_51KpKXaDdll6nZtIJkmLLPKeEE2dETq0ybqkFo1O8mYRZRkKGgsQoaGpdqrxh4uAzVcm65g78AneOFyd4jtEJYPw200NCb3JKpE";
const SECRET_KEY = "sk_test_51KpKXaDdll6nZtIJ7ABrMQKFW2BcNgPtmxb7SwsE3yth2NyBFZOAB5Qtg2UWKL6vXFfvBQgJcr1Wzyx6Z1PfhDlB002a4xk8zA";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Ejemplo app escuchando en http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});