import PropTypes from 'prop-types';
import { NotificationPar } from './Notification.styled.js';

export const Notification = ({ message }) => {
  return <NotificationPar>{message}</NotificationPar>;
};
