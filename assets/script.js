// ===================================================================
// ========================= navigation bar ==========================  
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-times');
};

// Close navbar when scrolling
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  var menuBtn = document.querySelector('#menu-btn');
  navbar.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  menuBtn.classList.add('fa-bars');
});



// ===================================================================
// =============================== FAQ ===============================

let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    let clickedLi;
    if (e.target.classList.contains("question-arrow")) {
      clickedLi = e.target.parentElement;
    } else {
      clickedLi = e.target.parentElement.parentElement;
    }
    clickedLi.classList.toggle("showAnswer");
  });
}




// =============================================================================
// ============================== Events section  ============================== 

// Sample event data
const events = [
  {
    title: "Farm-to-Table Workshop",
    date: "2023-09-15",
    location: "Organica Farm",
    description: "Join us for a hands-on workshop and learn how to create delicious farm-to-table meals using our fresh, organic produce.",
  },
  {
    title: "Harvest Festival",
    date: "2023-10-20",
    location: "Organica Farm",
    description: "Celebrate the bountiful harvest season with us! Enjoy live music, farm tours, pumpkin picking, and tasty treats for the whole family.",
  },
  {
    title: "Organic Gardening Seminar",
    date: "2023-11-05",
    location: "Organica Farm Education Center",
    description: "Discover the secrets of successful organic gardening in this informative seminar led by our expert farmers. Learn to grow your own organic vegetables at home.",
  },
  {
    title: "Farm Tour and Tasting",
    date: "2023-12-02",
    location: "Organica Farm",
    description: "Experience a guided tour of our farm, where you'll learn about our sustainable practices and sample the freshest produce straight from the fields.",
  },
  {
    title: "Winter Farmers Market",
    date: "2024-01-15",
    location: "Organica Farm Store",
    description: "Beat the winter blues with our indoor farmers market, featuring a variety of local vendors offering fresh produce, artisanal products, and warm beverages.",
  },
  {
    title: "Kids' Farm Day",
    date: "2024-02-25",
    location: "Organica Farm",
    description: "Bring the kids for a fun-filled day on the farm! They'll have the opportunity to interact with farm animals and participate in hands-on activities.",
  }
];

// Function to generate event cards dynamically
function generateEventCards() {
  const eventList = document.getElementById("event-list");

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
        <h3>${event.title}</h3>
        <p class="date"><strong>Date:</strong> ${event.date}</p>
        <p class="location"><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <div class="button-container">
          <a href="#" class="button">RSVP</a>
        </div>
      `;

    eventList.appendChild(eventCard);
  });
}

// Call the function to generate event cards on page load
window.addEventListener("load", generateEventCards);




// ===================================================================
// =========================== Agroecology ===========================


const farmingPracticesData = [
  {
      title: "Crop Rotation",
      description:
        "Crop rotation is an essential practice that helps maintain soil fertility and prevent the buildup of pests and diseases. It involves planting different crops in a specific sequence on the same land over a period of time. Learn more about crop rotation and its benefits.",
      link: "#",
    },
    {
      title: "Organic Pest Control",
      description:
        "Using organic pest control methods is crucial for minimizing chemical inputs and preserving the environment. Learn about effective techniques such as companion planting, beneficial insects, and natural repellents.",
      link: "#",
    },
    {
      title: "Water Conservation",
      description:
        "Water conservation is vital for sustainable farming. Discover practices like drip irrigation, mulching, and rainwater harvesting to optimize water usage and protect this precious resource.",
      link: "#",
    },
    {
      title: "Companion Planting",
      description:
        "Companion planting involves planting different plants together to benefit each other. Certain plant combinations can repel pests, attract beneficial insects, and improve nutrient uptake. Learn about effective companion planting techniques.",
      link: "#",
    },
    {
      title: "Integrated Pest Management",
      description:
        "Integrated Pest Management (IPM) is a holistic approach to pest control that combines multiple strategies to minimize pests while reducing reliance on pesticides. Explore IPM methods and practices.",
      link: "#",
    },
    {
      title: "Soil Health Management",
      description:
        "Maintaining healthy soil is crucial for productive and sustainable farming. Learn about soil testing, organic matter enrichment, cover cropping, and other practices to enhance soil health.",
      link: "#",
    },
  ];

  // Function to generate event cards dynamically
  function generatePracticeCards() {
    const eventList = document.getElementById("farmingPractices");

    farmingPracticesData.forEach((event) => {
      const practiceCard = document.createElement("div");
      practiceCard.classList.add("practice-card");

      practiceCard.innerHTML = `
    <h3>${event.title}</h3>
    
    <p>${event.description}</p>
    <div class="button-container">
    </div>`;

      eventList.appendChild(practiceCard);
    });
  }

  // Call the function to generate event cards on page load
  window.addEventListener("load", generatePracticeCards);

