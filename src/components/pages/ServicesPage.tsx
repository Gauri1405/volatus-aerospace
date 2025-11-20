import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { ExternalLink } from 'lucide-react';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Services>('services');
        const activeServices = items.filter(service => service.isActive);
        setServices(activeServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl lg:text-6xl font-light text-primary mb-8 tracking-tight">
              OUR SERVICES
            </h1>
            <p className="font-paragraph text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive aerospace solutions designed to meet the evolving demands 
              of the aviation industry with precision, innovation, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[4/3] bg-primary/10 mb-6"></div>
                  <div className="h-6 bg-primary/10 mb-3"></div>
                  <div className="h-4 bg-primary/10 mb-2"></div>
                  <div className="h-4 bg-primary/10 w-3/4"></div>
                </div>
              ))}
            </div>
          ) : services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service._id} className="group">
                  <div className="aspect-[4/3] mb-6 overflow-hidden bg-primary/5">
                    {service.serviceImage ? (
                      <Image
                        src={service.serviceImage}
                        alt={service.serviceName || 'Service image'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={400}
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <span className="font-paragraph text-primary/40 text-sm">
                          {service.serviceName}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                    {service.serviceName?.toUpperCase()}
                  </h3>
                  
                  <p className="font-paragraph text-sm text-primary/80 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  
                  {service.detailedDescription && (
                    <p className="font-paragraph text-xs text-primary/60 leading-relaxed mb-4">
                      {service.detailedDescription}
                    </p>
                  )}
                  
                  {service.learnMoreUrl && (
                    <a
                      href={service.learnMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-paragraph text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      Learn More
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Fallback content when no services are available
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Default Service 1 */}
              <div className="group">
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/8e00d8_ad8ad9c81ce84cd787b182a3f0f3f879~mv2.png?originWidth=384&originHeight=256"
                    alt="Aircraft design and engineering services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                  />
                </div>
                <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                  AIRCRAFT DESIGN & ENGINEERING
                </h3>
                <p className="font-paragraph text-sm text-primary/80 leading-relaxed mb-4">
                  Advanced aircraft design and engineering solutions for next-generation aviation systems, 
                  incorporating cutting-edge technology and innovative approaches.
                </p>
                <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                  Our team of experienced engineers specializes in conceptual design, detailed engineering, 
                  and prototype development for both commercial and military aircraft applications.
                </p>
              </div>

              {/* Default Service 2 */}
              <div className="group">
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/8e00d8_ae5d3332952c452c960fb230074f8599~mv2.png?originWidth=384&originHeight=256"
                    alt="Aerospace systems integration and testing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                  />
                </div>
                <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                  SYSTEMS INTEGRATION
                </h3>
                <p className="font-paragraph text-sm text-primary/80 leading-relaxed mb-4">
                  Seamless integration of complex aerospace systems with rigorous testing protocols 
                  to ensure optimal performance and reliability.
                </p>
                <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                  We provide comprehensive systems integration services including avionics, 
                  propulsion systems, and flight control systems with full certification support.
                </p>
              </div>

              {/* Default Service 3 */}
              <div className="group">
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/8e00d8_6d0c95c459594217804ebac5dc13c805~mv2.png?originWidth=384&originHeight=256"
                    alt="Aircraft maintenance and technical support"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                  />
                </div>
                <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                  MAINTENANCE & SUPPORT
                </h3>
                <p className="font-paragraph text-sm text-primary/80 leading-relaxed mb-4">
                  Comprehensive maintenance and technical support services for optimal aircraft 
                  performance throughout the entire operational lifecycle.
                </p>
                <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                  Our maintenance programs include preventive maintenance, repairs, modifications, 
                  and 24/7 technical support to minimize downtime and maximize efficiency.
                </p>
              </div>

              {/* Default Service 4 */}
              <div className="group">
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/8e00d8_73ad5fd0fc4445e69b47e6b14faad95b~mv2.png?originWidth=384&originHeight=256"
                    alt="Aerospace consulting and advisory services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                  />
                </div>
                <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                  CONSULTING & ADVISORY
                </h3>
                <p className="font-paragraph text-sm text-primary/80 leading-relaxed mb-4">
                  Strategic consulting and advisory services to help organizations navigate 
                  complex aerospace challenges and opportunities.
                </p>
                <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                  Our consultants provide expertise in regulatory compliance, market analysis, 
                  technology assessment, and strategic planning for aerospace ventures.
                </p>
              </div>

              {/* Default Service 5 */}
              <div className="group">
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/8e00d8_c41945dea37e4d69886f555797b5ea59~mv2.png?originWidth=384&originHeight=256"
                    alt="Aerospace testing and validation services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                  />
                </div>
                <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                  TESTING & VALIDATION
                </h3>
                <p className="font-paragraph text-sm text-primary/80 leading-relaxed mb-4">
                  Comprehensive testing and validation services to ensure aerospace systems 
                  meet the highest safety and performance standards.
                </p>
                <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                  Our testing facilities include wind tunnels, structural testing, avionics testing, 
                  and flight testing capabilities with full certification support.
                </p>
              </div>

              {/* Default Service 6 */}
              <div className="group">
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/8e00d8_31546cfd05734317a3f91896d1d25c64~mv2.png?originWidth=384&originHeight=256"
                    alt="Aerospace training and education services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                  />
                </div>
                <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                  TRAINING & EDUCATION
                </h3>
                <p className="font-paragraph text-sm text-primary/80 leading-relaxed mb-4">
                  Professional training and education programs designed to enhance aerospace 
                  knowledge and skills across various disciplines.
                </p>
                <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                  We offer customized training programs for pilots, engineers, technicians, 
                  and management teams with both classroom and hands-on learning opportunities.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-8 tracking-tight">
              OUR CAPABILITIES
            </h2>
            <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Advanced facilities and expertise that enable us to deliver exceptional 
              aerospace solutions across all service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-lg font-light text-primary mb-3 tracking-wide">
                ADVANCED FACILITIES
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                State-of-the-art testing and manufacturing facilities equipped with 
                the latest aerospace technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-lg font-light text-primary mb-3 tracking-wide">
                EXPERT TEAM
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Highly skilled engineers and technicians with decades of combined 
                aerospace industry experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-lg font-light text-primary mb-3 tracking-wide">
                CERTIFICATION
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Full regulatory compliance and certification support for all 
                aerospace projects and services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-lg font-light text-primary mb-3 tracking-wide">
                GLOBAL REACH
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                International project capabilities with local support and 
                worldwide service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-8 tracking-tight">
            READY TO ELEVATE YOUR PROJECT?
          </h2>
          <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Contact our aerospace experts to discuss your specific requirements 
            and discover how we can bring your vision to reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary/90 transition-colors duration-200">
              REQUEST CONSULTATION
            </button>
            <button className="border border-primary text-primary px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}