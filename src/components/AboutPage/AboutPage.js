import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Pickup is an application designed for people with similar 
        interests to meetup. To View nearby locations and users, create an
        account and login.
      </p>
    </div>
  </div>
);

export default AboutPage;
