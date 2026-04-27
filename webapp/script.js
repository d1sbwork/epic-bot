async function loadBalance() {
    const res = await fetch("http://127.0.0.1:8000/balance/1");
    const data = await res.json();
    document.getElementById("balance").innerText = data.balance;
}

async function playGame() {
    const res = await fetch("http://127.0.0.1:8000/play/1", {
        method: "POST"
    });

    const data = await res.json();

    alert(data.result);
    loadBalance();
}

loadBalance();