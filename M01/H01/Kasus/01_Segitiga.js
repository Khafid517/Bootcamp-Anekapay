function segiTiga() {
    var page = '#';
    var result = '';
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= i; j++) {
            result += page;
        }
        console.log(result);
        result = '';
    }
}

segiTiga()