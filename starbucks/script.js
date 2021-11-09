function fillOrderResult(order) {
    const { firstname, lastname, address, number, coffeeType, amount } = order
    const name = firstname.value + " " + lastname.value;
    const orderArray = [name, address.value, number.value, coffeeType.value, amount.value];

    const newRow = document.getElementById("orders").insertRow();

    orderArray.forEach((field, index) => {
        const newText = document.createTextNode(field);
        newRow.insertCell(index).appendChild(newText)
    })
    return false
}