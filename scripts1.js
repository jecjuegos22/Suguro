// JavaScript function to add event listeners to the buttons
document.addEventListener('DOMContentLoaded', function () {
    // Get all the buttons
    var buttons = document.querySelectorAll('.sow-icon-elegantline');

    // Add event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the text associated with the clicked button
            var text = button.parentElement.nextElementSibling.querySelector('h5').innerText + '\n' +
                       button.parentElement.nextElementSibling.querySelector('p').innerText;

            // Show the text in an alert
            alert(text);
        });
    });
});
