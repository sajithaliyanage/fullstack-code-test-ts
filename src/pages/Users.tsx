import SnakbarNotification from '../components/SnakbarNotification';
import UsersList from '../components/UsersList';

const Users = (): JSX.Element => {
  return (
    <>
      <UsersList />
      <SnakbarNotification />
    </>
  );
};

export default Users;
