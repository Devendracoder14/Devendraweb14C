// Student Count Animation
let studentCount = 0;
const studentCounter = document.getElementById('student-counter');

function updateStudentCount() {
    if (studentCount < 1500) {
        studentCount++;
        studentCounter.textContent = studentCount;
        setTimeout(updateStudentCount, 10);
    }
}

window.onload = function () {
    updateStudentCount();
};

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        e.preventDefault();
    } else {
        alert('Your message has been sent!');
    }
});
