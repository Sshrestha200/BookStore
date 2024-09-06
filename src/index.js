import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AWS from 'aws-sdk';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// AWS.config.update({
//   region: 'us-west-2', 
//   credentials: new AWS.Credentials({
//     accessKeyId: 'YOUR_ACCESS_KEY_ID',
//     secretAccessKey: 'jBoQZSNL0eNxp+mDj7wxBoc46Nc+Bi8CLvzdWwZu',
//   }),
// });
//  this.dynamodb=new AWS.DynamoDB();
//  this.docClient= new AWS.DynamoDB.DocumentClient();


reportWebVitals();
