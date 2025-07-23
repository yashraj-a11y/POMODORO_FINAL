// components/UserDropdown.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";

const UserDropdown = ({ user }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      
      return;
    }

    

    const feedbackRef = ref(db, `users/${user.uid}/feedbacks`);
    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      
      if (data) {
        const values = Object.values(data);
        setFeedbackList(values.map((f) => f.message));
      } else {
        setFeedbackList([]);
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
  }, [user]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/SignIn");
    });
  };

  return (
    <Dropdown className="user-dropdown">
      <p><strong>{user?.displayName || "Unnamed User"}</strong></p>
      <p>{user?.email}</p>
      <hr />

      <p><strong>Your Feedbacks:</strong></p>
      <ul>
        {feedbackList.length > 0 ? (
          feedbackList.map((msg, i) => <li key={i}>{msg}</li>)
        ) : (
          <li>No feedback submitted yet.</li>
        )}
      </ul>

      <hr />
      <p><strong>Your Tasks:</strong></p>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, i) => <li key={i}>{task.title}</li>)
        ) : (
          <li>No tasks created yet.</li>
        )}
      </ul>

      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Dropdown>
  );
};

export default UserDropdown;

// Styling
const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: white;
  color: black;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
