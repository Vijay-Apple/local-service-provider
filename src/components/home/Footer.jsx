import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { getFooter } from "../../services/public/public.service";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await getFooter();

        if (response?.success) {
          setFooter(response.data);
        }
      } catch (error) {
        console.log("Footer Fetch Error:", error);
      }
    };

    fetchFooter();
  }, []);

  if (!footer) {
    return null;
  }

  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* COMPANY */}

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold">{footer.companyName}</h2>

              <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
                {footer.description}
              </p>

              <div className="mt-6 flex gap-4">
                {footer.socialLinks?.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-slate-400 
                      hover:text-white 
                      transition
                      "
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* SOLUTIONS */}

            <div>
              <h3 className="font-semibold text-lg">Solutions</h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                {footer.solutions?.map((solution) => (
                  <li key={solution.title}>
                    <Link
                      to={solution.link}
                      className="hover:text-white transition"
                    >
                      {solution.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}

            <div>
              <h3 className="font-semibold text-lg">Services</h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                {footer.services?.map((service) => (
                  <li key={service} className="hover:text-white transition">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}

            <div>
              <h3 className="font-semibold text-lg">Contact</h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                <li>{footer.contact?.email}</li>

                <li>{footer.contact?.phone}</li>

                <li>{footer.contact?.address}</li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}

          <div
            className="
            border-t border-slate-800 
            mt-12 pt-6 
            flex flex-col md:flex-row 
            justify-between items-center 
            gap-4
            "
          >
            <p className="text-slate-500 text-sm">{footer.copyright}</p>

            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>

              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>

              <Link to="/contact" className="hover:text-white transition">
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
