async function loadData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();

    const dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = "";

    data.forEach(item => {
      const statusClass = item.status.toLowerCase();

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${item.location}</h2>
        <p><strong>Ice Thickness:</strong> ${item.iceThickness} cm</p>
        <p><strong>Surface Temperature:</strong> ${item.surfaceTemp} °C</p>
        <p><strong>Snow Accumulation:</strong> ${item.snowAccumulation} cm</p>
        <p><strong>External Temperature:</strong> ${item.externalTemp} °C</p>
        <span class="status ${statusClass}">${item.status}</span>
      `;

      dashboard.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading dashboard data:", error);
  }
}

loadData();
