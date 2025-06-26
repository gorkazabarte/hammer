export default function Skills() {
  return (
    <section id="skills" className="p-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cloud & Infrastructure */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Cloud & Infrastructure</h3>
          <ul className="list-disc list-inside text-sm">
            <li>AWS (EC2, S3, VPC, IAM, Lambda, RDS)</li>
            <li>Azure (basic familiarity)</li>
            <li>Infrastructure as Code (Terraform, CloudFormation)</li>
          </ul>
        </div>

        {/* CI/CD & Automation */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">CI/CD & Automation</h3>
          <ul className="list-disc list-inside text-sm">
            <li>GitHub Actions</li>
            <li>GitLab CI/CD</li>
            <li>Jenkins</li>
            <li>Shell scripting</li>
          </ul>
        </div>

        {/* Containers & Orchestration */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Containers & Orchestration</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Docker</li>
            <li>Kubernetes (EKS, Helm)</li>
            <li>Compose, Skaffold</li>
          </ul>
        </div>

        {/* Monitoring & Logging */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Monitoring & Logging</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Prometheus & Grafana</li>
            <li>CloudWatch</li>
            <li>ELK Stack</li>
          </ul>
        </div>

        {/* Programming & Scripting */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Programming & Scripting</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Python</li>
            <li>Bash</li>
            <li>JavaScript (basic React)</li>
          </ul>
        </div>

        {/* Version Control & Collaboration */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Version Control</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Git</li>
            <li>GitHub, GitLab</li>
            <li>Branching strategies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

