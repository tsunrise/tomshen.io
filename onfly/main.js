/*
For WeChat Functioning
 */
console.log('debug started');

$('.jumbotron').hover(
    function (e) {
        if (e.handleObj.type === 'mouseover'){
            $('#wechat-window').collapse('show')
        }else {
            $('#wechat-window').collapse('hide')
        }
    }
);