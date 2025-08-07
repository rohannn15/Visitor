import React, { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import InputBar from "../components/InputBar";
import { Link } from "react-router-dom";

const EventPage = () => {
  const { eventName, setEventName, organizer, setOrganizer } = useContext(EventContext);

  const [tempEvent, setTempEvent] = useState(eventName);
  const [tempOrganizer, setTempOrganizer] = useState(organizer);

  const handleSave = () => {
    setEventName(tempEvent);
    setOrganizer(tempOrganizer);
  };

  return (
    <div style={{ padding: 20, border: "2px solid black" }}>
      <h2>Event Info Manager</h2>
      <InputBar
        value={tempEvent}
        onChange={(e) => setTempEvent(e.target.value)}
        placeholder="Enter Event Name"
      />
      <InputBar
        value={tempOrganizer}
        onChange={(e) => setTempOrganizer(e.target.value)}
        placeholder="Enter Organizer Name"
      />
      <button onClick={handleSave}>Save Event Info</button>

      <h4>📅 Event: {eventName}</h4>
      <h4>👤 Organizer: {organizer}</h4>

      <Link to="/">🔙 Back to Check-In</Link>

    </div>
  );
};

export default EventPage;