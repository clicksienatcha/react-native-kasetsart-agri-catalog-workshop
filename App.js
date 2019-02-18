import React from "react";
import { createStackNavigator } from 'react-navigation';
import HomePage from "./pages/home.page";
import ProductPage from "./pages/product.page";
import MarketPage from "./pages/market.page";
const App = createStackNavigator({

Home : {screen:HomePage},
Product:{screen:ProductPage},
Market:{screen:MarketPage}

});
export default App;