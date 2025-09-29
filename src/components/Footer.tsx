import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              AntiGravity Paragliding School
            </h3>
            <p className="text-gray-300 mb-4">
              Leading paragliding school in India, located at India&apos;s
              highest paragliding site in Bir, Himachal Pradesh. We provide
              professional paragliding courses and safe joyrides with
              experienced instructors.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Paragliding Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/joyride"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Paragliding Joyride
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <div>
                  <p className="text-gray-300">+91 83520 87033 (Sushant)</p>
                  <p className="text-gray-300">+91 82196 35970 (Vicky)</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <p className="text-gray-300">
                  antigravityparagliding@gmail.com
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <p className="text-gray-300">
                  Bir Billing, Himachal Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <div className="text-gray-300 text-sm">
                Years of Flying Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">6+</div>
              <div className="text-gray-300 text-sm">
                Years of Training Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">5</div>
              <div className="text-gray-300 text-sm">
                Experienced Instructors
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">1000+</div>
              <div className="text-gray-300 text-sm">Trained Solo Pilots</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2023 by AntiGravity Paragliding School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
