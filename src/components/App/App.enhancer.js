import { withProps } from 'recompose';

import createStore from '../../lib/createStore';
import reducer from '../../reducer';

const store = createStore(reducer);

export default withProps(() => ({ store }));
