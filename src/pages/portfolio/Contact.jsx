export default function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4 text-gradient">Contact</h2>
      <p>
        Email:{" "}
        <a className="text-blue-500" href="mailto:maliheasadi99@gmail.com">
          maliheasadi99@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          className="text-blue-500"
          href="https://github.com/malih99"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/malih99
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          className="text-blue-500"
          href="https://www.linkedin.com/in/malih-asadi-a151b0289"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/malih-asadi
        </a>
      </p>
    </section>
  );
}
