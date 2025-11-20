import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { SocialMediaLinks } from '@/entities';

export default function Footer() {
  const [socialLinks, setSocialLinks] = useState<SocialMediaLinks[]>([]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const { items } = await BaseCrudService.getAll<SocialMediaLinks>('socialmedialinks');
        const activeLinks = items
          .filter(link => link.isActive)
          .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        setSocialLinks(activeLinks);
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-footerbackground text-primary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-lg font-light mb-4 tracking-wide">
              VOLATUS AEROSPACE
            </h3>
            <p className="font-paragraph text-sm text-primary-foreground/90 mb-6 leading-relaxed max-w-md">
              Leading aerospace innovation with cutting-edge technology and unparalleled expertise. 
              We deliver comprehensive solutions for the modern aviation industry.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-foreground/70" />
                <span className="font-paragraph text-sm text-primary-foreground/90">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-foreground/70" />
                <span className="font-paragraph text-sm text-primary-foreground/90">
                  info@volatusaerospace.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-foreground/70 mt-0.5" />
                <span className="font-paragraph text-sm text-primary-foreground/90">
                  1234 Aviation Boulevard<br />
                  Aerospace City, AC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-light mb-4 tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block font-paragraph text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-base font-light mb-4 tracking-wide">
              Connect With Us
            </h4>
            {socialLinks.length > 0 ? (
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social._id}
                    href={social.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-paragraph text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {social.platformName}
                  </a>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <a
                  href="#"
                  className="block font-paragraph text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block font-paragraph text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block font-paragraph text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                >
                  Facebook
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-paragraph text-xs text-primary-foreground/70">
              © 2024 Volatus Aerospace. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="font-paragraph text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-paragraph text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}