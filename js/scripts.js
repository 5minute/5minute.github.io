function initCookieBanner() {
    function showCookieBanner(){
        let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
        cookieBanner.style.display = "block";
    }
     
    function hideCookieBanner(){
        localStorage.setItem("web_dev_isCookieAccepted", "yes");
        let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
        cookieBanner.style.display = "none";
    }
    
    function initializeCookieBanner(){
        let isCookieAccepted = localStorage.getItem("web_dev_isCookieAccepted");
        if (isCookieAccepted === null) {
            localStorage.clear();
            localStorage.setItem("web_dev_isCookieAccepted", "no");
            showCookieBanner();
        }
        if (isCookieAccepted === "no") {
            showCookieBanner();
        }
    }
    
    var interval = setInterval(function () {
        if ($('#cookieBanner').length) {
            clearInterval(interval);
            initializeCookieBanner();
        }
    }, 100);
    window.nk_hideCookieBanner = hideCookieBanner;    
}

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = $(this).data('include') + '.html'
      $(this).load(file);
    });

    initCookieBanner();
  });