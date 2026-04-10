import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const {status} = useParams();
  const [d, setD] = useState([]);

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    fetch(`http://bvrithcloud.com/api/tasks?status=${status}`,
      {headers : {"x-student-id" : "23WH1A0526"}})
      .then(r => r.json())
      .then(res => setD(res.data || res));
  }, [status]);

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      <h2>{status}Tasks</h2>
      {d.map(x => (
        <div key = {x._id}>
          {x.title} - {x.status}
        </div>
      ))}
    </div>
  );
}

export default QuestionComponent;
