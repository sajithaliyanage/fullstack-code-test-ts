import { render } from '@testing-library/react';
import UserItem from './components/UserItem';

test('renders user item with correct data', () => {
  const user = {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    avatar: 'path/to/avatar.jpg',
  };
  const { getByText } = render(<UserItem user={user} />);
  const userNameElement = getByText(`${user.first_name} ${user.last_name}`);
  const userEmailElement = getByText(user.email);
  expect(userNameElement).toBeInTheDocument();
  expect(userEmailElement).toBeInTheDocument();
});
