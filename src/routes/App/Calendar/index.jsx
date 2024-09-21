export default function Calendar() {
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
                  <li class="breadcrumb-item" aria-current="page">Calendar</li>
                </ol>
              </nav>
              <h2 class="mb-0 fw-bolder fs-8">Calendar</h2>
            </div>
            <div class="col-lg-4 col-md-6 d-none d-md-flex align-items-center justify-content-end">
              <select class="form-select w-auto bg-primary-subtle border-0" aria-label="Default select example">
                <option selected>Today 23 March</option>
                <option value="1">Today 23 March</option>
                <option value="2">Today 24 March</option>
                <option value="3">Today 25 March</option>
              </select>
              <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2">
                <i class="ti ti-plus me-1" />
                Add New
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body calender-sidebar app-calendar">
            <div id="calendar" />
          </div>
        </div>
        {/* BEGIN MODAL */}
        <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="eventModalLabel">
                  Add / Edit Event
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div>
                      <label class="form-label">Event Title</label>
                      <input id="event-title" type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12 mt-6">
                    <div>
                      <label class="form-label">Event Color</label>
                    </div>
                    <div class="d-flex">
                      <div class="n-chk">
                        <div class="form-check form-check-primary form-check-inline">
                          <input class="form-check-input" type="radio" name="event-level" value="Danger" id="modalDanger" />
                          <label class="form-check-label" for="modalDanger">Danger</label>
                        </div>
                      </div>
                      <div class="n-chk">
                        <div class="form-check form-check-warning form-check-inline">
                          <input class="form-check-input" type="radio" name="event-level" value="Success" id="modalSuccess" />
                          <label class="form-check-label" for="modalSuccess">Success</label>
                        </div>
                      </div>
                      <div class="n-chk">
                        <div class="form-check form-check-success form-check-inline">
                          <input class="form-check-input" type="radio" name="event-level" value="Primary" id="modalPrimary" />
                          <label class="form-check-label" for="modalPrimary">Primary</label>
                        </div>
                      </div>
                      <div class="n-chk">
                        <div class="form-check form-check-danger form-check-inline">
                          <input class="form-check-input" type="radio" name="event-level" value="Warning" id="modalWarning" />
                          <label class="form-check-label" for="modalWarning">Warning</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 mt-6">
                    <div>
                      <label class="form-label">Enter Start Date</label>
                      <input id="event-start-date" type="date" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12 mt-6">
                    <div>
                      <label class="form-label">Enter End Date</label>
                      <input id="event-end-date" type="date" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn bg-danger-subtle text-danger" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-success btn-update-event" data-fc-event-public-id>
                  Update changes
                </button>
                <button type="button" class="btn btn-primary btn-add-event">
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END MODAL */}
      </div>
    </>
  );
}
