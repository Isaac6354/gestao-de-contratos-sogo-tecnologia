import React from 'react';
import {
  List, Create, Edit, SimpleForm, Datagrid, TextField, TextInput, DateInput, ReferenceField
} from 'react-admin';

export const ListContrato = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="#" />
      <TextField source="numeroContrato" label="Nº Contrato" />
      <TextField source="dataRegistro" label="Data de registro" />
      <TextField source="dataValidade" label="Data de validade" />
      <ReferenceField label="Id da pessoa" source="pessoaID" reference="contratos" link={false}>
        <TextField source="id" />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const EditContrato = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" label="#" disabled />
      <TextInput source="numeroContrato" label="Nº Contrato" />
      <TextInput source="dataRegistro" label="Data de registro" />
      <TextInput source="dataValidade" label="Data de validade" />
      <TextInput source="pessoaID" label="Id da pessoa" disabled />
    </SimpleForm>
  </Edit>
)

export const CreateContrato = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" label="#" />
      <TextInput source="numeroContrato" label="Nº Contrato" />
      <DateInput source="dataRegistro" label="Data de registro" />
      <DateInput source="dataValidade" label="Data de validade" />
      <TextInput source="pessoaID" label="Id da pessoa" />
    </SimpleForm>
  </Create>
)