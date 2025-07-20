import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from './Logout';

const Homex = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/signin');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) {
    return (
      <Container>
        <LoadingSpinner>Loading...</LoadingSpinner>
      </Container>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Welcome to Your Dashboard</Title>
          <LogoutButton />
        </HeaderContent>
      </Header>

      <MainContent>
        <WelcomeCard>
          <UserAvatar>
            {user.photoURL ? (
              <Avatar src={user.photoURL} alt="Profile" />
            ) : (
              <DefaultAvatar>
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </DefaultAvatar>
            )}
          </UserAvatar>
          
          <UserInfo>
            <UserName>
              {user.displayName || 'Welcome User!'}
            </UserName>
            <UserEmail>{user.email}</UserEmail>
          </UserInfo>
        </WelcomeCard>

        <StatsGrid>
          <StatCard>
            <StatIcon>⏱️</StatIcon>
            <StatTitle>Total Sessions</StatTitle>
            <StatValue>0</StatValue>
          </StatCard>
          
          <StatCard>
            <StatIcon>🎯</StatIcon>
            <StatTitle>Focus Time</StatTitle>
            <StatValue>0 min</StatValue>
          </StatCard>
          
          <StatCard>
            <StatIcon>✅</StatIcon>
            <StatTitle>Tasks Completed</StatTitle>
            <StatValue>0</StatValue>
          </StatCard>
          
          <StatCard>
            <StatIcon>🔥</StatIcon>
            <StatTitle>Current Streak</StatTitle>
            <StatValue>0 days</StatValue>
          </StatCard>
        </StatsGrid>

        <ActionSection>
          <ActionCard>
            <ActionIcon>🍅</ActionIcon>
            <ActionTitle>Start Pomodoro</ActionTitle>
            <ActionDescription>Begin your focused work session</ActionDescription>
            <ActionButton>Start Timer</ActionButton>
          </ActionCard>
          
          <ActionCard>
            <ActionIcon>📝</ActionIcon>
            <ActionTitle>Manage Tasks</ActionTitle>
            <ActionDescription>Add and organize your tasks</ActionDescription>
            <ActionButton>View Tasks</ActionButton>
          </ActionCard>
          
          <ActionCard>
            <ActionIcon>📊</ActionIcon>
            <ActionTitle>View Analytics</ActionTitle>
            <ActionDescription>Track your productivity</ActionDescription>
            <ActionButton>See Stats</ActionButton>
          </ActionCard>
        </ActionSection>
      </MainContent>
    </Container>
  );
};

export default Homex;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const WelcomeCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const UserAvatar = styled.div`
  flex-shrink: 0;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #667eea;
`;

const DefaultAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
`;

const UserEmail = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StatTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 1rem;
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
`;

const ActionSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ActionCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ActionIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ActionTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ActionDescription = styled.p`
  margin: 0 0 1.5rem 0;
  color: #666;
  font-size: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  font-size: 1.5rem;
`;