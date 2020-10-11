function primeCheck() {
    document.getElementById("result").textContent = " ";
    document.getElementById("factorization").textContent = " ";
    let num = Number(getNum());
    if (typeof(num)  == 'number') {
        if (isPrime(num)) {
            document.getElementById("result").textContent = num + "は素数です";
            document.getElementById("factorization").textContent = " ";
        } else {
            document.getElementById("result").textContent = num + "は素数ではありません";
            document.getElementById("factorization").textContent = factorization(num);
        }
    } else {
        window.alert("数字を入力してください！");
    }

    
}

function getNum(){
    return document.getElementById("inputBox").value;
}

function isPrime(num) {
    switch (num) {
        case 0:
        case 1:
            return false;
        case 2:
            return true;
        default:
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    return false
                }
            }
            return true;
    }

    
}

document.getElementById("twitter_button").onclick = function(){
    let result1 = document.getElementById("result").innerHTML;
    let result2 = document.getElementById("factorization").innerHTML;
    let result3 = "素数チェッカーPlusWEB";

    if (result1 == null) {
        return null;
    }
    console.log(result3);
    window.open().location.href = ("https://twitter.com/share?url=" + " "+ "&text=" + String(result1) + String(result2) +"&hashtags=" + String(result3) + "&count=none&lang=ja");
};

function factorization(num) {
    let factAnswer = "";

    if (num == 0 || num == 1 || num == 2) {
        return " "
    }

    for (let i = 2; i <= num; i++){
        if (num % i == 0) {
            factAnswer = factAnswer + i + "×";
            num = num / i;
            i = 1;
        } else if (i == num - 1) {
            factAnswer = factAnswer + num;
            break;
        }
    }

    if (factAnswer.slice(-1) == "×") {
        factAnswer = factAnswer.slice(0,factAnswer.length -1)
    }

    return "素因数分解すると　"+factAnswer+"　です。";
}

function clearContents() {
    document.getElementById("inputBox").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("factorization").textContent = "";
}