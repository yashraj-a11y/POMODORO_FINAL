import styled from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider/StateContext";

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  const labels = ['Pomodoro', 'Short Break', 'Long Break'];

  return (
    <TagsContainer>
      {labels.map((tag, i) => (
        <Tag
          key={i}
          activeTag={activeTag === i}
          index={i}
          onClick={() => handleTagClick(i)}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  background: ${props => props.theme.colors.secondary};
  height: 5rem;
  width: 40rem;
  margin: 2rem auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
`;

const Tag = styled.button`
  all: unset;
  height: 4rem;
  text-align: center;
  border-radius: 5rem;
  font-size: 1.8rem;
  flex: 1;
  cursor: pointer;
  background: ${props => {
    if (props.activeTag) {
      if (props.index === 1) return props.theme.colors.shortBreak;
      if (props.index === 2) return props.theme.colors.longBreak;
      return props.theme.colors.primary;
    } else {
      return 'transparent';
    }
  }};
  color: ${props => (props.activeTag ? 'white' : props.theme.colors.text)};
  transition: background 0.3s ease-in-out;
`;
