document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chartForm");
  const clearButton = document.getElementById("clear");
  let chartInstance = null; // To store the Chart instance

  // Event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const wallsInput = document.getElementById("walls").value;
    const heightsInput = document.getElementById("heights").value;

    // Parse number of walls
    const walls = parseInt(wallsInput);

    // Parse heights into an array of numbers
    const heights = heightsInput.split("#").map(Number);

    // Validate the number of walls and heights array length
    if (isNaN(walls) || heights.length !== walls || heights.some(isNaN)) {
      alert("Please enter a valid number of walls and corresponding heights.");
      return;
    }

    // Destroy the previous chart if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Generate the bar chart and update the table
    generateBarChart(walls, heights);
    updateTable(walls, heights);
  });

  // Clear button functionality
  clearButton.addEventListener("click", () => {
    clearInputs();  // Clear input fields
    clearChart();   // Clear the bar chart
    clearTable();   // Clear the table
  });

  // Function to generate the bar chart for wall heights
  const generateBarChart = (walls, heights) => {
    const ctx = document.getElementById("barChart").getContext("2d");

    // Create chart labels based on the number of walls
    const labels = Array.from({ length: walls }, (_, i) => `Wall ${i + 1}`);

    // Create a new Chart.js instance
    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Wall Height",
            data: heights,
            backgroundColor: "black", // Bar color
            borderColor: "rgba(75, 192, 192, 1)",  //Border color
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Ensure y-axis starts at 0
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend for simplicity
          },
        },
      },
    });
  };

  // Function to update the table with wall and visibility data
  const updateTable = (walls, heights) => {
    const visibleToLeft = countVisible(heights);
    const visibleToRight = countVisible(heights.slice().reverse());

    // Create table rows dynamically
    let tableHTML = `<tr><th>Wall</th><th>Height</th></tr>`;
    heights.forEach((height, i) => {
      tableHTML += `<tr><td>Wall ${i + 1}</td><td>${height}</td></tr>`;
    });

    // Add summary rows
    tableHTML += `<tr><th>Total Walls</th><td>${walls}</td></tr>`;
    tableHTML += `<tr><th>Visible from Left Person</th><td>${visibleToLeft}</td></tr>`;
    tableHTML += `<tr><th>Visible from Right Person</th><td>${visibleToRight}</td></tr>`;

    // Set the table's inner HTML
    document.getElementById("resultTable").innerHTML = tableHTML;
  };

  // Function to count visible walls from a given direction
  const countVisible = (heights) => {
    let visible = 0;
    let maxSeen = 0;

    heights.forEach((height) => {
      if (height > maxSeen) {
        visible++; // Increment visible count if the wall is taller
        maxSeen = height; // Update the maximum height seen
      }
    });

    return visible;
  };

  // Function to clear the input fields
  const clearInputs = () => {
    document.getElementById("walls").value = "";
    document.getElementById("heights").value = "";
  };

  // Function to destroy the bar chart if it exists
  const clearChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
  };

  // Function to clear the table
  const clearTable = () => {
    document.getElementById("resultTable").innerHTML = "";
  };
});


