export default function Dropdowns() { 
    return (
      <>
        <div class="container-fluid mw-100">
  <div class="page-titles mb-7 mb-md-5">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-12 align-self-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb align-items-center">
            <li class="breadcrumb-item">
              <a class="text-muted text-decoration-none" href="../horizontal/index.html">
                <i class="ti ti-home fs-5" />
              </a>
            </li>
            <li class="breadcrumb-item" aria-current="page">Dropdowns</li>
          </ol>
        </nav>
        <h2 class="mb-0 fw-bolder fs-8">Dropdowns</h2>
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
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Button with Dropdown</h4>
          <div class="d-flex gap-6 flex-wrap">
            <div class="btn-group">
              <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Split button dropdowns</h4>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button type="button" class="btn btn-danger">Action</button>
              <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-warning">Action</button>
              <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-success">Action</button>
              <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-info">Action</button>
              <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-secondary">Action</button>
              <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-light">Action</button>
              <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-dark">Action</button>
              <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Light Button with Dropdown</h4>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button class="btn bg-danger-subtle text-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-info-subtle text-info dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-primary-subtle text-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-warning-subtle text-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-success-subtle text-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Light Split with Dropdown</h4>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button type="button" class="btn bg-danger-subtle text-danger">Action</button>
              <button type="button" class="btn bg-danger-subtle text-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-primary-subtle text-primary">Action</button>
              <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-warning-subtle text-warning">Action</button>
              <button type="button" class="btn bg-warning-subtle text-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-success-subtle text-success">Action</button>
              <button type="button" class="btn bg-success-subtle text-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-info-subtle text-info">Action</button>
              <button type="button" class="btn bg-info-subtle text-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-secondary-subtle text-secondary">Action</button>
              <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Large button dropdowns</h4>
          <p class="mb-3 card-subtitle">Use a
            <mark> <code>.btn-lg</code>
            </mark>classes to create instant button</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary  btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Large button</button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary  btn-lg me-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Large button</button>
              <button type="button" class="btn btn-lg bg-secondary-subtle text-secondary  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Small button dropdowns</h4>
          <p class="mb-3 card-subtitle">Use a
            <mark> <code>.btn-sm</code>
            </mark>classes to create instant button</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Small button</button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary  btn-sm" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Small button</button>
              <button type="button" class="btn btn-sm bg-secondary-subtle text-secondary  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Large Dark Dropdown</h4>
          <p class="mb-3 card-subtitle">Use
            <mark> <code>dropdown-menu-dark</code>
            </mark>for dark dropdown buttons.</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dark Dropdown</button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="me-0 btn bg-secondary-subtle text-secondary btn-lg" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dark Dropdown</button>
              <button type="button" class="btn btn-lg bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Small Dark Dropdown</h4>
          <p class="mb-3 card-subtitle">Use
            <mark> <code>dropdown-menu-dark</code>
            </mark>for dark dropdown buttons.</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dark Dropdown</button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn bg-secondary-subtle text-secondary btn-sm" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dark Dropdown</button>
              <button type="button" class="btn btn-sm bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Animated Dropdowns</h4>
          <p class="mb-3 card-subtitle">Give class to the button
            <mark> <code>animated flipInX, flipInY, lightSpeedIn, slideInUp
              </code>
            </mark>use any animations class</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated flipInX">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated flipInY">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated lightSpeedIn">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated slideInUp">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated bounce">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Light Animated Dropdowns</h4>
          <p class="mb-3 card-subtitle">Give class to the button
            <mark> <code>animated flipInX, flipInY, lightSpeedIn, slideInUp
              </code>
            </mark>use any animations class</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button type="button" class="btn bg-danger-subtle text-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated flipInX">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-info-subtle text-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated flipInY">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated lightSpeedIn">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-warning-subtle text-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated slideInUp">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-success-subtle text-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated bounce">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Animated Dropdowns with icon</h4>
          <p class="mb-3 card-subtitle">Give class to the button
            <mark> <code>animated flipInX, flipInY, lightSpeedIn, slideInUp
              </code>
            </mark>use any animations class</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle text-white" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-mail fs-4" />
              </button>
              <ul class="dropdown-menu animated flipInX">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-trash fs-4" />
              </button>
              <ul class="dropdown-menu animated flipInY">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-heart fs-4" />
              </button>
              <ul class="dropdown-menu animated lightSpeedIn">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-inbox fs-4" />
              </button>
              <ul class="dropdown-menu animated slideInUp">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-clipboard fs-4" />
              </button>
              <ul class="dropdown-menu animated bounce">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-bell fs-4" />
              </button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-light dropdown-toggle text-dark" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-calendar fs-4" />
              </button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-camera fs-4" />
              </button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title mb-4">Light Animated Button Dropdowns with icon</h4>
          <p class="mb-3 card-subtitle">Give class to the button
            <mark> <code>animated flipInX, flipInY, lightSpeedIn, slideInUp
              </code>
            </mark>use any animations class</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button type="button" class="btn bg-danger-subtle text-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-mail fs-4" />
              </button>
              <ul class="dropdown-menu animated flipInX">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-info-subtle text-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-trash fs-4" />
              </button>
              <ul class="dropdown-menu animated flipInY">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-heart fs-4" />
              </button>
              <ul class="dropdown-menu animated lightSpeedIn">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-warning-subtle text-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-inbox fs-4" />
              </button>
              <ul class="dropdown-menu animated slideInUp">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-success-subtle text-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-clipboard fs-4" />
              </button>
              <ul class="dropdown-menu animated bounce">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-bell fs-4" />
              </button>
              <ul class="dropdown-menu animated rubberBand">
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">Direction of the Dropdown</h4>
          <p class="mb-3 card-subtitle">Trigger dropdown menus above elements by adding
            <mark> <code>.dropup</code>
            </mark>to the parent element.</p>
          <div class="row">
            <div class="col-md-4">
              <h5 class="card-title">Dropdown Right Side</h5>
              <div class="btn-group dropright mb-6 me-6">
                <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropright</button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                  <div class="dropdown-divider">
                  </div>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
              </div>
              <div class="btn-group dropright mb-6 me-6">
                <button type="button" class="btn bg-secondary-subtle text-secondary">Split dropright</button>
                <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropright</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                  <div class="dropdown-divider">
                  </div>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-3 mt-md-0">
              <h5 class="card-title">Dropdown Up Side</h5>
              <div class="btn-group dropup mb-6 me-6">
                <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup</button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                  <div class="dropdown-divider">
                  </div>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
              </div>
              <div class="btn-group dropup mb-6 me-6">
                <button type="button" class="btn bg-secondary-subtle text-secondary">Split dropup</button>
                <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                  <div class="dropdown-divider">
                  </div>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-3 mt-md-0">
              <h5 class="card-title">Dropdown Left Side</h5>
              <div class="btn-group dropleft mb-6 me-6">
                <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropleft</button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0)">Action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                  <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                  <div class="dropdown-divider">
                  </div>
                  <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
              </div>
              <div class="btn-group mb-6 me-6">
                <div class="btn-group dropleft" role="group">
                  <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropleft</span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0)">Action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                    <div class="dropdown-divider">
                    </div>
                    <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                  </div>
                </div>
                <button type="button" class="btn bg-secondary-subtle text-secondary">Split dropleft</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">Menu Alignment</h4>
          <p class="mb-3 card-subtitle">Add
            <mark> <code>.dropdown-menu-end</code>
            </mark>to a
            <mark> <code>.dropdown-menu</code>
            </mark>to right align the dropdown menu.</p>
          <div class="d-flex flex-wrap gap-6">
            <div class="btn-group">
              <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Right-aligned menu</button>
              <div class="dropdown-menu dropdown-menu-end">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
            <div class="btn-group">
              <button type="button" class="me-0 btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Left-aligned menu</button>
              <div class="dropdown-menu dropdown-menu-start">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body table-responsive">
          <h4 class="card-title mb-4">Responsive Alignment</h4>
          <div class="btn-group">
            <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">Left-aligned but right aligned when large screen</button>
            <div class="dropdown-menu dropdown-menu-lg-end">
              <button class="dropdown-item" type="button">Action</button>
              <button class="dropdown-item" type="button">Another action</button>
              <button class="dropdown-item" type="button">Something else here</button>
            </div>
          </div>
          <div class="btn-group mt-6">
            <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">Right-aligned but left aligned when large screen</button>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
              <button class="dropdown-item" type="button">Action</button>
              <button class="dropdown-item" type="button">Another action</button>
              <button class="dropdown-item" type="button">Something else here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-body button-group">
          <h4 class="card-title mb-4">Different Menu Content</h4>
          <div class="btn-group">
            <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drodown with Header</button>
            <div class="dropdown-menu">
              <h6 class="dropdown-header">Dropdown header</h6>
              <a class="dropdown-item" href="javascript:void(0)">Action</a>
              <a class="dropdown-item" href="javascript:void(0)">Another action</a>
            </div>
          </div>
          <div class="btn-group">
            <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown with Divider</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="javascript:void(0)">Action</a>
              <a class="dropdown-item" href="javascript:void(0)">Another action</a>
              <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
              <div class="dropdown-divider">
              </div>
              <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
            </div>
          </div>
          <div class="btn-group">
            <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown with Text</button>
            <div class="dropdown-menu p-4 text-muted" style={{"max-width": "400px"}}>
              <p>Some example text that's free-flowing within the dropdown menu.</p>
              <p class="mb-0">And this is more example text.</p>
            </div>
          </div>
          <div class="btn-group">
            <button type="button" class="btn bg-primary-subtle text-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown with Form</button>
            <div class="dropdown-menu">
              <form class="px-4 py-3">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                    <label class="form-check-label" for="dropdownCheck">Remember me</label>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
              </form>
              <div class="dropdown-divider">
              </div>
              <a class="dropdown-item" href="javascript:void(0)">New around here? Sign up</a>
              <a class="dropdown-item" href="javascript:void(0)">Forgot password?</a>
            </div>
          </div>
          <h4 class="card-title mt-4">Dropdown Options</h4>
          <div class="d-flex">
            <div class="dropdown me-1">
              <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">Offset</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
              </div>
            </div>
            <div class="btn-group">
              <button type="button" class="btn bg-secondary-subtle text-secondary me-0">Reference</button>
              <button type="button" class="btn bg-secondary-subtle text-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                <div class="dropdown-divider">
                </div>
                <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
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
  