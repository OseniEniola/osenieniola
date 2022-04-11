// Can also be used with $(document).ready()
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlsContainer: $(".custom-controls-container"),
      customDirectionNav: $(".custom-navigation a"),
      controlNav: true,
  
    });
    $('.flexslider2').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container2"),
        customDirectionNav: $(".custom-navigation2 a"),
        controlNav: true,
        directionNav: true,
   
      });
      $('.flexslider3').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container3"),
        customDirectionNav: $(".custom-navigation3 a"),
        controlNav: true,
        directionNav: true,
      });
      $('.flexslider4').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container4"),
        customDirectionNav: $(".custom-navigation4 a"),
        controlNav: true,
        directionNav: true,
      });
      $('.flexslider5').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container5"),
        customDirectionNav: $(".custom-navigation5 a"),
        controlNav: true,
        directionNav: true,
      });
      $('.flexslider6').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container6"),
        customDirectionNav: $(".custom-navigation6 a"),
        controlNav: true,
        directionNav: true,
      });
      $('.flexslider7').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container7"),
        customDirectionNav: $(".custom-navigation7 a"),
        controlNav: true,
        directionNav: true,
      });
  });
function openModal(element){
    // Get the modal
var modal = document.getElementById(element);

// When the user clicks the button, open the modal 
modal.style.display = "block";


}

function closeModal(element){
    // When the user clicks on <span> (x), close the modal
    var modal = document.getElementById(element);
    console.log(element)
    document.getElementById(element).style.display = "none";
    console.log(modal)

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 
  if (event.target.className == 'modal') {
    event.target.style.display = "none";
  }
}