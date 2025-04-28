import skills from "../../data/skills";
export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-gradient">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <li key={skill} className="skill-card">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
