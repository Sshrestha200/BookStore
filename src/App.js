import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Collection from './components/Collection';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <Router>
            <NavBar signOut={signOut} user={user} /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/collection" element={<Collection />} />
            </Routes>
            <Footer />
          </Router>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
