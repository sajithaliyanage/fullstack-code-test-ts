import { Avatar, ListItem, ListItemAvatar } from '@mui/material';
import { User } from '../../types/user';
import { avatarStyles, StyledListItemText } from './UserItem-styles';

type UserProps = {
  user: User;
};

const UserItem = (props: UserProps): JSX.Element => {
  const { user } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="avatar" src={user.avatar} sx={avatarStyles} />
      </ListItemAvatar>
      <StyledListItemText primary={`${user.firstName} ${user.lastName}`} secondary={user.email} />
    </ListItem>
  );
};

export default UserItem;
