const container = document.getElementById("user-container");
const fetchBtn = document.getElementById("btn-fetch");

function fetchUserData() {
  container.innerHTML = "<p>Loading...</p>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      container.innerHTML = "";
      data.forEach((user) => {
        const div = document.createElement("div");
        div.classList.add("user-card");
        div.innerHTML = `
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch((err) => {
      container.innerHTML = `<p class="error">Failed to fetch data. Please check your internet connection.</p>`;
      console.error("Fetch error:", err);
    });
}

// Fetch when page loads
window.onload = fetchUserData;

// Fetch on button click
fetchBtn.addEventListener("click", fetchUserData);
