import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import BirthdayReminder from "./components/birthday/BirthdayReminder";
import Tours from "./components/Tours/Tours";
import Review from "./components/review/Review";
import Accordion from "./components/accordion/Accordion";
import Menu from "./components/menu/Menu";
import Tabs from "./components/tabs/Tabs";
import Slider from "./components/slider/Slider";
import Lorem from "./components/lorem/Lorem";
import Color from "./components/color/Color";
import Grocery from "./components/grocery/Grocery";
import Navbar from "./components/navbar/Navbar";
import SidebarModal from "./components/sidebar-modal/SidebarModal";
import Stripe from "./components/stripe/Stripe";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/birthday" component={BirthdayReminder} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/accordion" component={Accordion} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/tabs" component={Tabs} />
        <Route exact path="/slider" component={Slider} />
        <Route exact path="/lorem" component={Lorem} />
        <Route exact path="/color" component={Color} />
        <Route exact path="/grocery" component={Grocery} />
        <Route exact path="/navbar" component={Navbar} />
        <Route exact path="/sidebar-modal" component={SidebarModal} />
        <Route exact path="/stripe" component={Stripe} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
