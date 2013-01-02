$(document).ready( function() {
  $(function($){
     $("#checkinDate_day").mask("99/99/9999", {placeholder: "0"});
     $("#checkinTime_hour").mask("99:99", {placeholder: "0"});
  });
});
