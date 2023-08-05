/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  try {
    const session = await axios(`/api/v1/booking/checkout-session/${tourId}`);

    window.location.href = session.data.response.data.authorization_url;

    // 2) Create checkout form + chanre credit card
  } catch (err) {
    showAlert('error', err);
  }
};
