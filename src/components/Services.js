import React from "react";
import servicesData from "../data/ServicesData";
import Title from "./Title";

const Services = () => {
  return (
    <React.Fragment>
      <section className='section services' id='services'>
        <Title title='our' subTitle='services' />
        <div className='section-center services-center'>
          {servicesData.map((services) => {
            const { id, title, para, icon } = services;
            return (
              <article className='service' key={id}>
                <span className='service-icon'>
                  <i className={icon}></i>
                </span>
                <div className='service-info'>
                  <h4 className='service-title'>{title}</h4>
                  <p className='service-text'>{para}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
