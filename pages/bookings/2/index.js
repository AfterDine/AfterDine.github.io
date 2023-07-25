import Head from 'next/head';
import styles from './bookings.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Bookings() {
    return (
        <div className={styles.mainscreen}>
            <Head>
                <title>Checkout Page</title>
                <meta name="description" content="Checkout page with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.card}>
                <div className={styles.leftside}>
                    <Carousel showThumbs={false} showStatus={false}>
                        <div>
                            <img
                                src="https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/264389329_1030618827513831_2122995098330504027_n.jpg"
                                className={styles.product}
                                alt="Shoes"
                            />x``
                        </div>
                        <div>
                            <img
                                src="https://bkdkkjyegspmjpmorsyw.supabase.co/storage/v1/object/public/images2/297443524_3349104575318540_5132267655368688830_n.jpg" // Replace with the URL of the second image
                                className={styles.product}
                                alt="Shoes"
                            />
                        </div>
                        {/* Add more <div> elements with different images for additional carousel items */}
                    </Carousel>
                </div>
                <div className={styles.rightside}>
                    <form action="">
                        <h1>CheckOut</h1>
                        <h2>Payment Information</h2>
                        <div className={styles['input-container']}>
                            <p>Name</p>
                            <input type="text" className={styles.inputbox} name="name" required />
                        </div>
                        <div className={styles['input-container']}>
                            <p>Phone Number</p>
                            <input type="number" className={styles.inputbox} name="phone_number" id="card_number" required />
                        </div>

                        <div className={styles['input-container']}>
                            <p>Meal Preference</p>
                            <select className={styles.inputbox} name="card_type" id="card_type" required>
                                <option value="">--Select a meal--</option>
                                <option value="Visa">Breakfast</option>
                                <option value="RuPay">Lunch</option>
                                <option value="MasterCard">Dinner</option>
                            </select>
                        </div>

                        <div className={styles.expcvv}>
                            <div className={styles['input-container']}>
                                <p className={styles.expcvv_text}>Booking date</p>
                                <input type="date" className={styles.inputbox} name="exp_date" id="exp_date" required />
                            </div>

                            <div className={styles['input-container']}>
                                <p className={styles.expcvv_text2}>Dietary requirements</p>
                                <input type="password" className={styles.inputbox} name="cvv" id="cvv" required />
                            </div>
                        </div>

                        <p></p>
                        <button type="submit" className={styles.button}>
                            CheckOut
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
