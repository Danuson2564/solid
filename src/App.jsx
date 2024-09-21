import Home from "./routes/Home";
import { Route, Router } from "@solidjs/router";
import MainLayout from "./components/MainLayout";
import Calendar from "./routes/App/Calendar";
import AddProduct from "./routes/App/AddProduct";
import Chat from "./routes/App/Chat";
import Checkout from "./routes/App/Checkout";
import ContactList from "./routes/App/ContactList";
import ContactTable from "./routes/App/ContactTable";
import Detail from "./routes/App/Detail";
import EditProduct from "./routes/App/EditProduct";
import Email from "./routes/App/Email";
import Invoice from "./routes/App/Invoice";
import Kanban from "./routes/App/Kanban";
import List from "./routes/App/List";
import Notes from "./routes/App/Notes";
import Shop from "./routes/App/Shop";
import ShopDetail from "./routes/App/ShopDetail";
import UserProfile from "./routes/App/UserProfile";
import Analytical from "./routes/Dashboard/Analytical";
import ECommerce from "./routes/Dashboard/ECommerce";
import AccountSetting from "./routes/Pages/AccountSetting";
import Banner from "./routes/Pages/Banner";
import Card from "./routes/Pages/Card";
import Charts from "./routes/Pages/Charts";
import FAQ from "./routes/Pages/FAQ";
import LandingPage from "./routes/Pages/LandingPage";
import Pricing from "./routes/Pages/Pricing";
import Buttons from "./routes/UI/Buttons";
import Dropdowns from "./routes/UI/Dropdowns";
import Modal from "./routes/UI/Modal";
import Pagination from "./routes/UI/Pagination";
import Progressbar from "./routes/UI/Progressbar";
import Tab from "./routes/UI/Tab";
import Typography from "./routes/UI/Typography";
import Spinner from "./routes/UI/Spinner";
import Accordion from "./routes/UI/Accordion";
import Badge from "./routes/UI/Badge";
import Alerts from "./routes/UI/Alerts";
import BootstrapUI from "./routes/UI/BootstrapUI";
import Breadcrumb from "./routes/UI/Breadcrumb";
import Carousel from "./routes/UI/Carousel";
import Grid from "./routes/UI/Grid";
import Link from "./routes/UI/Link";
import Lists from "./routes/UI/Lists";
import Scrollspy from "./routes/UI/Scrollspy";
import TooltipPopover from "./routes/UI/TooltipPopover";
import Error from "./routes/Error";

function App() {
  return (
    <>
      <MainLayout>
        <Router root={MainLayout}>
          {/* Error */}
          <Route path="/*all" component={Error} />

          {/* <Route path="/" component={Home} /> */}
          <Route path="/" component={Analytical} />
          <Route path="/eCommerce" component={ECommerce} />

          {/* app */}
          <Route path="/app/addproduct" component={AddProduct} />
          <Route path="/app/calendar" component={Calendar} />
          <Route path="/app/chat" component={Chat} />
          <Route path="/app/checkout" component={Checkout} />
          <Route path="/app/contactlist" component={ContactList} />
          <Route path="/app/contacttable" component={ContactTable} />
          <Route path="/app/detail" component={Detail} />
          <Route path="/app/editproduct" component={EditProduct} />
          <Route path="/app/email" component={Email} />
          <Route path="/app/invoice" component={Invoice} />
          <Route path="/app/kanban" component={Kanban} />
          <Route path="/app/list" component={List} />
          <Route path="/app/notes" component={Notes} />
          <Route path="/app/posts" component={Shop} />
          <Route path="/app/shopdetail" component={ShopDetail} />
          <Route path="/app/userprofile" component={UserProfile} />

          {/* Pages */}
          <Route path="/Pages/accountSetting" component={AccountSetting} />
          <Route path="/Pages/banner" component={Banner} />
          <Route path="/Pages/card" component={Card} />
          <Route path="/Pages/charts" component={Charts} />
          <Route path="/Pages/FAQ" component={FAQ} />
          <Route path="/Pages/landingPage" component={LandingPage} />
          <Route path="/Pages/pricing" component={Pricing} />

          {/* UI */}
          <Route path="/ui/buttons" component={Buttons} />
          <Route path="/ui/dropdowns" component={Dropdowns} />
          <Route path="/ui/modals" component={Modal} />
          <Route path="/ui/pagination" component={Pagination} />
          <Route path="/ui/brogressbar" component={Progressbar} />
          <Route path="/ui/tabs" component={Tab} />
          <Route path="/ui/typography" component={Typography} />
          <Route path="/ui/spinner" component={Spinner} />
          <Route path="/ui/Accordion" component={Accordion} />
          <Route path="/ui/Badge" component={Badge} />
          <Route path="/ui/Alerts" component={Alerts} />
          <Route path="/ui/BootstrapUI" component={BootstrapUI} />
          <Route path="/ui/Breadcrumb" component={Breadcrumb} />
          <Route path="/ui/Carousel" component={Carousel} />
          <Route path="/ui/Grid" component={Grid} />
          <Route path="/ui/Link" component={Link} />
          <Route path="/ui/Lists" component={Lists} />
          <Route path="/ui/Scrollspy" component={Scrollspy} />
          <Route path="/ui/tooltipPopover" component={TooltipPopover} />
        </Router>
      </MainLayout>
    </>
  );
}

export default App;