document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("click", () => {
            checkbox.classList.toggle("active");
        });
    })
}) ;