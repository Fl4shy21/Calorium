function calculateMaintenanceCalories() {
    const gender = document.getElementById("gender").value;
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numeric values for age, weight, and height.");
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        alert("Please select a valid gender.");
        return;
    }

    const maintenanceCalories = bmr * activityLevel;

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Your estimated maintenance calories: <strong>${maintenanceCalories.toFixed(2)}</strong> calories per day</p>`;
}