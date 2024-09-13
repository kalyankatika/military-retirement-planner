// Calculations.js file for handling financial calculations

function calculateAnnualIncome(milRetirement, vaDisability) {
    return (milRetirement + vaDisability) * 12;
}

function calculateTotalSavings(tspBalance, annualSalary, savingsRate, years = 20) {
    const annualSavings = annualSalary * (savingsRate / 100);
    return tspBalance + (annualSavings * years);
}

function calculateIncomeReplacement(annualRetirementIncome, currentAnnualSalary) {
    return (annualRetirementIncome / currentAnnualSalary) * 100;
}

function calculateProjectedSavings(initialBalance, annualContribution, years, rateOfReturn = 0.07) {
    let balance = initialBalance;
    const projectedSavings = [balance];

    for (let i = 1; i <= years; i++) {
        balance = balance * (1 + rateOfReturn) + annualContribution;
        projectedSavings.push(balance);
    }

    return projectedSavings;
}
