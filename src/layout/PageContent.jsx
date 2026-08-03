import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './Header'; 
import HomePage from '../pages/HomePage'; 
import Footer from './Footer';

const CheckoutPage = () => (
  <div className="flex flex-col items-center justify-center p-10 bg-red-100 h-screen">
    <h1 className="text-2xl font-bold text-primary-text">Ödeme Sayfası</h1>
  </div>
);

const PageContent = () => {
  const location = useLocation();
  
  const hideLayoutPaths = ['/odeme']; 
  const isLayoutHidden = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      
      {!isLayoutHidden && <Header />}

      <main className="flex flex-col grow">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/odeme" component={CheckoutPage} />
        </Switch>
      </main>

      {!isLayoutHidden && <Footer />}
      
    </div>
  );
};

export default PageContent;