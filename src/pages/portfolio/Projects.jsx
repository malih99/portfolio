import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-gradient">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="shadow-lg rounded-xl border border-gray-300 p-6">
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">
              Sepehr Academy – Landing Page
            </h3>
            <p className="text-gray-600">
              React.js, Tailwind CSS, Swiper, MUI, Formik, Yup, Axios
            </p>
            <a
              href="https://github.com/malih99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-3 block"
            >
              View on GitHub
            </a>
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-xl border border-gray-300 p-6">
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">
              Admin Panel – Sepehr Academy
            </h3>
            <p className="text-gray-600">
              React.js, Bootstrap, Animate.css, Redux, Sass, Axios
            </p>
            <a
              href="https://github.com/malih99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-3 block"
            >
              View on GitHub
            </a>
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-xl border border-gray-300 p-6">
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">
              Digital Menu – Rahasa
            </h3>
            <p className="text-gray-600">
              HTML, CSS, JS, Tailwind, Vite, Shadcn
            </p>
            <a
              href="http://menu.hesabesh.com/iq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-3 block"
            >
              Live Demo
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
