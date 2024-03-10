import React from 'react'
import { useParams } from 'react-router-dom';

function UserPage() {
  const params = useParams();
  const {name} = params;
  return (
    <div>This Page for { name}</div>
  )
}

export default UserPage;