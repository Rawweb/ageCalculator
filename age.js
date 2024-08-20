document
    .getElementById("inputContainer")
    .addEventListener("click", function () {
        // Simulate a click event on the input field to open the calendar
        document.getElementById("dob").click();
    });

function calculateAge() {
    const dob = document.getElementById("dob").value; // Get the date of birth from the input field

    // Check if the date of birth is entered
    if (!dob) {
        // Display an error message if date is missing
        document.getElementById("result").innerText =
            "Please select your date of birth.";
        return; // Exit the function
    }

    // Convert the date of birth to a Date object
    const dobDate = new Date(dob);
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years, months, days, and hours
    let years = currentDate.getFullYear() - dobDate.getFullYear();
    let months = currentDate.getMonth() - dobDate.getMonth();
    let days = currentDate.getDate() - dobDate.getDate();
    let hours = currentDate.getHours() - dobDate.getHours();

    // Adjust the month and day calculations if needed
    if (days < 0) {
        months--;
        days += new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the calculated age
    document.getElementById(
        "result"
    ).innerText = `Age: ${years} years, ${months} months, ${days} days, ${hours} hours`;
    // Change the button text to "Reset"
    document.getElementById("calculate-reset-btn").innerText = "Reset";
}

function resetCalculator() {
    // Clear the date of birth input field
    document.getElementById("dob").value = "";
    // Clear the result display
    document.getElementById("result").innerText = "";
    // Change the button text back to "Calculate"
    document.getElementById("calculate-reset-btn").innerText = "Calculate";
}

function handleButtonClick() {
    const button = document.getElementById("calculate-reset-btn");
    if (button.innerText === "Calculate") {
        calculateAge();
    } else {
        resetCalculator();
    }
}
