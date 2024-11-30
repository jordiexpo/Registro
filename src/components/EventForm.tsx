import { useState } from "react";

function EventForm() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ eventName, eventDate, eventDescription });
    alert("Evento registrado exitosamente");
    // Aquí puedes enviar los datos a una API o gestionarlos como prefieras
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre del Evento:</label>
        <input
          id="name"
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Fecha del Evento:</label>
        <input
          id="date"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Registrar Evento</button>
    </form>
  );
}

export default EventForm;
