import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div
      style={{
        padding: '15px',
        background: 'lightyellow',
        border: '1px solid #E6E6FA',
        margin: '10px',
      }}
    >
      {user.id} {user.name} lives in {user.address?.city} on{' '}
      {user.address?.street} street. Email is {user.email} and phone number is{' '}
      {user.phone}
    </div>
  );
};

export default UserItem;
