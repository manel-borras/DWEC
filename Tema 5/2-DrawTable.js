
    let row = prompt("Dime las filas que quieres que tenga la tabla: ");
    let column = prompt("Dime las columnas que quieres que tenga la tabla: ")
    let color = prompt("Dime de que color quieres que sea el borde de la tabla");
function drawTable(row = 10, column = 4, color = "black") {
    console.log(row);
    console.log(column);
    console.log(color);
document.write("<table style='border: 3px solid "+color+"' width='100%'>");
    for (let i = 0; i < row; i++) {
        document.write("<tr>");
        for (let j = 0; j < column; j++) {
            document.write("<td style='border: 1px solid'>"+j+"</td>");
        }
        document.write("</tr>");
    }
document.write("</table>");
}

drawTable(row, column);

drawTable(10, 4);

for (let i = 0; i < 10; i++) {
    drawTable(5, 4, "green");    
}
