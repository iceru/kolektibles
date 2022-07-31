(function() {
  setTimeout(() => {
    var darkSwitch = document.getElementById("darkSwitch");
    if (darkSwitch) {
      initTheme();
      darkSwitch.addEventListener("change", function(event) {
        resetTheme();
      });
      function initTheme() {
        var darkThemeSelected =
          localStorage.getItem("darkSwitch") !== null &&
          localStorage.getItem("darkSwitch") === "dark";
        darkSwitch.checked = darkThemeSelected;
        darkThemeSelected
          ? document.body.setAttribute("data-theme", "dark")
          : document.body.removeAttribute("data-theme");

          if(localStorage.getItem("darkSwitch") === "dark") {
            $('.btn-primary').removeClass('btn-primary').addClass('btn-secondary');
          }
          else {
            $('btn-secondary').removeClass('btn-secondary').addClass('btn-primary');
          }

      }
      function resetTheme() {
        if (darkSwitch.checked) {
          document.body.setAttribute("data-theme", "dark");
          localStorage.setItem("darkSwitch", "dark");
        } else {
          document.body.removeAttribute("data-theme");
          localStorage.removeItem("darkSwitch");
        }
      }
    }
  }, 50)
})();
