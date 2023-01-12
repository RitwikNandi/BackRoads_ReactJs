import img from "../images/about.jpeg";
import Title from "./Title";

import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section className='section' id='about'>
        <Title title='About' subTitle='us' />

        <div className='section-center about-center'>
          <div className='about-img'>
            <img src={img} className='about-photo' alt='awesome beach' />
          </div>
          <article className='about-info'>
            <h3>explore the difference</h3>
            <p>
              In light of the rising frequency of human/grizzly bear conflicts,
              the Montana Department of Fish and Game is advising hikers,
              hunters, and fishermen to take extra precautions and keep alert
              for bears while in the field.
            </p>
            <p>
              "We advise that outdoorsmen wear noisy little bells on their
              clothing so as not to startle bears that aren't expecting them. We
              also advise outdoorsmen to carry pepper spray with them in case of
              an encounter with a bear. It is also a good idea to watch out for
              fresh signs of bear activity. Outdoorsmen should recognize the
              difference between black bear and grizzly bear poop. Black bear
              poop is smaller and contains lots of berries and squirrel fur.
              Grizzly bear poop has little bells in it and smells like pepper."
            </p>
            <a href='#about' rel='noreferrer' className='btn'>
              read more
            </a>
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
