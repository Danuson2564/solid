import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const MainLayout = (props) => {
  return (
    <div id="main-wrapper">
      <div class="page-wrapper">
        <Header />
        <Navbar />
        <div class="body-wrapper">
          {props.children}
        </div>
          <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
