import React from 'react'
import "../assets/styles/components2/hero-module.css";


function HeroSection() {
  const prevBtnClickHandler = () => {
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const thumbnailWidth = thumbnailsContainer.offsetWidth;
    let scrollPosition = thumbnailsContainer.scrollLeft;
    if (scrollPosition > 0) {
      scrollPosition -= thumbnailWidth;
      thumbnailsContainer.scrollLeft = scrollPosition;
    }
  };

  const nextBtnClickHandler = () => {
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const thumbnailWidth = thumbnailsContainer.offsetWidth;
    let scrollPosition = thumbnailsContainer.scrollLeft;
    if (scrollPosition < thumbnailsContainer.scrollWidth - thumbnailWidth) {
      scrollPosition += thumbnailWidth;
      thumbnailsContainer.scrollLeft = scrollPosition;
    }
  };

  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <h1>Mlancong Nang Jatim</h1>
          <p>Mlancong—berpergian untuk bersenang-senang—merupakan sebuah website yang memberikan segala informasi
            terkait berbagai wisata di Jawa Timur yang akan mempermudah pengalaman anda untuk mempersiapkan pelancongan anda!</p>
          <a href="/search" className="explore-btn">Explore Now!</a>
        </div>
      </header>

      <section className="top-destinations">
        <h2>Destinasi Kesukaan</h2>
        <div className="thumbnails-container">
          <div className="thumbnails">
            <div className="thumbnail">
            <a href="/search">
              <img src="src/assets/image/tunjungan.png" alt="Destination 1" />
            </a>
            </div>
            <div className="thumbnail">
            <a href="/search">
              <img src="src/assets/image/18.png" alt="Destination 1" />
            </a>
            </div>
            <div className="thumbnail">
            <a href="/search">
              <img src="src/assets/image/40.png" alt="Destination 1" />
            </a>
            </div>
            <div className="thumbnail">
            <a href="/search">
              <img src="src/assets/image/32.png" alt="Destination 1" />
            </a>
            </div>
            <div className="thumbnail">
            <a href="/search">
              <img src="src/assets/image/21.png" alt="Destination 1" />
            </a>
            </div>
            <div className="thumbnail">
            <a href="/search">
              <img src="src/assets/image/48.png" alt="Destination 1" />
            </a>
            </div>
          </div>
          <button className="prev-btn" onClick={prevBtnClickHandler}>&lt;</button>
          <button className="next-btn" onClick={nextBtnClickHandler}>&gt;</button>
        </div>
      </section>

      <section className="city-options">
        <h2>Pilih Kotamu!</h2>
        <div className="city-buttons">
          <button>Surabaya</button>
          <button>Malang</button>
          <button>Batu</button>
          <button>Probolinggo</button>
          <button>Mojokerto</button>
          <button>Banyuwangi</button>
        </div>
        <div className="city-buttons">
          <button>Pasuruan</button>
          <button>Jember</button>
          <button>Kediri</button>
          <button>Blitar</button>
          <button>Madiun</button>
          <button>Lumajang</button>
          <button>Tuban</button>
        </div>
        <div className="city-buttons">
          <button>Lamongan</button>
          <button>Gresik</button>
          <button>Bangkalan</button>
          <button>Sumenep</button>
          <button>Pamekasan</button>
          <button>Trenggalek</button>
        </div>
        <div className="city-buttons">
          <button>Tulungagung</button>
          <button>Nganjuk</button>
          <button>Ponorogo</button>
          <button>Bojonegoro</button>
          <button>Ngawi</button>
          <button>Magetan</button>
          <button>Sidoarjo</button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;