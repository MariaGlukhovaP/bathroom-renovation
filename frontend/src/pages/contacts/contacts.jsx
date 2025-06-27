import styles from "./contacts.module.css";

export const Contacts = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>Контакты</h2>
          <p>
            <strong>Адрес:</strong> г. Москва, ул. Молодежная, 11, к. 15
          </p>
          <p>
            <strong>Телефон:</strong> (912) 00-55-000
          </p>
          <p>
            <strong>email:</strong> mastervann@mail.ru
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>Мы на карте</h2>
          <div className={styles.map}></div>
        </section>
      </div>
      <section className={styles.section}>
        <h2 className={styles.title}>Свяжитесь с нами</h2>
        <form className={styles.form}>
          <div className={styles.formSection}>
            <label for="name">Имя</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.formSection}>
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.formSection}>
            <label for="phone">Телефон</label>
            <input type="number" id="phone" />
          </div>
          <div className={styles.formSection}>
            <label for="text">Сообщение</label>
            <textarea id="text" className={styles.textarea}></textarea>
          </div>
          <button type="submit">Отправить</button>
        </form>
      </section>
    </div>
  );
};
