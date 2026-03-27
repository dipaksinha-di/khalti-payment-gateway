const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },
    pidx: {},
    productId: {},
    amount: {},
    dataFromVerificationReq: {},
    apiQueryFromUser: {},
    paymentGateway: {},
    status: {},
    paymentDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
