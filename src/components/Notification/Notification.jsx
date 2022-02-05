import PropTypes from 'prop-types';
import allert from 'sweetalert';

export function Notification(message) {
  allert({
    title: `${message}`,
    text: 'is already in contacts.',
    icon: 'warning',
    button: false,
    timer: 2000,
  });
}

Notification.propTypes = {
  message: PropTypes.string,
};
