/*
For WeChat Functioning
 */

function handleHover(source, target){
    source.hover(
        function (e) {
            if (e.handleObj.type === 'mouseover'){
            target.collapse('show')
        }else {
            target.collapse('hide')
        }
        }
    )
}

handleHover($('#wechat-button'),$('#test-collapse'));

