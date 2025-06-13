// src/components/Certifications.jsx
export default function Certifications() {
  return (
    <section id="certifications" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-center">Certifications</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold">AWS Certified Solutions Architect – Associate</h3>
          <p className="text-sm text-gray-600">Issued: May 2024</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold">AWS Cloud Practitioner</h3>
          <p className="text-sm text-gray-600">Issued: March 2023</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Terraform Associate</h3>
          <p className="text-sm text-gray-600">Issued: January 2024</p>
        </li>
      </ul>
    </section>
  );
}

