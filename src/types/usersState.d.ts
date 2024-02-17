import { User } from './user';

type UserData = {
  pagination: Pagination;
  data: User[];
};

type RequestProps = {
  page: number;
  pageSize: number;
};

export type Pagination = {
  next: number | null;
  prev: number | null;
};

export type UsersState = {
  page: number;
  pageSize: number;
  users: User[];
  noResults: boolean;
  pagination: Pagination;
  error: unknown;
  isBusy: boolean;
};
