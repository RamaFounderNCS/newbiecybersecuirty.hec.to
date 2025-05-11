document.addEventListener('DOMContentLoaded', function () {
  fetch('berita.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.news-list');
      container.innerHTML = ''; // Kosongkan dulu

      data.forEach(berita => {
        const article = document.createElement('article');
        article.innerHTML = `
          <h3>${berita.judul}</h3>
          <p><small>${new Date(berita.tanggal).toLocaleDateString('id-ID')}</small></p>
          <p>${berita.isi}</p>
        `;
        container.appendChild(article);
      });
    })
    .catch(error => {
      console.error('Gagal memuat berita:', error);
    });
});
