function convertToDecimal() {
    const binary = document.getElementById('binary').value;
    const decimal = document.getElementById('decimal');
    const errorText = document.getElementById('errorText');

    // split(e) : 문자열을 'e'를 기준으로 나눠 배열로 반환한다.
    let checkIfBin = binary.split("");
    
    // includes(e) : 배열에 'e'가 있는지 판단하여 true/false로 반환한다.
    if(checkIfBin.includes('0') == true || checkIfBin.includes('1') == true) {
        // input.value = string 처리된다.
        // parseInt는 string을 정수로 반환한다.
        decimal.value = parseInt(binary, 2);
        errorText.style.display = 'none';
    } else if(binary === "") {
        errorText.style.display = 'none';
        decimal.value = "";
    } else {
        errorText.style.display = 'block';
        decimal.value = "";
    }
}