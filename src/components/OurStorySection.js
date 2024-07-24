import React from 'react';
import './OurStorySection.css';

const OurStorySection = () => {
  return (
    <section id="our-story">
      <h2>Our Story</h2>
      <p>The idea for Data Analyzer came to life during a data hackathon where we realized the need for a more user-friendly and powerful data analysis tool. We saw how data professionals struggled with existing tools that were either too complex or too limited in functionality.</p>
      <p>Determined to bridge this gap, we embarked on a journey to create a platform that offers the best of both worlds: simplicity and high productivity. With a background in data science and software development, we combined our skills and knowledge to build Data Analyzer.</p>
      <p>From the initial prototype to the fully-fledged application, our journey has been fueled by a commitment to innovation and a desire to make data analysis accessible to all. We believe that everyone should have the tools they need to turn data into actionable insights.</p>
      <p>We envision Data Analyzer being used by professionals and enthusiasts around the world, helping them make sense of their data and drive meaningful outcomes. We continue to evolve and improve our platform, guided by the feedback and needs of our users.</p>
      <p>Thank you for being part of our story. Together, we can transform the world of data analysis.</p>

      {/* YouTube Video Embed */}
      <div className="video-responsive">
        <iframe
          src={`https://www.youtube.com/embed/B0y0SmM56VQ?si=SJHoZ8d7I8bV0cjb`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default OurStorySection;

