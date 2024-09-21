import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { createSignal } from "solid-js";

const MainLayout = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen());
  };
  console.log(isOpen)

  return (
    <div id="main-wrapper" class={isOpen() ? "show-sidebar" : ""}> {/* ใช้เงื่อนไขในการเพิ่มหรือลบ class */}
      <Sidebar />
      <div class="page-wrapper">
        <Header toggleNavbar={toggleNavbar} />
        <Navbar /> {/* ส่งฟังก์ชัน toggleNavbar ไปที่ Navbar */}
        <div class="body-wrapper pt-5">
          {props.children}
        </div>
          {/* <footer className="footer py-3 bg-white border-top text-center">
            2024© All Rights Reserved by Wrappixel
          </footer> */}
      </div>
    </div>
  );
};


export default MainLayout;
