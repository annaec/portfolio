$(document).ready(function(){

//** UNIVERSAL **//


//altHomeNav fade in
$("#altTwoNav li").each(function(i) {
    $(this).delay(350 * i).fadeIn(2500);
});

// setTimeout(function(){
//   $("#altTwoNav").css("border-bottom","3px solid black").css("transition-duration",".5s")
// }, 2400);

//drop down hidden nav on menu icon click
$(".condensedNav").on("click", function () {
  $("nav").toggleClass("dropNav, hiddenNav");
});

//arrow drop-down 
$(".arrow-right,.arrow-down").on("click", function (){
  $(this).toggleClass("arrow-down").toggleClass("arrow-right");
  if( $(this).hasClass("arrow-down") ) {
    $(".arrow-down").not(this).addClass("arrow-right").removeClass("arrow-down");
    $("p").slideUp();
    $(this).siblings("p").slideDown(300);
  } else {
    $(this).siblings("p").slideUp(300);
  }
});


//** LOGO ANIMATION **//

//TIMEOUT 0:
  //change logo animation margin
setTimeout(function (){
$(".layer").addClass("aligned");
}, 1775);

//TIMEOUT 1:
setTimeout(function(){

    //pause animation and remove extra cube layers
    $("#topDiv").removeClass("layer bottom");
    $(".cube").css("animation", "paused"); 
  }, 2495);

//TIMEOUT 2
setTimeout(function(){

   //append new cubes and add nav classes
   $(".layer").append("<div class='cube arts'</div>")
   $(".layer").append("<div class='cube events'</div>")
   $(".layer").append("<div class='cube contact'</div>")
   $(".layer").append("<div class='cube coworking'</div>")
   $(".layer").append("<div class='cube community'</div>") 
   $(".nw").addClass("coworking")
   
   //move new cubes to match end of animation : size 50px
   // $(".cube:nth-child(2)").css("left","17.5%")
   // $(".cube:nth-child(3)").css("left","31.2%")
   // $(".cube:nth-child(4)").css("left","58.8%")
   // $(".cube:nth-child(5)").css("left","72.5%")


   //align appended cubes with end of animation
   $(".cube:nth-child(2)").css("left","11%")
   $(".cube:nth-child(3)").css("left","28%");
   $(".cube:nth-child(4)").css("left","62%");
   $(".cube:nth-child(5)").css("left","79%");

   //hide leftover cubes
   $(".ne").hide()
   $(".bottom").hide()
   $(".cube:nth-child(6)").hide()

 }, 2494); 

//TIMEOUT 3:
setTimeout(function(){

  //append nav li
  $("#cowork").append("<a href='coworking.html'>coworking</a>").hide().fadeIn()
  $("#comm").append("<a href='community.html'>community</a>").hide().fadeIn()
  $("#arts").append("<a href='air.html'>arts</a>").hide().fadeIn()
  $("#events").append("<a href='events.html'>events</a>").hide().fadeIn()
  $("#contact").append("<a href='contact.html'>contact</a>").hide().fadeIn()


//add class cubeSelected on hover over cube 
$(".cube").hover(function () {
  $(this).addClass("cubeSelected")
  $(this).siblings().removeClass("cubeSelected").css("transition-duration","1s")
});


//match cubes to corresponding nav li, addClass navSelected on hover over cube
$(".cube").hover( function (){
  if( $(this).hasClass("coworking")) {
    $("#cowork").siblings().removeClass("navSelected")
    $("#cowork").toggleClass("navSelected")

  } else if ( $(this).hasClass("arts")) {
   $("#arts").siblings().removeClass("navSelected")
   $("#arts").toggleClass("navSelected")

 } else if( $(this).hasClass("community")) {
  $("#comm").siblings().removeClass("navSelected")
  $("#comm").toggleClass("navSelected")

} else if( $(this).hasClass("events")) {
  $("#events").siblings().removeClass("navSelected")
  $("#events").toggleClass("navSelected")

} else if( $(this).hasClass("contact")) {
 $("#contact").siblings().removeClass("navSelected")
 $("#contact").toggleClass("navSelected")

    } else { //do nothing 
    }
  }); 

//add cubeSelected on hover over li, remove cubeSelected on sibling cubes
$("#cowork").hover(function () {
  $(".nw").addClass("cubeSelected")
  $(".nw").siblings().removeClass("cubeSelected").css("transition-duration","1s")
});

$("#arts").hover(function () {
  $(".arts").addClass("cubeSelected")
  $(".arts").siblings().removeClass("cubeSelected").css("transition-duration","1s")
});

$("#comm").hover(function () {
  $(".community").addClass("cubeSelected")
  $(".community").siblings().removeClass("cubeSelected").css("transition-duration","1s")
});

$("#events").hover(function () {
  $(".events").addClass("cubeSelected")
  $(".events").siblings().removeClass("cubeSelected").css("transition-duration","1s")
});

$("#contact").hover(function () {
  $(".contact").addClass("cubeSelected")
  $(".contact").siblings().removeClass("cubeSelected").css("transition-duration","1s")
});


//remove selected classes on mouseleave
$(".cube").mouseleave(function(){
  $(this).removeClass("cubeSelected").css("transition-duration","1s")
});

$("li").mouseleave(function(){
  $(this).removeClass("navSelected")
  $(".cube").removeClass("cubeSelected").css("transition-duration","1s")
});

}, 2496);
});


