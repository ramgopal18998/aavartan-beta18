var atta = document.getElementsByClassName("attaa");


for (var i = 0; i < atta.length; i++) {
    atta[i].addEventListener('click', ()=>{

document.getElementById("attaslide").classList.toggle("atsee");
    });
}
var attab = document.getElementsByClassName("cn-back");


for (var i = 0; i < attab.length; i++) {
    attab[i].addEventListener('click', ()=>{
      document.getElementById("slide-1-1").classList.remove("atsee");
      document.getElementById("slide-1-2").classList.remove("atsee");
      document.getElementById("slide-1-3").classList.remove("atsee");
      document.getElementById("slide-1-4").classList.remove("atsee");
      document.getElementById("slide-1-5").classList.remove("atsee");

document.getElementById("attaslide").classList.toggle("atsee");
    });
}


$("#attaslidep1").click(function(){
  document.getElementById("slide-1-1").classList.toggle("atsee");

});
$("#attaslidep2").click(function(){
  document.getElementById("slide-1-2").classList.toggle("atsee");

});
$("#attaslidep3").click(function(){
  document.getElementById("slide-1-3").classList.toggle("atsee");

});
$("#attaslidep4").click(function(){
  document.getElementById("slide-1-4").classList.toggle("atsee");

});
$("#attaslidep5").click(function(){
  document.getElementById("slide-1-5").classList.toggle("atsee");

});
//
// $(document).ready(function() {
//    $("a[id^='attaslidep']").on('click', function() {
//      let keySlide = $(this).attr('id');
//      console.log("helo firneds")
//      console.log(keySlide)
//      console.log(typeof(keySlide);
//      // document.getElementById("keySlide").classList.toggle("atsee");
//
//      // this.classList.toggle("atsee");
//       // $(this).toggleClass("atsee");
//    });
// });
