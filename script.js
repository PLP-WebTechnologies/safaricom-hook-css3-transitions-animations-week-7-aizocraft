/* ==========================
   FUNCTION: CALCULATE AREA
   ========================== */
   function calculateArea(length, width) {
    return length * width;
}

// Event Listener for Calculation
document.getElementById("calcAreaBtn").addEventListener("click", function() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);

    // Check if values are valid
    if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
        let area = calculateArea(length, width);
        document.getElementById("result").innerText = `Area: ${area} sq units`;
    } else {
        document.getElementById("result").innerText = "Enter valid numbers!";
    }
});

/* ==========================
   FUNCTION: TOGGLE MODAL
   ========================== */
const modal = document.getElementById("modalBox");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// Function to Toggle Modal
function toggleModal() {
    modal.classList.toggle("show");
}

// Event Listeners
openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

// Close modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        toggleModal();
    }
});
