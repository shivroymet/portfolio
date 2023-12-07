import React  from 'react';
import "./Experience.css"

export function Experience() {
  document.addEventListener("DOMContentLoaded", function () {


    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const title = entry.target.querySelector('.scaleDown');
        if (entry.isIntersecting) {
          title.classList.add('scaleDownHel');
          title.classList.add('animate__delay-3s');
          return;
        }
      });
    });
    observer2.observe(document.querySelector('.containerhel'));

  });
  return <article>
    <figure className="infosys-fig">

    </figure>
    <section className="experience-section">
      <div className="container-ex">
        <div className="title-ex">
          <h2>Infosys Limited</h2>
          <p>(Dec 2018 - Jun 2021)</p>
        </div>
        <p className="small">
          <span>Senior Systems Engineer</span> (Dec 2020 - Jun 2021)<br />
          I contributed to various projects aimed at enhancing system functionality. Notably, I played a key role in integrating SAML and LDAP authentication and developing encryption services for the Infosys Polycloud Platform.
        </p>
        <p className="small">
          <span>Systems Engineer </span> (Dec 2018 - Dec 2020)<br />
          Focused on implementing solutions to improve operational efficiency including automating server health monitoring, resulting in a significant reduction in manual workload. I initiated the deployment of Elastic Stack (ELK) for improved application and server log monitoring.
        </p>
      </div>
    </section>


    <section className="experience-section">
      <div className="infy-div">
        <h4>Tools and Technologies</h4>
        <div className="infy-tools">
          <div className="icon-box img1"></div>
          <div className="icon-box img2"></div>
          <div className="icon-box img3"></div>
          <div className="icon-box img4"></div>
          <div className="icon-box img5"></div>
          <div className="icon-box img6"></div>
          <div className="icon-box img7"></div>
          <div className="icon-box img8"></div>
          <div className="icon-box img9"></div>
          <div className="icon-box img10"></div>
          <div className="icon-box img11"></div>
          <div className="icon-box img12"></div>
          <div className="icon-box img28"></div>
          
        </div>


      </div>
    </section>
    <figure className="accenture-fig">

    </figure>
    <section className="experience-section">
      <div className="container-ex">
        <div className="title-ex">
          <h2>Accenture</h2>
        <p>(Jun 2021 - Jan 2023)</p></div>
        <p className="small">
          <span>Software Engineer</span> (Jun 2021 - Jan 2023)<br />
          I managed critical data, ensuring integrity and compliance. Resolving a code defect for a hospitality client, I restored booking services for 2,000 daily customers. My implementation of data caching in micro-services prevented a 2-hour production outage during a database upgrade, receiving recognition. I oversaw seamless deployment processes, enabling smooth transitions, and ensured timely SSL certificate renewals, minimizing downtime and enhancing security.</p>
      </div>
    </section>
    <section className="experience-section">
    <div className="acc-div">
        <h4>Tools and Technologies</h4>
        <div className="acc-tools">
          <div className="icon-box img13"></div>
          <div className="icon-box img14"></div>
          <div className="icon-box img15"></div>
          <div className="icon-box img16"></div>
          <div className="icon-box img17"></div>
          <div className="icon-box img18"></div>
          <div className="icon-box img19"></div>
          <div className="icon-box img20"></div>
          <div className="icon-box img21"></div>
          <div className="icon-box img22"></div>
          <div className="icon-box img23"></div>
          <div className="icon-box img24"></div>
          <div className="icon-box img25"></div>
          <div className="icon-box img26"></div>
          <div className="icon-box img27"></div>
          <div className="icon-box img29"></div>
        </div>
      </div>
    </section>


  </article>
}