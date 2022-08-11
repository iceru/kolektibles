(function() {
  setTimeout(() => {
    const darkSwitch = $('.darkSwitch');
    if (darkSwitch) {
      initTheme();
      $('.darkSwitch').change(function () { 
            if($( window ).width() < 992) {
              darkSwitch[0].checked = darkSwitch[1].checked;
            } else {
              darkSwitch[1].checked = darkSwitch[0].checked;
            }

          resetTheme();
          initTheme();
      });
      function initTheme() {
        const darkThemeSelected =
          localStorage.getItem("darkSwitch") !== null &&
          localStorage.getItem("darkSwitch") === "dark";
        darkSwitch[0].checked = darkThemeSelected;
          darkSwitch[1].checked = darkThemeSelected;
        darkThemeSelected
          ? document.body.setAttribute("data-theme", "dark")
          : document.body.removeAttribute("data-theme");

          if(localStorage.getItem("darkSwitch") === "dark") {
            $('.btn-primary').removeClass('btn-primary').addClass('btn-secondary');
            $('.darkSwitch').attr('checked', true);
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
            $('.darkSwitch').attr('checked', false);

            setTimeout(() => {
              $("img").each(function() {
                let src = $(this).attr('src');
                src = src.replace("dark", "light");
                $(this).attr('src', src);
            });
            }, 300);
          }

      }
      function resetTheme() {
          if (darkSwitch[0].checked && darkSwitch[1].checked) {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("darkSwitch", "dark");
            $('.darkSwitch').attr('checked', true);
          } else {
            document.body.removeAttribute("data-theme");
            localStorage.removeItem("darkSwitch");
            $('.darkSwitch').attr('checked', false);
          }
      }
    }
  }, 50)
})();
