(function() {

  jQuery("#wrapper a").click(function(event) {
	  
    var clas, convertoId, href, mobileDeviceDetails, to, track;
    href = jQuery(this).attr('href').toUpperCase();
    track = 1;
    if (jQuery(this).attr('class')) {
      clas = jQuery(this).attr('class').toUpperCase();
      if (clas.indexOf("NOTRACKING") >= 0) {
        track = 0;
      } else {
        track = 1;
      }
    }
    if (href.match("^TEL") && track === 1) {
      to = href.replace("TEL://", "");
      siteTracker.trackGoal(2);
      layoutTracker.trackGoal(2);
      jQuery("body").append(googleImageTracker);
      mobileDeviceDetails = navigator.userAgent;
      convertoId = jQuery("#convertopage_id").text();
      jQuery.ajax({
        async: false,
        type: "POST",
        dataType: "json",
        url: "https://convertopages.com/forms/SaveLeadCall",
        data: {
          convertoId: convertoId,
          to: to,
          userAgent: mobileDeviceDetails,
          formId: 0
        }
      });
    } else if (href.match("^MAILTO") && track === 1) {
      jQuery('#emailContact_formModalForm').modal();
      fixModalZIndex();
      event.preventDefault();
    } else if (!href.match("PRIVACY.HTML$") && !href.match("HTTP://WWW.CONVERTOPAGES.COM/$") && !href.match("^#") && href.length > 0 && track === 1) {
      console.log("Tracking Goal3");
      siteTracker.trackGoal(3);
      layoutTracker.trackGoal(3);
    }else{
    	console.log("Not tracking");
    }
  });
  
  
  
jQuery("a[data-toggle='modal']").click(function() {
    fixModalZIndex();
});  


if (jQuery(window).width() > 480) {
  jQuery('a[href^="tel:"]').each(function(index, value){
      var phone = jQuery(this).html();
         jQuery( "<span>" + phone + "</span>" ).insertAfter( jQuery(this) );
         jQuery(this).remove();
  });
}

}).call(this);

fixModalZIndex = function(){
   jQuery('#extraFormsContainer .modal').css('z-index','2040');
}
