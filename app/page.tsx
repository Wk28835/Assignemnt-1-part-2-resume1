
const Home = () => {
  return (

       <div>   
            <nav className="bg-pink-600 py-2 shadow-md sticky z-10 top-0">
            <ul>
            <li><a href="#basic-info">Basic Info</a></li>
            <li><a href="#contact-info">Contact Info</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
             <li><a href="#experience">Experience</a></li>
           <li><a href="#portfolio">Portfolio</a></li>
                </ul>
            </nav>
            <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
          <section id="basic-info" className="basic-info text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Waseem Khan</h1>
              <h3 className="text-2xl font-light text-gray-600">Web Developer</h3>
              <p className="mt-4 text-gray-500">A passionate web developer with experience in building responsive and user-friendly websites. Dedicated to continuous learning and improvement.</p>
          </section>

          <section className="contact-info mb-8">
              <h2 id="contact-info"  className="text-3xl font-semibold text-gray-700 mb-4">Contact Information</h2>
              <p className="text-gray-600">Email: <a href="mailto:johndoe@example.com" className="text-blue-500 hover:underline">wk28835@gmail.com</a></p>
              <p className="text-gray-600">Phone: <span className="text-blue-500">0324-9809873</span></p>
              <p className="text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank" className="text-blue-500 hover:underline">linkedin.com/in/WaseemKhan</a></p>
             
          </section>

          <section id="skills" className="skills mb-8">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Skills</h2>
              <ul className="list-disc list-inside text-gray-600">
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>Laravel-php</li>
                  <li>Node.js</li>
                  <li>Git & GitHub</li>
              </ul>
          </section>

          <section id="education" className="education mb-8">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Education</h2>
              <ul className="list-disc list-inside text-gray-600">
                  <li>Bachelor of Science in Software Engineering, Virtual University, Present</li>
                  
              </ul>
          </section>
          <div>
          <section id="experience" className="experience mb-8">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Experience</h2>
              <ul className="list-disc list-inside text-gray-600">
                  <li>Laravel Ecom Site Building, 1 Year</li>
                  
              </ul>
          </section>
          </div>

          <section id="portfolio" className="portfolio mb-8">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Portfolio</h2>
              <ul className="list-disc list-inside text-gray-600">
                  <li><a href="https://vercel.live/link/dynamic-resume-milestone3.vercel.app?via=team-dashboard-project-entity&p=1&page=/" target="_blank" className="text-blue-500 hover:underline">Dynamic Resume Builder</a> </li>
                  
              </ul>
          </section>
</div>
</div>  

  );
};

export default Home;
