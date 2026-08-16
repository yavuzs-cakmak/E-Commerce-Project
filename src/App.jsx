
import { BrowserRouter as Router } from 'react-router-dom';
import PageContent from './layout/PageContent';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <ToastContainer/>
      <PageContent />
    </Router>
    </Provider>
  );
}

export default App;
