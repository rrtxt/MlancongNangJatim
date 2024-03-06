import React from 'react'
import "../assets/styles/components2/hero-module.css";
import { Link } from 'react-router-dom';


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
            <Link to={"/search"}>
              <div className="thumbnail">
                <img src="static/image/musolah.png" alt="Destination 1" />
              </div>
            </Link>
            <Link to={"/search"}>
              <div className="thumbnail">
                <img src="static/image/tp.png" alt="Destination 2" />
              </div>
            </Link>
            <Link to={"/search"}>
              <div className="thumbnail">
                <img src="static/image/ondomohoen.png" alt="Destination 3" />
              </div>
            </Link>
            <Link to={"/search"}>
              <div className="thumbnail">
                <img src="static/image/tot.png" alt="Destination 1" />
              </div>
            </Link>
            <Link to={"/search"}>
              <div className="thumbnail">
                <img src="static/image/ijen.png" alt="Destination 2" />
              </div>
            </Link>
            <Link to={"/search"}>
              <div className="thumbnail">
                <img src="static/image/redungklurak.png" alt="Destination 3" />
              </div>
            </Link>
          </div>
          <button className="prev-btn" onClick={prevBtnClickHandler}>&lt;</button>
          <button className="next-btn" onClick={nextBtnClickHandler}>&gt;</button>
        </div>
      </section>

      <section className="city-options" id='cities'>
        <h2>Pilih Kotamu!</h2>
        <div className="city-buttons">
          <Link to={"/search"}>
            <button>Surabaya</button>
          </Link>
          <Link to={"/search"}>
            <button>Malang</button>
          </Link>
          <Link to={"/search"}>
            <button>Batu</button>
          </Link>
          <Link to={"/search"}>
           <button>Probolinggo</button>
          </Link>
          <Link to={"/search"}>
            <button>Mojokerto</button>
          </Link>
          <Link to={"/search"}>
            <button>Banyuwangi</button>
          </Link>
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