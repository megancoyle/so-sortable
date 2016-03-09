/* So-Sortable Gallery by Megan Coyle */
$( document ).ready(function() {
  function filterGallery(e) {
      var category = $(this).data("link");
	  $(".portfolio-grid").hide();
	  e.preventDefault();
	  $("[data-category*='" + category + "']").velocity("transition.fadeIn", {
		 stagger: 150
  });
  	}
	
  function showAll(e) {
	  $(".portfolio-grid").hide();
	  e.preventDefault();
	  $(".portfolio-grid").velocity("transition.fadeIn", {
		 stagger: 150
  });
  	} 

  $("[data-link]").click(filterGallery);
  $("[data-link='show-all']").click(showAll);	
	} );