import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">
            Gimo24 <span className="text-yellow-500">Construction</span>
          </h1>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:text-yellow-500">Home</a>
            <a href="#about" className="hover:text-yellow-500">About Us</a>
            <a href="#projects" className="hover:text-yellow-500">Project</a>
            <a href="#services" className="hover:text-yellow-500">Service</a>
            <a href="#team" className="hover:text-yellow-500">Our Team</a>
          </nav>

          <a
            href="#contact"
            className="rounded-md bg-yellow-500 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-600"
          >
            Connect
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1f2b33]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-yellow-400 md:text-5xl">
              We Build Something <br /> New And Consistent.
            </h2>
            <p className="mb-8 max-w-lg text-zinc-300">
              Your ideas & dreams are transformed by us into long-lasting,
              engineered buildings with quality and precision.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-600"
              >
                Get Start
              </a>
              <a
                href="#services"
                className="rounded-md border border-yellow-500 px-6 py-3 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black"
              >
                Our Service
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/imgggg.jpg" // replace with your image
              alt="Construction Worker"
              width={500}
              height={500}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
          {/* Text */}
          <div>
            <h3 className="mb-4 text-3xl font-bold">
              Welcome To Construction <br /> Real Solution.
            </h3>
            <p className="mb-6 text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="mb-8 space-y-3 text-sm text-zinc-600">
              <li>✔ Professional & Certified Engineers</li>
              <li>✔ Quality Materials & Workmanship</li>
              <li>✔ Timely Project Delivery</li>
              <li>✔ Safety & Compliance Guaranteed</li>
            </ul>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-600"
            >
              Read More →
            </a>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/nyumbaaa.jpg"
              alt="Construction Site"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <Image
              src="/mmm.jpg"
              alt="Building Project"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <Image
              src="/aaaaa.jpg"
              alt="Infrastructure"
              width={300}
              height={200}
              className="col-span-2 rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-12 text-center text-3xl font-bold">
            We Provide Services
          </h3>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Residential Construction",
              "Commercial Buildings",
              "Roads & Infrastructure",
              "Renovation & Maintenance",
            ].map((service) => (
              <div
                key={service}
                className="rounded-lg bg-white p-6 text-center shadow hover:shadow-lg"
              >
                <h4 className="mb-2 font-semibold">{service}</h4>
                <p className="text-sm text-zinc-600">
                  High-quality construction services delivered by experts.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2b33] py-6 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Gimo24 Construction Company. All rights reserved.
      </footer>
    </div>
  );
}
