import { Divider, List } from '@mui/material';
import UserItem from '../UserItem';
import { User } from '../../types/user';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { getUsers } from '../../store/users/thunks';

const UsersList = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const users: User[] = useSelector((state: RootState) => state.users.users);
  const page: number = useSelector((state: RootState) => state.users.page);
  const pageSize: number = useSelector((state: RootState) => state.users.pageSize);

  useEffect(() => {
    dispatch(getUsers({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  return (
    <>
      <List component="ul" aria-label="users results" style={{ width: '100%' }}>
        {users.map((user, index) => (
          <div key={index}>
            <UserItem user={user} />
            {index < users.length - 1 && <Divider component="li" />}
          </div>
        ))}
      </List>
    </>
  );
};

export default UsersList;
