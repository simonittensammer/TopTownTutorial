/*
  Tilt-JS
*/
$('.js-tilt').tilt({
  glare: false
});

/*
  Fullpage JS
*/

let myFullpage = new fullpage('#fullpage', {
    anchors: ['start', 'about', 'controls', 'inventory', 'enemys', 'weapons'],
    sectionsColor: ['#91e1b5', '#3a8e7a', '#336660', '#213d42', '#336660', '#3a8e7a'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['', '', '', ''],
    slidesNavigation: true,
});

/*
  NextButton
*/


/*
  Side Menu
*/

var menuIsShown = false;

function toggleNav() {
  if (menuIsShown) {
    hideNav();
  } else {
    showNav();
  }
}

function hideNav(){
  document.getElementById('navBox').style.left = "-18vw";
  document.getElementById('navBox').style.boxShadow = "none";

  document.getElementById('fullpage').style.filter = "brightness(100%)";

  crossToBar();

  menuIsShown = false;
}

function showNav(){
  document.getElementById('navBox').style.left = "0";
  document.getElementById('navBox').style.boxShadow = "1vw 1vw 20vw #313131";

  document.getElementById('fullpage').style.filter = "brightness(50%)";

  barToCross();

  menuIsShown = true;
}

function barToCross(){
      document.getElementById('firstBar').style.width = "35%";
      document.getElementById('firstBar').style.transform = "rotate(45deg)";

      document.getElementById('secondBar').style.width = "110%";
      document.getElementById('secondBar').style.transform = "rotate(-45deg)";
      document.getElementById('secondBar').style.top = "33%";
      document.getElementById('secondBar').style.left = "-10%";

      document.getElementById('lastBar').style.width = "52%";
      document.getElementById('lastBar').style.transform = "rotate(45deg)";
      document.getElementById('lastBar').style.bottom = "23%";
      document.getElementById('lastBar').style.left = "42%";
}

function crossToBar(){
      document.getElementById('firstBar').style.width = "100%";
      document.getElementById('firstBar').style.transform = "none";

      document.getElementById('secondBar').style.width = "100%";
      document.getElementById('secondBar').style.transform = "rotate(0) translate(0, -50%)";
      document.getElementById('secondBar').style.top = "50%";
      document.getElementById('secondBar').style.left = "0";

      document.getElementById('lastBar').style.width = "100%";
      document.getElementById('lastBar').style.transform = "none";
      document.getElementById('lastBar').style.bottom = "0";
      document.getElementById('lastBar').style.left = "0";
}
