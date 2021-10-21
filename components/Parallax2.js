import Styles from '../styles/Parallax2.module.css';

export default function Parallax2() {
    return (
        <div>
          <div className={Styles.header}>
            <h1>CSS-Only Parallax Effect</h1>
          </div>
              <section className={Styles.section1}>
                <h1>Section w/o parallax effect</h1>
              </section>
              <section className={Styles.section2}>
                  <h1>Section w/ parallax effect</h1>
              </section>
                <div className={Styles.author}></div>
        </div>
    );
}
