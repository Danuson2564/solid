export default function Charts() {
  return (
    <>
        <div class="container-fluid mw-100">
  <div class="page-titles mb-7 mb-md-5">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-12 align-self-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb align-items-center">
            <li class="breadcrumb-item">
              <a class="text-muted text-decoration-none" href="../minisidebar/index.html">
                <i class="ti ti-home fs-5" />
              </a>
            </li>
            <li class="breadcrumb-item" aria-current="page">Charts</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Charts</h2>
      </div>
      <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
        <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
          <option selected>Today 23 March</option>
          <option value="1">Today 23 March</option>
          <option value="2">Today 24 March</option>
          <option value="3">Today 25 March</option>
        </select>
        <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2">
          <i class="ti ti-plus me-1" />Add New</a>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body">
          <div class="d-flex align-items-end justify-content-between">
            <div>
              <h4 class="mb-0 card-title fs-6">2,545</h4>
              <p class="card-subtitle">Followers</p>
            </div>
            <span class="text-success fw-normal">+1.20%</span>
          </div>
        </div>
        <div id="widgest-chart-1">
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body p-4">
          <div class="d-flex align-items-end justify-content-between mb-3">
            <div>
              <h4 class="mb-0 card-title fs-6">15,480</h4>
              <p class="card-subtitle">Views</p>
            </div>
            <span class="text-danger fw-normal">-4.150%</span>
          </div>
          <div id="widgest-chart-2" class="mx-n2">
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body">
          <div class="d-flex align-items-end justify-content-between">
            <div>
              <h4 class="mb-0 card-title fs-6">2,545</h4>
              <p class="card-subtitle">Earned</p>
            </div>
            <span class="text-success fw-normal">+1.20%</span>
          </div>
        </div>
        <div id="widgest-chart-3">
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body p-4">
          <div class="mb-7 pb-8">
            <h4 class="mb-0 card-title fs-6">$78,298</h4>
            <p class="card-subtitle">Total Earning</p>
          </div>
          <div id="widgest-chart-4" class="mx-n2">
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-body p-4">
          <div class="d-flex align-items-center justify-content-between mb-4 pb-8">
            <h4 class="card-title mb-0">Current Value</h4>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-primary">Buy</button>
              <button class="btn btn-outline-primary">Sell</button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 d-flex align-items-stretch">
              <div class="card w-100 position-relative overflow-hidden border shadow-none mb-7 mb-lg-0">
                <div class="card-body">
                  <div id="widgest-chart-5" class="mx-n4">
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-7">
                    <div>
                      <p class="mb-1">Income</p>
                      <h4 class="mb-0 fw-semibold">$25,260</h4>
                    </div>
                    <span class="text-success fw-normal">+1.20%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-stretch">
              <div class="card w-100 position-relative overflow-hidden border shadow-none mb-7 mb-lg-0">
                <div class="card-body">
                  <div id="widgest-chart-6" class="mx-n4">
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-7">
                    <div>
                      <p class="mb-1">Expance</p>
                      <h4 class="mb-0 fw-semibold">$12,260</h4>
                    </div>
                    <span class="text-success fw-normal">+4.25%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-stretch">
              <div class="card w-100 position-relative overflow-hidden border shadow-none mb-7 mb-lg-0">
                <div class="card-body">
                  <div id="current-year">
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-7">
                    <div>
                      <p class="mb-1">Current Year</p>
                      <h4 class="mb-0 fw-semibold">$98,260</h4>
                    </div>
                    <span class="text-success fw-normal">+2.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card w-100 position-relative">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-8">
              <h4 class="card-title mb-9">Yearly Breakup</h4>
              <h4 class="fw-semibold mb-2">$36,358</h4>
              <div class="d-flex align-items-center mb-7 pb-8">
                <span class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                  <i class="ti ti-arrow-up-left text-success" />
                </span>
                <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                <p class="fs-3 mb-0">last year</p>
              </div>
              <div class="d-flex align-items-center">
                <div class="me-4">
                  <span class="round-8 text-bg-primary rounded-circle me-2 d-inline-block">
                  </span>
                  <span class="fs-2">2022</span>
                </div>
                <div>
                  <span class="round-8 bg-primary-subtle rounded-circle me-2 d-inline-block">
                  </span>
                  <span class="fs-2">2021</span>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="d-flex justify-content-center">
                <div id="breakup" class="me-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body pb-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h4 class="card-title mb-0">Monthly Earnings</h4>
            <div class="p-2 bg-primary-subtle rounded-1 d-inline-block">
              <img src="../assets/images/svgs/icon-master-card-2.svg" alt="matdash-img" class="img-fluid" width="24" height="24" />
            </div>
          </div>
          <div class="d-flex align-items-center mb-7 pb-8">
            <h4 class="fw-semibold mb-0 fs-7">$6,820</h4>
            <div class="d-flex align-items-center">
              <span class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                <i class="ti ti-arrow-up-left text-success" />
              </span>
              <p class="text-muted me-1 fs-3 mb-0">+9%</p>
            </div>
          </div>
        </div>
        <div id="monthly-earning">
        </div>
      </div>
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h4 class="card-title mb-0">Monthly Earnings</h4>
            <div>
              <select class="form-select text-dark">
                <option value="1">March 2024</option>
                <option value="2">April 2024</option>
                <option value="3">May 2024</option>
              </select>
            </div>
          </div>
          <div id="most-visited" class="rounded-bars mx-n3">
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <div class="me-4">
              <span class="round-8 text-bg-primary rounded-circle me-2 d-inline-block">
              </span>
              <span>San Francisco</span>
            </div>
            <div>
              <span class="round-8 text-bg-secondary rounded-circle me-2 d-inline-block">
              </span>
              <span>Diego</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body">
          <div>
            <h5 class="card-title">Yearly Sales</h5>
            <p class="card-subtitle mb-0">Every month</p>
            <div id="yearly-salary" class="mx-n7">
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
              <div class="d-flex align-items-center">
                <div class="bg-primary-subtle rounded-1 me-8 p-8 d-flex align-items-center justify-content-center">
                  <i class="ti ti-grid-dots text-primary fs-6" />
                </div>
                <div>
                  <p class="fs-3 mb-0 fw-normal">Salary</p>
                  <h6 class="fw-semibold text-dark fs-4 mb-0">$36,358</h6>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="text-bg-light rounded-1 me-8 p-8 d-flex align-items-center justify-content-center">
                  <i class="ti ti-grid-dots text-muted fs-6" />
                </div>
                <div>
                  <p class="fs-3 mb-0 fw-normal">Expance</p>
                  <h6 class="fw-semibold text-dark fs-4 mb-0">$5,296</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body">
          <h4 class="card-title mb-0">Page Impressions</h4>
          <div class="row align-items-center">
            <div class="col-md-6">
              <h4 class="fw-semibold mb-0 mt-4">$456,120</h4>
              <p class="mb-1 fs-2 mb-2">(Change Yesterday)</p>
              <div class="d-flex align-items-center">
                <span class="me-1 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center">
                  <i class="ti ti-arrow-down-right text-danger" />
                </span>
                <p class="text-muted fs-3 mb-0">+9%</p>
              </div>
            </div>
            <div class="col-md-6">
              <div id="impressions">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 d-flex align-items-stretch">
          <div class="card w-100 position-relative overflow-hidden">
            <div class="card-body">
              <p class="mb-1 fs-3">Customers</p>
              <h4 class="fw-semibold">36,358</h4>
              <div class="d-flex align-items-center">
                <span class="me-1 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center">
                  <i class="ti ti-arrow-down-right text-danger" />
                </span>
                <p class="text-muted fs-3 mb-0">+9%</p>
              </div>
            </div>
            <div id="customers">
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-stretch">
          <div class="card w-100 position-relative overflow-hidden">
            <div class="card-body">
              <p class="mb-1 fs-3">Projects</p>
              <h4 class="fw-semibold">78,298</h4>
              <div class="d-flex align-items-center mb-2">
                <span class="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                  <i class="ti ti-arrow-up-left text-success" />
                </span>
                <p class="text-muted fs-3 mb-0">+9%</p>
              </div>
              <div id="projects" class="rounded-bars mx-n2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card w-100 position-relative overflow-hidden">
        <div class="card-body pb-4">
          <h5 class="card-title">Revenue Updates</h5>
          <p class="card-subtitle mb-4">Overview of Profit</p>
          <div class="d-flex align-items-center">
            <div class="me-4">
              <span class="round-8 text-bg-primary rounded-circle me-2 d-inline-block">
              </span>
              <span class="fs-2">Footware</span>
            </div>
            <div>
              <span class="round-8 text-bg-secondary rounded-circle me-2 d-inline-block">
              </span>
              <span class="fs-2">Fashionware</span>
            </div>
          </div>
          <div id="revenue-updates" class="rounded-bars mx-n6">
          </div>
        </div>
      </div>
      <div class="card w-100">
        <div class="card-body">
          <h5 class="card-title">Sales Overview</h5>
          <p class="card-subtitle mb-4">Every Month</p>
          <div id="sales-overview">
          </div>
          <div class="d-flex align-items-center justify-content-between mt-5 pb-2">
            <div class="d-flex align-items-center">
              <div class="bg-primary-subtle rounded-1 me-8 p-8 d-flex align-items-center justify-content-center">
                <i class="ti ti-grid-dots text-primary fs-6" />
              </div>
              <div>
                <h6 class="fw-semibold text-dark fs-4 mb-0">$23,450</h6>
                <p class="fs-3 mb-0 fw-normal">Profit</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="bg-secondary-subtle rounded-1 me-8 p-8 d-flex align-items-center justify-content-center">
                <i class="ti ti-grid-dots text-secondary fs-6" />
              </div>
              <div>
                <h6 class="fw-semibold text-dark fs-4 mb-0">$23,450</h6>
                <p class="fs-3 mb-0 fw-normal">Expance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
