import { useCallback } from 'react';
import api from 'shared/utils/api';
import { useScreenLoading } from 'store/screenLoading/actions';
import { useToast } from 'store/toast/actions';
import useUser from './useUser';

const useCreatePost: () => (text: string) => Promise<void> = () => {
  const { showScreenLoading, hideScreenLoading } = useScreenLoading();
  const { showToast } = useToast();
  const { user } = useUser();

  const createPost = useCallback(
    async (text: string) => {
      try {
        if (!text) {
          showToast({
            text: 'Texto do Post Vazio',
            type: 'danger',
          });
          return;
        }

        showScreenLoading();
        await api.post('posts', {
          text,
          user: user?.name,
          date: new Date().toISOString(),
        });

        hideScreenLoading();
      } catch (err) {
        hideScreenLoading();
        console.log('err', err);
      }
    },
    [user?.name, showScreenLoading, hideScreenLoading, showToast],
  );

  return createPost;
};

export default useCreatePost;
