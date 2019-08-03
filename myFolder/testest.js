function myfunc(...whatsthis) {
    console.log(Object.prototype.toString.call(whatsthis));
    whatsthis.forEach(function(element) {
            console.log(element);

    })
}
myfunc(1,2,3);