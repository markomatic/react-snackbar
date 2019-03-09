import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import MaterialSnackbar from '@material-ui/core/Snackbar';
import { SNACKBAR_TYPES } from '../model';
import { hideSnackbar } from '../state/actions';

const iconType = {
    success: CheckCircleIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon
};

class Snackbar extends Component {
    handleClose = () => this.props.snackbarData.visible && hideSnackbar();

    render() {
        const {
            snackbarData
        } = this.props;

        const {
            type,
            visible,
            message,
            autoHideDuration
        } = Object.assign({
            type: SNACKBAR_TYPES.success
        }, snackbarData);

        const Icon = iconType[type];

        return (
            <MaterialSnackbar
                className="MMReactSnackbar"
                open={visible}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                autoHideDuration={autoHideDuration}
                onClose={this.handleClose}
            >
                <SnackbarContent
                    className={`MMReactSnackbar-${type}Content`}
                    message={
                        <span className="MMReactSnackbar-message">
                            <Icon className="MMReactSnackbar-icon iconType"/>
                            {message}
                        </span>
                    }
                    action={[
                        <IconButton key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={this.handleClose}>
                            <CloseIcon className="MMReactSnackbar-icon"/>
                        </IconButton>
                    ]}
                />
            </MaterialSnackbar>
        );
    }
}

Snackbar.propTypes = {
    snackbarData: PropTypes.object.isRequired
};

export default Snackbar;
