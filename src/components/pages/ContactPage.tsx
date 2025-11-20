import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { SocialMediaLinks } from '@/entities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [socialLinks, setSocialLinks] = useState<SocialMediaLinks[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl lg:text-6xl font-light text-primary mb-8 tracking-tight">
              CONTACT US
            </h1>
            <p className="font-paragraph text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your aerospace project? Our team of experts is here to help 
              you achieve your aviation goals with innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-8 tracking-tight">
                GET IN TOUCH
              </h2>
              <p className="font-paragraph text-lg text-primary/80 leading-relaxed mb-12">
                We're here to answer your questions and discuss how Volatus Aerospace 
                can support your aviation projects with our comprehensive services.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                      PHONE
                    </h3>
                    <p className="font-paragraph text-base text-primary/80">
                      +1 (555) 123-4567
                    </p>
                    <p className="font-paragraph text-sm text-primary/60">
                      Monday - Friday, 8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                      EMAIL
                    </h3>
                    <p className="font-paragraph text-base text-primary/80">
                      info@volatusaerospace.com
                    </p>
                    <p className="font-paragraph text-sm text-primary/60">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                      ADDRESS
                    </h3>
                    <p className="font-paragraph text-base text-primary/80">
                      1234 Aviation Boulevard<br />
                      Aerospace City, AC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                      BUSINESS HOURS
                    </h3>
                    <p className="font-paragraph text-base text-primary/80">
                      Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                      Saturday: 9:00 AM - 2:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              {socialLinks.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading text-lg font-light text-primary mb-6 tracking-wide">
                    FOLLOW US
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social._id}
                        href={social.platformUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        <span className="font-paragraph text-sm tracking-wide">
                          {social.platformName}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-primary/5 p-8 lg:p-12">
                <h2 className="font-heading text-2xl lg:text-3xl font-light text-primary mb-8 tracking-tight">
                  SEND US A MESSAGE
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-paragraph text-sm text-primary/80 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-secondary border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-paragraph text-sm text-primary/80 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-secondary border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block font-paragraph text-sm text-primary/80 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-secondary border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block font-paragraph text-sm text-primary/80 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-secondary border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-paragraph text-sm text-primary/80 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-secondary border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-paragraph text-sm text-primary/80 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-secondary border-primary/20 focus:border-primary resize-none"
                      placeholder="Please describe your project requirements or questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-paragraph text-sm tracking-wide"
                  >
                    <Send size={16} className="mr-2" />
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-6 tracking-tight">
              VISIT OUR FACILITY
            </h2>
            <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Our state-of-the-art aerospace facility is equipped with the latest technology 
              and staffed by industry experts ready to support your projects.
            </p>
          </div>
          
          {/* Placeholder for map */}
          <div className="aspect-[16/9] bg-primary/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary/40 mx-auto mb-4" />
              <p className="font-paragraph text-primary/60">
                Interactive map will be displayed here
              </p>
              <p className="font-paragraph text-sm text-primary/40 mt-2">
                1234 Aviation Boulevard, Aerospace City, AC 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="bg-primary text-primary-foreground p-8 lg:p-12 text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-light mb-6 tracking-tight">
              24/7 EMERGENCY SUPPORT
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              For urgent aerospace support needs, our emergency response team is available 
              around the clock to provide immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center bg-primary-foreground text-primary px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-200"
              >
                <Phone size={16} className="mr-2" />
                CALL EMERGENCY LINE
              </a>
              <a
                href="mailto:emergency@volatusaerospace.com"
                className="inline-flex items-center justify-center border border-primary-foreground text-primary-foreground px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail size={16} className="mr-2" />
                EMERGENCY EMAIL
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}