import PropTypes from 'prop-types';
import { NotificationPar } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationPar>{message}</NotificationPar>;
};
