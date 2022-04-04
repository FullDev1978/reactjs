import React from 'react';
import ServerSideTable from 'reactjs-server-side-table';


const url = 'https://jsonplaceholder.typicode.com/users';
const headers = [
  [
    {title: "아이디"},
    {title: "이름"},
    {title: "연락처"},
    {title: "이메일"},
    {title: "등록일"}
  ]
];
const columns = [
  {name: 'address'}, 
  {name: 'name'}, 
  {name: 'username'}, 
  {name: 'email'}, 
  {name: 'phone'}
];

<ServerSideTable
  url={https://jsonplaceholder.typicode.com/users} 
  headers={headers} 
  columns={columns} 
/>












export default Employee;