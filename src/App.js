import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import { UserList } from './users';
import Menu from './Menu';

const App = () => (
    <Admin title="SHACA E-Transfer Admin" menu={Menu}  dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;