document.addEventListener("dblclick", function() {
    alert(new Date());
});

document.getElementById('toggle').addEventListener('click', function() {
    const emailField = document.getElementById('emailBox');
    const emailCheckbox = document.getElementById('toggle');
    
    if (emailCheckbox.checked) {
        emailField.classList.remove('hidden');
    } else {
        emailField.classList.add('hidden');
    }
});
