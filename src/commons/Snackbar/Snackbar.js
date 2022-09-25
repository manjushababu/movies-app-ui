import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Snackbar } from '@mui/material';
import { Close } from '@mui/icons-material';

/**
 * `SnackbarComponent` is used to notify the success message to the
 * user after performing a specific action
 * @param {function} handleClose
 * @param {Boolean} showInfo
 * @param {String} successInfo
 * @returns SnackbarComponentJSX
 */
function SnackbarComponent({ handleClose, showInfo, successInfo }) {
  return (
    <Snackbar
      style={{ left: '40%', top: '25' }}
      key={successInfo}
      open={showInfo}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionProps={{}}
      message={successInfo}
      action={(
        <IconButton
          aria-label='close'
          color='inherit'
          sx={{ p: 0.5 }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      )}
    />
  );
}

SnackbarComponent.propTypes = {
  handleClose: PropTypes.func,
  showInfo: PropTypes.bool,
  successInfo: PropTypes.string,
};

SnackbarComponent.defaultProps = {
  handleClose: () => {},
  showInfo: false,
  successInfo: '',
};

export default SnackbarComponent;
