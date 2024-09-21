export default function ECommerce() {
  return (
    <>
      <div class="container-fluid mw-100">
        <div class="page-titles mb-5">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12 align-self-center">
              <h4 class="text-muted mb-0 fw-normal fs-5">
                Welcome Johnathan
              </h4>
              <h2 class="mb-0 fw-bolderer fs-8">eCommerce Dashboard</h2>
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
        {/* row */}
        <div class="row">
          <div class="col-lg-4">
            <div class="card welcome-card2 overflow-hidden bg-primary-subtle border-0">
              <div class="card-body">
                <div class="d-flex align-items-start position-relative">
                  <div>
                    <h4 class="fw-bolder fs-5">Earnings</h4>
                    <h2 class="text-primary fs-7">$63,438.78</h2>
                  </div>
                  <div class="ms-auto">
                    <span class="btn round-48 fs-7 rounded-circle btn-primary d-flex align-items-center justify-content-center">
                      <i class="ti ti-currency-dollar" />
                    </span>
                  </div>
                </div>
                <a href="javascript:void(0)" class="btn btn-primary position-relative mt-2">Download</a>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card-group">
              <div class="card">
                <div class="card-body">
                  <span class="btn round-50 fs-6 text-info rounded-circle bg-info-subtle d-flex align-items-center justify-content-center">
                    <i class="ti ti-users" />
                  </span>
                  <h3 class="mt-3 pt-1 mb-0 fs-6">
                    39,354
                    <span class="fs-2 ms-1 text-danger fw-medium">-9%</span>
                  </h3>
                  <h6 class="text-muted mb-0 fw-normal">Customers</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <span class="btn round-50 fs-6 text-warning rounded-circle bg-warning-subtle d-flex align-items-center justify-content-center">
                    <i class="ti ti-package" />
                  </span>
                  <h3 class="mt-3 pt-1 mb-0 fs-6">
                    4396
                    <span class="fs-2 ms-1 text-success fw-medium">+23%</span>
                  </h3>
                  <h6 class="text-muted mb-0 fw-normal">Products</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <span class="btn round-50 fs-6 text-danger rounded-circle bg-danger-subtle d-flex align-items-center justify-content-center">
                    <i class="ti ti-chart-bar" />
                  </span>
                  <h3 class="mt-3 pt-1 mb-0 fs-6 d-flex align-items-center">
                    423,39
                    <span class="fs-2 ms-1 text-success fw-medium">+38%</span>
                  </h3>
                  <h6 class="text-muted mb-0 fw-normal">Sales</h6>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <span class="btn round-50 fs-6 text-success rounded-circle bg-success-subtle d-flex align-items-center justify-content-center">
                    <i class="ti ti-refresh" />
                  </span>
                  <h3 class="mt-3 pt-1 mb-0 fs-6">
                    835
                    <span class="fs-2 ms-1 text-danger fw-medium">-12%</span>
                  </h3>
                  <h6 class="text-muted mb-0 fw-normal">Refunds</h6>
                </div>
              </div>
            </div>
          </div>
          {/* column */}
          <div class="col-lg-8">
            <div class="card w-100">
              <div class="card-body">
                <div class="d-md-flex align-items-center">
                  <div>
                    <h4 class="card-title">Products Performance</h4>
                    <p class="card-subtitle">Latest new products</p>
                  </div>
                  <div class="ms-auto">
                    <ul class="list-style-none">
                      <li class="list-inline-item">
                        <span class="round-8 text-bg-primary rounded-circle me-1 d-inline-block" />
                        Expence
                      </li>
                      <li class="list-inline-item">
                        <span class="round-8 text-bg-secondary rounded-circle me-1 d-inline-block" />
                        Budget
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-5 border-end">
                    <div class="pe-4">
                      <h3 class="fs-8 d-flex align-items-center mb-0">
                        $93,438.78
                        <span class="btn btn-circle btn-sm btn-success fs-1 ms-2 d-flex align-items-center justify-content-center">23%</span>
                      </h3>
                      <h6 class="fw-normal text-muted mb-0">Budget</h6>
                      <h3 class="fs-8 d-flex align-items-center mb-0 mt-4">
                        $32,839.00
                      </h3>
                      <h6 class="fw-normal text-muted mb-0">Expence</h6>
                      <div class="mt-3 mb-4">
                        <div id="budget-expence-side-chart" style={{ "min-height": "30px" }}><div id="apexcharts8lc8r5l9" class="apexcharts-canvas apexcharts8lc8r5l9 apexcharts-theme-light" style={{ "width": "480px", "height": "30px" }}><svg id="SvgjsSvg2427" width="480" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ "background": "transparent" }}><foreignObject x="0" y="0" width="480" height="30"><div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml" style={{ "max-height": "15px" }} /></foreignObject><rect id="SvgjsRect2431" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" /><g id="SvgjsG2461" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)" /><g id="SvgjsG2429" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2428"><clipPath id="gridRectMask8lc8r5l9"><rect id="SvgjsRect2433" width="486" height="32" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath><clipPath id="forecastMask8lc8r5l9" /><clipPath id="nonForecastMask8lc8r5l9" /><clipPath id="gridRectMarkerMask8lc8r5l9"><rect id="SvgjsRect2434" width="484" height="34" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath></defs><line id="SvgjsLine2432" x1="0" y1="0" x2="0" y2="30" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="30" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1" /><g id="SvgjsG2440" class="apexcharts-grid"><g id="SvgjsG2441" class="apexcharts-gridlines-horizontal" style={{ "display": "none" }}><line id="SvgjsLine2444" x1="0" y1="0" x2="480" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2445" x1="0" y1="6" x2="480" y2="6" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2446" x1="0" y1="12" x2="480" y2="12" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2447" x1="0" y1="18" x2="480" y2="18" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2448" x1="0" y1="24" x2="480" y2="24" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2449" x1="0" y1="30" x2="480" y2="30" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /></g><g id="SvgjsG2442" class="apexcharts-gridlines-vertical" style={{ "display": "none" }} /><line id="SvgjsLine2451" x1="0" y1="30" x2="480" y2="30" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" /><line id="SvgjsLine2450" x1="0" y1="1" x2="0" y2="30" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" /></g><g id="SvgjsG2443" class="apexcharts-grid-borders" style={{ "display": "none" }} /><g id="SvgjsG2435" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2436" class="apexcharts-series" seriesname="ProductsxPerformance" data:longestseries="true" rel="1" data:realindex="0"><path id="SvgjsPath2439" d="M 0 21.75C19.523355576739753, 18.699475691134413, 80.00976324139614, 2.3751525506468147, 120, 3S200.00976324139614, 24.875152550646813, 240, 25.5S320.0390243902439, 7.998780487804878, 360, 6.75S460.17424975798644, 16.14133591481123, 480, 18" fill="none" fill-opacity="1" stroke="var(--bs-primary)" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMask8lc8r5l9)" pathto="M 0 21.75C19.523355576739753, 18.699475691134413, 80.00976324139614, 2.3751525506468147, 120, 3S200.00976324139614, 24.875152550646813, 240, 25.5S320.0390243902439, 7.998780487804878, 360, 6.75S460.17424975798644, 16.14133591481123, 480, 18" pathfrom="M -1 48 L -1 48 L 120 48 L 240 48 L 360 48 L 480 48" fill-rule="evenodd" /><g id="SvgjsG2437" class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" data:realindex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle2465" r="0" cx="0" cy="0" class="apexcharts-marker wic5inzjd no-pointer-events" stroke="#ffffff" fill="var(--bs-primary)" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0" /></g></g></g><g id="SvgjsG2438" class="apexcharts-datalabels" data:realindex="0" /></g><line id="SvgjsLine2452" x1="0" y1="0" x2="480" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs" /><line id="SvgjsLine2453" x1="0" y1="0" x2="480" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG2454" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2455" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)" /></g><g id="SvgjsG2462" class="apexcharts-yaxis-annotations" /><g id="SvgjsG2463" class="apexcharts-xaxis-annotations" /><g id="SvgjsG2464" class="apexcharts-point-annotations" /></g></svg><div class="apexcharts-tooltip apexcharts-theme-dark"><div class="apexcharts-tooltip-title" style={{ "font-family": "inherit", "font-size": "12px" }} /><div class="apexcharts-tooltip-series-group" style={{ "order": 1 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-primary)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark"><div class="apexcharts-yaxistooltip-text" /></div></div></div>
                      </div>
                      <a href="javascript:void(0)" class="btn btn-info">Download Report</a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div id="product-performance" class="ps-3" style={{ "min-height": "280px" }}><div id="apexchartsgn9g8ep2" class="apexcharts-canvas apexchartsgn9g8ep2 apexcharts-theme-light" style={{ "width": "489px", "height": "265px" }}><svg id="SvgjsSvg2466" width="489" height="265" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ "background": "transparent" }}><foreignObject x="0" y="0" width="489" height="265"><div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml" style={{ "max-height": "132.5px" }} /></foreignObject><g id="SvgjsG2548" class="apexcharts-yaxis" rel="0" transform="translate(19.200973510742188, 0)"><g id="SvgjsG2549" class="apexcharts-yaxis-texts-g"><text id="SvgjsText2551" font-family="inherit" x="20" y="31.3" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-yaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2552">400</tspan><title>400</title></text><text id="SvgjsText2554" font-family="inherit" x="20" y="96.00399999999999" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-yaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2555">300</tspan><title>300</title></text><text id="SvgjsText2557" font-family="inherit" x="20" y="160.708" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-yaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2558">200</tspan><title>200</title></text><text id="SvgjsText2560" font-family="inherit" x="20" y="225.41199999999998" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-yaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2561">100</tspan><title>100</title></text></g></g><g id="SvgjsG2468" class="apexcharts-inner apexcharts-graphical" transform="translate(49.20097351074219, 30)"><defs id="SvgjsDefs2467"><linearGradient id="SvgjsLinearGradient2471" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2472" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0" /><stop id="SvgjsStop2473" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1" /><stop id="SvgjsStop2474" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1" /></linearGradient><clipPath id="gridRectMaskgn9g8ep2"><rect id="SvgjsRect2476" width="433.7990264892578" height="194.112" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath><clipPath id="forecastMaskgn9g8ep2" /><clipPath id="nonForecastMaskgn9g8ep2" /><clipPath id="gridRectMarkerMaskgn9g8ep2"><rect id="SvgjsRect2477" width="433.7990264892578" height="198.112" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath></defs><rect id="SvgjsRect2475" width="18.41995827811105" height="194.112" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient2471)" class="apexcharts-xcrosshairs" y2="194.112" filter="none" fill-opacity="0.9" /><g id="SvgjsG2513" class="apexcharts-grid"><g id="SvgjsG2514" class="apexcharts-gridlines-horizontal" style={{ "display": "none" }}><line id="SvgjsLine2517" x1="0" y1="0" x2="429.7990264892578" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2518" x1="0" y1="64.704" x2="429.7990264892578" y2="64.704" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2519" x1="0" y1="129.408" x2="429.7990264892578" y2="129.408" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2520" x1="0" y1="194.11199999999997" x2="429.7990264892578" y2="194.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /></g><g id="SvgjsG2515" class="apexcharts-gridlines-vertical" style={{ "display": "none" }} /><line id="SvgjsLine2522" x1="0" y1="194.112" x2="429.7990264892578" y2="194.112" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" /><line id="SvgjsLine2521" x1="0" y1="1" x2="0" y2="194.112" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" /></g><g id="SvgjsG2516" class="apexcharts-grid-borders" style={{ "display": "none" }} /><g id="SvgjsG2478" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG2479" class="apexcharts-series" seriesname="Expence" rel="1" data:realindex="0"><path id="SvgjsPath2483" d="M 21.489951324462893 258.81699999999995 L 21.489951324462893 64.70499999999998 L 39.90990960257395 64.70499999999998 L 39.90990960257395 258.81699999999995 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 21.489951324462893 258.81699999999995 L 21.489951324462893 64.70499999999998 L 39.90990960257395 64.70499999999998 L 39.90990960257395 258.81699999999995 z" pathfrom="M 21.489951324462893 258.81699999999995 L 21.489951324462893 258.81699999999995 L 39.90990960257395 258.81699999999995 L 39.90990960257395 258.81699999999995 L 39.90990960257395 258.81699999999995 L 39.90990960257395 258.81699999999995 L 39.90990960257395 258.81699999999995 L 21.489951324462893 258.81699999999995 z" cy="64.70399999999998" cx="82.88981225149973" j="0" val="300" barheight="194.112" barwidth="18.41995827811105" /><path id="SvgjsPath2485" d="M 82.88981225149973 258.81699999999995 L 82.88981225149973 64.70499999999998 L 101.30977052961079 64.70499999999998 L 101.30977052961079 258.81699999999995 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 82.88981225149973 258.81699999999995 L 82.88981225149973 64.70499999999998 L 101.30977052961079 64.70499999999998 L 101.30977052961079 258.81699999999995 z" pathfrom="M 82.88981225149973 258.81699999999995 L 82.88981225149973 258.81699999999995 L 101.30977052961079 258.81699999999995 L 101.30977052961079 258.81699999999995 L 101.30977052961079 258.81699999999995 L 101.30977052961079 258.81699999999995 L 101.30977052961079 258.81699999999995 L 82.88981225149973 258.81699999999995 z" cy="64.70399999999998" cx="144.28967317853656" j="1" val="300" barheight="194.112" barwidth="18.41995827811105" /><path id="SvgjsPath2487" d="M 144.28967317853656 258.81699999999995 L 144.28967317853656 142.3498 L 162.7096314566476 142.3498 L 162.7096314566476 258.81699999999995 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 144.28967317853656 258.81699999999995 L 144.28967317853656 142.3498 L 162.7096314566476 142.3498 L 162.7096314566476 258.81699999999995 z" pathfrom="M 144.28967317853656 258.81699999999995 L 144.28967317853656 258.81699999999995 L 162.7096314566476 258.81699999999995 L 162.7096314566476 258.81699999999995 L 162.7096314566476 258.81699999999995 L 162.7096314566476 258.81699999999995 L 162.7096314566476 258.81699999999995 L 144.28967317853656 258.81699999999995 z" cy="142.34879999999998" cx="205.6895341055734" j="2" val="180" barheight="116.46719999999999" barwidth="18.41995827811105" /><path id="SvgjsPath2489" d="M 205.6895341055734 258.81699999999995 L 205.6895341055734 51.76419999999998 L 224.10949238368443 51.76419999999998 L 224.10949238368443 258.81699999999995 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 205.6895341055734 258.81699999999995 L 205.6895341055734 51.76419999999998 L 224.10949238368443 51.76419999999998 L 224.10949238368443 258.81699999999995 z" pathfrom="M 205.6895341055734 258.81699999999995 L 205.6895341055734 258.81699999999995 L 224.10949238368443 258.81699999999995 L 224.10949238368443 258.81699999999995 L 224.10949238368443 258.81699999999995 L 224.10949238368443 258.81699999999995 L 224.10949238368443 258.81699999999995 L 205.6895341055734 258.81699999999995 z" cy="51.76319999999998" cx="267.08939503261024" j="3" val="320" barheight="207.0528" barwidth="18.41995827811105" /><path id="SvgjsPath2491" d="M 267.08939503261024 258.81699999999995 L 267.08939503261024 97.05699999999999 L 285.5093533107213 97.05699999999999 L 285.5093533107213 258.81699999999995 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 267.08939503261024 258.81699999999995 L 267.08939503261024 97.05699999999999 L 285.5093533107213 97.05699999999999 L 285.5093533107213 258.81699999999995 z" pathfrom="M 267.08939503261024 258.81699999999995 L 267.08939503261024 258.81699999999995 L 285.5093533107213 258.81699999999995 L 285.5093533107213 258.81699999999995 L 285.5093533107213 258.81699999999995 L 285.5093533107213 258.81699999999995 L 285.5093533107213 258.81699999999995 L 267.08939503261024 258.81699999999995 z" cy="97.05599999999998" cx="328.4892559596471" j="4" val="250" barheight="161.76" barwidth="18.41995827811105" /><path id="SvgjsPath2493" d="M 328.4892559596471 258.81699999999995 L 328.4892559596471 64.70499999999998 L 346.90921423775814 64.70499999999998 L 346.90921423775814 258.81699999999995 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 328.4892559596471 258.81699999999995 L 328.4892559596471 64.70499999999998 L 346.90921423775814 64.70499999999998 L 346.90921423775814 258.81699999999995 z" pathfrom="M 328.4892559596471 258.81699999999995 L 328.4892559596471 258.81699999999995 L 346.90921423775814 258.81699999999995 L 346.90921423775814 258.81699999999995 L 346.90921423775814 258.81699999999995 L 346.90921423775814 258.81699999999995 L 346.90921423775814 258.81699999999995 L 328.4892559596471 258.81699999999995 z" cy="64.70399999999998" cx="389.88911688668395" j="5" val="300" barheight="194.112" barwidth="18.41995827811105" /><path id="SvgjsPath2495" d="M 389.88911688668395 258.81699999999995 L 389.88911688668395 64.70499999999998 L 408.309075164795 64.70499999999998 L 408.309075164795 258.81699999999995 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 389.88911688668395 258.81699999999995 L 389.88911688668395 64.70499999999998 L 408.309075164795 64.70499999999998 L 408.309075164795 258.81699999999995 z" pathfrom="M 389.88911688668395 258.81699999999995 L 389.88911688668395 258.81699999999995 L 408.309075164795 258.81699999999995 L 408.309075164795 258.81699999999995 L 408.309075164795 258.81699999999995 L 408.309075164795 258.81699999999995 L 408.309075164795 258.81699999999995 L 389.88911688668395 258.81699999999995 z" cy="64.70399999999998" cx="451.2889778137208" j="6" val="300" barheight="194.112" barwidth="18.41995827811105" /><g id="SvgjsG2481" class="apexcharts-bar-goals-markers"><g id="SvgjsG2482" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2484" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2486" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2488" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2490" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2492" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2494" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /></g></g><g id="SvgjsG2496" class="apexcharts-series" seriesname="Budget" rel="2" data:realindex="1"><path id="SvgjsPath2500" d="M 21.489951324462893 64.70599999999999 L 21.489951324462893 32.88359999999999 C 21.489951324462893 29.383599999999987 24.989951324462893 25.88359999999999 28.489951324462893 25.88359999999999 L 32.90990960257395 25.88359999999999 C 36.40990960257395 25.88359999999999 39.90990960257395 29.383599999999987 39.90990960257395 32.88359999999999 L 39.90990960257395 64.70599999999999 z " fill="var(--bs-secondary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 21.489951324462893 64.70599999999999 L 21.489951324462893 32.88359999999999 C 21.489951324462893 29.383599999999987 24.989951324462893 25.88359999999999 28.489951324462893 25.88359999999999 L 32.90990960257395 25.88359999999999 C 36.40990960257395 25.88359999999999 39.90990960257395 29.383599999999987 39.90990960257395 32.88359999999999 L 39.90990960257395 64.70599999999999 z " pathfrom="M 21.489951324462893 64.70599999999999 L 21.489951324462893 64.70599999999999 L 39.90990960257395 64.70599999999999 L 39.90990960257395 64.70599999999999 L 39.90990960257395 64.70599999999999 L 39.90990960257395 64.70599999999999 L 39.90990960257395 64.70599999999999 L 21.489951324462893 64.70599999999999 z" cy="25.88259999999999" cx="82.88981225149973" j="0" val="60" barheight="38.822399999999995" barwidth="18.41995827811105" /><path id="SvgjsPath2502" d="M 82.88981225149973 64.70599999999999 L 82.88981225149973 13.47239999999999 C 82.88981225149973 9.97239999999999 86.38981225149973 6.472399999999989 89.88981225149973 6.472399999999989 L 94.30977052961079 6.472399999999989 C 97.80977052961079 6.472399999999989 101.30977052961079 9.97239999999999 101.30977052961079 13.47239999999999 L 101.30977052961079 64.70599999999999 z " fill="var(--bs-secondary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 82.88981225149973 64.70599999999999 L 82.88981225149973 13.47239999999999 C 82.88981225149973 9.97239999999999 86.38981225149973 6.472399999999989 89.88981225149973 6.472399999999989 L 94.30977052961079 6.472399999999989 C 97.80977052961079 6.472399999999989 101.30977052961079 9.97239999999999 101.30977052961079 13.47239999999999 L 101.30977052961079 64.70599999999999 z " pathfrom="M 82.88981225149973 64.70599999999999 L 82.88981225149973 64.70599999999999 L 101.30977052961079 64.70599999999999 L 101.30977052961079 64.70599999999999 L 101.30977052961079 64.70599999999999 L 101.30977052961079 64.70599999999999 L 101.30977052961079 64.70599999999999 L 82.88981225149973 64.70599999999999 z" cy="6.4713999999999885" cx="144.28967317853656" j="1" val="90" barheight="58.233599999999996" barwidth="18.41995827811105" /><path id="SvgjsPath2504" d="M 144.28967317853656 142.3508 L 144.28967317853656 97.5876 C 144.28967317853656 94.0876 147.78967317853656 90.5876 151.28967317853656 90.5876 L 155.7096314566476 90.5876 C 159.2096314566476 90.5876 162.7096314566476 94.0876 162.7096314566476 97.5876 L 162.7096314566476 142.3508 z " fill="var(--bs-secondary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 144.28967317853656 142.3508 L 144.28967317853656 97.5876 C 144.28967317853656 94.0876 147.78967317853656 90.5876 151.28967317853656 90.5876 L 155.7096314566476 90.5876 C 159.2096314566476 90.5876 162.7096314566476 94.0876 162.7096314566476 97.5876 L 162.7096314566476 142.3508 z " pathfrom="M 144.28967317853656 142.3508 L 144.28967317853656 142.3508 L 162.7096314566476 142.3508 L 162.7096314566476 142.3508 L 162.7096314566476 142.3508 L 162.7096314566476 142.3508 L 162.7096314566476 142.3508 L 144.28967317853656 142.3508 z" cy="90.58659999999999" cx="205.6895341055734" j="2" val="80" barheight="51.7632" barwidth="18.41995827811105" /><path id="SvgjsPath2506" d="M 205.6895341055734 51.76519999999998 L 205.6895341055734 19.942799999999984 C 205.6895341055734 16.442799999999984 209.1895341055734 12.942799999999986 212.6895341055734 12.942799999999986 L 217.10949238368443 12.942799999999986 C 220.60949238368443 12.942799999999986 224.10949238368443 16.442799999999984 224.10949238368443 19.942799999999984 L 224.10949238368443 51.76519999999998 z " fill="var(--bs-secondary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 205.6895341055734 51.76519999999998 L 205.6895341055734 19.942799999999984 C 205.6895341055734 16.442799999999984 209.1895341055734 12.942799999999986 212.6895341055734 12.942799999999986 L 217.10949238368443 12.942799999999986 C 220.60949238368443 12.942799999999986 224.10949238368443 16.442799999999984 224.10949238368443 19.942799999999984 L 224.10949238368443 51.76519999999998 z " pathfrom="M 205.6895341055734 51.76519999999998 L 205.6895341055734 51.76519999999998 L 224.10949238368443 51.76519999999998 L 224.10949238368443 51.76519999999998 L 224.10949238368443 51.76519999999998 L 224.10949238368443 51.76519999999998 L 224.10949238368443 51.76519999999998 L 205.6895341055734 51.76519999999998 z" cy="12.941799999999986" cx="267.08939503261024" j="3" val="60" barheight="38.822399999999995" barwidth="18.41995827811105" /><path id="SvgjsPath2508" d="M 267.08939503261024 97.05799999999999 L 267.08939503261024 58.765199999999986 C 267.08939503261024 55.265199999999986 270.58939503261024 51.765199999999986 274.08939503261024 51.765199999999986 L 278.5093533107213 51.765199999999986 C 282.0093533107213 51.765199999999986 285.5093533107213 55.265199999999986 285.5093533107213 58.765199999999986 L 285.5093533107213 97.05799999999999 z " fill="var(--bs-secondary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 267.08939503261024 97.05799999999999 L 267.08939503261024 58.765199999999986 C 267.08939503261024 55.265199999999986 270.58939503261024 51.765199999999986 274.08939503261024 51.765199999999986 L 278.5093533107213 51.765199999999986 C 282.0093533107213 51.765199999999986 285.5093533107213 55.265199999999986 285.5093533107213 58.765199999999986 L 285.5093533107213 97.05799999999999 z " pathfrom="M 267.08939503261024 97.05799999999999 L 267.08939503261024 97.05799999999999 L 285.5093533107213 97.05799999999999 L 285.5093533107213 97.05799999999999 L 285.5093533107213 97.05799999999999 L 285.5093533107213 97.05799999999999 L 285.5093533107213 97.05799999999999 L 267.08939503261024 97.05799999999999 z" cy="51.76419999999999" cx="328.4892559596471" j="4" val="70" barheight="45.2928" barwidth="18.41995827811105" /><path id="SvgjsPath2510" d="M 328.4892559596471 64.70599999999999 L 328.4892559596471 7.001999999999991 C 328.4892559596471 3.501999999999991 331.9892559596471 0.001999999999990564 335.4892559596471 0.001999999999990564 L 339.90921423775814 0.001999999999990564 C 343.40921423775814 0.001999999999990564 346.90921423775814 3.5019999999999905 346.90921423775814 7.001999999999991 L 346.90921423775814 64.70599999999999 z " fill="var(--bs-secondary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 328.4892559596471 64.70599999999999 L 328.4892559596471 7.001999999999991 C 328.4892559596471 3.501999999999991 331.9892559596471 0.001999999999990564 335.4892559596471 0.001999999999990564 L 339.90921423775814 0.001999999999990564 C 343.40921423775814 0.001999999999990564 346.90921423775814 3.5019999999999905 346.90921423775814 7.001999999999991 L 346.90921423775814 64.70599999999999 z " pathfrom="M 328.4892559596471 64.70599999999999 L 328.4892559596471 64.70599999999999 L 346.90921423775814 64.70599999999999 L 346.90921423775814 64.70599999999999 L 346.90921423775814 64.70599999999999 L 346.90921423775814 64.70599999999999 L 346.90921423775814 64.70599999999999 L 328.4892559596471 64.70599999999999 z" cy="0.000999999999990564" cx="389.88911688668395" j="5" val="100" barheight="64.704" barwidth="18.41995827811105" /><path id="SvgjsPath2512" d="M 389.88911688668395 64.70599999999999 L 389.88911688668395 19.942799999999984 C 389.88911688668395 16.442799999999984 393.38911688668395 12.942799999999986 396.88911688668395 12.942799999999986 L 401.309075164795 12.942799999999986 C 404.809075164795 12.942799999999986 408.309075164795 16.442799999999984 408.309075164795 19.942799999999984 L 408.309075164795 64.70599999999999 z " fill="var(--bs-secondary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskgn9g8ep2)" pathto="M 389.88911688668395 64.70599999999999 L 389.88911688668395 19.942799999999984 C 389.88911688668395 16.442799999999984 393.38911688668395 12.942799999999986 396.88911688668395 12.942799999999986 L 401.309075164795 12.942799999999986 C 404.809075164795 12.942799999999986 408.309075164795 16.442799999999984 408.309075164795 19.942799999999984 L 408.309075164795 64.70599999999999 z " pathfrom="M 389.88911688668395 64.70599999999999 L 389.88911688668395 64.70599999999999 L 408.309075164795 64.70599999999999 L 408.309075164795 64.70599999999999 L 408.309075164795 64.70599999999999 L 408.309075164795 64.70599999999999 L 408.309075164795 64.70599999999999 L 389.88911688668395 64.70599999999999 z" cy="12.941799999999986" cx="451.2889778137208" j="6" val="80" barheight="51.7632" barwidth="18.41995827811105" /><g id="SvgjsG2498" class="apexcharts-bar-goals-markers"><g id="SvgjsG2499" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2501" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2503" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2505" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2507" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2509" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /><g id="SvgjsG2511" classname="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskgn9g8ep2)" /></g></g><g id="SvgjsG2480" class="apexcharts-datalabels" data:realindex="0" /><g id="SvgjsG2497" class="apexcharts-datalabels" data:realindex="1" /></g><line id="SvgjsLine2523" x1="0" y1="0" x2="429.7990264892578" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs" /><line id="SvgjsLine2524" x1="0" y1="0" x2="429.7990264892578" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG2525" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2526" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText2528" font-family="inherit" x="30.699930463518417" y="223.112" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-xaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2529">Jan</tspan><title>Jan</title></text><text id="SvgjsText2531" font-family="inherit" x="92.09979139055525" y="223.112" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-xaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2532">Feb</tspan><title>Feb</title></text><text id="SvgjsText2534" font-family="inherit" x="153.49965231759208" y="223.112" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-xaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2535">Mar</tspan><title>Mar</title></text><text id="SvgjsText2537" font-family="inherit" x="214.8995132446289" y="223.112" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-xaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2538">Apr</tspan><title>Apr</title></text><text id="SvgjsText2540" font-family="inherit" x="276.29937417166576" y="223.112" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-xaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2541">May</tspan><title>May</title></text><text id="SvgjsText2543" font-family="inherit" x="337.6992350987026" y="223.112" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-xaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2544">Jun</tspan><title>Jun</title></text><text id="SvgjsText2546" font-family="inherit" x="399.09909602573947" y="223.112" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#adb0bb" class="apexcharts-text apexcharts-xaxis-label " style={{ "font-family": "inherit" }}><tspan id="SvgjsTspan2547">July</tspan><title>July</title></text></g></g><g id="SvgjsG2562" class="apexcharts-yaxis-annotations" /><g id="SvgjsG2563" class="apexcharts-xaxis-annotations" /><g id="SvgjsG2564" class="apexcharts-point-annotations" /></g></svg><div class="apexcharts-tooltip apexcharts-theme-dark"><div class="apexcharts-tooltip-title" style={{ "font-family": "inherit", "font-size": "12px" }} /><div class="apexcharts-tooltip-series-group" style={{ "order": 1 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-primary)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div><div class="apexcharts-tooltip-series-group" style={{ "order": 2 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-secondary)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark"><div class="apexcharts-yaxistooltip-text" /></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* column */}
          <div class="col-lg-4">
            {/* earnings card */}
            <div class="card bg-primary">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <h4 class="card-title text-white">Earnings</h4>
                  <div class="ms-auto">
                    <span class="btn round-48 fs-7 rounded-circle btn-info d-flex align-items-center justify-content-center">
                      <i class="ti ti-currency-dollar" />
                    </span>
                  </div>
                </div>
                <div class="mt-3">
                  <h2 class="fs-8 text-white mb-0">$93,438.78</h2>
                  <span class="text-white text-opacity-50">Monthly revenue</span>
                </div>
              </div>
            </div>
            {/* yearly sales */}
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-6 col-xl-7">
                    <h3 class="fs-8 mb-0">43,246</h3>
                    <h6 class="text-muted fw-normal">Yearly sales</h6>
                    <div class="row mt-4 pt-2 gx-0">
                      <div class="col-6">
                        <span class="round-8 text-bg-info rounded-circle me-1 d-inline-block" />
                        2024
                      </div>
                      <div class="col-6">
                        <span class="round-8 text-bg-primary rounded-circle me-1 d-inline-block" />
                        2024
                      </div>
                      <div class="col-6 mt-2">
                        <span class="round-8 text-bg-warning rounded-circle me-1 d-inline-block" />
                        2019
                      </div>
                      <div class="col-6 mt-2">
                        <span class="round-8 text-bg-muted rounded-circle me-1 d-inline-block" />
                        2018
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-xl-5 d-flex align-items-center">
                    <div id="yearly-sales" style={{ "min-height": "123.7px" }}><div id="apexchartsqt3wx8vx" class="apexcharts-canvas apexchartsqt3wx8vx apexcharts-theme-light" style={{ "width": "241px", "height": "123.7px" }}><svg id="SvgjsSvg2565" width="241" height="123.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ "background": "transparent" }}><foreignObject x="0" y="0" width="241" height="123.7"><div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml" /></foreignObject><g id="SvgjsG2567" class="apexcharts-inner apexcharts-graphical" transform="translate(66, 0)"><defs id="SvgjsDefs2566"><clipPath id="gridRectMaskqt3wx8vx"><rect id="SvgjsRect2568" width="127" height="135" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath><clipPath id="forecastMaskqt3wx8vx" /><clipPath id="nonForecastMaskqt3wx8vx" /><clipPath id="gridRectMarkerMaskqt3wx8vx"><rect id="SvgjsRect2569" width="125" height="137" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath></defs><g id="SvgjsG2570" class="apexcharts-pie"><g id="SvgjsG2571" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle2572" r="34.46585365853659" cx="60.5" cy="60.5" fill="transparent" /><g id="SvgjsG2573" class="apexcharts-slices"><g id="SvgjsG2574" class="apexcharts-series apexcharts-pie-series" seriesname="2024" rel="1" data:realindex="0"><path id="SvgjsPath2575" d="M 60.5 7.475609756097555 A 53.024390243902445 53.024390243902445 0 0 1 113.52439024390245 60.5 L 94.96585365853659 60.5 A 34.46585365853659 34.46585365853659 0 0 0 60.5 26.034146341463412 L 60.5 7.475609756097555 z" fill="var(--bs-primary)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="90" data:startangle="0" data:strokewidth="2" data:value="25" data:pathorig="M 60.5 7.475609756097555 A 53.024390243902445 53.024390243902445 0 0 1 113.52439024390245 60.5 L 94.96585365853659 60.5 A 34.46585365853659 34.46585365853659 0 0 0 60.5 26.034146341463412 L 60.5 7.475609756097555 z" stroke="transparent" /></g><g id="SvgjsG2576" class="apexcharts-series apexcharts-pie-series" seriesname="2024" rel="2" data:realindex="1"><path id="SvgjsPath2577" d="M 113.52439024390245 60.5 A 53.024390243902445 53.024390243902445 0 0 1 60.5 113.52439024390245 L 60.5 94.96585365853659 A 34.46585365853659 34.46585365853659 0 0 0 94.96585365853659 60.5 L 113.52439024390245 60.5 z" fill="var(--bs-info)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="90" data:startangle="90" data:strokewidth="2" data:value="25" data:pathorig="M 113.52439024390245 60.5 A 53.024390243902445 53.024390243902445 0 0 1 60.5 113.52439024390245 L 60.5 94.96585365853659 A 34.46585365853659 34.46585365853659 0 0 0 94.96585365853659 60.5 L 113.52439024390245 60.5 z" stroke="transparent" /></g><g id="SvgjsG2578" class="apexcharts-series apexcharts-pie-series" seriesname="2019" rel="3" data:realindex="2"><path id="SvgjsPath2579" d="M 60.5 113.52439024390245 A 53.024390243902445 53.024390243902445 0 0 1 7.475609756097555 60.50000000000001 L 26.034146341463412 60.50000000000001 A 34.46585365853659 34.46585365853659 0 0 0 60.5 94.96585365853659 L 60.5 113.52439024390245 z" fill="var(--bs-warning)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="90" data:startangle="180" data:strokewidth="2" data:value="25" data:pathorig="M 60.5 113.52439024390245 A 53.024390243902445 53.024390243902445 0 0 1 7.475609756097555 60.50000000000001 L 26.034146341463412 60.50000000000001 A 34.46585365853659 34.46585365853659 0 0 0 60.5 94.96585365853659 L 60.5 113.52439024390245 z" stroke="transparent" /></g><g id="SvgjsG2580" class="apexcharts-series apexcharts-pie-series" seriesname="2018" rel="4" data:realindex="3"><path id="SvgjsPath2581" d="M 7.475609756097555 60.50000000000001 A 53.024390243902445 53.024390243902445 0 0 1 60.49074549811079 7.475610563705196 L 60.49398457377202 26.034146866408378 A 34.46585365853659 34.46585365853659 0 0 0 26.034146341463412 60.50000000000001 L 7.475609756097555 60.50000000000001 z" fill="var(--bs-primary-bg-subtle)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-3" index="0" j="3" data:angle="90" data:startangle="270" data:strokewidth="2" data:value="25" data:pathorig="M 7.475609756097555 60.50000000000001 A 53.024390243902445 53.024390243902445 0 0 1 60.49074549811079 7.475610563705196 L 60.49398457377202 26.034146866408378 A 34.46585365853659 34.46585365853659 0 0 0 26.034146341463412 60.50000000000001 L 7.475609756097555 60.50000000000001 z" stroke="transparent" /></g></g></g></g><line id="SvgjsLine2582" x1="0" y1="0" x2="121" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs" /><line id="SvgjsLine2583" x1="0" y1="0" x2="121" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden" /></g></svg><div class="apexcharts-tooltip apexcharts-theme-dark"><div class="apexcharts-tooltip-series-group" style={{ "order": 1 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-primary)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div><div class="apexcharts-tooltip-series-group" style={{ "order": 2 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-info)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div><div class="apexcharts-tooltip-series-group" style={{ "order": 3 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-warning)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div><div class="apexcharts-tooltip-series-group" style={{ "order": 4 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-primary-bg-subtle)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* column */}
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Recent Transactions</h4>
                <p class="card-subtitle">List of payments</p>
                <div class="d-flex align-items-center mt-4 mb-3 pb-1">
                  <a href="javascript:void(0)" class="btn fs-6 bg-info-subtle text-info round d-flex align-items-center justify-content-center">
                    <i class="ti ti-currency-dollar flex-shrink-0" />
                  </a>
                  <div class="ms-3 ps-1">
                    <h5 class="mb-1 fs-4">PayPal Transfer</h5>
                    <h6 class="text-muted fw-normal mb-0 fs-3">Money Added</h6>
                  </div>
                  <h6 class="ms-auto text-success">+$350</h6>
                </div>
                <div class="d-flex align-items-center my-3 py-1">
                  <a href="javascript:void(0)" class="btn fs-6 bg-success-subtle text-success round d-flex align-items-center justify-content-center">
                    <i class="ti ti-shield flex-shrink-0" />
                  </a>
                  <div class="ms-3 ps-1">
                    <h5 class="mb-1 fs-4">Wallet</h5>
                    <h6 class="text-muted fw-normal mb-0 fs-3">Bill payment</h6>
                  </div>
                  <h6 class="ms-auto text-danger">-$560</h6>
                </div>
                <div class="d-flex align-items-center my-3 py-1">
                  <a href="javascript:void(0)" class="btn fs-6 bg-danger-subtle text-danger round d-flex align-items-center justify-content-center">
                    <i class="ti ti-credit-card flex-shrink-0" />
                  </a>
                  <div class="ms-3 ps-1">
                    <h5 class="mb-1 fs-4">Credit Card</h5>
                    <h6 class="text-muted fw-normal mb-0 fs-3">
                      Money reversed
                    </h6>
                  </div>
                  <h6 class="ms-auto text-success">+$350</h6>
                </div>
                <div class="d-flex align-items-center my-3 py-1">
                  <a href="javascript:void(0)" class="btn fs-6 bg-warning-subtle text-warning round d-flex align-items-center justify-content-center">
                    <i class="ti ti-check flex-shrink-0" />
                  </a>
                  <div class="ms-3 ps-1">
                    <h5 class="mb-1 fs-4">Bank Transfer</h5>
                    <h6 class="text-muted fw-normal mb-0 fs-3">Money Added</h6>
                  </div>
                  <h6 class="ms-auto text-success">+$350</h6>
                </div>
                <div class="d-flex align-items-center my-3 pb-4 border-bottom">
                  <a href="javascript:void(0)" class="btn fs-6 bg-primary-subtle text-primary round d-flex align-items-center justify-content-center">
                    <i class="ti ti-refresh flex-shrink-0" />
                  </a>
                  <div class="ms-3 ps-1">
                    <h5 class="mb-1 fs-4">Refund</h5>
                    <h6 class="text-muted fw-normal mb-0 fs-3">Payment Sent</h6>
                  </div>
                  <h6 class="ms-auto text-danger">-$50</h6>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0)" class="btn btn-info">Add</a>
                  <div class="ms-auto">
                    <span class="fs-3 text-muted">36 Recent Transactions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* column */}
          <div class="col-lg-8">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Products Performance</h4>
                <p class="card-subtitle">Latest new products</p>
                {/* Nav tabs */}
                <ul class="nav nav-pills justify-content-end mt-md-n5" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#navpill-11" role="tab" aria-selected="false" tabindex="-1">
                      <span>Pending</span>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" data-bs-toggle="tab" href="#navpill-22" role="tab" aria-selected="true">
                      <span>Active</span>
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div class="tab-content">
                  <div class="tab-pane" id="navpill-11" role="tabpanel">
                    <div class="table-responsive mt-9">
                      <table class="table mb-0 align-middle text-nowrap fs-3">
                        <tbody>
                          <tr>
                            <td class="px-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-2.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Supreme toys presents best gift
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Angular, React</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-dark fw-medium fs-3">Excellent</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ "width": "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                98% Sold
                              </h6>
                            </td>
                            <td>
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-3.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Red color shoes from Gucci
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Bootstrap, React</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-dark fw-medium fs-3">Average</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ "width": "46%" }} aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                46% Sold
                              </h6>
                            </td>
                            <td>
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-1.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Nike branding shoes for Men and Women
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Bootstrap, Angular, React</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-dark fw-medium fs-3">Good</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-info" role="progressbar" style={{ "width": "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                65% Sold
                              </h6>
                            </td>
                            <td>
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-0 pb-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-4.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Stylish sneakers for men and women
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Bootstrap, Angular, React</span>
                                </div>
                              </div>
                            </td>
                            <td class="pb-0">
                              <span class="text-dark fw-medium fs-3">Bad</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ "width": "23%" }} aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                23% Sold
                              </h6>
                            </td>
                            <td class="pb-0">
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 pb-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane active" id="navpill-22" role="tabpanel">
                    <div class="table-responsive mt-9">
                      <table class="table mb-0 align-middle text-nowrap fs-3">
                        <tbody>
                          <tr>
                            <td class="px-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-1.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Nike branding shoes for Men and Women
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Bootstrap, Angular, React</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-dark fw-medium fs-3">Good</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-info" role="progressbar" style={{ "width": "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                65% Sold
                              </h6>
                            </td>
                            <td>
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-2.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Supreme toys presents best gift
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Angular, React</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-dark fw-medium fs-3">Excellent</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ "width": "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                98% Sold
                              </h6>
                            </td>
                            <td>
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-3.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Red color shoes from Gucci
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Bootstrap, React</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span class="text-dark fw-medium fs-3">Average</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ "width": "46%" }} aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                46% Sold
                              </h6>
                            </td>
                            <td>
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-0 pb-0">
                              <div class="d-flex align-items-center">
                                <img src="../assets/images/products/product-4.jpg" class="rounded" alt="product" />
                                <div class="ms-4">
                                  <h5 class="mb-0 fs-4">
                                    Stylish sneakers for men and women
                                  </h5>
                                  <span class="text-muted fs-3 mt-2">Bootstrap, Angular, React</span>
                                </div>
                              </div>
                            </td>
                            <td class="pb-0">
                              <span class="text-dark fw-medium fs-3">Bad</span>
                              <div class="progress mt-2">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ "width": "23%" }} aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" />
                              </div>
                              <h6 class="text-muted fw-normal mt-2">
                                23% Sold
                              </h6>
                            </td>
                            <td class="pb-0">
                              <span class="fs-3 text-muted fw-normal">Earnings</span>
                              <h5 class="mb-0 fs-4">$546,000</h5>
                            </td>
                            <td class="pe-0 pb-0 text-end">
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" class="me-3">
                                  <i class="ti ti-edit fs-6" />
                                </a>
                                <a href="javascript:void(0)">
                                  <i class="ti ti-trash fs-6" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* column */}
          <div class="col-lg-4">
            <div class="card overflow-hidden">
              <div class="card-body pb-0">
                <div class="d-flex align-items-start">
                  <div>
                    <h4 class="card-title">Weekly Stats</h4>
                    <p class="card-subtitle">Average sales</p>
                  </div>
                  <div class="ms-auto">
                    <div class="dropdown">
                      <a href="javascript:void(0)" class="text-muted" id="year1-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-dots fs-7" />
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="year1-dropdown">
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
                <div class="mt-5 pb-3 d-flex align-items-center">
                  <span class="btn btn-primary rounded-circle round-48 hstack justify-content-center">
                    <i class="ti ti-shopping-cart fs-6" />
                  </span>
                  <div class="ms-3">
                    <h5 class="mb-0 fw-bolder fs-4">Top Sales</h5>
                    <span class="text-muted fs-3">Johnathan Doe</span>
                  </div>
                  <div class="ms-auto">
                    <span class="badge bg-secondary-subtle text-muted">+68%</span>
                  </div>
                </div>
                <div class="py-3 d-flex align-items-center">
                  <span class="btn btn-warning rounded-circle round-48 hstack justify-content-center">
                    <i class="ti ti-star fs-6" />
                  </span>
                  <div class="ms-3">
                    <h5 class="mb-0 fw-bolder fs-4">Best Seller</h5>
                    <span class="text-muted fs-3">MaterialPro Admin</span>
                  </div>
                  <div class="ms-auto">
                    <span class="badge bg-secondary-subtle text-muted">+68%</span>
                  </div>
                </div>
                <div class="pt-3 mb-7 d-flex align-items-center">
                  <span class="btn btn-success rounded-circle round-48 hstack justify-content-center">
                    <i class="ti ti-message-dots fs-6" />
                  </span>
                  <div class="ms-3">
                    <h5 class="mb-0 fw-bolder fs-4">Most Commented</h5>
                    <span class="text-muted fs-3">Ample Admin</span>
                  </div>
                  <div class="ms-auto">
                    <span class="badge bg-secondary-subtle text-muted">+68%</span>
                  </div>
                </div>
              </div>
              <div id="weekly-stats" style={{ "min-height": "170px" }}><div id="apexchartszzvz9x6v" class="apexcharts-canvas apexchartszzvz9x6v apexcharts-theme-light" style={{ "width": "565px", "height": "170px" }}><svg id="SvgjsSvg2585" width="565" height="170" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ "background": "transparent" }}><foreignObject x="0" y="0" width="565" height="170"><div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml" style={{ "max-height": "85px" }} /></foreignObject><rect id="SvgjsRect2589" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" /><g id="SvgjsG2623" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)" /><g id="SvgjsG2587" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2586"><clipPath id="gridRectMaskzzvz9x6v"><rect id="SvgjsRect2591" width="571" height="172" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath><clipPath id="forecastMaskzzvz9x6v" /><clipPath id="nonForecastMaskzzvz9x6v" /><clipPath id="gridRectMarkerMaskzzvz9x6v"><rect id="SvgjsRect2592" width="569" height="174" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff" /></clipPath><linearGradient id="SvgjsLinearGradient2597" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2598" stop-opacity="0.1" stop-color="var(--bs-primary)" offset="1" /><stop id="SvgjsStop2599" stop-opacity="0.01" stop-color offset="1" /><stop id="SvgjsStop2600" stop-opacity="0.01" stop-color offset="1" /></linearGradient></defs><line id="SvgjsLine2590" x1="0" y1="0" x2="0" y2="170" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="170" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1" /><g id="SvgjsG2603" class="apexcharts-grid"><g id="SvgjsG2604" class="apexcharts-gridlines-horizontal" style={{ "display": "none" }}><line id="SvgjsLine2607" x1="0" y1="0" x2="565" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2608" x1="0" y1="34" x2="565" y2="34" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2609" x1="0" y1="68" x2="565" y2="68" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2610" x1="0" y1="102" x2="565" y2="102" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2611" x1="0" y1="136" x2="565" y2="136" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /><line id="SvgjsLine2612" x1="0" y1="170" x2="565" y2="170" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline" /></g><g id="SvgjsG2605" class="apexcharts-gridlines-vertical" style={{ "display": "none" }} /><line id="SvgjsLine2614" x1="0" y1="170" x2="565" y2="170" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" /><line id="SvgjsLine2613" x1="0" y1="1" x2="0" y2="170" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt" /></g><g id="SvgjsG2606" class="apexcharts-grid-borders" style={{ "display": "none" }} /><g id="SvgjsG2593" class="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG2594" class="apexcharts-series" seriesname="WeeklyxStats" data:longestseries="true" rel="1" data:realindex="0"><path id="SvgjsPath2601" d="M 0 170 L 0 145.7142857142857C24.792722782936067, 132.92613034710755, 126.58236800986592, 56.53425848671765, 188.33333333333334, 48.571428571428555S314.1487801479095, 101.17371961119673, 376.6666666666667, 97.14285714285714S537.6971121370843, 34.84789340840983, 565, 24.285714285714278 L 565 170 L 0 170M 0 145.7142857142857z" fill="url(#SvgjsLinearGradient2597)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskzzvz9x6v)" pathto="M 0 170 L 0 145.7142857142857C24.792722782936067, 132.92613034710755, 126.58236800986592, 56.53425848671765, 188.33333333333334, 48.571428571428555S314.1487801479095, 101.17371961119673, 376.6666666666667, 97.14285714285714S537.6971121370843, 34.84789340840983, 565, 24.285714285714278 L 565 170 L 0 170M 0 145.7142857142857z" pathfrom="M -1 340 L -1 340 L 188.33333333333334 340 L 376.6666666666667 340 L 565 340" /><path id="SvgjsPath2602" d="M 0 145.7142857142857C24.792722782936067, 132.92613034710755, 126.58236800986592, 56.53425848671765, 188.33333333333334, 48.571428571428555S314.1487801479095, 101.17371961119673, 376.6666666666667, 97.14285714285714S537.6971121370843, 34.84789340840983, 565, 24.285714285714278" fill="none" fill-opacity="1" stroke="var(--bs-primary)" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskzzvz9x6v)" pathto="M 0 145.7142857142857C24.792722782936067, 132.92613034710755, 126.58236800986592, 56.53425848671765, 188.33333333333334, 48.571428571428555S314.1487801479095, 101.17371961119673, 376.6666666666667, 97.14285714285714S537.6971121370843, 34.84789340840983, 565, 24.285714285714278" pathfrom="M -1 340 L -1 340 L 188.33333333333334 340 L 376.6666666666667 340 L 565 340" fill-rule="evenodd" /><g id="SvgjsG2595" class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" data:realindex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle2627" r="0" cx="0" cy="0" class="apexcharts-marker w9uptdr6y no-pointer-events" stroke="#ffffff" fill="var(--bs-primary)" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0" /></g></g></g><g id="SvgjsG2596" class="apexcharts-datalabels" data:realindex="0" /></g><line id="SvgjsLine2615" x1="0" y1="0" x2="565" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs" /><line id="SvgjsLine2616" x1="0" y1="0" x2="565" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG2617" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2618" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)" /></g><g id="SvgjsG2624" class="apexcharts-yaxis-annotations" /><g id="SvgjsG2625" class="apexcharts-xaxis-annotations" /><g id="SvgjsG2626" class="apexcharts-point-annotations" /></g></svg><div class="apexcharts-tooltip apexcharts-theme-dark"><div class="apexcharts-tooltip-title" style={{ "font-family": "inherit", "font-size": "12px" }} /><div class="apexcharts-tooltip-series-group" style={{ "order": 1 }}><span class="apexcharts-tooltip-marker" style={{ "background-color": "var(--bs-primary)" }} /><div class="apexcharts-tooltip-text" style={{ "font-family": "inherit", "font-size": "12px" }}><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label" /><span class="apexcharts-tooltip-text-y-value" /></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label" /><span class="apexcharts-tooltip-text-goals-value" /></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label" /><span class="apexcharts-tooltip-text-z-value" /></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark"><div class="apexcharts-yaxistooltip-text" /></div></div></div>
            </div>
          </div>
          {/* column */}
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-start">
                  <div>
                    <h4 class="card-title">MedicalPro Branding</h4>
                    <p class="card-subtitle">Branding &amp; Website</p>
                  </div>
                  <div class="ms-auto">
                    <div class="dropdown">
                      <a href="javascript:void(0)" class="text-muted" id="medical-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-dots fs-7" />
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="medical-dropdown">
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
                <div class="mt-4">
                  <span class="badge bg-primary-subtle text-primary">16 APR, 2024</span>
                  <div class="row border-bottom mt-4 gx-0">
                    <div class="col-4 pb-3 border-end">
                      <h6 class="fw-normal text-muted mb-0 fs-3">Due Date</h6>
                      <span class="fs-3 fw-medium text-dark">Oct 23, 2024</span>
                    </div>
                    <div class="col-4 pb-3 border-end ps-3">
                      <h6 class="fw-normal text-muted mb-0 fs-3">Budget</h6>
                      <span class="fs-3 fw-medium text-dark">$98,500</span>
                    </div>
                    <div class="col-4 pb-3 ps-3">
                      <h6 class="fw-normal text-muted mb-0 fs-3">Expense</h6>
                      <span class="fs-3 fw-medium text-dark">$63,000</span>
                    </div>
                  </div>
                  <div class="mt-4 pb-4 border-bottom">
                    <h4 class="fs-5">Teams</h4>
                    <div class="mt-2 pt-1 mb-2">
                      <span class="badge text-bg-warning">Bootstrap</span>
                      <span class="badge text-bg-danger">Angular</span>
                    </div>
                  </div>
                  <div class="mt-4 pb-4 border-bottom">
                    <h4 class="fs-5">Leaders</h4>
                    <div class="mt-2 pt-1 mb-2">
                      <a href="javascript:void(0)" class="me-1">
                        <img src="../assets/images/profile/user-3.jpg" data-bs-toggle="tooltip" data-bs-placement="top" class="rounded-circle" width="35" aria-label="John" data-bs-original-title="John" />
                      </a>
                      <a href="javascript:void(0)" class="me-1">
                        <img src="../assets/images/profile/user-5.jpg" data-bs-toggle="tooltip" data-bs-placement="top" class="rounded-circle" width="35" aria-label="Nirav" data-bs-original-title="Nirav" />
                      </a>
                      <a href="javascript:void(0)" class="me-1">
                        <img src="../assets/images/profile/user-6.jpg" data-bs-toggle="tooltip" data-bs-placement="top" class="rounded-circle" width="35" aria-label="Sunil" data-bs-original-title="Sunil" />
                      </a>
                      <a href="javascript:void(0)">
                        <img src="../assets/images/profile/user-7.jpg" data-bs-toggle="tooltip" data-bs-placement="top" class="rounded-circle" width="35" aria-label="Maruti" data-bs-original-title="Maruti" />
                      </a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <a href="javascript:void(0)" class="btn btn-info">Add</a>
                    <div class="ms-auto">
                      <span class="fs-3 text-muted">28 Team Members, 268 Tasks
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* column */}
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-start">
                  <div>
                    <h4 class="card-title">Daily Activities</h4>
                    <p class="card-subtitle">Overview of Years</p>
                  </div>
                  <div class="ms-auto">
                    <div class="dropdown">
                      <a href="javascript:void(0)" class="text-muted" id="daily-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-dots fs-7" />
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="daily-dropdown">
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
                <div class="mt-4 pt-2">
                  <img src="../assets/images/blog/blog-img2.jpg" class="blog-img rounded w-100" height="180" alt="flexy" />
                  <h4 class="card-title mt-4 mb-1">
                    Angular 12 coming soon!
                  </h4>
                  <span class="text-muted">
                    By
                    <a href="javascript:void(0)" class="text-primary">Johnathan Doe</a>
                  </span>
                  <p class="fs-3 mt-4 text-muted">
                    This will be the small description for the news you have
                    shown here. There could be some great info.
                  </p>
                  <a href="javascript:void(0)" class="btn btn-info mt-3">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
