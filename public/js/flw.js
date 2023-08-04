/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  try {
    console.log('Booking Tour');
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/booking/checkout-session/${tourId}`
    );

    console.log(session.data.response.data.authorization_url);

    window.location.href = session.data.response.data.authorization_url;

    // 2) Create checkout form + chanre credit card
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
