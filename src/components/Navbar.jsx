export default function Navbar() {
  return (
    <div>
<aside className="left-sidebar with-horizontal">
  {/* Sidebar scroll*/}
  <div>
    {/* Sidebar navigation*/}
    <nav id="sidebarnavh" className="sidebar-nav scroll-sidebar container-fluid mw-100">
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
          <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span>
              <i className="ti ti-home-2" />
            </span>
            <span className="hide-menu">Dashboard</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item selected">
              <a href="../horizontal/index.html" className="sidebar-link active">
                <i className="ti ti-aperture" />
                <span className="hide-menu">Analytical</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/index2.html" className="sidebar-link">
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
          <a className="sidebar-link two-column has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span>
              <i className="ti ti-archive" />
            </span>
            <span className="hide-menu">Apps</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item">
              <a href="../horizontal/app-calendar.html" className="sidebar-link">
                <i className="ti ti-calendar" />
                <span className="hide-menu">Calendar</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/app-kanban.html" className="sidebar-link">
                <i className="ti ti-layout-kanban" />
                <span className="hide-menu">Kanban</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/app-chat.html" className="sidebar-link">
                <i className="ti ti-message-dots" />
                <span className="hide-menu">Chat</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="../horizontal/app-email.html" aria-expanded="false">
                <span>
                  <i className="ti ti-mail" />
                </span>
                <span className="hide-menu">Email</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/app-contact.html" className="sidebar-link">
                <i className="ti ti-phone" />
                <span className="hide-menu">Contact Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/app-contact2.html" className="sidebar-link">
                <i className="ti ti-list-details" />
                <span className="hide-menu">Contact List</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/app-notes.html" className="sidebar-link">
                <i className="ti ti-notes" />
                <span className="hide-menu">Notes</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/app-invoice.html" className="sidebar-link">
                <i className="ti ti-file-text" />
                <span className="hide-menu">Invoice</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/page-user-profile.html" className="sidebar-link">
                <i className="ti ti-user-circle" />
                <span className="hide-menu">User Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/blog-posts.html" className="sidebar-link">
                <i className="ti ti-article" />
                <span className="hide-menu">Posts</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/blog-detail.html" className="sidebar-link">
                <i className="ti ti-details" />
                <span className="hide-menu">Detail</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/eco-shop.html" className="sidebar-link">
                <i className="ti ti-shopping-cart" />
                <span className="hide-menu">Shop</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/eco-shop-detail.html" className="sidebar-link">
                <i className="ti ti-basket" />
                <span className="hide-menu">Shop Detail</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/eco-product-list.html" className="sidebar-link">
                <i className="ti ti-list-check" />
                <span className="hide-menu">List</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/eco-checkout.html" className="sidebar-link">
                <i className="ti ti-brand-shopee" />
                <span className="hide-menu">Checkout</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/eco-add-product.html" className="sidebar-link">
                <i className="ti ti-file-plus" />
                <span className="hide-menu">Add Product</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/eco-edit-product.html" className="sidebar-link">
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
          <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span>
              <i className="ti ti-notebook" />
            </span>
            <span className="hide-menu">Pages</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item">
              <a href="../horizontal/page-faq.html" className="sidebar-link">
                <i className="ti ti-help" />
                <span className="hide-menu">FAQ</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/page-account-settings.html" className="sidebar-link">
                <i className="ti ti-user-circle" />
                <span className="hide-menu">Account Setting</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/page-pricing.html" className="sidebar-link">
                <i className="ti ti-currency-dollar" />
                <span className="hide-menu">Pricing</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/widgets-cards.html" className="sidebar-link">
                <i className="ti ti-cards" />
                <span className="hide-menu">Card</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/widgets-banners.html" className="sidebar-link">
                <i className="ti ti-ad" />
                <span className="hide-menu">Banner</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/widgets-charts.html" className="sidebar-link">
                <i className="ti ti-chart-bar" />
                <span className="hide-menu">Charts</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../landingpage/index.html" className="sidebar-link">
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
          <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span className="rounded-3">
              <i className="ti ti-layout-grid" />
            </span>
            <span className="hide-menu">UI</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item">
              <a href="../horizontal/ui-accordian.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Accordian</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-badge.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Badge</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-buttons.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Buttons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-dropdowns.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Dropdowns</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-modals.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Modals</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-tab.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Tab</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-tooltip-popover.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Tooltip &amp; Popover</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-notification.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Alerts</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-progressbar.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Progressbar</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-pagination.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Pagination</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-typography.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Typography</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-bootstrap-ui.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Bootstrap UI</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-breadcrumb.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Breadcrumb</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-offcanvas.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Offcanvas</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-lists.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Lists</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-grid.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Grid</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-carousel.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Carousel</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-scrollspy.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Scrollspy</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-spinner.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Spinner</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/ui-link.html" className="sidebar-link">
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
          <a className="sidebar-link two-column has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span className="rounded-3">
              <i className="ti ti-file-text" />
            </span>
            <span className="hide-menu">Forms</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            {/* form elements */}
            <li className="sidebar-item">
              <a href="../horizontal/form-inputs.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Forms Input</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-input-groups.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Input Groups</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-input-grid.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Input Grid</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-checkbox-radio.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Checkbox &amp; Radios</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-bootstrap-switch.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Bootstrap Switch</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-select2.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Select2</span>
              </a>
            </li>
            {/* form inputs */}
            <li className="sidebar-item">
              <a href="../horizontal/form-basic.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Basic Form</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-vertical.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Form Vertical</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-horizontal.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Form Horizontal</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-actions.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Form Actions</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-row-separator.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Row Separator</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-bordered.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Form Bordered</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/form-detail.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Form Detail</span>
              </a>
            </li>
            {/* form wizard */}
            <li className="sidebar-item">
              <a href="../horizontal/form-wizard.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Form Wizard</span>
              </a>
            </li>
            {/* Quill Editor */}
            <li className="sidebar-item">
              <a href="../horizontal/form-editor-quill.html" className="sidebar-link">
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
          <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span className="rounded-3">
              <i className="ti ti-layout-sidebar" />
            </span>
            <span className="hide-menu">Tables</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item">
              <a href="../horizontal/table-basic.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Basic Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/table-dark-basic.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Dark Basic Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/table-sizing.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Sizing Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/table-layout-coloured.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Coloured Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/table-datatable-basic.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Basic Initialisation</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/table-datatable-api.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">API</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/table-datatable-advanced.html" className="sidebar-link">
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
          <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span className="rounded-3">
              <i className="ti ti-chart-pie" />
            </span>
            <span className="hide-menu">Charts</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item">
              <a href="../horizontal/chart-apex-line.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Line Chart</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/chart-apex-area.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Area Chart</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/chart-apex-bar.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Bar Chart</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/chart-apex-pie.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Pie Chart</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/chart-apex-radial.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Radial Chart</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/chart-apex-radar.html" className="sidebar-link">
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
          <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span className="rounded-3">
              <i className="ti ti-archive" />
            </span>
            <span className="hide-menu">Icon</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item">
              <a href="../horizontal/icon-tabler.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Tabler Icon</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="../horizontal/icon-solar.html" className="sidebar-link">
                {/* <i className="ti ti-circle" /> */}
                <span className="hide-menu">Solar Icon</span>
              </a>
            </li>
          </ul>
        </li>
        {/* multi level */}
        <li className="sidebar-item">
          <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
            <span className="rounded-3">
              <iconify-icon icon="solar:airbuds-case-minimalistic-line-duotone" className="ti" />
            </span>
            <span className="hide-menu">Multi DD</span>
          </a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item">
              <a href="../docs/index.html" className="sidebar-link">
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
              <a href="javascript:void(0)" className="sidebar-link has-arrow">
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
    </div>
  );
}
