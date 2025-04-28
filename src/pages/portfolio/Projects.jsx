import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import projects from "../../data/project";
export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-gradient">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <Card
            key={proj.title}
            className="shadow-lg rounded-xl border border-gray-300 p-6"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">{proj.title}</h3>
              <p className="text-gray-600">{proj.stack}</p>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 block"
              >
                {proj.label}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
