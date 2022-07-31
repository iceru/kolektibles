(function() {
  setTimeout(() => {
    var darkSwitch = document.getElementById("darkSwitch");
    if (darkSwitch) {
      initTheme();
      darkSwitch.addEventListener("change", function(event) {
        resetTheme();
      });
      function initTheme() {
        const darkThemeSelected =
          localStorage.getItem("darkSwitch") !== null &&
          localStorage.getItem("darkSwitch") === "dark";
        darkSwitch.checked = darkThemeSelected;
        darkThemeSelected
          ? document.body.setAttribute("data-theme", "dark")
          : document.body.removeAttribute("data-theme");

          if(localStorage.getItem("darkSwitch") === "dark") {
            $('.btn-primary').removeClass('btn-primary').addClass('btn-secondary');
            setTimeout(() => {
              $("img").each(function() {
                let src = $(this).attr('src');
                src = src.replace("light", "dark");
                $(this).attr('src', src);
            });
            }, 300);
          }
          else {
            $('btn-secondary').removeClass('btn-secondary').addClass('btn-primary');
            if($("img").attr('src').includes('dark')) {
              $("img").attr('src').replace('dark', 'light');
            }
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
