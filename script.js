document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById('level');
    
    // Function to calculate DOM level
    function calculateDOMLevel(element) {
        let level = 0;
        let currentElement = element;

        while (currentElement.parentElement) {
            level++;
            currentElement = currentElement.parentElement;
        }

        return level;
    }

    const domLevel = calculateDOMLevel(targetElement);
    alert(`The level of the element is: ${domLevel}`);
});
