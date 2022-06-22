import React from 'react';
import { Create, List, Edit, Datagrid, TextField, TextInput, SimpleForm } from 'react-admin';

export const CreatePessoa = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="nome" />
      <TextInput source="cpf" />
      <TextInput source="endereço" />
    </SimpleForm>
  </Create>
)

export const ListPessoa = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nome" />
      <TextField source="cpf" />
      <TextField source="endereço" />
    </Datagrid>
  </List>
)

export const EditPessoa = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="nome" />
      <TextInput source="cpf" />
      <TextInput source="endereço" />
    </SimpleForm>
  </Edit>
)
