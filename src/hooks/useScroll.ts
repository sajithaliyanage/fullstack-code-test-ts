import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updatePagination } from '../store/users/reducerSlice';
import { getUsers } from '../store/users/thunks';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type hookProps = {
  isBusy: boolean;
  isMoreLoading: boolean;
};

const useScroll = (props: hookProps): void => {
  const { isBusy, isMoreLoading } = props;
  const dispatch = useDispatch<ThunkDispatch<RootState, object, Action<string>>>();
  const prevScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (
      !isBusy &&
      isMoreLoading &&
      currentScrollY > prevScrollY.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      dispatch(updatePagination());
      dispatch(getUsers());
    }
    prevScrollY.current = currentScrollY;
  }, [dispatch, isBusy, isMoreLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};

export default useScroll;
