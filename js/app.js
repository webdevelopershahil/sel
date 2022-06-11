window.addEventListener("scroll" , function(){
  var nav = this.document.querySelector("#nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})
if ($(window).width() < 767) {
  alert('hello shakil');
}
else {
  alert('More than 960');
}