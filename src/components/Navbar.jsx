import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <aside className="left-sidebar with-horizontal">
      {/* Sidebar scroll*/}
      <div>
        {/* Sidebar navigation*/}
        <nav id="sidebarnavh" class="sidebar-nav scroll-sidebar container-fluid mw-100">
          <ul id="sidebarnav">
            {/* ============================= */}
            {/* Home */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            {/* =================== */}
            {/* Dashboard */}
            {/* =================== */}
            <li className="sidebar-item selected">
              <a className="sidebar-link .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-home-2" />
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item selected">
                  <a href="/" className="sidebar-link active">
                    <i className="ti ti-aperture" />
                    <span className="hide-menu">Analytical</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/eCommerce" className="sidebar-link">
                    <i className="ti ti-shopping-cart" />
                    <span className="hide-menu">eCommerce</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Apps */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Apps</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link two-column .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Apps</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="/app/calendar" className="sidebar-link">
                    <i className="ti ti-calendar" />
                    <span className="hide-menu">Calendar</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/kanban" className="sidebar-link">
                    <i className="ti ti-layout-kanban" />
                    <span className="hide-menu">Kanban</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/chat" className="sidebar-link">
                    <i className="ti ti-message-dots" />
                    <span className="hide-menu">Chat</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="/email" aria-expanded="false">
                    <span>
                      <i className="ti ti-mail" />
                    </span>
                    <span className="hide-menu">Email</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/contact" className="sidebar-link">
                    <i className="ti ti-phone" />
                    <span className="hide-menu">Contact Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/contact2" className="sidebar-link">
                    <i className="ti ti-list-details" />
                    <span className="hide-menu">Contact List</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/notes" className="sidebar-link">
                    <i className="ti ti-notes" />
                    <span className="hide-menu">Notes</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/invoice" className="sidebar-link">
                    <i className="ti ti-file-text" />
                    <span className="hide-menu">Invoice</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/pageUserProfile" className="sidebar-link">
                    <i className="ti ti-user-circle" />
                    <span className="hide-menu">User Profile</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/blogPosts" className="sidebar-link">
                    <i className="ti ti-article" />
                    <span className="hide-menu">Posts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/blogDetail" className="sidebar-link">
                    <i className="ti ti-details" />
                    <span className="hide-menu">Detail</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/app/ecoShop" className="sidebar-link">
                    <i className="ti ti-shopping-cart" />
                    <span className="hide-menu">Shop</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="app/shopDetail" className="sidebar-link">
                    <i className="ti ti-basket" />
                    <span className="hide-menu">Shop Detail</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/eco-product-list" className="sidebar-link">
                    <i className="ti ti-list-check" />
                    <span className="hide-menu">List</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/eco-checkout" className="sidebar-link">
                    <i className="ti ti-brand-shopee" />
                    <span className="hide-menu">Checkout</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/eco-add-product" className="sidebar-link">
                    <i className="ti ti-file-plus" />
                    <span className="hide-menu">Add Product</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/eco-edit-product" className="sidebar-link">
                    <i className="ti ti-file-pencil" />
                    <span className="hide-menu">Edit Product</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* PAGES */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">PAGES</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span>
                  <i className="ti ti-notebook" />
                </span>
                <span className="hide-menu">Pages</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="/page-faq" className="sidebar-link">
                    <i className="ti ti-help" />
                    <span className="hide-menu">FAQ</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/page-account-settings" className="sidebar-link">
                    <i className="ti ti-user-circle" />
                    <span className="hide-menu">Account Setting</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/page-pricing" className="sidebar-link">
                    <i className="ti ti-currency-dollar" />
                    <span className="hide-menu">Pricing</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/widgets-cards" className="sidebar-link">
                    <i className="ti ti-cards" />
                    <span className="hide-menu">Card</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/widgets-banners" className="sidebar-link">
                    <i className="ti ti-ad" />
                    <span className="hide-menu">Banner</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/widgets-charts" className="sidebar-link">
                    <i className="ti ti-chart-bar" />
                    <span className="hide-menu">Charts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="../landingpage/index" className="sidebar-link">
                    <i className="ti ti-app-window" />
                    <span className="hide-menu">Landing Page</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* UI */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">UI</span>
            </li>
            {/* =================== */}
            {/* UI Elements */}
            {/* =================== */}
            <li className="sidebar-item mega-dropdown">
              <a className="sidebar-link .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-layout-grid" />
                </span>
                <span className="hide-menu">UI</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="/ui-accordian" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Accordian</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-badge" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Badge</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-buttons" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-dropdowns" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Dropdowns</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-modals" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Modals</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-tab" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Tab</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-tooltip-popover" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Tooltip &amp; Popover</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-notification" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Alerts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-progressbar" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Progressbar</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-pagination" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Pagination</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-typography" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-bootstrap-ui" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Bootstrap UI</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-breadcrumb" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Breadcrumb</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-offcanvas" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Offcanvas</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-lists" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Lists</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-grid" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-carousel" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Carousel</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-scrollspy" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Scrollspy</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-spinner" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Spinner</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/ui-link" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Link</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Forms */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Forms</span>
            </li>
            {/* =================== */}
            {/* Forms */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link two-column .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-file-text" />
                </span>
                <span className="hide-menu">Forms</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                {/* form elements */}
                <li className="sidebar-item">
                  <a href="/form-inputs" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Forms Input</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-input-groups" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Input Groups</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-input-grid" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Input Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-checkbox-radio" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Checkbox &amp; Radios</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-bootstrap-switch" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Bootstrap Switch</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-select2" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Select2</span>
                  </a>
                </li>
                {/* form inputs */}
                <li className="sidebar-item">
                  <a href="/form-basic" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Basic Form</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-vertical" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Form Vertical</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-horizontal" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Form Horizontal</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-actions" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Form Actions</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-row-separator" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Row Separator</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-bordered" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Form Bordered</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/form-detail" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Form Detail</span>
                  </a>
                </li>
                {/* form wizard */}
                <li className="sidebar-item">
                  <a href="/form-wizard" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Form Wizard</span>
                  </a>
                </li>
                {/* Quill Editor */}
                <li className="sidebar-item">
                  <a href="/form-editor-quill" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Quill Editor</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Tables */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Tables</span>
            </li>
            {/* =================== */}
            {/* Bootstrap Table */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-layout-sidebar" />
                </span>
                <span className="hide-menu">Tables</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="/table-basic" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Basic Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/table-dark-basic" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Dark Basic Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/table-sizing" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Sizing Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/table-layout-coloured" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Coloured Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/table-datatable-basic" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Basic Initialisation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/table-datatable-api" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">API</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/table-datatable-advanced" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Advanced Initialisation</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Charts */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Charts</span>
            </li>
            {/* =================== */}
            {/* Apex Chart */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-chart-pie" />
                </span>
                <span className="hide-menu">Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="/chart-apex-line" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Line Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/chart-apex-area" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Area Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/chart-apex-bar" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Bar Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/chart-apex-pie" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Pie Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/chart-apex-radial" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Radial Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/chart-apex-radar" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Radar Chart</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Icons */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Icons</span>
            </li>
            {/* =================== */}
            {/* Tabler Icon */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Icon</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="/icon-tabler" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Tabler Icon</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/icon-solar" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Solar Icon</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* multi level */}
            <li className="sidebar-item">
              <a className="sidebar-link .has-arrow" href="javascript:void(0)" aria-expanded="false">
                <span className="rounded-3">
                  <iconify-icon icon="solar:airbuds-case-minimalistic-line-duotone" className="ti" />
                </span>
                <span className="hide-menu">Multi DD</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="../docs/index" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Documentation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="javascript:void(0)" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Page 1</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="javascript:void(0)" className="sidebar-link .has-arrow">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Page 2</span>
                  </a>
                  <ul aria-expanded="false" className="collapse second-level">
                    <li className="sidebar-item">
                      <a href="javascript:void(0)" className="sidebar-link">
                        {/* <i className="ti ti-circle" /> */}
                        <span className="hide-menu">Page 2.1</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="javascript:void(0)" className="sidebar-link">
                        {/* <i className="ti ti-circle" /> */}
                        <span className="hide-menu">Page 2.2</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="javascript:void(0)" className="sidebar-link">
                        {/* <i className="ti ti-circle" /> */}
                        <span className="hide-menu">Page 2.3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a href="javascript:void(0)" className="sidebar-link">
                    {/* <i className="ti ti-circle" /> */}
                    <span className="hide-menu">Page 3</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
}
