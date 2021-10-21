window.onscroll = function() {
    stickyHandle()
};

var navigationBar = document.getElementById("navigation_bar");
var stickyOffset = navigationBar.offsetTop;

function stickyHandle() {
  if (window.pageYOffset >= stickyOffset) {
    navigationBar.classList.add("sticky")
  } else {
    navigationBar.classList.remove("sticky");
  }
}

var tabInstall = document.getElementById("tab_install");
var tabAction = document.getElementById("tab_action");
var tabSupport = document.getElementById("tab_support");
var contentTabInstall = document.getElementById("content_tab_install");
var contentTabAction = document.getElementById("content_tab_action");
var contentTabSupport = document.getElementById("content_tab_support");
function selectTab(index) {
    tabInstall.classList.remove("active");
    tabAction.classList.remove("active");
    tabSupport.classList.remove("active");
    // contentTabInstall.style.visibility = 'hidden';
    // contentTabAction.style.visibility = 'hidden';
    // contentTabSupport.style.visibility = 'hidden';
    if (index == 0) {
        tabInstall.classList.add("active");
        //contentTabInstall.style.visibility = 'visible';
    }
    else if (index == 1) {
        tabAction.classList.add("active");
        //contentTabAction.style.visibility = 'visible';
    }
    else if (index == 2) {
        tabSupport.classList.add("active");
        //contentTabSupport.style.visibility = 'visible';
    }
}