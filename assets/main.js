/*
For Contact Functioning
 */

function clickLogoToggle(source, target){
    source.click(function () {
        source.toggleClass('active');
        target.collapse('toggle');
    })
}

clickLogoToggle($('#wechat-button'),$('#wechat-details'));
clickLogoToggle($('#fb-button'),$('#fb-details'));
clickLogoToggle($('#twitter-button'),$('#twitter-details'));


