
import Styles from "../styles/CardCarousel.module.css";
export default function CardCarousel({ image, image2, image3, imageClassName, title, title2, title3, caption, caption2, caption3 }) {

    return (
       <div className={Styles.container}>
           <div className={Styles.card}>
               <div className={Styles.imgbox}>
                   <img src={image} />
               </div>
               <div className={Styles.content}>
                   <h2>{title}</h2>
                   <p>{caption}</p>
               </div>
           </div>
       </div>
    );
}
