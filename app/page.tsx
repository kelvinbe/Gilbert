import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight">
            Gimo24 <span className="text-orange-500">Construction</span>
          </h1>

          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#projects" className="hover:text-orange-500">Projects</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 text-center sm:text-left">
        <div className="flex flex-col gap-6 sm:max-w-3xl">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Building Strong Foundations for the Future
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Gimo24 Construction Company delivers high-quality residential,
            commercial, and infrastructure projects with precision, integrity,
            and excellence.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition hover:bg-orange-600"
            >
              Get a Quote
            </a>
            <a
              href="#projects"
              className="rounded-full border border-zinc-300 px-8 py-3 font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="mb-12 text-center text-3xl font-semibold">
            Our Services
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Residential Construction",
              "Commercial Buildings",
              "Roads & Infrastructure",
              "Renovation & Maintenance",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-zinc-200 p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800"
              >
                <h4 className="mb-2 text-lg font-semibold">{service}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  High-quality workmanship delivered by experienced professionals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-zinc-100 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-semibold">About Gimo24</h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-400">
            Gimo24 Construction Company is committed to delivering reliable,
            cost-effective, and durable construction solutions. Our mission is
            to exceed client expectations through innovation, safety, and
            professional excellence.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-semibold">Contact Us</h3>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            Ready to start your project? Reach out to us today.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:info@gimo24construction.com"
              className="rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition hover:bg-orange-600"
            >
              Email Us
            </a>
            <a
              href="tel:+254700000000"
              className="rounded-full border border-zinc-300 px-8 py-3 font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Gimo24 Construction Company. All rights reserved.
      </footer>
    </div>
  );
}
