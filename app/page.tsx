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

      {/* Hero */}
      <section className="bg-[#1f2b33]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-yellow-400 md:text-5xl">
              Gimo24 Construction Company.
            </h2>
            <p className="mb-8 max-w-lg text-2xl text-zinc-300">
              Building Dreams, offering building solutions & Creating Value!
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-600">
                Get Started
              </a>
              <a href="#services" className="rounded-md border border-yellow-500 px-6 py-3 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black">
                Our Service
              </a>
            </div>
          </div>

          <Image
            src="/gil.JPG"
            alt="Construction"
            width={500}
            height={400}
            className="mx-auto rounded-full"
            priority
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-3xl font-bold">
              Welcome To Construction <br /> Real Solution.
            </h3>

            <ul className="mb-8 space-y-3 text-sm text-zinc-600">
              <li>✔ Residential & Commercial Construction</li>
              <li>✔ Roofing (Decra & Timber)</li>
              <li>✔ Renovations & Extensions</li>
              <li>✔ Architectural Design & Consultation</li>
              <li>✔ Site Supervision & Project Management</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image src="/nyumbaaa.jpg" alt="Site" width={300} height={200} className="rounded-lg object-cover" />
            <Image src="/mmm.jpg" alt="Build" width={300} height={200} className="rounded-lg object-cover" />
            <Image src="/aaaaa.jpg" alt="Project" width={600} height={300} className="col-span-2 rounded-lg object-cover" />
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
              "Residential & Commercial Construction",
              "Roofing (Decra & Timber)",
              "Renovations & Extensions",
              "Architectural Design",
              "Project Management",
            ].map((service) => (
              <div key={service} className="rounded-lg bg-white p-6 text-center shadow hover:shadow-lg">
                <h4 className="mb-2 font-semibold">{service}</h4>
                <p className="text-sm text-zinc-600">
                  Delivered with quality and precision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-4 text-center text-3xl font-bold">
            Meet Our Team
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Gilbert", role: "Managing Director", image: "/gil.JPG" },
              { name: "Moff", role: "Site Engineer", image: "/team.JPG" },
              { name: "Timothy", role: "Architect", image: "/imgggg.jpg" },
            ].map((member) => (
              <div key={member.name} className="rounded-lg bg-zinc-50 p-6 text-center shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-90 w-70 items-center justify-center rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>

                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-yellow-600">{member.role}</p>
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
