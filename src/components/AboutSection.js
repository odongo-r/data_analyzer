import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about-content">
        <p>Data Analyzer was born out of a passion for making data analysis accessible and enjoyable for everyone. Our team of dedicated data enthusiasts, developers, and designers have come together to create a platform that empowers users to explore, analyze, and visualize data like never before.</p>
        <p>Inspired by the challenges faced by data professionals in their daily work, we set out to build a tool that simplifies complex data processes while providing powerful insights. Our mission is to democratize data analysis and help people unlock the full potential of their data.</p>
        <p>Join us on this journey to make data analysis intuitive, insightful, and impactful.</p>
        <p><a href="https://github.com/odongo-r/data-analyzer">GitHub repository</a></p>
        <p>Developed by <a href="https://www.linkedin.com/in/rodongo/">Ronald Odongo</a>. Connect with me on <a href="https://x.com/_Odongo_">Twitter</a> and <a href="https://github.com/odongo-r">GitHub</a>.</p>
      </div>
    </section>
  );
};

export default AboutSection;
