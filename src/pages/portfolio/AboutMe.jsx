import profile from "../../data/profile";
export default function AboutMe() {
  return (
    <section className="mb-12 bg-white dark:card-bg p-6 rounded-2xl shadow-md border dark:card-border">
      <h2 className="text-3xl font-semibold mb-4 text-gradient">
        {profile.name}
      </h2>
      <img
        src="../../../public/photo_2025-02-15_11-54-44.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-md hover:scale-105 transition duration-300"
      />
      <p className="text-lg leading-relaxed">{profile.about}</p>
    </section>
  );
}
