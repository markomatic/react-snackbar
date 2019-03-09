import dispatcher from './dispatcher';
import {SNACKBAR_TYPES} from '../model';

export const SHOW_SNACKBAR = Symbol('Show snackbar');

export const showSnackbar = (
    message,
    type = SNACKBAR_TYPES.info,
    {
        autoHideDuration = 4000
    } = {}
) => dispatcher.dispatch({
    type: SHOW_SNACKBAR,
    data: {
        message,
        type,
        autoHideDuration
    }
});

export const HIDE_SNACKBAR = Symbol('Hide snackbar');

export const hideSnackbar = () => dispatcher.dispatch({
    type: HIDE_SNACKBAR
});
