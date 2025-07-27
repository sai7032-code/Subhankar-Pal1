import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from "./subhankar_profile.jpg"; // Replace with actual image

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-rose-100 text-gray-900 font-sans">

      {/* Sticky Styled Button Navigation Bar */}
      

      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700 text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Subhankar Pal" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide">Subhankar Pal</h1>
        <p className="text-xl font-medium">ECE Undergraduate | Front-End Enthusiast | Java & SQL | AI Learner</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
  <a href="/Subhankar_Resume.pdf" download className="bg-white text-purple-900 px-6 py-3 rounded-full font-bold shadow-md hover:bg-purple-200 transition duration-300">⬇️ Download Resume</a>
  {[
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "extras", label: "Extras" },
    { id: "contact", label: "Contact" }
  ].map((section) => (
    <button
      key={section.id}
      onClick={() => scrollToSection(section.id)}
      className="bg-purple-100 text-purple-800 border border-purple-400 px-4 py-2 rounded-full font-semibold hover:bg-purple-200 transition"
    >
      {section.label}
    </button>
  ))}
</div>
      </section>

      {/* About Me */}
      <section id="about" data-aos="fade-left" className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-purple-800 border-b-4 border-purple-300 pb-2">🧾 About Me</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          I am a highly motivated ECE undergraduate with a passion for technology and problem-solving.
          Eager to apply my analytical skills and adaptability to innovative software solutions.
          Thrive in dynamic environments that foster learning and growth. Seeking a role in a forward-thinking software company to contribute meaningfully and build a long-term professional journey.
        </p>
      </section>

      {/* Education */}
      <section id="education" data-aos="fade-right" className="bg-gradient-to-br from-yellow-100 to-white p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-yellow-800 border-b-4 border-yellow-400 pb-2">🎓 Education</h2>
        <ul className="space-y-4">
          <li className="bg-yellow-50 p-4 rounded-lg shadow-md"><strong>B.Tech in ECE</strong> – St. Thomas’ College Of Engineering & Technology (YGPA: 7.23, Ending in 2025)</li>
          <li className="bg-yellow-50 p-4 rounded-lg shadow-md"><strong>Class XII (CBSE)</strong> – Sudhir Memorial Institute, Liluah – 64%</li>
          <li className="bg-yellow-50 p-4 rounded-lg shadow-md"><strong>Class X (ICSE)</strong> – Julien Day School, Kolkata – 64.8%</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" data-aos="fade-up" className="bg-gradient-to-tl from-indigo-50 to-white p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-4 border-indigo-400 pb-2">🛠 Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div>
            <h4 className="font-semibold text-indigo-700">🔧 Hard Skills</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Programming: C, C++, Java</li>
              <li>Web: HTML, CSS, JavaScript</li>
              <li>Database: MySQL</li>
              <li>Concepts: OOPs (Java), SQL</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-indigo-700">🤝 Soft Skills</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Communication</li>
              <li>Teamwork & Collaboration</li>
              <li>Adaptability</li>
              <li>Observation & Decision-making</li>
              <li>Multi-tasking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" data-aos="fade-up" className="bg-gradient-to-tr from-pink-50 to-white p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-pink-700 border-b-4 border-pink-400 pb-2">🚀 Projects</h2>
        {["Online Food Delivery Website", "Gen AI-Based Fitness Trainer", "Minesweeper Game using Java", "Weather App Frontend"].map((title, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-700">
              {title === "Online Food Delivery Website" && "Responsive front-end website built using HTML & CSS to simulate an online food ordering platform."}
              {title === "Gen AI-Based Fitness Trainer" && "Uses Gemini AI model and NLP to provide fitness guidance via text/image inputs."}
              {title === "Minesweeper Game using Java" && "A grid-based logic game developed using Java where players avoid hidden mines."}
              {title === "Weather App Frontend" && "Designed a frontend for a weather app using HTML, CSS & APIs to mimic real-time weather display."}
            </p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section id="certifications" data-aos="zoom-in" className="bg-gradient-to-r from-purple-50 to-white p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 border-b-4 border-purple-400 pb-2">📜 Certifications</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>Java Basics – HackerRank</li>
          <li>SQL Intermediate – HackerRank</li>
          <li>HTML – Great Learning</li>
          <li>CSS Basics – HackerRank</li>
        </ul>
      </section>

      {/* Extras */}
      <section id="extras" data-aos="fade-right" className="bg-gradient-to-bl from-green-50 to-white p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-700 border-b-4 border-green-400 pb-2">🎯 Extras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-600">Extracurricular Activities</h4>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Core Committee Member – College Farewell Organizing Team</li>
              <li>Participant – College TechFest</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-600">Hobbies</h4>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Playing Sports (Football, Cricket, Carrom, Badminton)</li>
              <li>Watching Movies</li>
              <li>Listening to Music</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-rose-700 to-purple-700 text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
        <p className="mb-2">📧 subhankarpal17012003@gmail.com</p>
        <p>📞 9163764097</p>
        <p>📍 Howrah, West Bengal</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/Subhankar1722" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaGithub size={30} /></a>
          <a href="mailto:subhankarpal17012003@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:9163764097" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>

    </main>
  );
}
