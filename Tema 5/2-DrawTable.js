//Ask the user the parameters he wants to put
    let row = prompt("How many rows do you want: ");
    let column = prompt("How many columns do you want: ")
    let color = prompt("Which colour do you want the border of the table to be: ");
//This function defines the default values for rows and columns and writes the tables

    function drawTable(row = 10, column = 4, color = "black") {
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
