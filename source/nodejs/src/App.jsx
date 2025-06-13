import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Github, Linkedin, Mail } from "lucide-react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import MediaCarousel from "./components/MediaCarousel";                                 
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-900 text-white">
          <h1 className="text-4xl font-bold mb-2">Gorka Zabarte</h1>
          <h2 className="text-xl text-gray-400 mb-6">DevOps Engineer</h2>
          <p className="max-w-xl text-lg mb-6">
            Experienced in AWS, Terraform, Docker, Kubernetes, and Python. Passionate about building scalable infrastructure, automating deployments, and improving CI/CD pipelines.
          </p>
            <MediaCarousel /> {/* Add here */}
          <div className="flex space-x-4 mt-10">
            <a href="https://github.com/gorkazabarte" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com/in/gorka-zabarte-moreno" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a href="mailto:gorkazabartemoreno@gmail.com">
              <Mail className="w-6 h-6 hover:text-blue-400" />
            </a>
          </div>
        </div>
        <About /> {/* Add this */} 
        <Skills /> {/* Add this */}
        <Certifications /> {/* ✅ Add this to render it */}
        <Projects /> {/* Add this */}
        <Contact /> {/* Add this */}
      </main>
    </>
  );
}

