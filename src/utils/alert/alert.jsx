import React, { useState, useCallback, useEffect } from "react";
import "./style.scss";

export default function Alert() {
  const [alerts, setAlerts] = useState([]);

  const addAlert = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now();
    const newAlert = { id, message, type };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    }, duration);
  }, []);

  useEffect(() => {
    window.addAlert = addAlert;
  }, [addAlert]);

  const defineType = (type) => {
    switch (type) {
      case "error":
        return "close-circle-sharp";
      case "warning":
        return "alert-circle-sharp";
      case "info":
        return "help-circle-sharp";
      case "success":
        return "checkmark-circle-sharp";
      default:
        return "help-circle-sharp"; // Ícone padrão
    }
  };

  return (
    <div className="alert-container">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`alert alert-${alert.type} alert-animate`}
        >
          <ion-icon name={defineType(alert.type)}></ion-icon>
          <span>{alert.message}</span>
        </div>
      ))}
    </div>
  );
}
