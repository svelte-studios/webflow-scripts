(function () {
  var fsComponent = new FsLibrary(".load-more-list");

  fsComponent.loadmore({
    button: ".load-more-button",
    resetIx: true,
    animation: {
      enable: true,
      easing: "ease-in-out",
      effects: "fade",
    },
  });
})();
