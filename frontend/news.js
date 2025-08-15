const container = document.getElementById("news-container");

newsData.forEach(news => {
  const card = document.createElement("div");
  card.classList.add("news-card");

  card.innerHTML = `
    <img src="${news.image}" alt="${news.title}" />
    <div class="news-content">
      <div class="news-title">${news.title}</div>
      <div class="news-date">${news.date}</div>
      <div class="news-description">${news.description}</div>
    </div>
  `;

  container.appendChild(card);
});
