if (true) {
    var c = 9;
    let b = 9;
}

function f() {
    const a = 9;
    b = 10;
    c = 10;
    console.log("Soy la función f");
}

f();

console.log(b);