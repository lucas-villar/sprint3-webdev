import styles from "./Clima.module.css";
import { useEffect, useState } from "react";

export default function Clima() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://wttr.in/Sao+Paulo?format=j1")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar dados do tempo");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Não foi possível carregar os dados do tempo.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando clima...</p>;
  if (error) return <p>{error}</p>;

  const current = weather.current_condition[0];

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <h2>Clima Atual em São Paulo</h2>
        <p><strong>Temperatura:</strong> {current.temp_C}°C</p>
        <p><strong>Descrição:</strong> {current.weatherDesc[0].value}</p>
        <p><strong>Umidade:</strong> {current.humidity}%</p>
        <p><strong>Vento:</strong> {current.windspeedKmph} km/h</p>
      </div>
    </div>
  );
}
