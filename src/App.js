import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import { CreatePessoa, ListPessoa, EditPessoa } from './pages/pessoas';
import { CreateContrato, ListContrato, EditContrato } from './pages/contratos';

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="pessoas" icon={UserIcon} edit={EditPessoa} list={ListPessoa} create={CreatePessoa} />
    <Resource name="contratos" icon={BookIcon} edit={EditContrato} list={ListContrato} create={CreateContrato} />
  </Admin>
)

export default App;