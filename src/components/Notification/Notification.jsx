import PropTypes from 'prop-types';
import allert from 'sweetalert';

export function NotificationError(message, text) {
  allert({
    title: message ? message : '',
    text: text ? text : '',
    icon: 'error',
    button: false,
    timer: 2000,
  });
}
export function Notification(message, text) {
  allert({
    title: message ? message : '',
    text: text ? text : '',
    icon: 'success',
    button: false,
    timer: 2000,
  });
}
export function NotificationSuccess(message, text) {
  allert({
    title: message ? message : '',
    text: text ? text : '',
    icon: 'success',
    button: false,
    timer: 2000,
  });
}

// position: 'top-end',
// icon: 'success',
// icon: 'warning',

Notification.propTypes = {
  message: PropTypes.string,
  text: PropTypes.string,
};
