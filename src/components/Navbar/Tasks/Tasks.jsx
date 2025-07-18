import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
} from 'firebase/firestore';

export default function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('createdAt'));
    const unsub = onSnapshot(q, snapshot => {
      setTasks(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const handleAdd = async e => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    await addDoc(collection(db, 'tasks'), {
      title: newTitle.trim(),
      completed: false,
      createdAt: Date.now(),
    });
    setNewTitle('');
  };

  const toggleCompleted = async (id, current) => {
    await updateDoc(doc(db, 'tasks', id), { completed: !current });
  };

  const startEditing = (id, current) => {
    setEditingId(id);
    setEditingText(current);
  };

  const handleSave = async id => {
    if (!editingText.trim()) return;
    await updateDoc(doc(db, 'tasks', id), { title: editingText });
    setEditingId(null);
    setEditingText('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingText('');
  };

  const handleDelete = async id => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  return (
    <Wrapper>
      <Title>Pomodoro Task List</Title>

      <Form onSubmit={handleAdd}>
        <Input
          placeholder="Enter new task"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <AddButton type="submit">Add</AddButton>
      </Form>

      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            <Checkbox
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id, task.completed)}
            />
            {editingId === task.id ? (
              <>
                <Input
                  value={editingText}
                  onChange={e => setEditingText(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSave(task.id)}
                />
                <ActionButton onClick={() => handleSave(task.id)}>Save</ActionButton>
                <ActionButton onClick={handleCancel}>Cancel</ActionButton>
              </>
            ) : (
              <>
                <TaskText
                  onDoubleClick={() => startEditing(task.id, task.title)}
                  completed={task.completed}
                >
                  {task.title}
                </TaskText>
                <ActionButton onClick={() => startEditing(task.id, task.title)}>Edit</ActionButton>
                <ActionButton onClick={() => handleDelete(task.id)}>Delete</ActionButton>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  font-family: sans-serif;
  color: ${props => props.theme.colors.text};
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.7rem;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 0.5rem;
  background-color: #fff;
`;

const AddButton = styled.button`
  margin-left: 8px;
  padding: 0.7rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input`
  transform: scale(1.5);
  cursor: pointer;
`;

const TaskText = styled.span`
  flex: 1;
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#999' : 'inherit')};
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #ddd;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
