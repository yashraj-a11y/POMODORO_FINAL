import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db, auth } from '../../../firebase';
import {
  ref,
  push,
  set,
  update,
  remove,
  onValue
} from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export default function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [uid, setUid] = useState(null);

  // 🔐 Get current user UID
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    if (!uid) return;
    const userTasksRef = ref(db, `users/${uid}/tasks`);
    const unsubscribe = onValue(userTasksRef, (snapshot) => {
      const data = snapshot.val() || {};
      const formatted = Object.entries(data).map(([id, task]) => ({ id, ...task }));
      setTasks(formatted);
    });
    return () => unsubscribe();
  }, [uid]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !uid) return;

    const taskRef = push(ref(db, `users/${uid}/tasks`));
    await set(taskRef, {
      title: newTitle.trim(),
      completed: false,
      createdAt: Date.now(),
    });
    setNewTitle('');
  };

  const toggleCompleted = async (id, current) => {
    if (!uid) return;
    await update(ref(db, `users/${uid}/tasks/${id}`), { completed: !current });
  };

  const handleSave = async (id) => {
    if (!editingText.trim() || !uid) return;
    await update(ref(db, `users/${uid}/tasks/${id}`), { title: editingText.trim() });
    setEditingId(null);
    setEditingText('');
  };

  const handleDelete = async (id) => {
    if (!uid) return;
    await remove(ref(db, `users/${uid}/tasks/${id}`));
  };

  const startEditing = (id, current) => {
    setEditingId(id);
    setEditingText(current);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingText('');
  };

  return (
    <Wrapper>
      <Title>🍅 Pomodoro Task List</Title>

      <Form onSubmit={handleAdd}>
        <Input
          placeholder="Enter new task..."
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <AddButton type="submit">+ Add Task</AddButton>
      </Form>

      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id} $completed={task.completed}>
            <TaskContent>
              <Checkbox
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id, task.completed)}
              />
              {editingId === task.id ? (
                <EditingContainer>
                  <EditInput
                    value={editingText}
                    onChange={e => setEditingText(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleSave(task.id)
                      }
                    }
                      
                    }
                    autoFocus
                  />
                  <ButtonGroup>
                    <SaveButton onClick={() => handleSave(task.id)}>✓ Save</SaveButton>
                    <CancelButton onClick={handleCancel}>✕ Cancel</CancelButton>
                  </ButtonGroup>
                </EditingContainer>
              ) : (
                <TaskContentContainer>
                  <TaskText
                    onDoubleClick={() => startEditing(task.id, task.title)}
                    $completed={task.completed}
                  >
                    {task.title}
                  </TaskText>
                  <ButtonGroup>
                    <EditButton onClick={() => startEditing(task.id, task.title)}>✏️ Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(task.id)}>🗑️ Delete</DeleteButton>
                  </ButtonGroup>
                </TaskContentContainer>
              )}
            </TaskContent>
          </TaskItem>
        ))}
      </TaskList>

      {tasks.length === 0 && (
        <EmptyState>
          <EmptyIcon>📝</EmptyIcon>
          <EmptyText>No tasks yet. Add your first task above!</EmptyText>
        </EmptyState>
      )}
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
    max-width: 100vw;
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 3rem;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    padding: 1rem 0.5rem;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: 2px solid #e1e8ed;
  border-radius: 12px;
  background-color: #f8fafc;
  color: #2d3748;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.7rem 1rem;
  }
`;

const AddButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.7rem 1rem;
    width: 100%;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  margin-bottom: 1.5rem;
  background: ${({ $completed }) => 
    $completed 
      ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  };
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  opacity: ${({ $completed }) => $completed ? 0.8 : 1};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const TaskContent = styled.div`
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
  accent-color: #fff;
  margin-right: 1.5rem;

  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
    margin-right: 0.7rem;
  }
`;

const TaskContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
  }
`;

const TaskText = styled.span`
  flex: 1;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  color: white;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 0.3rem 0;
  }
`;

const EditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const EditInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  border: 2px solid white;
  border-radius: 10px;
  background-color: white;
  color: #2d3748;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.5);
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.7rem 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  @media (max-width: 600px) {
    gap: 0.4rem;
    width: 100%;
    justify-content: flex-end;
  }
`;

const BaseButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const EditButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const DeleteButton = styled(BaseButton)`
  background: rgba(255, 59, 48, 0.8);
  color: white;

  &:hover {
    background: rgba(255, 59, 48, 1);
  }
`;

const SaveButton = styled(BaseButton)`
  background: rgba(52, 199, 89, 0.9);
  color: white;

  &:hover {
    background: rgba(52, 199, 89, 1);
  }
`;

const CancelButton = styled(BaseButton)`
  background: rgba(255, 149, 0, 0.9);
  color: white;

  &:hover {
    background: rgba(255, 149, 0, 1);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);

  @media (max-width: 600px) {
    padding: 2rem 0.5rem;
  }
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const EmptyText = styled.p`
  font-size: 1.6rem;
  color: #718096;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;