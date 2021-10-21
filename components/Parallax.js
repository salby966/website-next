import classnames from "classnames";
import Styles from '../styles/Parallax.module.css';

export default function Parallax({ name, image, imageClassName, title, caption }) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";

    return (
        <div className={Styles.parallax}>
            <h1>ini parallax</h1>
            <div className={Styles.parallax_layer, Styles.parallax_layer_back}>
                ini layar back
            </div>

            <div className={Styles.parallax_layer, Styles.parallax_layer_base}>
                <h1>ini layar base</h1>
            </div>

        </div>
    );
}