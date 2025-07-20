import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Error signing out. Please try again.');
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <LogoutBtn onClick={() => setShowConfirm(true)} disabled={loading}>
        {loading ? 'Signing out...' : 'Logout'}
      </LogoutBtn>

      {showConfirm && (
        <Modal>
          <ModalContent>
            <ModalTitle>Confirm Logout</ModalTitle>
            <ModalMessage>Are you sure you want to sign out?</ModalMessage>
            <ModalButtons>
              <CancelButton onClick={() => setShowConfirm(false)}>
                Cancel
              </CancelButton>
              <ConfirmButton onClick={handleLogout} disabled={loading}>
                {loading ? 'Signing out...' : 'Yes, Logout'}
              </ConfirmButton>
            </ModalButtons>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default LogoutButton;

// Styled Components
const LogoutBtn = styled.button`
  padding: 0.7rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const ModalTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ModalMessage = styled.p`
  margin: 0 0 2rem 0;
  color: #666;
  font-size: 1rem;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const CancelButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }
`;

const ConfirmButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #c82333;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;