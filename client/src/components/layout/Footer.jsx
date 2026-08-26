const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold uppercase">
              Ready to <span className="text-red-500">Get Strong?</span>
            </h2>
            <p className="mt-2 text-zinc-400">
              Join our fitness community and start your transformation today.
            </p>
          </div>

          <div className="mt-6 flex max-w-md lg:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-lg bg-zinc-900 px-4 py-3 text-sm outline-none ring-1 ring-zinc-700 focus:ring-red-500"
            />
            <button className="rounded-r-lg bg-red-500 px-6 py-3 font-semibold transition hover:bg-red-600">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black italic tracking-tight">
            GYM<span className="text-red-500">X</span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
            Build your strength, improve your health, and become the strongest
            version of yourself.
          </p>

          <div className="mt-6 flex gap-3">
            {["f", "ig", "yt", "in"].map((social) => (
              <a
                key={social}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-zinc-300 transition hover:bg-red-500 hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold">Quick Links</h3>

          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <a href="#" className="transition hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-red-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-red-500">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-red-500">
                Trainers
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="mb-5 text-lg font-bold">Programs</h3>

          <ul className="space-y-3 text-sm text-zinc-400">
            <li>Strength Training</li>
            <li>Weight Loss</li>
            <li>Cardio Training</li>
            <li>Personal Training</li>
            <li>CrossFit</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold">Contact Us</h3>

          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="flex gap-3">
              <span className="text-red-500">📍</span>
              <span>Inaruwa, Sunsari, Nepal</span>
            </li>

            <li className="flex gap-3">
              <span className="text-red-500">📞</span>
              <span>+977 9800000000</span>
            </li>

            <li className="flex gap-3">
              <span className="text-red-500">✉</span>
              <span>info@gymx.com</span>
            </li>

            <li className="flex gap-3">
              <span className="text-red-500">⏰</span>
              <span>5:00 AM – 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} GYMX. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
