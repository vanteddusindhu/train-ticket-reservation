function bookTicket() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let passenger = document.getElementById("passenger").value;
    let age = document.getElementById("age").value;

    if (from === "" || to === "" || passenger === "" || age === "") {
        alert("Please enter all details");
        return;
    }

    let pnr = Math.floor(1000000000 + Math.random() * 9000000000);

    document.getElementById("result").innerHTML =
        "<h3>Ticket Booked Successfully!</h3>" +
        "<p><b>PNR:</b> " + pnr + "</p>" +
        "<p><b>Passenger:</b> " + passenger + "</p>" +
        "<p><b>Age:</b> " + age + "</p>" +
        "<p><b>From:</b> " + from + "</p>" +
        "<p><b>To:</b> " + to + "</p>";
}