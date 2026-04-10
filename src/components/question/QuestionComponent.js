import React from 'react';
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const {id} = useParams();
  const [d, setD] = useState([null]);

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    fetch('https://bvrithcloud.com/api/tasks?status=pending'),
    {method : 'GET',
      header : {"x-student-id" : "23WH1A0526"}}
      .then(r => r.json())
      .then(setD), [id]
  })

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {d.title}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>
      <div>({d._id})</div>
      <div>({d.title})</div>
      <div>({d.description})</div>
      <div>({d.status})</div>
      <Link to ="/"> Go Back </Link>
    </div>
  );
}

export default QuestionComponent;
