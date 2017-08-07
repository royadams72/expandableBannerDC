//var startAd = function(){
BANNER.collapsedAd = BANNER.collapsedAd || {};

(function () {
var p = BANNER.collapsedAd;
var expandedAd = BANNER.expandedAd;
var container_dc = document.getElementById("container_dc");
var border = document.getElementById("border");
var bg1 = document.getElementById("bg1");
var text1 = document.getElementById("text1");
var ctaArrow = document.getElementById("arrow");
var touch_points = document.getElementById("touch_points")
var touch_points_txt = document.getElementById("touch_points_txt");
var frameDelay = 1.5, framePause = .5, textFadeSpeed = .75, pulseCount = 0;
var adExpanded = false;

    p.init = function( w, h, container ) {
        p.adWidth = w;
        p.adHeight = h;
        p.container = container;
        TweenMax.set([container, container_dc], { width: p.adWidth+'px', height: p.adHeight+'px',  });
        TweenMax.set(border, {display:'block', width: p.adWidth+'px', height: p.adHeight+'px' });
        TweenMax.set(bg1, {display:'block', width: p.adWidth+'px', height: p.adHeight+'px'});
        TweenMax.set(text1, {display:'block', width: p.adWidth+'px', height: p.adHeight+'px'});
        TweenMax.set(arrow, {display:'block', width: p.adWidth+'px', height: p.adHeight+'px'});
        TweenMax.set(touch_points, {display:'block', width: p.adWidth+'px', height: p.adHeight+'px'});
        TweenMax.set(touch_points_txt, {display:'block', width: p.adWidth+'px', height: p.adHeight+'px'});
        this.startAd();
}

p.startAd = function (){
    if( BANNER.isExpanded ){
          //console.log(BANNER.isExpanded)
          TweenMax.set( [text1, touch_points_txt], {y:-5, opacity:1});
          TweenMax.set([ctaArrow, touch_points], {opacity:1});
            }else{
             frame1();
              }
            p.container.addEventListener("mouseover", expandAd, true);
}

p.stopAd = function (){
    TweenMax.killAll();
   }

function frame1() {

    TweenMax.to(text1, textFadeSpeed, {
        opacity: 1,
        y: -5
    }), TweenMax.delayedCall( textFadeSpeed, loop )
}

function loop() {
    TweenMax.to(ctaArrow, textFadeSpeed, {
        opacity: 1
    }), pulseCount >= 1 || TweenMax.to(ctaArrow, textFadeSpeed, {
        opacity: 0,
        delay: textFadeSpeed,
        onComplete: function() {
            pulseCount++, loop()
        }
    }), TweenMax.delayedCall( textFadeSpeed + frameDelay, frame2 )
}


function frame2() {
    pulseCount = 0;
    TweenMax.to( [ touch_points_txt ], textFadeSpeed, {
        opacity: 1,
        y: -5
    }), TweenMax.delayedCall( textFadeSpeed , loop2 )
}

function loop2() {

    TweenMax.to(touch_points, textFadeSpeed, {
        opacity: 1
    }), pulseCount >= 2 || TweenMax.to( touch_points, textFadeSpeed, {
        opacity: 0,
        delay: textFadeSpeed,
        onComplete: function() {
            pulseCount++, loop2();
            console.log(pulseCount)
        }
    })
}


    var expandAd = function(){
         dcFunctions.onExpandHandler();
        // p.container.removeEventListener("mouseover", expandAd, true);
    }

}());
