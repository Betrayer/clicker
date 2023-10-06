import React, { FC } from 'react';
import Header from './components/Header/Header';
import Field from './components/Field/Field';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: FC = () => {
	return (
		<Provider store={store}>
			<Header />
			<Field />
		</Provider>
	);
};

export default App;
