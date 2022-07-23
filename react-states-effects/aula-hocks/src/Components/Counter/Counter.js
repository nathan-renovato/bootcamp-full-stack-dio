function Counter() {
    let quantity = 10;

    function upQuantity() {
        quantity++;
        document.querySelector("#counter-box").innerHTML = quantity;
    }
    return (
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    )
}

export default Counter;