import React, {
    Component
} from 'react';
import { Container } from 'flux/utils';
import Snackbar from './view';
import store from '../state/store';

class SnackBarContainer extends Component {
    static getStores() {
        return [store];
    }

    static calculateState() {
        return {
            snackbarData: store.getState()
        };
    }

    render() {
        return <Snackbar snackbarData={this.state.snackbarData} />;
    }
}

export default Container.create(SnackBarContainer);
