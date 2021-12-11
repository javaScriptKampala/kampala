import React from 'react';
import firebase from './../config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';

function Home() {
  const db = getFirestore(firebase);
  // Get a list of cities from your database
  async function getCities(db) {
    const story_collections = collection(db, 'Stories');
    const stories_snap_shot = await getDocs(story_collections);
    const story_list = stories_snap_shot.docs.map(doc => doc.data());
    return story_list;
  }
  getCities(db).then((res) => console.log(res))
  
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Testimonial topDivider />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;