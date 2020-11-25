new fullpage('#fullpage', {
    autoscrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3','section4'],
    navigationTooltips: ['Home', 'About', 'Work', 'Contact'],
    showActiveTooltip: true,
    scrollingSpeed: 1000,
});

function openCity(evt, cityName) {
    
    let i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 