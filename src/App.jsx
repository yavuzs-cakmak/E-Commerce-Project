
import { BrowserRouter as Router } from 'react-router-dom';
import PageContent from './layout/PageContent';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer/>
      <PageContent />
    </Router>
  );
}

export default App;
