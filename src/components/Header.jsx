import { darklLogo, iconAccount, iconDdApplication, iconDdCart, iconDdChat, iconDdDate, iconDdInvoice, iconDdLifebuoy, iconDdMessageBox, iconDdMobile, iconFlagCn, iconFlagEn, iconFlagFr, iconFlagSa, iconInbox, iconTasks, lightLogo } from "../helper/icon";
import { createSignal } from "solid-js";
import User1 from "../assets/images/profile/user-1.jpg";
import UnlimitedBg from "../assets/images/backgrounds/unlimited-bg.png";
export default function Header(props) {
  const [isOpenToggleHeader, setIsOpenToggleHeader] = createSignal(false);
  const [isOpenOffcanvas, setIsOpenOpenOffcanvas] = createSignal(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = createSignal(false);

  const toggleSearchBar = () => {
    setIsOpenSearchBar(!isOpenSearchBar());
  };
  const toggleHeader = () => {
    setIsOpenToggleHeader(!isOpenToggleHeader());
  };
  const toggleOffcanvas = () => {
    setIsOpenOpenOffcanvas(!isOpenOffcanvas());
  };
  console.log(isOpenToggleHeader)
  return (
    <>
      <header className="topbar">
        <div className="with-vertical">
          <nav className="navbar navbar-expand-lg p-0">
            <ul className="navbar-nav">
              <li class="nav-item nav-icon-hover-bg rounded-circle ms-n2">
                <a
                  class="nav-link sidebartoggler"
                  id="headerCollapse"
                  href="#"
                  onClick={props.toggleNavbar} // เรียกฟังก์ชัน toggleNavbar เมื่อกดปุ่ม
                >
                  <i class="ti ti-menu-2" />
                </a>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-lg-flex">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  // onClick={toggleSearchBar}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="ti ti-search" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav quick-links d-none d-lg-flex align-items-center">
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-block mx-0">
                <div className="hover-dd">
                  <a className="nav-link" href="javascript:void(0)">
                    Apps
                    <span className="mt-1">
                      <i className="ti ti-chevron-down fs-3" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className="ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="../horizontal/app-chat.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-chat.svg"
                                        // src={iconDdChat}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-invoice.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-invoice.svg"
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-contact2.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-mobile.svg"
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-email.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-message-box.svg"
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get new emails
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="../horizontal/page-user-profile.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdCart}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-calendar.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdDate}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get dates
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-contact.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdLifebuoy}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Add new contact
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-notes.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdApplication}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-8">
                              <a
                                className="fw-semibold d-flex align-items-center lh-1"
                                href="javascript:void(0)"
                              >
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </a>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ms-n4">
                        <div className="position-relative p-7 border-start h-100">
                          <h5 className="fs-5 mb-9 fw-semibold">Quick Links</h5>
                          <ul class>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/page-pricing.html"
                              >
                                Pricing Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/authentication-login.html"
                              >
                                Authentication Design
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/authentication-register.html"
                              >
                                Register Now
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/authentication-error.html"
                              >
                                404 Error Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/app-notes.html"
                              >
                                Notes App
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/page-user-profile.html"
                              >
                                User Application
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/page-account-settings.html"
                              >
                                Account Settings
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="../horizontal/app-chat.html">
                  Chat
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="../horizontal/app-calendar.html">
                  Calendar
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="../horizontal/app-email.html">
                  Email
                </a>
              </li>
            </ul>
            <div className="d-block d-lg-none py-4">
              <a
                href="../horizontal/index.html"
                className="text-nowrap logo-img"
              >
                <img
                  src={darklLogo}
                  className="dark-logo"
                  alt="Logo-Dark"
                  style={{ display: "flex" }}
                />
                <img
                  src={lightLogo}
                  className="light-logo"
                  alt="Logo-light"
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a
              // className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0 collapsed"
              class={isOpenToggleHeader() ? "navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0" : "navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0 collapsed"}
              // href="javascript:void(0)"
              onClick={toggleHeader}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ti ti-dots fs-7" />
            </a>
            <div
              // className="navbar-collapse justify-content-end collapse show"
              // className="navbar-collapse justify-content-end collapse"
              class={isOpenToggleHeader() ? "navbar-collapse justify-content-end collapse show" : "navbar-collapse justify-content-end collapse "}
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between">
                <a
                  // href="javascript:void(0)"
                  onClick={toggleOffcanvas}
                  className="nav-link nav-icon-hover-bg rounded-circle mx-0 ms-n1 d-flex d-lg-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7" />
                </a>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link moon dark-layout"
                      href="javascript:void(0)"
                      style={{ display: "flex" }}
                    >
                      <i
                        className="ti ti-moon moon"
                        style={{ display: "flex" }}
                      />
                    </a>
                    <a
                      className="nav-link sun light-layout"
                      href="javascript:void(0)"
                      style={{ display: "none" }}
                    >
                      <i
                        className="ti ti-sun sun"
                        style={{ display: "none" }}
                      />
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <img
                        // src={iconFlagEn}
                        src={iconFlagEn}
                        alt="flexy-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagEn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagCn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagFr}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagSa}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="ti ti-basket" />
                      <span className="popup-badge rounded-pill bg-danger text-white fs-2">
                        2
                      </span>
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bell-ringing" />
                      <div className="notification bg-primary rounded-circle" />
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-2 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="init">
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "310px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabindex="0"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-2.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-3.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        New message
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Salma sent you new message
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-4.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Bianca sent payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Check your earnings
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-5.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Jolly completed tasks
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Assign her new tasks
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-6.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        John received payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        $230 deducted from account
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-7.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "0px", height: "0px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: "0px", display: "none" }}
                          />
                        </div>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end notification Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start profile Dropdown */}
                  {/* ------------------------------- */}
                  <li class="nav-item dropdown">
                    <a class="nav-link pe-0" href="javascript:void(0)" id="drop1" aria-expanded="false">
                      <div class="d-flex align-items-center">
                        <div class="user-profile-img">
                          <img src={User1} class="rounded-circle" width="35" height="35" alt="flexy-img" />
                          {/* <img src="../assets/images/profile/user-1.jpg" class="rounded-circle" width="35" height="35" alt="flexy-img" /> */}
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                      <div class="profile-dropdown position-relative" data-simplebar="init">
                        <div class="simplebar-wrapper" style={{ "margin": "310px" }}>
                          <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer">
                            </div>
                          </div>
                          <div class="simplebar-mask">
                            <div class="simplebar-offset" style={{ "right": "0px", "bottom": "0px" }}>
                              <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ "height": "auto", "overflow": "hidden" }}>
                                <div class="simplebar-content" style={{ "padding": "0px" }}>
                                  <div class="py-3 px-7 pb-0">
                                    <h5 class="mb-0 fs-5 fw-semibold">User Profile</h5>
                                  </div>
                                  <div class="d-flex align-items-center py-9 mx-7 border-bottom">
                                    <img src={User1} class="rounded-circle" width="80" height="80" alt="flexy-img" />
                                    <div class="ms-3">
                                      <h5 class="mb-1 fs-4">Johnathan Doe</h5>
                                      <span class="mb-1 d-block">Administrator</span>
                                      <p class="mb-0 d-flex align-items-center gap-2">
                                        <i class="ti ti-mail fs-4" />info@flexy.com</p>
                                    </div>
                                  </div>
                                  <div class="message-body">
                                    <a href="../horizontal/page-user-profile.html" class="py-8 px-7 mt-8 d-flex align-items-center">
                                      <span class="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img src={iconAccount} alt="flexy-img" width="24" height="24" />
                                      </span>
                                      <div class="w-100 ps-3">
                                        <h6 class="mb-0 fs-4 lh-base">My Profile</h6>
                                        <span class="fs-3 d-block text-body-secondary">Account Settings</span>
                                      </div>
                                    </a>
                                    <a href="../horizontal/app-email.html" class="py-8 px-7 d-flex align-items-center">
                                      <span class="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img src={iconInbox} alt="flexy-img" width="24" height="24" />
                                      </span>
                                      <div class="w-100 ps-3">
                                        <h6 class="mb-0 fs-4 lh-base">My Inbox</h6>
                                        <span class="fs-3 d-block text-body-secondary">Messages &amp; Emails</span>
                                      </div>
                                    </a>
                                    <a href="../horizontal/app-notes.html" class="py-8 px-7 d-flex align-items-center">
                                      <span class="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img src={iconTasks} alt="flexy-img" width="24" height="24" />
                                      </span>
                                      <div class="w-100 ps-3">
                                        <h6 class="mb-0 fs-4 lh-base">My Task</h6>
                                        <span class="fs-3 d-block text-body-secondary">To-do and Daily Tasks</span>
                                      </div>
                                    </a>
                                  </div>
                                  <div class="d-grid py-4 px-7 pt-8">
                                    <div class="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-2 p-4 mb-9">
                                      <div class="row">
                                        <div class="col-6">
                                          <h5 class="fs-4 mb-3 fw-semibold">Unlimited Access</h5>
                                          <button class="btn btn-primary">Upgrade</button>
                                        </div>
                                        <div class="col-6">
                                          <div class="m-n4 unlimited-img">
                                            <img src={UnlimitedBg} alt="flexy-img" class="w-100" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="../horizontal/authentication-login.html" class="btn btn-outline-primary">Log Out</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="simplebar-placeholder" style="width: 364px; height: 610px;"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style={{ "visibility": "hidden" }}>
                          <div class="simplebar-scrollbar" style={{ "width": "0px", "display": "none" }}>
                          </div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style={{ "visibility": "hidden" }}>
                          <div class="simplebar-scrollbar" style={{ "height": "0px", "display": "none" }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            // class="offcanvas offcanvas-end"
          class={isOpenOffcanvas() ? "offcanvas offcanvas-end show" : "offcanvas offcanvas-end"}
          >
            <nav class="sidebar-nav scroll-sidebar">
              <div class="offcanvas-header justify-content-between">
                <img src="../assets/images/logos/favicon.png" alt="flexy-img" class="img-fluid" />
                <button type="button" class="btn-close ms-auto" onClick={() => setIsOpenOpenOffcanvas(false)} data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div class="offcanvas-body h-n80" data-simplebar="init"><div class="simplebar-wrapper" style={{ "margin": "-16px" }}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer" /></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ "right": "0px", "bottom": "0px" }}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ "height": "100%", "overflow": "hidden" }}><div class="simplebar-content" style={{ "padding": "16px" }}>
                <ul id="sidebarnav">
                  <li class="sidebar-item">
                    <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
                      <span>
                        <i class="ti ti-apps" />
                      </span>
                      <span class="hide-menu">Apps</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level my-3">
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/app-chat.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src={iconDdChat} alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">Chat Application</h6>
                            <span class="fs-2 d-block text-muted">New messages arrived</span>
                          </div>
                        </a>
                      </li>
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/app-invoice.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src={iconDdInvoice} alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">Invoice App</h6>
                            <span class="fs-2 d-block text-muted">Get latest invoice</span>
                          </div>
                        </a>
                      </li>
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/app-cotact.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/svgs/icon-dd-mobile.svg" alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">Contact Application</h6>
                            <span class="fs-2 d-block text-muted">2 Unsaved Contacts</span>
                          </div>
                        </a>
                      </li>
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/app-email.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/svgs/icon-dd-message-box.svg" alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">Email App</h6>
                            <span class="fs-2 d-block text-muted">Get new emails</span>
                          </div>
                        </a>
                      </li>
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/page-user-profile.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/svgs/icon-dd-cart.svg" alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">User Profile</h6>
                            <span class="fs-2 d-block text-muted">learn more information</span>
                          </div>
                        </a>
                      </li>
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/app-calendar.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/svgs/icon-dd-date.svg" alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">Calendar App</h6>
                            <span class="fs-2 d-block text-muted">Get dates</span>
                          </div>
                        </a>
                      </li>
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/app-contact2.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/svgs/icon-dd-lifebuoy.svg" alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">Contact List Table</h6>
                            <span class="fs-2 d-block text-muted">Add new contact</span>
                          </div>
                        </a>
                      </li>
                      <li class="sidebar-item py-2">
                        <a href="../horizontal/app-notes.html" class="d-flex align-items-center">
                          <div class="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/svgs/icon-dd-application.svg" alt="flexy-img" class="img-fluid" width="24" height="24" />
                          </div>
                          <div>
                            <h6 class="mb-1 bg-hover-primary">Notes Application</h6>
                            <span class="fs-2 d-block text-muted">To-do and Daily tasks</span>
                          </div>
                        </a>
                      </li>
                      <ul class="px-8 mt-7 mb-4">
                        <li class="sidebar-item mb-3">
                          <h5 class="fs-5 fw-semibold">Quick Links</h5>
                        </li>
                        <li class="sidebar-item py-2">
                          <a class="fw-semibold text-dark" href="../horizontal/page-pricing.html">Pricing Page</a>
                        </li>
                        <li class="sidebar-item py-2">
                          <a class="fw-semibold text-dark" href="../horizontal/authentication-login.html">Authentication
                            Design</a>
                        </li>
                        <li class="sidebar-item py-2">
                          <a class="fw-semibold text-dark" href="../horizontal/authentication-register.html">Register Now</a>
                        </li>
                        <li class="sidebar-item py-2">
                          <a class="fw-semibold text-dark" href="../horizontal/authentication-error.html">404 Error Page</a>
                        </li>
                        <li class="sidebar-item py-2">
                          <a class="fw-semibold text-dark" href="../horizontal/app-notes.html">Notes App</a>
                        </li>
                        <li class="sidebar-item py-2">
                          <a class="fw-semibold text-dark" href="../horizontal/page-user-profile.html">User Application</a>
                        </li>
                        <li class="sidebar-item py-2">
                          <a class="fw-semibold text-dark" href="../horizontal/page-account-settings.html">Account Settings</a>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="../horizontal/app-chat.html" aria-expanded="false">
                      <span>
                        <i class="ti ti-message-dots" />
                      </span>
                      <span class="hide-menu">Chat</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="../horizontal/app-calendar.html" aria-expanded="false">
                      <span>
                        <i class="ti ti-calendar" />
                      </span>
                      <span class="hide-menu">Calendar</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="../horizontal/app-email.html" aria-expanded="false">
                      <span>
                        <i class="ti ti-mail" />
                      </span>
                      <span class="hide-menu">Email</span>
                    </a>
                  </li>
                </ul>
              </div>
              </div>
              </div>
              </div>
                <div class="simplebar-placeholder" style={{ "width": "330px", "height": "610px" }} />
              </div>
                <div class="simplebar-track simplebar-horizontal" style={{ "visibility": "hidden" }}>
                  <div class="simplebar-scrollbar" style={{ "width": "0px", "display": "none" }} />
                </div>
                <div class="simplebar-track simplebar-vertical" style={{ "visibility": "hidden" }}>
                  <div class="simplebar-scrollbar" style={{ "height": "0px", "display": "none" }} />
                </div>
              </div>
            </nav>
          </div>
          <div class={isOpenOffcanvas() ? "offcanvas-backdrop fade show" : ""}></div>
        </div>
        <div className="app-header with-horizontal">
          <nav className="navbar navbar-expand-xl container-fluid p-0 mw-100">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item nav-icon-hover-bg rounded-circle d-flex d-xl-none ms-n2">
                <a
                  className="nav-link sidebartoggler"
                  id="sidebarCollapse"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="nav-item d-none d-xl-block">
                <a
                  href="../horizontal/index.html"
                  className="text-nowrap nav-link"
                >
                  <img
                    src={darklLogo}
                    className="dark-logo"
                    alt="flexy-img"
                    style={{ display: "flex" }}
                  />
                  <img
                    src={lightLogo}
                    // src="../assets/images/logos/light-logo.svg"
                    className="light-logo"
                    alt="flexy-img"
                    style={{ display: "none" }}
                  />
                </a>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-xl-flex">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="ti ti-search" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav quick-links d-none d-xl-flex align-items-center">
              {/* ------------------------------- */}
              {/* start apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-flex">
                <div className="hover-dd">
                  <a className="nav-link" href="javascript:void(0)">
                    Apps
                    <span className="mt-1">
                      <i className="ti ti-chevron-down fs-3" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className="ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="../horizontal/app-chat.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdChat}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-invoice.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdInvoice}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-contact2.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdMobile}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-email.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdMessageBox}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get new emails
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="../horizontal/page-user-profile.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdCart}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-calendar.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdDate}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get dates
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-contact.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdLifebuoy}
                                        alt="flexy-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Add new contact
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="../horizontal/app-notes.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src={iconDdApplication}
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-8">
                              <a
                                className="fw-semibold d-flex align-items-center lh-1"
                                href="javascript:void(0)"
                              >
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </a>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ms-n4">
                        <div className="position-relative p-7 border-start h-100">
                          <h5 className="fs-5 mb-9 fw-semibold">Quick Links</h5>
                          <ul class>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/page-pricing.html"
                              >
                                Pricing Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/authentication-login.html"
                              >
                                Authentication Design
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/authentication-register.html"
                              >
                                Register Now
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/authentication-error.html"
                              >
                                404 Error Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/app-notes.html"
                              >
                                Notes App
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/page-user-profile.html"
                              >
                                User Application
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold bg-hover-primary"
                                href="../horizontal/page-account-settings.html"
                              >
                                Account Settings
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="../horizontal/app-chat.html">
                  Chat
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="../horizontal/app-calendar.html">
                  Calendar
                </a>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="../horizontal/app-email.html">
                  Email
                </a>
              </li>
            </ul>
            <div className="d-block d-xl-none">
              <a
                href="../horizontal/index.html"
                className="text-nowrap nav-link"
              >
                <img
                  src={darklLogo}
                  width="180"
                  alt="flexy-img"
                />
              </a>
            </div>
            <a
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="p-2">
                <i className="ti ti-dots fs-7" />
              </span>
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                <a
                  href="javascript:void(0)"
                  className="nav-link round-40 p-1 ps-0 d-flex d-xl-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7" />
                </a>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link moon dark-layout"
                      href="javascript:void(0)"
                      style={{ display: "flex" }}
                    >
                      <i
                        className="ti ti-moon moon"
                        style={{ display: "flex" }}
                      />
                    </a>
                    <a
                      className="nav-link sun light-layout"
                      href="javascript:void(0)"
                      style={{ display: "none" }}
                    >
                      <i
                        className="ti ti-sun sun"
                        style={{ display: "none" }}
                      />
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <img
                        src={iconFlagEn}
                        alt="flexy-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagEn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagCn}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagFr}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagSa}
                              alt="flexy-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="ti ti-basket" />
                      <span className="popup-badge rounded-pill bg-danger text-white fs-2">
                        2
                      </span>
                    </a>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bell-ringing" />
                      <div className="notification bg-primary rounded-circle" />
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-2 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="init">
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "0px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabindex="0"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-2.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-3.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        New message
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Salma sent you new message
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-4.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Bianca sent payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Check your earnings
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-5.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Jolly completed tasks
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Assign her new tasks
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-6.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        John received payment
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        $230 deducted from account
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="py-6 px-7 d-flex align-items-center dropdown-item"
                                  >
                                    <span className="me-3">
                                      <img
                                        src="../assets/images/profile/user-7.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                        width="48"
                                        height="48"
                                      />
                                    </span>
                                    <div className="w-100">
                                      <h6 className="mb-0 fs-4 lh-base">
                                        Roman Joined the Team!
                                      </h6>
                                      <span className="fs-3 d-block text-body-secondary">
                                        Congratulate him
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "0px", height: "0px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              height: "0px",
                              display: "none",
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link pe-0"
                      href="javascript:void(0)"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src={User1}
                            className="rounded-circle"
                            width="35"
                            height="35"
                            alt="flexy-img"
                          />
                        </div>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar="init"
                      >
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "310px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabindex="0"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <div className="py-3 px-7 pb-0">
                                    <h5 className="mb-0 fs-5 fw-semibold">
                                      User Profile
                                    </h5>
                                  </div>
                                  <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                    <img
                                      src="../assets/images/profile/user-1.jpg"
                                      className="rounded-circle"
                                      width="80"
                                      height="80"
                                      alt="flexy-img"
                                    />
                                    <div className="ms-3">
                                      <h5 className="mb-1 fs-4">
                                        Johnathan Doe
                                      </h5>
                                      <span className="mb-1 d-block">
                                        Administrator
                                      </span>
                                      <p className="mb-0 d-flex align-items-center gap-2">
                                        <i className="ti ti-mail fs-4" />{" "}
                                        info@flexy.com
                                      </p>
                                    </div>
                                  </div>
                                  <div className="message-body">
                                    <a
                                      href="../horizontal/page-user-profile.html"
                                      className="py-8 px-7 mt-8 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-account.svg"
                                          alt="flexy-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-0 fs-4 lh-base">
                                          My Profile
                                        </h6>
                                        <span className="fs-3 d-block text-body-secondary">
                                          Account Settings
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="../horizontal/app-email.html"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-inbox.svg"
                                          alt="flexy-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-0 fs-4 lh-base">
                                          My Inbox
                                        </h6>
                                        <span className="fs-3 d-block text-body-secondary">
                                          Messages &amp; Emails
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="../horizontal/app-notes.html"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-tasks.svg"
                                          alt="flexy-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-0 fs-4 lh-base">
                                          My Task
                                        </h6>
                                        <span className="fs-3 d-block text-body-secondary">
                                          To-do and Daily Tasks
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="d-grid py-4 px-7 pt-8">
                                    <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-2 p-4 mb-9">
                                      <div className="row">
                                        <div className="col-6">
                                          <h5 className="fs-4 mb-3 fw-semibold">
                                            Unlimited Access
                                          </h5>
                                          <button className="btn btn-primary">
                                            Upgrade
                                          </button>
                                        </div>
                                        <div className="col-6">
                                          <div className="m-n4 unlimited-img">
                                            <img
                                              src={UnlimitedBg}
                                              alt="flexy-img"
                                              className="w-100"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a
                                      href="../horizontal/authentication-login.html"
                                      className="btn btn-outline-primary"
                                    >
                                      Log Out
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "0px", height: "0px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: "0px", display: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
