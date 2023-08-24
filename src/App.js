import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import ScrollToTop from './utilities/ScrollToTop';
import { store, persistor } from './redux-store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-time-picker/assets/index.css';
import './App.scss';
const axios = require('axios');

/**
 * Axios Global Config
 * @type {string}
 */

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter basename="/">
					<ScrollToTop />
					<PersistGate loading={null} persistor={persistor}>
						<Routes />
					</PersistGate>
					<ToastContainer />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
