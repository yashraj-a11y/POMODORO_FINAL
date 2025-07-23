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
  background: rgba(255, 255, 255, 0.95);
  color: #222;
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.18), 0 2px 8px rgba(245, 87, 108, 0.10);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  z-index: 100;
  min-width: 270px;
  backdrop-filter: blur(6px);
  border: 1.5px solid rgba(102, 126, 234, 0.10);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: box-shadow 0.2s, background 0.2s;

  p {
    margin: 0.5rem 0 0.2rem 0;
    font-size: 1.1rem;
    color: #333;
  }

  ul {
    margin: 0.2rem 0 1rem 0;
    padding-left: 1.2rem;
    font-size: 1rem;
    color: #555;
    list-style: disc inside;
  }

  hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 1.2rem 0;
  }

  strong {
    color: #764ba2;
    font-weight: 700;
    font-size: 1.08rem;
  }

  @media (max-width: 600px) {
    right: 0;
    left: 0;
    min-width: unset;
    width: 95vw;
    padding: 1.2rem 0.5rem 1rem 0.5rem;
  }
`;

const LogoutButton = styled.button`
  margin-top: 1.5rem;
  background: linear-gradient(135deg, #f5576c 0%, #667eea 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.7rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(245, 87, 108, 0.12);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #f5576c 100%);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.18);
  }
`;
