import { Divider, List } from '@mui/material';
import UserItem from '../UserItem';
import { User } from '../../types/user';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';
import { useCallback, useEffect, useRef } from 'react';
import { getUsers } from '../../store/users/thunks';
import { updatePagination } from '../../store/users/reducerSlice';
import UserSkeleton from '../Skeleton/Skeleton';
import NoMoreData from '../NoMoreData';
import NoResults from '../NoResults';

const UsersList = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<RootState, object, Action<string>>>();
  const users: User[] = useSelector((state: RootState) => state.users.users);
  const isBusy: boolean = useSelector((state: RootState) => state.users.isBusy);
  const isMoreLoading: boolean = useSelector((state: RootState) => state.users.isMoreLoading);
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

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (users.length === 0 && !isBusy) {
    return <NoResults />;
  }

  return (
    <List component="ul" aria-label="users results" sx={{ width: '100%' }}>
      {users.map((user, index) => (
        <div key={index}>
          <UserItem user={user} />
          {index < users.length - 1 && <Divider component="li" />}
        </div>
      ))}
      {isBusy && <UserSkeleton count={1} />}
      {!isMoreLoading && <NoMoreData />}
    </List>
  );
};

export default UsersList;
