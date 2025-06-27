import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/calculator">Калькулятор</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/gallery">Галерея</Link>
          </li>
          <li>
            <Link to="/blog">Блог</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
