
var timeblocks = $('#timeblocks');
var hours = dayjs().hour()

var today = dayjs();


$('#currentDay').text(today.format('MMM D, YYYY'));

$(function () {
  $(".saveBtn").on("click", function(){
    console.log($(this).parent().attr("id"))
    var saved = ($(this).siblings("textarea").val())
    var id = ($(this).parent().attr("id"))
    localStorage.setItem(id, saved)
  })


  $(".time-block").each(function () {
    // The background will be Grey
    // console.log(parseInt($(this).attr("id").slice(5)))
    var timeOfBlocks = (parseInt($(this).attr("id").slice(5)))
    // console.log(hours)
    if (timeOfBlocks < hours) {
      $(this).addClass("past").removeClass("future present")
      // The background will be Red
    } else if (timeOfBlocks === hours){
      $(this).addClass("present").removeClass("future past")
      // The background will be Green
    } else {
      $(this).addClass("future").removeClass("present past")
    }
  });

  $(".time-block").each(function (){
    var fetch = $(this).attr("id")
    $(this).children("textarea").val(localStorage.getItem(fetch)) 
  })
});


