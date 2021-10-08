import React from 'react';
import SetAirdrop from '../components/SetAirdrop';
import Roadmap from '../heros/Roadmap';
import Story from '../heros/Story';
import Team from '../heros/Team';
import ViewOnMarket from '../heros/ViewOnMarket';
import WelcomeHero from '../heros/WelcomeHero';

const Home = () => {
  return (
    <div>
      <WelcomeHero />
      <Story />
      <ViewOnMarket />
      <Team />
      <Roadmap />
      {/* <SetAirdrop /> */}
    </div>
  );
}

export default Home;