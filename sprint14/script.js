window.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById("content");
  const navButtons = document.querySelectorAll(".nav-button");

  let data = null;

  async function loadData() {
    try {
      const response = await fetch("data.json");

      if (!response.ok) {
        throw new Error("Nu s-au putut incarca datele din JSON!");
      }

      data = await response.json();

      renderSection("home");

    } catch (error) {
      console.error("Eroare la incarcarea datelor:", error);
    }
  }

  function renderSection(section) {
    navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.section === section));

    content.innerHTML = "";

    document.body.className = section;

    if (section === "home") {
      renderHome();
    } else if (section === "destination") {
      renderDestination();
    } else {
      content.innerHTML = "<p>Pagina nu există înca.</p>";
    }
  }

  function renderHome() {
    content.innerHTML = `
      <div class="home-page">
        <div class="left-home">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. Sit back and relax because we’ll give you 
            a truly out-of-this-world experience!
          </p>
        </div>
        <button id="explore-btn">EXPLORE</button>
      </div>
    `;

    const exploreBtn = document.getElementById("explore-btn");
    exploreBtn.addEventListener("click", () => renderSection("destination"));
  }

  function renderDestination() {
    if (!data || !data.destinations) {
      content.innerHTML = "<p>Datele pentru destinații nu sunt disponibile.</p>";
      return;
    }

    content.innerHTML = `
    <div class="destination-page">
        <h1><span>01</span> PICK YOUR DESTINATION</h1>
        <div class="destination-box">
          <img class="dst-img" src="" alt="">
          <div class="destination-box-right">
            <div class="dst-nav">
              <button class="dst-button" data-index="0">MOON</button>
              <button class="dst-button" data-index="1">MARS</button>
              <button class="dst-button" data-index="2">EUROPA</button>
              <button class="dst-button" data-index="3">TITAN</button>
            </div>
            <div class="dst-info">
              <h1 class="dst-name"></h1>
              <p class="dst-desc"></p>
            </div>
            <div class="dst-stats">
              <div class="dst-distance-box">
                <p>AVG. DISTANCE</p>
                <h3 class="dst-distance"></h3>
              </div>
              <div class="dst-travel-box">
                <p>EST. TRAVEL TIME</p>
                <h3 class="dst-travel"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    updateDestination(0);

    const dstButtons = document.querySelectorAll(".dst-nav button");
    dstButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index);
        updateDestination(index);
      });
    });
  }

  function updateDestination(index) {
    const destinations = data.destinations;
    const current = destinations[index];

    const img = document.querySelector(".dst-img");
    const name = document.querySelector(".dst-name");
    const desc = document.querySelector(".dst-desc");
    const distance = document.querySelector(".dst-distance");
    const travel = document.querySelector(".dst-travel");

    img.src = current.images.png;
    img.alt = current.name;
    name.textContent = current.name;
    desc.textContent = current.description;
    distance.textContent = current.distance;
    travel.textContent = current.travel;

    const dstButtons = document.querySelectorAll(".dst-nav button");
    dstButtons.forEach(btn => btn.classList.remove("active"));
    dstButtons[index].classList.add("active");
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      renderSection(btn.dataset.section);
    });
  });

  loadData();
});