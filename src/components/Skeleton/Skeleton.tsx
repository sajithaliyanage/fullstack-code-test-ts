import { ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';

type UserSkeletonProps = {
  count: number;
};
const UserSkeleton = (props: UserSkeletonProps): JSX.Element => {
  const { count } = props;
  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <ListItem key={index}>
      <ListItemAvatar>
        <Skeleton variant="circular" width={80} height={80} />
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton variant="text" width={'100%'} />}
        secondary={<Skeleton variant="text" width={'100%'} />}
      />
    </ListItem>
  ));

  return <>{skeletonItems}</>;
};

export default UserSkeleton;
