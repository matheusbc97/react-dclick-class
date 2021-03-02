import { useState, useCallback } from 'react';

import { Button } from 'shared/components';

import { CreateNewPostContainer, Title } from '../styles';

interface Props {
  onCreatePostClick: (text: string) => void;
}

const CreateNewPost: React.FC<Props> = ({ onCreatePostClick }) => {
  const [newPostText, setNewPostText] = useState('');

  const handleCreatePostClick = useCallback(() => {
    onCreatePostClick(newPostText);
    setNewPostText('');
  }, [newPostText, onCreatePostClick]);

  return (
    <CreateNewPostContainer>
      <Title>Criar Novo Post</Title>
      <textarea
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
      />
      <Button onClick={handleCreatePostClick}>Salvar</Button>
    </CreateNewPostContainer>
  );
};

export default CreateNewPost;
