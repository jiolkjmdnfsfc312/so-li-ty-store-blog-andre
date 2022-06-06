
 document.addEventListener("click", function(e) {
   if (e.target.getAttribute("data-bottombar-close") !== null) {
     const bottomBarName = e.target.getAttribute("data-bottombar-close");
     document.body.removeChild(
       document.body.querySelector(
         ".bottom-bar[data-bottombar='" + bottomBarName + "']"
       )
     );
   }
 });