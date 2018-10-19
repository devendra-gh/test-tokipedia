'use strict';

(function () {

    //const array = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110'];
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    const arrLen = array.length;
    const matrixLen = (9 - 1);
    var tempArray = [];
    var currentIndex = 0;
    var container = document.getElementById('container');

    // Function to add item in container
    function addItem(value) {
        var div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = value;

        container.appendChild(div);
    }

    // Function to add button in container
    function addButton() {
        var button = document.createElement('button');
        button.className = 'item';
        button.innerHTML = 'Click';
        button.onclick = onClickHandler;

        container.appendChild(button);
    }

    // Function to Clean all nodes
    function cleanNodes() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    // Function Login to get New Nodes value
    function getNodesValue() {
        if (currentIndex === 0) {
            tempArray = array;
            currentIndex = matrixLen;
        } else {
            tempArray = [];

            for (var newItem = currentIndex; newItem < arrLen; newItem++) {
                tempArray.push(array[newItem]);
                currentIndex = newItem;
            }

            var tempArrayLen = tempArray.length;
            if (tempArrayLen !== matrixLen) {
                for (var remainingItem = 0; remainingItem <= (matrixLen - tempArrayLen); remainingItem++) {
                    tempArray.push(array[remainingItem]);
                    currentIndex = remainingItem;
                }
            }
        }
    }

    // Function to Update all nodes
    function updateNodes() {
        for (var item = 0; item < matrixLen; item++) {
            addItem(tempArray[item]);
        }
        addButton();
    }

    // Click Handler to update Values
    function onClickHandler() {

        // Clean All Nodes
        cleanNodes();

        // Get Nodes Value
        getNodesValue();

        // Update Nodes
        updateNodes();
    }

    onClickHandler();

})();