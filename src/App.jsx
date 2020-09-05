import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Root } from './App.style';

import Header from './containers/Header/Header';
// import UnknownRoute from './components/UnknownRoute/UnknownRoute';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

import { auth } from './firebase/firebase.utils';
import { getCurrentUser } from './redux/currentUser/currentUserAction';
import { cartItemLocalStorage } from './redux/cartItem/cartItemAction';

const Home = lazy(() => import('./containers/Home/Home'));
const Shop = lazy(() => import('./containers/Shop/Shop'));
const WishList = lazy(() => import('./containers/WishList/WishList'));

class App extends Component {
  state = {
    currentUser: null,
    error: false
  }

  async componentDidMount() {
    try {
      await auth.onAuthStateChanged( snapShot => {
          if (snapShot) {
            const { email, uid } = snapShot;
            const currentUser = {
                email: email,
                userId: uid
            };
            this.props.user(currentUser);
            this.setState({ currentUser: currentUser });
            this.props.cartItem(currentUser.userId);
          } else {
            this.setState({ currentUser: null });
          }
      });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Root>
        <Header user={currentUser}/>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={Home}/>
            <Route path="/shop/collections" render={routeProps => <Shop currentUser={currentUser} {...routeProps}/>}/>
            {currentUser 
              ? <Route path="/wish-list" render={routeProps => <WishList user={currentUser} {...routeProps}/>}/>
              : <Redirect to="/"/>
            }
            <Redirect to="/"/>
          </Suspense>
        </Switch>
        <Footer />
      </Root>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  user: currentUser => dispatch(getCurrentUser(currentUser)),
  cartItem: currentUser => dispatch(cartItemLocalStorage(currentUser))
});

export default connect(null, mapDispatchToProps)(App);