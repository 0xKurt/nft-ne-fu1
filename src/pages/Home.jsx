import React from 'react';
import SetAirdrop from '../components/SetAirdrop';
import Story from '../heros/Story';
import WelcomeHero from '../heros/WelcomeHero';

const Home = () => {
  return (
    <div>
      <WelcomeHero />
      <Story />
      {/* <SetAirdrop /> */}
    </div>
  );
}

export default Home;