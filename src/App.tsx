import { useState } from "react";
import EventForm from "./components/EventForm"; // Asegúrate de que el componente esté en la ruta correcta.

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="content">
        <h1>Bienvenido a Vite + React</h1>
        <p>Haz clic en el botón flotante para registrar un evento.</p>
        {/* Aquí puedes agregar más contenido de la página */}
      </div>

      {/* Botón flotante */}
      <button className="floating-btn" onClick={handleOpenPopup}>
        Registrar Evento
      </button>

      {/* Pop-up */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Registrar un Evento</h2>
            <EventForm />
            <button className="close-btn" onClick={handleClosePopup}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