//** COMMUNITY.HTML **/

//name directory select
$("#alphaDirectory a").on("click", function (){
  var bioLink = $(this).attr("href");
  $("p").hide();
  $(".arrow-down").addClass("arrow-right").removeClass("arrow-down");
  $(bioLink).children("p").slideDown(300);
  $(bioLink).children(".arrow-right").addClass("arrow-down").removeClass("arrow-right");
  // $(bioLink).siblings().children("p").slideUp(300);
  // $(bioLink).siblings().children(".arrow-down").addClass("arrow-right").removeClass("arrow-down");

    //make all other paragraphs slideUp

  });

// click back to top, close all "p"
$("#nameDirectory a").on("click",function () {
  $("p").slideUp();
});

$("#nameColumn a").on("click", function (){
  $(this).children("p").slideUp(300);
});

//CONTACT FORM TO GOOGLE SHEET
 $('#form').one('submit',function(){
        var name = encodeURIComponent($('#name').val());
        var email = encodeURIComponent($('#email').val());
        var about = encodeURIComponent($('#message').val());
        var q1ID = "entry.2110179054";
        var q2ID = "entry.1474471093";
        var q3ID = "entry.1325773915";

        var baseURL = 'https://docs.google.com/a/industry-lab.com/forms/d/e/1FAIpQLSfddcjyt0cscXiDd2sX6D-oMtXbkEcjuPBYtYv32ZOP9R0_oA/formResponse?';
        var submitRef = '&submit=8422787505313352952';
        var submitURL = (baseURL + q1ID + "=" + name + "&" + q2ID + "=" + email + "&" + q3ID + "=" + about + submitRef);
        console.log(submitURL);
        $(this)[0].action=submitURL;
    });


 //EVENTS GOOGLE CAL API
       formatGoogleCalendar.init({
        calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/events@industry-lab.com/events?key=AIzaSyBUJ-LcI0XhHCvkvTXfyOgJ-rgWF87CGfs',
        past: true,
        upcoming: true,
        sameDayTimes: true,
        pastTopN: 20,
        upcomingTopN: 3,
        itemsTagName: 'li',
        upcomingSelector: '#events-upcoming',
        pastSelector: '#events-past',
        upcomingHeading: '<h2>Upcoming events</h2>',
        pastHeading: '<h2>Past events</h2>',
        format: ['*date*', ': ', '*summary*', ' &mdash; ', '*description*', ' in ', '*location*']
      });



