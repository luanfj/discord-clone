import React from 'react';

import { Container, Role } from './styles';

import UserRow from './UserRow';

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname="Luan Fernandes" />

      <Role>Offline - 18</Role>

      <UserRow nickname="Luan Fernandes" isBot />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
      <UserRow nickname="Luan Fernandes" />
    </Container>
  );
};

export default UserList;
