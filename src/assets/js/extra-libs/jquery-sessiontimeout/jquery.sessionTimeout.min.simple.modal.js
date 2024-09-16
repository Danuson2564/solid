(function (e) {
  jQuery.sessionTimeout = function (t) {
    function u(t) {
      switch (t) {
        case "start":
          s = setTimeout(function () {
            e.each(i.closeModals, function (t, n) {
              e("#" + n).modal("hide");
            });
            document.title = i.titleMessage;
            e("#sessionTimeout-dialog").modal("show");
            a("start");
          }, i.warnAfter);
          break;
        case "stop":
          clearTimeout(s);
          break;
      }
    }

    function a(e) {
      switch (e) {
        case "start":
          o = setTimeout(function () {
            window.location = i.redirUrl;
          }, i.redirAfter - i.warnAfter);
          break;
        case "stop":
          clearTimeout(o);
          break;
      }
    }
    var n = [];
    var r = {
      title: "Your session is about to expire!",
      message: "Your session is about to expire.",
      titleMessage: "Warning: Time Out",
      stayConnectedBtn: "Stay connected",
      logoutBtn: "Logout",
      closeModals: n,
      keepAliveUrl: "/keep-alive",
      redirUrl: "/timed-out",
      logoutUrl: "/log-out",
      warnAfter: 9e5,
      redirAfter: 12e5,
    };
    var i = r,
      s,
      o;
    if (t) {
      i = e.extend(r, t);
    }
    e("body").append(
      '<div className="modal fade" id="sessionTimeout-dialog">' +
        '<div className="modal-dialog">' +
        '<div className="modal-content">' +
        '<div className="modal-header">' +
        '<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<h4 className="modal-title">' +
        i.title +
        "</h4>" +
        "</div>" +
        '<div className="modal-body">' +
        i.message +
        "</div>" +
        '<div className="modal-footer">' +
        '<div className="btn-group">' +
        '<button id="sessionTimeout-dialog-logout" type="button" className="btn btn-danger">' +
        i.logoutBtn +
        "</button>" +
        '<button id="sessionTimeout-dialog-keepalive" type="button" className="btn btn-success" data-dismiss="modal">' +
        i.stayConnectedBtn +
        "</button>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
    e("#sessionTimeout-dialog-logout").on("click", function () {
      window.location = i.logoutUrl;
    });
    e("#sessionTimeout-dialog").on("hide.bs.modal", function () {
      e.ajax({
        type: "POST",
        url: i.keepAliveUrl,
      });
      a("stop");
      u("start");
    });
    u("start");
  };
})(jQuery);
