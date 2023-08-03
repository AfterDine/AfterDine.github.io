import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import styles from './listings.module.css';



const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const handleClick = (link) => {
        window.location.href = link;
    }


    const handleNext = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const images = [
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/290590284_1300368313703895_1273732252015923819_n.jpg',
            alt: '',
            caption: 'Pasta paradise in the Lion City.',
            className: `${styles.card_small} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/320393154_2035136470023794_3759007783414926639_n.jpg',
            alt: '',
            caption: 'Yellow delight, a taste of sunshine.',
            className: `${styles.card_small} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/JPC-1652.jpg',
            alt: '',
            caption: 'Zaw preparing coconut noodles',
            className: `${styles.card_small} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },

        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/JPC-00161-min.jpg',
            alt: '',
            caption: 'Vermicelli Prawn Salad',
            className: `${styles.card_small} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/JPC-00141-min.jpg',
            alt: '',
            caption: 'Burmese Fermented Tea Salad',
            className: `${styles.card_medium} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'

        },
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/264389329_1030618827513831_2122995098330504027_n.jpg',
            alt: '',
            caption: 'Skilled Chef preparing Silk Tofu',
            className: `${styles.card_large} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/IMG_7497.jpeg',
            alt: '',
            caption: 'Prime Ribeye Steak with Chimichurri Sauce',
            className: `${styles.card_small} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/297443524_3349104575318540_5132267655368688830_n.jpg',
            alt: '',
            caption: 'Sliced Abalone with Seasonal Vegetables',
            className: `${styles.card_small} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },
        {
            src: 'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/CHARGRILLEDLAMB.jpeg',
            alt: '',
            caption: 'Mark barbecuing lamb chops',
            className: `${styles.card_medium} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        },
        {
            src:
                'https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/AJ5A5918-2.jpg',
            alt: '',
            caption: 'Pork Belly with Caramelised Apples and Cider Sauce',
            className: `${styles.card_large} ${styles.card_exp}`,
            link: 'https://www.instagram.com/after_dine/'
        }
    ];

    return (
        <>
            <div className={styles.listings_body}>
                <main>
                    <section>
                        <h2></h2>
                        <p></p>
                        <p></p>
                    </section>

                    <div className={styles.container_grid}>

                        <Modal
                            open={showModal}
                            onClose={() => setShowModal(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'scroll',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '80vw',
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    p: 4,
                                }}
                            >
                                <IconButton
                                    aria-label="close"
                                    onClick={() => setShowModal(false)}
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        width: '100%',
                                        position: 'relative',
                                    }}
                                >
                                    <img
                                        src={images[currentIndex].src}
                                        alt={images[currentIndex].alt}
                                        style={{
                                            maxHeight: 'calc(80vh - 48px)', // Adjust the maxHeight to leave space for the button
                                            maxWidth: '100%',
                                            width: 'auto', // This ensures the image scales proportionally
                                            height: 'auto', // This ensures the image scales proportionally
                                            objectFit: 'contain',
                                        }}
                                    />

                                    <Button
                                        onClick={() => { handleClick(images[currentIndex].link) }}
                                        variant="contained"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 16,
                                            right: 16,
                                            zIndex: 1,
                                        }}
                                    >
                                        Book Now
                                    </Button>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%',
                                            mt: 2,
                                            position: 'absolute',
                                            bottom: 8,
                                        }}
                                    >
                                        <IconButton aria-label="previous" onClick={handlePrev}>
                                            <NavigateBeforeIcon />
                                        </IconButton>

                                        <IconButton aria-label="next" onClick={handleNext}>
                                            <NavigateNextIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Modal>
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
                </main>
            </div>
        </>
    );
};

export default App;
