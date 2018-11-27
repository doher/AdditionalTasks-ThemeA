for (var i = 1; i <= 100; i++) {
    var k = i;

    if ((i % 3 === 0) && (i % 5 === 0)) {
        k = "threefive";
    } else if (i % 3 === 0) {
        k = "three";
    } else if (i % 5 === 0) {
        k = "five";
    }
    
    console.log(k);
}