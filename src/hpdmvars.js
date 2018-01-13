import React from 'react';
import { List,Show, Edit, Create, Delete, SimpleShowLayout, Datagrid, ReferenceField, TextField, BooleanField, ChipField,  ShowButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, BooleanInput } from 'admin-on-rest';

export const BatchProcessList = (props) => (
    <List {...props} title="Nightly FTP Files" >
        <Datagrid>
            <TextField source="id" />
            <TextField source="summary" />
            <TextField source="metadata" />
            <ChipField source="state" />
            <ShowButton />
        </Datagrid>
    </List>
);

const BatchProcessTitle = ({ record }) => {
    return <span>MVAR {record ? `"${record.summary}"` : ''}</span>;
};

export const BatchProcessShow = (props) => (
    <Show summary={<BatchProcessTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="summary" />
            <TextField source="state" />
            <TextField source="metadata" />
            <BooleanField source="process" />
        </SimpleShowLayout>
    </Show>
);

export const BatchProcessCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="summary" />
            <TextInput source="state" />
            <LongTextInput source="metadata" />
            <BooleanInput source="process" />
        </SimpleForm>
    </Create>
);