jQuery(document).ready(listo);

function listo() {
    jQuery(".hamb").click(function (e) {
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
    });

    jQuery("header .container nav a").click(function (e) {
        jQuery("header .container nav").removeClass("open");

        var dev = jQuery(this).attr("href");
        jQuery("html, body").animate({
            "scrollTop": jQuery(dev).offset().top
        })
    });

    jQuery("#Inicio a").click(function (e) {
        var ver = jQuery(this).attr("href");
        
        jQuery("html, body").animate({
            "scrollTop": jQuery(ver).offset().top
        })

    });
}