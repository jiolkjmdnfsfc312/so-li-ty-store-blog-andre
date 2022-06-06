$(".textbox input").focusout(function(){
    if($(this).val() == ""){
      $(this).siblings().removeClass("hidden");
      $(this).css("background","#554343");
    }else{
      $(this).siblings().addClass("hidden");
      $(this).css("background","#484848");
    }
  });

  $(".textbox input").keyup(function(){
    var inputs = $(".textbox input");
    if(inputs[0].value != "" && inputs[1].value){
      $(".login-btn").attr("disabled",false);
      $(".login-btn").addClass("active");
    }else{
      $(".login-btn").attr("disabled",true);
      $(".login-btn").removeClass("active");
    }
  });


  

  const toastContainer = document.querySelector(".toast-container");
const closeBtn = document.querySelector(".toast-container .close");
const toastLink = document.querySelector(".toast-container a");

if (!localStorage.getItem("displayToast")) {
  setTimeout(() => {
    toastContainer.classList.add("active");
  }, 1000);
}

const stopDisplayingToast = () => {
  
  toastContainer.classList.remove("active");
};

closeBtn.addEventListener("click", stopDisplayingToast);
toastLink.addEventListener("click", stopDisplayingToast);
