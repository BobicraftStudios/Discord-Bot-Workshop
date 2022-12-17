function convert(id) {
	
    /* Note: id has to be str */
    var bin = (+id).toString(2);
    var unixbin = '';
    var unix = '';
    var m = 64 - bin.length;
    unixbin = bin.substring(0, 42-m);
    unix = parseInt(unixbin, 2) + 1420070400000;
    return unix;
    
}

module.exports = {
    convert: convert
}