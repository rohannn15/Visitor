import React, { useState, useRef, useEffect, useContext } from "react";
import { EventContext } from "../context/EventContext";
import InputBar from "../components/InputBar";
import { Link } from "react-router-dom";


const VisitorPage = () => {
  const [visitorName, setVisitorName] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const inputRef = useRef(null);
  const visitorCount = useRef(0); 

  const {
    eventName,
    organizer,
    visitors,
    setVisitors,
  } = useContext(EventContext);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (visitors.length > 0) {
      setWelcomeMsg(`Welcome, ${visitors[visitors.length - 1]}!`);
    }
  }, [visitors]);

  const handleCheckIn = () => {
    if (visitorName.trim()) {
      setVisitors([...visitors, visitorName]);
      visitorCount.current += 1;
      setVisitorName("");
    }
  };
  const handleDeleteVisitor = (index) => {
    const updatedVisitors = visitors.filter((_, idx) => idx !== index);
    setVisitors(updatedVisitors);
  };
  return (
    <div style={{ padding: 20, border:"2px solid black"}}>
      <h2>Visitor Check-In</h2>
       <InputBar
        value={visitorName}
        onChange={(e) => setVisitorName(e.target.value)}
        placeholder="Enter your name"
        inputRef={inputRef}
      />
      <button onClick={handleCheckIn}>Check In</button>

      <h3>{welcomeMsg}</h3>
      

      <h4>Visitor List:</h4>
<ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
  {visitors.map((v, idx) => (
    <li key={idx}>{v}
    <button
              onClick={() => handleDeleteVisitor(idx)}
              style={{
                marginLeft: "10px",
                padding: "2px 8px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
      Delete
            </button>
    </li>
    
  ))}
</ul>


      <p>📅 Event: {eventName || "(No event)"}</p>
      <p>👤 Organizer: {organizer || "(No organizer)"}</p>

      <Link to="/event"> Go to Event Manager 👉</Link>
    </div>
  );
};

export default VisitorPage;