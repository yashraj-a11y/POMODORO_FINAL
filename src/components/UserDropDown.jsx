// components/UserDropdown.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { Navigate } from "react-router-dom";

const UserDropdown = ({ user }) => {
  const [feedback, setFeedback] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user) {
      const feedbackRef = ref(db, `feedbacks/${user.uid}`);
      onValue(feedbackRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const values = Object.values(data);
          setFeedback(values[values.length - 1]?.message || "No feedback");
        }
      });

      const tasksRef = ref(db, `users/${user.uid}/tasks`);
      onValue(tasksRef, (snapshot) => {
        const taskData = snapshot.val();
        if (taskData) {
          setTasks(Object.values(taskData));
        } else {
          setTasks([]);
        }
      });
    }
  }, [user]);

  const handleLogout = () => {
    signOut(auth);
    Navigate('/SignIn')

  };

  return (
    <Dropdown className="user-dropdown">
      <p><strong>{user.displayName}</strong></p>
      <p>{user.email}</p>
      <hr />
      <p><strong>Feedback:</strong> {feedback}</p>
      <hr />
      <p><strong>Your Tasks:</strong></p>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.title}</li>
        ))}
      </ul>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Dropdown>
  );
};

export default UserDropdown;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: white;
  color: black;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  padding: 1rem;
  z-index: 100;
  min-width: 250px;
`;

const LogoutButton = styled.button`
  margin-top: 1rem;
  background: red;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;
