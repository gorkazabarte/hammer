import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-2">Gorka Zabarte</h1>
      <h2 className="text-xl text-gray-400 mb-6">DevOps Engineer</h2>
      <p className="max-w-xl text-lg mb-6">
        Experienced in AWS, Kubernetes, and Python. Passionate about building scalable infrastructure, automating deployments, and improving CI/CD pipelines.
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com/gzabarte" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="https://linkedin.com/in/gzabarte" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="mailto:gzabarte@example.com">
          <Mail className="w-6 h-6 hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
}

