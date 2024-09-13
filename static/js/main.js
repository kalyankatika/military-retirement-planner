// Main JavaScript file for handling UI interactions and initializations

document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global UI components or event listeners here
    initNavigation();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.target.getAttribute('href');
            navigateTo(url);
        });
    });
}

async function navigateTo(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('main').innerHTML;
        document.querySelector('main').innerHTML = newContent;
        window.history.pushState({}, '', url);
    } catch (error) {
        console.error('Navigation error:', error);
    }
}

function updateFinancialOverview(data) {
    const overviewElement = document.getElementById('financial-overview');
    overviewElement.innerHTML = `
        <p>Annual Retirement Income: $${data.annual_income.toFixed(2)}</p>
        <p>Total Projected Savings: $${data.total_savings.toFixed(2)}</p>
        <p>Income Replacement: ${data.income_replacement.toFixed(2)}%</p>
    `;
}
