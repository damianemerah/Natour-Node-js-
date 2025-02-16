const paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const Booking = require('../models/bookingModel');
// const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);

  //   2) Create checkout session

  const response = await paystack.transaction.initialize({
    email: req.user.email,
    amount: tour.price * 100,
    currency: 'NGN',
    callback_url: `p${req.protocol}://${req.get('host')}/?tour=${
      req.params.tourId
    }&user=${req.user._id}&price=${tour.price}`,

    metadata: {
      orderID: tour.id,
      custom_fields: [
        {
          display_name: tour.name,
          variable_name: 'tour',
          value: tour._id,
        },
        {
          display_name: req.user.name,
          variable_name: 'user',
          value: req.user._id,
        },
      ],
    },
  });

  // 3) Create session as response

  res.status(200).json({
    status: 'success',
    response,
  });
});

exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  const { tour, user, price } = req.query;

  if (!tour && !user && !price) return next();
  await Booking.create({ tour, user, price });

  res.redirect(req.originalUrl.split('?')[0]);
  next();
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBooking = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
