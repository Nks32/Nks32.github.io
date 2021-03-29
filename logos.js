window.onload = function() {
    //Activates Particles.js
    Particles.init({
      selector: '.background',
    maxParticles: 450,
    color: "#DA0463",
    connectParticles: true, 
    responsive: [
        {
        breakpoint: 768,
        options: {
            maxParticles: 200,
            color: '#DA0463',
            connectParticles: true
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0
      }
    }
  ]
});
//Variables for the specific degrees of each icon
    var fdegree = 90;
    var fdegree_ = 90;
    var bdegree = 90;
    var bdegree_ = 90;
    var f_dis = b_dis = false;
    //Function, which turns the object by 90 degrees
    function turn90Degrees(turning_obj, degree, degree_) {
        if(degree==degree_){
            turning_obj.style.setProperty("-webkit-transition", "-webkit-transform 1s ease");
            turning_obj.style.webkitTransform = "rotate(" + degree + "deg)";
            degree_ += 90;
        }
        //console.log(degree);
        return degree, degree_;
    }
    //Makes the specific object disappear
    function Disappear(bg_selector, status){
        //Adds the fade-out class to the icon, remove the fade-in class
        bg_selector.classList.remove("fade-in");
        var name, arr;
        name = " fade-out";
        arr = bg_selector.className.split(" ");
        if (arr.indexOf(name) == -1) {
            bg_selector.className += " " + name;
        }
        //console.log("Fades out"); 
        status = true;
        return status;
    }
    //Makes the specfic object appear
    function Appear(bg_select, status_dis){
        //Adds the fade-in class, remove the fade-out class
        status_dis = false;
        console.log("test");
        bg_select.classList.remove("fade-out");
        bg_select.classList.add("fade-in");
    }
    //Variables to select each icons and the background of each icon
    const fish = document.querySelector(".fish");
    const beer = document.querySelector(".beer");
    const fish_bg = document.querySelector(".f");
    const beer_bg = document.querySelector(".b");

    //Adds an Button Listener, with which the icons appear again
    document.getElementById("reset-button").addEventListener("click", function(){
        if (f_dis){
            f_dis = Appear(fish_bg, f_dis);
        }
        if (b_dis){
            b_dis = Appear(beer_bg, b_dis);
        }
    });
    //Adds an Button Listener, with which the icons can disappear
    document.getElementById("anim-button-f").addEventListener("dblclick", function(){
        if (fdegree>=360 && !f_dis){
            f_dis = Disappear(fish_bg, f_dis);
        }
    })
    document.getElementById("anim-button-b").addEventListener("dblclick", function(){
        if (bdegree>=360 && !b_dis){
            b_dis = Disappear(beer_bg, b_dis);
        }
    })
    //Adds an Button Listener, with which the icons can turn
    document.getElementById("anim-button-f").addEventListener("click", function(){
        if (!f_dis){
            fdegree, fdegree_ = turn90Degrees(fish, fdegree, fdegree_);
            fdegree += 90;
        }
    });
    document.getElementById("anim-button-b").addEventListener("click", function(){
        if (!b_dis){
            bdegree, bdegree_ = turn90Degrees(beer, bdegree, bdegree_);
            bdegree += 90;
        }
    });
};