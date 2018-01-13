import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { authClient, restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';
import Dashboard from './Dashboard';
import Menu from './Menu';
import { BatchProcessList, BatchProcessShow, BatchProcessCreate} from './hpdmvars';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' },
};

const App = () => (
    <Admin title="SHACA E-Transfer Administration" menu={Menu} dashboard={Dashboard} authClient={authClient(feathersClient, authClientOptions)} restClient={restClient(feathersClient)}>
        <Resource name="hpdmvars"  options={{ label: 'Nightly' }} list={BatchProcessList} show={BatchProcessShow} create={BatchProcessCreate} remove={Delete}  />
    </Admin>
);

export default App; 