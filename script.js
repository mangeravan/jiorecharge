

function toggleDrawer(isOpen) {
    const drawer = document.getElementById("drawer");
    if (isOpen) {
        drawer.classList.add("open");
    } else {
        drawer.classList.remove("open");
    }
}


const plans = [
    {
        id: 1,
        title: "Plan ₹3599",
        details: "2.5GB/day for 365 days • Unlimited calls • 100 SMS/day",
        originalPrice: 3599,
        discountedPrice: 1999
    },
    {
        id: 2,
        title: "Plan ₹2025",
        details: "2.5GB/day for 200 days • Unlimited calls • 100 SMS/day",
        originalPrice: 2025,
        discountedPrice: 999
    },
    {
        id: 3,
        title: "Plan ₹999",
        details: "2GB/day for 98 days • Unlimited calls • 100 SMS/day",
        originalPrice: 999,
        discountedPrice: 450
    },
    {
        id: 4,
        title: "Plan ₹729",
        details: "3GB/day for 56 days • Unlimited calls • 100 SMS/day",
        originalPrice: 729,
        discountedPrice: 280
    },
    {
        id: 5,
        title: "Plan ₹799",
        details: "1.5GB/day for 90 days • Unlimited calls • 100 SMS/day",
        originalPrice: 799,
        discountedPrice: 300
    },
    {
        id: 6,
        title: "Plan ₹399",
        details: "3GB/day for 28 days • Unlimited calls • 100 SMS/day",
        originalPrice: 399,
        discountedPrice: 180
    },
    {
        id: 7,
        title: "Plan ₹349",
        details: "2GB/day for 28 days • Unlimited calls • 100 SMS/day",
        originalPrice: 349,
        discountedPrice: 150
    },
    {
        id: 8,
        title: "Plan ₹299",
        details: "1.5GB/day for 28 days • Unlimited calls • 100 SMS/day",
        originalPrice: 299,
        discountedPrice: 100
    },
    {
        id: 9,
        title: "Plan ₹129",
        details: "30GB for plan expiry • No calls • No SMS",
        originalPrice: 129,
        discountedPrice: 50
    }
];

// Render Plans to the DOM
const plansContainer = document.getElementById("plans");

plans.forEach(plan => {
    // Calculate discount percentage
    const discountPercentage = Math.round(
        ((plan.originalPrice - plan.discountedPrice) / plan.originalPrice) * 100
    );

    // Create the plan card
    const planCard = document.createElement("div");
    planCard.className = "plan-card";

    planCard.innerHTML = `
        <div class="plan-header">
            <div class="plan-title">
                <img src="./assets/jioLogo.png" alt="Turbo Icon" class="turbo-icon">
                <span>${plan.title}</span>
            </div>
            <div class="plan-5g-badge">5G Active</div>
        </div>
        <div class="plan-details">${plan.details}</div>
        <div class="plan-pricing">
            <span class="original-price">₹${plan.originalPrice}</span>
            <span class="discount-text">Save ${discountPercentage}%</span>
        </div>
        <div class="plan-price">Now: ₹${plan.discountedPrice}</div>
        <button class="plan-button" onclick="toggleDrawer(true)">Recharge Now</button>
    `;

    // Append to container
    plansContainer.appendChild(planCard);
});
