$(document).ready(function() {

    let clorNum = 30;
    const backClr = (val) => {
        if (val < -4 && val > -25) {
            let bodyEle = document.querySelector('body');
            clorNum += 10;
            let clorReg = clorNum.toString();
            bodyEle.style.background = `linear-gradient(${clorReg}deg, #ecf9cc 50%, #bcffff 50%)`;
        }

    }


    var oldPos = 0;
    $('#body').bind('mousewheel', function(event) {
        oldPos += event.deltaY;
        switch (oldPos) {
            case -1:
                $(".1lr").show();
                break;
            case -2:
                $(".2lr").show();
                break;
            case -3:
                $(".3lr").show();
                break;
            case -4:
                $(".4lr").show();
                break;
            case -5:
                break;
            case -6:
        }
        backClr(oldPos);
    });

});