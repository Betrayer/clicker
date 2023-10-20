import React, { FC } from 'react';

import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: FC = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
};

export default App;
