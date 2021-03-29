window.onload = function() {
    Particles.init({
        selector: ".background",
        color: '#DA0463',
        connectParticles: true,
        maxParticles: "250",
    });

    var fdegree = 90;
    var fdegree_ = 90;
    var bdegree = 90;
    var bdegree_ = 90;

    function turn90Degrees(turning_obj, degree, degree_) {
        if(degree==degree_){
            turning_obj.style.setProperty("-webkit-transition", "-webkit-transform 1s ease");
            turning_obj.style.webkitTransform = "rotate(" + degree + "deg)";
            degree_ += 90;
        }
        //console.log(degree);
        return degree, degree_;
    }

    const fish = document.querySelector(".fish");
    const beer = document.querySelector(".beer");
    document.getElementById("anim-button-f").addEventListener("click", function(){
        fdegree, fdegree_ = turn90Degrees(fish, fdegree, fdegree_);
        fdegree += 90;
    });
    document.getElementById("anim-button-b").addEventListener("click", function(){
        bdegree, bdegree_ = turn90Degrees(beer, bdegree, bdegree_);
        bdegree += 90;
    });
    //document.getElementById("anim-button").addEventListener("dblclick", disappear);
    //var bg = document.querySelector(".center")
//function disappear() {
//    if(finishedTurning){
//        bg.classList.add("disappearing");
//    } else {
//        bg.classList.remove("disappearing");
//   }
//}
};