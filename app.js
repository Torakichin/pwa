document.addEventListener('DOMContentLoaded', function() {
    function calculateSum() {
        const value1 = parseFloat(document.getElementById('input-value1').value);
        const value2 = parseFloat(document.getElementById('input-value2').value);

        if (!isNaN(value1) && !isNaN(value2)) {
            const sum = value1 + value2;
            document.getElementById('result').textContent = '結果: ' + sum;
        } else {
            alert('有効な数値を入力してください。');
        }
    }

    document.getElementById('calculate-button').addEventListener('click', calculateSum);
});
