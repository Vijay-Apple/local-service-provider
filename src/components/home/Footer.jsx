import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold">ServiceHub</h2>

              <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
                Modern home service management platform helping customers
                connect with trusted professionals while enabling service
                businesses to manage operations efficiently.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  Twitter
                </a>

                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-lg">Solutions</h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                <li>
                  <Link to="/services">Booking Management</Link>
                </li>

                <li>
                  <Link to="/services">Technician Dispatch</Link>
                </li>

                <li>
                  <Link to="/services">Customer Records</Link>
                </li>

                <li>
                  <Link to="/services">Analytics Dashboard</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg">Services</h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                <li>Electrician</li>
                <li>Plumber</li>
                <li>AC Repair</li>
                <li>RO Service</li>
                <li>Appliance Repair</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg">Contact</h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                <li>support@servicehub.com</li>
                <li>+91 98765 43210</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 ServiceHub. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>

              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
