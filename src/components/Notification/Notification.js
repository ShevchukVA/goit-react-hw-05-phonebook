import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ alert }) => {
  return (
    <CSSTransition in={alert} classNames={styles} timeout={250} unmountOnExit>
      <div className={styles.alert}>
        <h3>Contact already exist!</h3>
      </div>
    </CSSTransition>
  );
};

export default Notification;

Notification.propTypes = {
  alert: PropTypes.bool.isRequired,
};
