

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
        title: "₹1999",
        originalPrice: 1999,
        discountedPrice: 1999,
        validitiy:"365 Days",
        data :"2.5 GB/Day",
        perMonth:"ONLY ₹166/MONTH ",
        
    },
  
    {
        id: 3,
        title: "Plan ₹999",
        details: "2GB/day for 200 days • Unlimited calls • 100 SMS/day",
        originalPrice: 999,
        discountedPrice: 450,
        validitiy:"200 Days",
        data :"2.5 GB/Day",
        perMonth:"ONLY ₹128/MONTH ",
    },
    {
        id: 4,
        title: "Plan ₹280",
        details: "3GB/day for 56 days • Unlimited calls • 100 SMS/day",
        originalPrice: 450,
        discountedPrice: 280,
        perMonth:"ONLY ₹128/MONTH ",
        validitiy:"98 Days",
        data :"2 GB/Day",
    },

    
    {
        id: 5,
        title: "Plan ₹150",
        details: "1.5GB/day for 90 days • Unlimited calls • 100 SMS/day",
        originalPrice: 150,
        discountedPrice: 100,
        perMonth:"ONLY ₹150 ",
        validitiy:"28 Days",
        data :"1.5 GB/Day",
    },
    {
        id: 6,
        title: "Plan ₹300",
        details: "1.5GB/day for 90 days • Unlimited calls • 100 SMS/day",
        originalPrice: 150,
        discountedPrice: 100,
        perMonth:"ONLY ₹100 ",
        validitiy:"90 Days",
        data :"1.5 GB/Day",
    },
    {
        id: 7,
        title: "Plan ₹100",
        details: "3GB/day for 28 days • Unlimited calls • 100 SMS/day",
        originalPrice: 100,
        discountedPrice: 1,
        perMonth:" Add DATA ONLY ₹100 ",
        validitiy:"28 Days",
        data :"2 GB/Day",
    },
    {
        id: 8,
        title: "Plan ₹180",
        details: "3GB/day for 28 days • Unlimited calls • 100 SMS/day",
        originalPrice: 100,
        discountedPrice: 1,
        perMonth:" Add DATA ONLY ₹180 ",
        validitiy:"28 Days",
        data :"3 GB/Day",
    },
    {
        id: 9,
        title: "Plan ₹60",
        details: "2GB/day for 28 days • Unlimited calls • 100 SMS/day",
        originalPrice: 1,
        discountedPrice: 1,
        perMonth:" ADD DATA ONLY ₹60 ",
        validitiy:"28 Days",
        data :"1GB/Day",
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

    planCard.innerHTML = ` <div class="_1">
            <p> ${plan.perMonth}</p>
            <img src="./assets/5GTag.svg" width="50px" alt="" />
          </div>
          <div class="_2">
            <p>${plan.title}</p>
            <button class="details_btn" onclick="toggleDrawer(true)">View details</button>
           
          </div>
          <div class="_3">
            <div class="box">
              <p class="title">Validity</p>
              <p class="subtitle">${plan.validitiy}</p>
            </div>
            <div class="box">
              <p class="title">Data</p>
              <p class="subtitle">${plan.data}</p>
            </div>
            <div class="box">
              <p class="title">Subscription</p>
              <div class="center">

              <img src="./assets/jt.svg" class="subtitle" width="30px" style="text-align: center;" />
          </div>
              </div>
          </div>
          <div class="_4">
            <button class="plan-button" onclick="toggleDrawer(true)">Recharge Now</button>
          </div>
        </div>`;

    // Append to container
    plansContainer.appendChild(planCard);
});
