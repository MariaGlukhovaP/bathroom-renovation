import { useState } from "react";
import styles from "./calculator.module.css";

export const Calculator = (props) => {
  const [area, setArea] = useState(0);
  const [selectedServeces, setSelectedServeces] = useState([]);
  const [total, setTotal] = useState(0);

  const services = [
    { id: 1, name: "Демонтаж", price: 80 },
    { id: 2, name: "Проектирование и дизайн", price: 5000 },
    { id: 3, name: "Укладка плитки", price: 1000 },
    { id: 4, name: "Сантехнические работы", price: 3500 },
    { id: 5, name: "Электромонтажные работы", price: 1500 },
    { id: 6, name: "Отделочные работы", price: 400 },
    { id: 7, name: "Установка мебели и аксессуаров", price: 2000 },
    { id: 8, name: "Гидроизоляция", price: 500 },
    { id: 9, name: "Установка систем отопления", price: 2500 },
  ];

  const calculateTotal = () => {
    let sum = 0;
    selectedServeces.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);

      if (service) sum += service.price * area;
    });

    setTotal(sum);
  };

  return (
    <div>
      <section className={styles.section}>
        <h2 className={styles.title}>Рассчитать цену</h2>
        <div className={styles.form}>
          <label className={styles.label}>Площадь ванной (м^2):</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label}>Выберите услуги:</label>
          {services.map((service) => (
            <>
              <div key={service.id}>
                <input
                  type="checkbox"
                  id={service.id}
                  checked={selectedServeces.includes(service.id)}
                  onChange={() => {
                    if (selectedServeces.includes(service.id)) {
                      setSelectedServeces(
                        selectedServeces.filter((id) => id !== service.id)
                      );
                    } else {
                      setSelectedServeces([...selectedServeces, service.id]);
                    }
                  }}
                />
                <label htmlFor={service.id}>
                  {service.name} ({service.price} руб/м^2)
                </label>
              </div>
            </>
          ))}
        </div>
        <button onClick={calculateTotal}>Рассчитать</button>
        {total > 0 && <h3>Итоговая стоимость: {total} руб</h3>}
      </section>
    </div>
  );
};
