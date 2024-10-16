// app/[domain]/[path]/page.tsx
import { notFound } from "next/navigation";
async function validateDomainAndPath(domain: string, path: string | undefined) {
  // Example validation logic
  const validDomains = ["example", "test", "localhost"];
  const isValidDomain = validDomains.includes(domain);

  // Add your own logic to validate the path if necessary
  const isValidPath = path ? /* your path validation */ true : true;

  return isValidDomain && isValidPath;
}

// app/[domain]/[path]/page.tsx
export default async function Page({ params }: { params: any }) {
  const { domain, path } = params;

  // Implement your validation logic here
  const isValid = await validateDomainAndPath(domain, path);

  if (!isValid) {
    notFound(); // This will render the 404 page
  }

  // Rest of your page component
  return (
    <div>
      <h1>Welcome to {domain}</h1>
      {/* Render content based on the domain and path */}
    </div>
  );
}
