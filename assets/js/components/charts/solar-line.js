var ctx = document.getElementById("solarline").getContext('2d');
// End Defining data

var solarline = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["00:00AM", "03:00AM", "06:00AM", "09:00AM", "12:00PM", "03:00PM", "06:00PM"],
        datasets: [
            {
                label: 'MAX', // Name the series
                data:  [0, 3, 4, 6, 4, 3, 0], // Specify the data values array
                fill: false,
                borderColor: 'red', // Add custom color border (Line)
                backgroundColor: 'red', // Add custom color background (Points and Fill)

                borderWidth: 1, // Specify bar border width
                borderDash: [5, 5]
            },
            {
                label: 'AVG',
                data: [0, 2, 3, 5, 3, 2, 0],
                fill: false,
                borderColor: 'green', // Add custom color border (Line)
                backgroundColor: 'green', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            },
            {
                label: 'MIN',
                data: [0, 1, 2, 3, 2, 1, 0],
                fill: false,
                borderColor: 'yellow', // Add custom color border (Line)
                backgroundColor: 'yellow', // Add custom color background (Points and Fill)

                borderWidth: 1, // Specify bar border width
                borderDash: [5, 5]
            }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    }
});