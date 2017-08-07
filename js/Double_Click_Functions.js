// JavaScript Document

var DCFunctions = function(col, exp){
var isFirstTime = true;
var p = DCFunctions;
var collapsedAd, expandedAd, col_container, exp_container;

var init = function(){
    collapsedAd = col;
    expandedAd = exp;
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, hideCollapsedAssets);
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, hideExpandedAssets);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
}
 init();


function hideCollapsedAssets() {
          // hide collapsed content.
         BANNER.isExpanded = true;

         TweenMax.set(collapsedAd.container, {display: 'none'});
         TweenMax.to([expandedAd.container, container_dc], 0.6 , { width: expandedAd.adWidth + 'px', height: expandedAd.adHeight +'px',  ease: Power4.easeOut, onComplete:function(){
                      Enabler.finishExpand();
                } });

              if(isFirstTime){
                // only call once, assets and tweeen ara reset on mouseleave
                  BANNER.expandedAd.displayAssets();
                  isFirstTime = false;
              }
}


function expandFinishHandler (){

}



function hideExpandedAssets (){
         TweenMax.set(collapsedAd.container, {display: 'block'});
         TweenMax.set(expandedAd.container, {width: collapsedAd.adWidth + 'px', height: collapsedAd.adHeight +'px'});
         Enabler.finishCollapse();
        }

    p.prototype.closeExpandedHandler = function(e){
      Enabler.requestCollapse();
      Enabler.counter('Rich Media Manual Closes');
      Enabler.stopTimer('panel Expansion');
      expandedAd.stopAd();
    }

    p.prototype.onExpandHandler = function(){
      Enabler.requestExpand();
      Enabler.startTimer('panel Expansion');
      collapsedAd.stopAd();
      expandedAd.startAd();
     }

    p.prototype.expandedExitHandler = function(e){
      Enabler.requestCollapse();
      Enabler.stopTimer('Panel Expansion');
      Enabler.exit('BackgroundExit');
      expandedAd.stopAd();
    }
    p.prototype.collapsedExit = function(e) {
      Enabler.exit('Collapsed_ClickThrough');
    };


function collapseFinishHandler (){
         collapsedAd.startAd();
         expandedAd.stopAd();
         BANNER.isExpanded = false;

    }
}
