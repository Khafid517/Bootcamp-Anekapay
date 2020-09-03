function catur() {
    var result = '';
    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 8; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    result += ' W ';
                } else {
                    result += ' B ';
                }
            } else {
                if (j % 2 == 0) {
                    result += ' B ';
                } else {
                    result += ' W ';
                }
            }
        }
        console.log(result);
        result = '';
    }
}

catur()