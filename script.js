// Load the groups data from the external GitHub Pages URL
const script = document.createElement('script');
script.src = "https://jakobrossner.github.io/FindYourTeam/sample.js";

// Callback function to run only after sample.js has loaded
script.onload = () => {
  console.log("Groups data loaded successfully.");

  // Now that sample.js is loaded, set up the event handler for "Submit" button
  document.getElementById("submit-btn").addEventListener("click", start);
};

script.onerror = () => {
  alert("Failed to load groups data. Please check the source.");
};

document.head.appendChild(script);

// Start function to handle the name input and validation
function start() {
  // Check if getGroupByName is available (sample.js loaded successfully)
  if (typeof getGroupByName !== 'function') {
    alert("Groups data is still loading. Please try again in a moment.");
    return;
  }

  const userName = document.getElementById("name-input").value.trim();

  // Look up the group by name using getGroupByName
  const group = getGroupByName(userName);

  // If no group is found, show an error
  if (!group) {
    alert("Name not found on list. Please contact the administrator.");
    return;
  }

  // Hide the prompt and show the choice of animations if the name is found
  document.getElementById("prompt").style.display = "none";
  document.getElementById("choice").style.display = "block";

  // Save the group and user's name for display later
  window.selectedName = userName;
  window.selectedGroup = group;
}

// Function to play the chosen animation
function playAnimation(type) {
  document.getElementById("choice").style.display = "none";
  const animationContainer = document.getElementById("animation");
  animationContainer.innerHTML = ""; // Clear any previous content

  if (type === "airplane") {
    // Create the paper airplane and pile images
    const paperPlane = document.createElement("img");
    paperPlane.src = "https://jakobrossner.github.io/FindYourTeam/PaperPlane.svg";
    paperPlane.alt = "Paper Plane";
    paperPlane.classList.add("animate-paper-plane");

    const paperPile = document.createElement("img");
    paperPile.src = "https://jakobrossner.github.io/FindYourTeam/PilePaperPlane.svg";
    paperPile.alt = "Pile of Paper Planes";
    paperPile.classList.add("paper-pile");

    // Append elements to the animation container
    animationContainer.appendChild(paperPlane);
    animationContainer.appendChild(paperPile);

    animationContainer.style.display = "block";
  } else  if (type === "cocktail") {
    const drinks = ['🍸', '🍷', '🍾', '🍺', '🍻', '🥂', '🧉', '🧋']; // Drink emojis array
    const totalDrinks = 47; // Number of drinks to display

    // Generate multiple drinks with random sizes, positions, and animations
    for (let i = 0; i < totalDrinks; i++) {
      const drink = drinks[Math.floor(Math.random() * drinks.length)]; // Select a random drink emoji
      const drinkElement = document.createElement("div");
      drinkElement.classList.add("drink-emoji");
      drinkElement.textContent = drink;

      // Randomize size, position, and delay
      drinkElement.style.fontSize = `${Math.random() * 30 + 150}px`; // Random size between 20px and 50px
      drinkElement.style.top = `${Math.random() * 110}vh`; // Random vertical position
      drinkElement.style.left = `${Math.random() * 110}vw`; // Random horizontal position
      drinkElement.style.animationDelay = `${Math.random() * 4}s`; // Random delay

      animationContainer.appendChild(drinkElement);
    }

    animationContainer.style.display = "block";
  } else if (type === "ant") {
    startAntRain(); // Start the ant rain effect
    setTimeout(() => {
      startAntWalk(animationContainer); // Start ants walking toward anthill after rain
    }, 4000); // Delay to allow the rain to finish
  }

  // After animation, show the result
  setTimeout(displayResult, 4000); // Adjust timeout to include full animation duration
}

// Function to start the ant rain effect
function startAntRain() {
  const antRainContainer = document.createElement("div");
  antRainContainer.id = "ant-rain";
  document.body.appendChild(antRainContainer);

  for (let i = 0; i < 50; i++) {
    const ant = document.createElement("img");
    ant.src = "https://jakobrossner.github.io/FindYourTeam/Ant.svg";
    ant.alt = "Ant";
    ant.classList.add("rain-ant");

    ant.style.left = `${Math.random() * 100}vw`;
    ant.style.animationDelay = `${Math.random() * 2}s`;
    antRainContainer.appendChild(ant);
  }

  setTimeout(() => {
    document.body.removeChild(antRainContainer);
  }, 4000);
}

// Function to start the main ant walk toward the anthill
function startAntWalk(animationContainer) {
  for (let i = 0; i < 11; i++) {
    const ant = document.createElement("img");
    ant.src = "https://raw.githubusercontent.com/JakobRossner/FindYourTeam/refs/heads/main/Ant.svg";
    ant.alt = "Ant";
    ant.classList.add("animate-ant");
    ant.style.animationDelay = `${i * 0.2}s`;
    animationContainer.appendChild(ant);
  }

  const anthill = document.createElement("img");
  anthill.src = "https://raw.githubusercontent.com/JakobRossner/FindYourTeam/refs/heads/main/Anthill.svg";
  anthill.alt = "Anthill";
  anthill.classList.add("anthill");
  animationContainer.appendChild(anthill);
}

function displayResult() {
  document.getElementById("animation").style.display = "none";
  document.getElementById("result").style.display = "block";

  const userName = window.selectedName;
  const group = window.selectedGroup;
  const emojis = ['🎨', '🎸', '🚴‍♂️', '🏅', '🎉', '📚', '🌟', '🍕', '🧘', '🚀', '🎧', '🎮', '🥂', '🎓', '🧑‍🏫', '🌟', '💼', '🤹‍♂️', '🏆', '✨'];

  const resultGroup = document.getElementById("result-group");
  resultGroup.innerHTML = ""; // Clear previous content

  // Display each name and team in the result group
  group.forEach(({ name, team }) => {
    const nameSphere = document.createElement("div");
    nameSphere.classList.add("result-sphere");

    // Apply color-coded class based on the team
    switch (team) {
      case 'Adult Team':
        nameSphere.classList.add("adult-team");
        break;
      case 'CYP Team':
        nameSphere.classList.add("cyp-team");
        break;
      case 'MH Team':
        nameSphere.classList.add("mh-team");
        break;
      case 'UPLA Team':
        nameSphere.classList.add("upla-team");
        break;
      case 'Simulation Team':
        nameSphere.classList.add("simulation-team");
        break;
      default:
        nameSphere.classList.add("unnamed-team"); // For 'Unnamed' or any other team
        break;
    }

    // Select a random emoji and add it above the name
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    nameSphere.innerHTML = `<div class="emoji">${randomEmoji}</div><div class="name">${name}</div><div class="team">${team}</div>`;

    // Apply a random delay to each circle’s animation
    nameSphere.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds

    resultGroup.appendChild(nameSphere);
  });
}
