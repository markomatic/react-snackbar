import { ReduceStore } from 'flux/utils';
import dispatcher from './dispatcher';
import {
    HIDE_SNACKBAR,
    SHOW_SNACKBAR
} from './actions';

class Store extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return {
            visible: false
        };
    }

    reduce(state, {
        type,
        data: {
            message,
            type: snackbarType,
            autoHideDuration
        } = {}
    }) {
        switch (type) {
            case SHOW_SNACKBAR:
                return Object.assign({}, state, this.getInitialState(), {
                    visible: true,
                    message,
                    type: snackbarType,
                    autoHideDuration
                });
            case HIDE_SNACKBAR:
                return Object.assign({}, state, this.getInitialState(), {
                    visible: false
                });
            default:
                return state;
        }
    }
}

export default new Store();
