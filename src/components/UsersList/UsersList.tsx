import { Divider, List } from '@mui/material';
import UserItem from '../UserItem';
import { User } from '../../types/user';

const UsersList = (): JSX.Element => {
  const users: User[] = [
    {
      firstName: 'Sajitha',
      lastName: 'Liyanage',
      email: 'sajitha@gmail.com',
      avatar: 'https://reqres.in/img/faces/8-image.jpg',
    },
    {
      firstName: 'Sajitha',
      lastName: 'Liyanage',
      email: 'sajitha@gmail.com',
      avatar: 'https://reqres.in/img/faces/8-image.jpg',
    },
  ];

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
