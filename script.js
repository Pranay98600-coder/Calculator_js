let currentInput = '';
        let operation = '';
        let firstValue = null;

        function appendNumber(number) {
            currentInput += number;
            document.getElementById("display").value = currentInput;
            document.getElementById("display").style.color = 'black';
        }

        function setOperation(op) {
            if (currentInput === '') {
                alert("Please enter a number first!");
                return;
            }
            firstValue = parseFloat(currentInput);
            operation = op;
            currentInput = '';
            document.getElementById("display").value = firstValue + ' ' + operation;
            document.getElementById("display").style.color = 'black';
        }

        function calculate() {
            if (firstValue === null || currentInput === '') {
                alert("Invalid operation!");
                document.getElementById("display").style.color = 'red';
                return;
            }
            let secondValue = parseFloat(currentInput);
            let result;
            switch (operation) {
                case '+': result = firstValue + secondValue; break;
                case '-': result = firstValue - secondValue; break;
                case '*': result = firstValue * secondValue; break;
                case '/': 
                    if (secondValue === 0) {
                        alert("Cannot divide by zero!");
                        document.getElementById("display").style.color = 'red';
                        return;
                    }
                    result = firstValue / secondValue;
                    break;
                default: alert("Unknown operation!"); return;
            }
            document.getElementById("display").value = firstValue + ' ' + operation + ' ' + secondValue + ' = ' + result;
            currentInput = result.toString();
            firstValue = null;

            document.getElementById("display").style.color = 'green';
        }

        function calculateSquare() {
            if (currentInput === '') {
                alert("Please enter a number!");
                document.getElementById("display").style.color = 'red';
                return;
            }
            let num = parseFloat(currentInput);
            let result = num * num;
            document.getElementById("display").value = num + "² = " + result;
            currentInput = result.toString();
            document.getElementById("display").style.color = 'green';
        }

        function clearDisplay() {
            currentInput = '';
            firstValue = null;
            operation = '';
            document.getElementById("display").value = '';
            document.getElementById("display").style.color = 'black';
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            document.getElementById("display").value = currentInput;
            document.getElementById("display").style.color = 'black';
        }