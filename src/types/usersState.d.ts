import { User } from './user';

type UserData = {
  data: User[];
  totalPages: number;
};

type RequestProps = {
  page: number;
  pageSize: number;
};

export type UsersState = {
  page: number;
  pageSize: number;
  users: User[];
  noResults: boolean;
  error: unknown;
  isBusy: boolean;
  isMoreLoading: boolean;
  isScrolled: boolean;
  showError: boolean;
};
