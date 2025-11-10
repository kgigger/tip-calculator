// Register service worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

// DOM elements
const billAmount = document.getElementById('billAmount');
const numPeople = document.getElementById('numPeople');
const customTip = document.getElementById('customTip');
const resultsSection = document.getElementById('results');
const resultsGrid = document.querySelector('.results-grid');
const toggleDark = document.getElementById('toggleDark');

// Dark mode
const theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);

toggleDark.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Standard tip percentages
const standardTips = [10, 15, 18, 20];

// Calculate tips
function calculateTips() {
    const bill = parseFloat(billAmount.value) || 0;
    const people = parseInt(numPeople.value) || 1;
    const custom = parseFloat(customTip.value);

    // Clear results if no bill amount
    if (bill === 0) {
        resultsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🧮</div>
                <div class="empty-state-text">Enter a bill amount to calculate tips</div>
            </div>
        `;
        resultsSection.classList.remove('visible');
        return;
    }

    // Show results section
    resultsSection.classList.add('visible');

    const results = [];

    // Add custom tip first if provided
    if (!isNaN(custom) && custom > 0 && custom <= 100) {
        results.push(createTipResult(bill, people, custom, true));
    }

    // Calculate for all standard tips
    standardTips.forEach(percent => {
        results.push(createTipResult(bill, people, percent));
    });

    // Render results
    resultsGrid.innerHTML = results.join('');

    // Add event listeners to learn toggles
    document.querySelectorAll('.learn-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.result-card');
            const breakdown = card.querySelector('.math-breakdown');
            breakdown.classList.toggle('visible');
            e.target.textContent = breakdown.classList.contains('visible') 
                ? 'Hide Math' 
                : 'Learn Math';
        });
    });
}

// Create tip result card
function createTipResult(bill, people, percent, isCustom = false) {
    const tipAmount = bill * (percent / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;
    
    const splitText = people > 1 ? `($${perPerson.toFixed(2)} per person)` : '';
    const customClass = isCustom ? 'custom' : '';
    const customLabel = isCustom ? 'custom' : '';

    // Math breakdown
    const mathBreakdown = generateMathBreakdown(bill, percent, tipAmount, total, people, perPerson);

    return `
        <div class="result-card ${customClass}">
            <div class="result-header">
                <span class="tip-percent ${customLabel}">${percent}% Tip</span>
                <button class="learn-toggle">Learn Math</button>
            </div>
            <div class="amounts">
                <div class="amount-item">
                    <span class="amount-label">Tip Amount</span>
                    <span class="amount-value">$${tipAmount.toFixed(2)}</span>
                </div>
                <div class="amount-item">
                    <span class="amount-label">Total</span>
                    <span class="amount-value">$${total.toFixed(2)}</span>
                    ${people > 1 ? `<span class="amount-per-person">${splitText}</span>` : ''}
                </div>
            </div>
            <div class="math-breakdown">
                ${mathBreakdown}
            </div>
        </div>
    `;
}

// Generate math breakdown explanation
function generateMathBreakdown(bill, percent, tipAmount, total, people, perPerson) {
    let steps = [];

    // Step 1: Calculate tip
    steps.push(`<div class="math-step"><strong>Step 1:</strong> Calculate ${percent}% tip</div>`);
    steps.push(`<div class="math-step">$${bill.toFixed(2)} × ${percent / 100} = <strong>$${tipAmount.toFixed(2)}</strong></div>`);
    
    // Alternative mental math approach
    if (percent === 10) {
        steps.push(`<div class="math-step">💡 Quick tip: Move decimal left one place</div>`);
    } else if (percent === 15) {
        const ten = bill * 0.10;
        const five = ten / 2;
        steps.push(`<div class="math-step">💡 Quick tip: 10% = $${ten.toFixed(2)}, half of that = $${five.toFixed(2)}</div>`);
        steps.push(`<div class="math-step">Add them: $${ten.toFixed(2)} + $${five.toFixed(2)} = $${tipAmount.toFixed(2)}</div>`);
    } else if (percent === 20) {
        const ten = bill * 0.10;
        steps.push(`<div class="math-step">💡 Quick tip: Double 10% ($${ten.toFixed(2)} × 2)</div>`);
    }

    // Step 2: Add to bill
    steps.push(`<div class="math-step"><strong>Step 2:</strong> Add tip to bill</div>`);
    steps.push(`<div class="math-step">$${bill.toFixed(2)} + $${tipAmount.toFixed(2)} = <strong>$${total.toFixed(2)}</strong></div>`);

    // Step 3: Split if needed
    if (people > 1) {
        steps.push(`<div class="math-step"><strong>Step 3:</strong> Split between ${people} people</div>`);
        steps.push(`<div class="math-step">$${total.toFixed(2)} ÷ ${people} = <strong>$${perPerson.toFixed(2)} per person</strong></div>`);
    }

    return steps.join('');
}

// Auto-calculate on input
billAmount.addEventListener('input', calculateTips);
numPeople.addEventListener('input', calculateTips);
customTip.addEventListener('input', calculateTips);

// Initial calculation (will show empty state)
calculateTips();

// Focus on bill amount on load
billAmount.focus();
