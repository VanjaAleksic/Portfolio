document.addEventListener("click",function (e){
    if(e.target.classList.contains("image-item")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('image-modal'));
          myModal.show();
    }
  })
  
var year = new Date().getFullYear();
const footer = document.getElementById("footer-time");
footer.innerHTML = year;