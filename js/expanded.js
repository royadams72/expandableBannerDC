//var startAd = function(){
BANNER.expandedAd = BANNER.expandedAd || {};
(function () {
var p = BANNER.expandedAd;
var collapsedAd = BANNER.collapsedAd;
var clickThrough = document.getElementById("clickThrough");
//var exp_border = document.getElementById("exp_border");
var bg = document.getElementById("bg");
var exp_text1 = document.getElementById("exp_text1");


//Array holds divs which will be set to display block for polite load
var assetArray = [ bg, exp_text1, clickThrough ];

p.initAd = function( w, h, container ){
    p.adWidth = w;
    p.adHeight = h;
    p.collapsedWidth = ( collapsedAd.adWidth );
    p.collapsedHeight = ( collapsedAd.adHeight );
    p.container = container;
    setTimeout(secondLoad,1000)


  }

p.displayAssets = function(){
  console.log('displayAssets')
    TweenMax.set( p.container, { width: p.collapsedWidth + 'px', height: p.collapsedHeight + 'px' } );
    addListeners();
    var i;
    for( i = 0; i < assetArray.length; i++ ){
         TweenMax.set(assetArray[i], {display:'block',  width: p.adWidth + 'px', height: p.adHeight + 'px' });
    }
}

 var addListeners = function(){
     clickThrough.addEventListener("click", expandedExit);
     clickThrough.addEventListener("mouseleave", closeExpanded, false);

 }



  var expandedExit = function(){
      dcFunctions.expandedExitHandler();

  }

    var closeExpanded = function(){
      dcFunctions.closeExpandedHandler();
  }

   p.stopAd = function(){
  //Leave empty if not needed
  }

    p.startAd = function(){
      this.frame1();
        addListeners();
    }

   p.frame1 = function() {
    // console.log("fired")
    TweenLite.to(exp_text1 , 0.75, {
        opacity: 1,
        y: -5
    })
}
function secondLoad(){
    BANNER.loadFiles(["css/expanded.css"], function () { console.log('txt files loaded') });

    BANNER.loadImages([{ url: "images/expanded/bg.jpg", div: "bg" }, { url: "images/expanded/exp_text1.png", div: "exp_text1" }],
                              function() {
                                console.log(":: LOADER - all secondary loads complete ::");
                            })

}
    // secondaryLoad([{ url: "images/expanded/testload-img.jpg", div: "testload-img" }], function() { console.log(":: LOADER - all secondary loads complete ::"); })

    }());
