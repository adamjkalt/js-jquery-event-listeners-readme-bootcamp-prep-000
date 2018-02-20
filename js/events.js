function getIt() {
$('p').on("click", function(){
  console.log ("Hey!")
})
};

function frameIt() {
$('img').on('load', function(){
  //actions you want to happen
})
};

function pressIt() {
$(document).on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
})
};

function submitIt() {
  $("form").on("submit", function() {
    if ($( "input:first" ).val() === "correct") {
      alert('your form is going to be submitted now');
      return;
    }
    alert("you entered the wrong value");
    return;
  });
};

$(document).ready(function(){
return getIt
return
return
return
});
