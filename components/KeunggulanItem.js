import classnames from "classnames";
import Style from "../styles/Keunggulan.module.css";

export default function KeunggulanItem({ name, image, imageClassName, title, caption }) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";

    return (
        <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
            <div className="lg:w-1/2">
                <h2 className={Style.ghost}>{name}</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                    {caption}
                </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="flex items-center justify-center lg:justify-end">
                    <div className="max-w-lg">
                        <img className={classnames(addImageClassName)} src={image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
