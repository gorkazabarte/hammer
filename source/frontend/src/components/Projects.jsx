export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">AWS Infrastructure with Terraform</h3>
          <p className="text-sm text-gray-700 mb-4">
            Built scalable infrastructure on AWS using Terraform modules for VPC, EC2, and RDS. Integrated S3 + DynamoDB for remote state management.
          </p>
          <a
            href="https://github.com/gorkazabarte/aws-terraform-infra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">CI/CD Pipeline with GitHub Actions</h3>
          <p className="text-sm text-gray-700 mb-4">
            Automated Docker builds, tests, and deployments to AWS ECS using GitHub Actions and custom workflows.
          </p>
          <a
            href="https://github.com/gorkazabarte/devops-cicd-pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Kubernetes Monitoring with Prometheus + Grafana</h3>
          <p className="text-sm text-gray-700 mb-4">
            Set up a full monitoring stack for a Kubernetes cluster with Prometheus, Grafana dashboards, and alerting rules.
          </p>
          <a
            href="https://github.com/gorkazabarte/k8s-monitoring"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

