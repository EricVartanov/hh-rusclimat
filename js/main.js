"use strict";

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll(".idc-bg-wrapper"));
    banners.forEach(function (elem) {
        return (elem.style.width = document.documentElement.clientWidth + "px");
    });
}

document.onreadystatechange = function () {
    var DocWidth = document.documentElement.clientWidth;
    window.addEventListener("resize", function () {
        banner_resize();
    });

    banner_resize();
};
