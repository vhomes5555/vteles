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

var tabIntrodution = document.getElementById("tab_introdution");
var tabInstall = document.getElementById("tab_install");
var tabGuide = document.getElementById("tab_guide");
var tabSupport = document.getElementById("tab_support");
var contentTabIntrodution= document.getElementById("content_tab_introdution");
var contentTabInstall = document.getElementById("content_tab_install");
var contentTabGuide = document.getElementById("content_tab_guide");
var contentTabSupport = document.getElementById("content_tab_support");
function selectTab(index) {
    tabIntrodution.classList.remove("active");
    tabInstall.classList.remove("active");
    tabGuide.classList.remove("active");
    tabSupport.classList.remove("active");
    contentTabIntrodution.style.display = "none";
    contentTabInstall.style.display = "none";
    contentTabGuide.style.display = "none";
    contentTabSupport.style.display = "none";
    if (index == 0) {
        tabIntrodution.classList.add("active");
        contentTabIntrodution.style.display = "block";
    }
    else if (index == 1) {
        tabInstall.classList.add("active");
        contentTabInstall.style.display = "block";
    }
    else if (index == 2) {
        tabGuide.classList.add("active");
        contentTabGuide.style.display = "block";
    }
    else if (index == 3) {
        tabSupport.classList.add("active");
        contentTabSupport.style.display = "block";
    }
}