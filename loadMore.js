"use strict";

(function () {
  var fsComponent = new FsLibrary(".collection-list");
  fsComponent.loadmore({
    button: ".load-more-button",
    animation: {
      enable: true,
      easing: "ease-in-out",
      effects: "fade "
    }
  });
})();