// Charts.js file for handling chart creation and updates

let retirementChart;

function setupRetirementChart() {
    const ctx = document.getElementById('retirement-chart').getContext('2d');
    retirementChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => 2025 + i),
            datasets: [{
                label: 'Projected Retirement Savings',
                data: [],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Savings ($)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

function updateRetirementChart(data) {
    const projectedSavings = calculateProjectedSavings(data);
    retirementChart.data.datasets[0].data = projectedSavings;
    retirementChart.update();
}

function calculateProjectedSavings(data) {
    const years = 30;
    const annualSavings = data.annual_salary * (data.savings_rate / 100);
    const initialSavings = data.tsp_balance;
    const projectedSavings = [initialSavings];

    for (let i = 1; i < years; i++) {
        const previousYearSavings = projectedSavings[i - 1];
        const newSavings = previousYearSavings * 1.07 + annualSavings; // Assuming 7% annual return
        projectedSavings.push(newSavings);
    }

    return projectedSavings;
}
