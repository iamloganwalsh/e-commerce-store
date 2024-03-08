function changeSize(size) {
    const sizeDiv = document.getElementById("sizes");
    sizeDiv.innerHTML = '<h4>Size: '+ size +'</h4>';
    const priceDiv = document.getElementById("price");
    if (size == '4kg') {
        priceDiv.innerHTML = '<h4>Price: $77.99</h4>';
    } else if (size == '15kg') {
        priceDiv.innerHTML = '<h4>Price: $219.99</h4>';
    }
}