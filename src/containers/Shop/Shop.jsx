import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { SHOP_DATA } from '../../redux/collections';
import Category from '../../components/Category/Category';
import Collections from '../../components/Collections/Collections';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

class Shop extends Component {
  render() {
    const { match, currentUser } = this.props;

    return (
      <Switch>
        <Route path={`${match.path}`} exact render={routeProps => <Collections collection={SHOP_DATA} user={currentUser} {...routeProps}/>}/>
        <Route path={`${match.path}/:categoryId`} exact render={routeProps => <Category collection={SHOP_DATA} user={currentUser} {...routeProps} />}/>
        <Route path={`${match.path}/:categoryId/:productId`} exact render={routeProps => <ProductDetails user={currentUser} {...routeProps}/>}/>
      </Switch>
    );
  }
}

export default Shop;