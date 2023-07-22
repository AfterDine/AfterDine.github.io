import React, { useState } from 'react';
import styles from './listings.module.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const images = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0001/9202/0527/products/quadros-democrart-gustavo-jacob-paisagem-idilica-wanaka-tree-NZ-galeria-de-arte-obras-de-arte_875x.jpg?v=1528209266',
      alt: '',
      caption: 'The water was freezing!',
      className: `${styles.card_small} ${styles.card_exp}`
    },
    {
      src: 'https://wallpaperaccess.com/full/176937.jpg',
      alt: '',
      caption: 'The water was freezing!',
      className: `${styles.card_small} ${styles.card_exp}`
    },
    {
      src: 'https://img.freepik.com/fotos-gratis/floresta-do-outono_1182-869.jpg?w=2000',
      alt: '',
      caption: 'The fall came early!',
      className: `${styles.card_medium} ${styles.card_exp}`
    },
    {
      src: 'https://images.hdqwalls.com/wallpapers/beautiful-landscape-digital-art-4k-tj.jpg',
      alt: '',
      caption: 'The water was freezing!',
      className: `${styles.card_large} ${styles.card_exp}`
    },
    {
      src: 'https://external-preview.redd.it/vBmSeLVnhHRFlK0Se7WloKYhvOJhQ2pgftaesz33K30.png?auto=webp&s=dd6b2756b75924d866413cdeabcc3c202f5974c2',
      alt: '',
      caption: 'The water was freezing!',
      className: `${styles.card_small} ${styles.card_exp}`
    },
    {
      src: 'https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem.jpg',
      alt: '',
      caption: 'The water was freezing!',
      className: `${styles.card_small} ${styles.card_exp}`
    },
    {
      src: 'https://i.pinimg.com/736x/09/45/b8/0945b873ddd15f862b82890f82767e39.jpg',
      alt: '',
      caption: 'The water was freezing!',
      className: `${styles.card_medium} ${styles.card_exp}`
    },
    {
      src:
        'https://c.wallhere.com/photos/ab/f5/AI_art_landscape_digital_art_ocean_view_reflection_rocks_sunset_clouds-2223954.jpg!d',
      alt: '',
      caption: 'The water was freezing!',
      className: `${styles.card_large} ${styles.card_exp}`
    }
  ];

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
     <header>
        <h1></h1>
        <nav>
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </nav>
     </header>

     <main>
        <section>
          <h2></h2>
          <p></p>
          <p></p>
        </section>

        <div className={styles.container_grid}>
          {showModal && (
            <div className={styles.modal}>
              <div className={styles.carousel}>
                <div id={styles.close_carousel}>
                  <div
                    className={styles.x}
                    onClick={() => setShowModal(false)}
                  >
                    <div id={styles.barra1}></div>
                    <div id={styles.barra2}></div>
                  </div>
                </div>

                <div className={styles.setas}>
                  <div className={styles.seta_esq}>
                    <div
                      id={styles.prev_card}
                      onClick={handlePrev}
                    >
                      <i
                        className="fa-solid fa-angle-left"
                        style={{ color: '#ffffff' }}
                      ></i>
                    </div>
                  </div>

                  <div className={styles.seta_dir}>
                    <div
                      id={styles.next_card}
                      onClick={handleNext}
                    >
                      <i
                        className="fa-solid fa-angle-right"
                        style={{ color: '#ffffff' }}
                      ></i>
                    </div>
                  </div>
                </div>

                <div className={styles.centered_container}>
                  <img
                    className={styles.modal_content}
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                  />
                </div>
              </div>
            </div>
          )}

          <div className={styles.carousel_images}>
            {images.map((image, index) => (
              <div
                key={index}
                className={image.className}
                onClick={() => {
                  setCurrentIndex(index);
                  setShowModal(true);
                }}
              >
                <img
                  className={styles.img_card}
                  src={image.src}
                  alt={image.alt}
                />
                <figcaption>{image.caption}</figcaption>
              </div>
            ))}
          </div>
        </div>

        <section>
          <h2></h2>
          <p></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </main>

      <footer>
        <p></p>
      </footer>
    </>
  );
};

export default App;
