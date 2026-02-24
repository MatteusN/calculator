function laske() {

    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let x3 = parseFloat(document.getElementById("x3").value);
    let y3 = parseFloat(document.getElementById("y3").value);

    let pintaAla = 0.5 * Math.abs(
        x1*(y2 - y3) +
        x2*(y3 - y1) +
        x3*(y1 - y2)
    );

    document.getElementById("tulos").innerText =
        "Pinta-ala on: " + pintaAla;
}