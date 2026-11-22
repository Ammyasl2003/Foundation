import Image from "next/legacy/image";
import style from "./style.module.css";
import { MdDateRange } from "react-icons/md";
import { IoIosClock } from "react-icons/io";
export default function page() {
  return (
    <div className={style.UpcomingEvent}>
      <h1>3&apos;rd SHAHEEDI JODMEL OF CHAAR SAHIBZAADE</h1>

      <div className={style.bannerImage}>
        <div className={style.imageSection}>
          <Image src="/event3.jpeg" alt="banner 4" layout="fill" priority />
        </div>
      </div>

      <div className={style.eventDetails}>
        <div className={style.left}>
          <h1>Event Brief</h1>
        </div>
        <div className={style.right}>
          <div className={style.quote}>“ਨਿੱਕੀਆਂ ਜਿੰਦਾਂ ਵੱਡੇ ਸਾਕੇ”</div>
          <p>
            Rehmat Foundation organized the 3rd Shaheedi Jodmel of Chaar
            Sahibzaade at Gurudwara Sector 44 Chandigarh
          </p>

          <p>
            <span>
              <MdDateRange />
            </span>
            25 DEC 2024
          </p>
          <p>
            <span>
              <IoIosClock />
            </span>
            10:00 AM - 9:00 PM
          </p>

          <h4>MAIN ATTRACTION</h4>
          <div className={style.details}>
            <p>
              1. BLOOD DONATION CAMP
              <br />
              2. MEDICAL CAMP
              <br />
              3. PAGRI LANGAR (FIROZPURIA)
              <br />
              4. GURUMUKHI LIPI PARDARSHNI PLANT DISTRIBUTION
              <br />
              5. KHETI VIRASAT MISSION FOR MILLETS STALL
              <br />
              6. INTERNATIONAL NATUROPATHIC ORGANISATION CAMP
              <br />
              7. GURU SHASTRAS EXIBITION BY S. NARINDER PAL SINGH FROM LUDHIANA
              <br />
              8. PUNJABI BOOKS BASED ON SIKH LITERATURE EXHIBITION BY SANT SEWA
              SINGH (RAMPUR KHERA SAHIB, GARHDIWALA, HOSHIAPUR DISTRICT)
              <br />
            </p>
          </div>
          <h5>
            <b>LIGHT AND SOUND SHOW</b>
          </h5>
          <h5>
            SAKA-E-SIRHIND LIGHT & SOUND SHOW BY PUNJABI RANG MANCH PATIALA
          </h5>
          <p>
            <span>
              <IoIosClock />
            </span>
            5:30 PM - 8:30 PM
          </p>
        </div>
      </div>

      <div className={style.gallerySection}>
        <h1>Event Gallery</h1>
        <p>A trip down memory lane</p>

        <div className={style.sectionMain}>
      


       
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>


          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img2.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>


          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img3.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img4.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img5.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>

          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img6.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img7.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img8.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img9.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img10.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
  <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img13.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>

           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img14.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img15.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img16.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img17.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img18.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img19.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={"/event3/img20.jpg"}
                alt="image"
                layout="fill"
                priority
              />
            </div>
          </div>
      

        </div>

        
      </div>

   

      
    </div>
  );
}
