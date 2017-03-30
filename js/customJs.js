/* custom Javascript for individual customer */

//Smooth Scroll
jQuery(function() { jQuery('a[href*=#]:not([href=#])').click(function() { if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { var target = jQuery(this.hash); target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']'); if (target.length) { jQuery('html,body').animate({ scrollTop: target.offset().top }, 1000); return false; } } }); });
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
})(window,document,'script','dataLayer','GTM-TBF46GD');