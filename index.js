const myInterval = function (callback, time) {
    var timer = null;
    var fn = function () {
        callback();
        clearTimeout(timer);
        timer = setTimeout(fn, time);
    };
    return setTimeout(fn, time);
};

myInterval(() => {
    console.log(111);
}, 1000);