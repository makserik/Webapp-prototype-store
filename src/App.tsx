import React from 'react';
import './App.scss';
import { Switch, Route, Link } from 'react-router-dom';
import ShopView from './containers/ShopViewContainer';
import Checkout from './containers/CheckoutContainer';
import Topbar from './components/Topbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Topbar />

        <nav>
          <ul>
            <li>
              <Link to="/">
                Main View
              </Link>
            </li>
            <li>
              <Link to="/checkout">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <ShopView />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
