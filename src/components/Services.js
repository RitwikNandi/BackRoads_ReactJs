import React from "react";
import servicesData from "../data/ServicesData";

const Services = () => {
  return (
    <React.Fragment>
      <section className='section services' id='services'>
        <div className='section-title'>
          <h2>
            our <span>services</span>
          </h2>
        </div>
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
