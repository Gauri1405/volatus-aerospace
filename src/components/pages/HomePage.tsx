import { Image } from '@/components/ui/image';

export default function HomePage() {
  return (
    <div className="bg-secondary">
      {/* Hero Section - Inspired by the provided image layout */}
      <section className="w-full max-w-[120rem] mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center px-6 lg:px-12 xl:px-16 py-16 lg:py-24">
            <div className="max-w-lg">
              <p className="font-paragraph text-sm text-primary/70 tracking-wide mb-6 uppercase">
                VOLATUS AEROSPACE
              </p>
              
              <h1 className="font-heading text-6xl lg:text-7xl xl:text-8xl font-light text-primary mb-8 leading-none tracking-tight">
                AEROSPACE
                <br />
                INNOVATION
              </h1>
              
              <p className="font-paragraph text-lg text-primary/80 leading-relaxed mb-8 max-w-md">
                Pioneering the future of aviation with advanced technology solutions, 
                precision engineering, and uncompromising safety standards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary/90 transition-colors duration-200">
                  EXPLORE SERVICES
                </button>
                <button className="border border-primary text-primary px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10">
              <Image
                src="https://static.wixstatic.com/media/8e00d8_788754a032c74f3fba79c60305ed2ca4~mv2.png?originWidth=1152&originHeight=896"
                alt="Advanced aerospace technology and aircraft components"
                className="w-full h-full object-cover"
                width={800}
              />
            </div>
            
            {/* Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-secondary/95 backdrop-blur-sm p-6 max-w-sm">
                <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                  CUTTING-EDGE TECHNOLOGY
                </h3>
                <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                  State-of-the-art aerospace solutions designed for the modern aviation industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-primary mb-6 tracking-tight">
              OUR EXPERTISE
            </h2>
            <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Comprehensive aerospace solutions tailored to meet the evolving demands 
              of the aviation industry with precision and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/8e00d8_836ccbe29d30464d8ad741340eb8af7b~mv2.png?originWidth=768&originHeight=576"
                  alt="Aircraft design and engineering services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                />
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                AIRCRAFT DESIGN
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Advanced aircraft design and engineering solutions for next-generation aviation systems.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/8e00d8_17d7c3b4882b4932b021e9a26b760438~mv2.png?originWidth=768&originHeight=576"
                  alt="Aerospace systems integration and testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                />
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                SYSTEMS INTEGRATION
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Seamless integration of complex aerospace systems with rigorous testing protocols.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/8e00d8_45c6f6f558f04609aa8ff776dda5f62c~mv2.png?originWidth=768&originHeight=576"
                  alt="Aircraft maintenance and technical support"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                />
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-3 tracking-wide">
                MAINTENANCE & SUPPORT
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Comprehensive maintenance and technical support services for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl font-light text-primary mb-8 tracking-tight">
                AEROSPACE
                <br />
                EXCELLENCE
              </h2>
              <p className="font-paragraph text-lg text-primary/80 leading-relaxed mb-6">
                With decades of experience in the aerospace industry, Volatus Aerospace 
                stands at the forefront of aviation innovation. Our commitment to excellence 
                drives us to deliver solutions that exceed expectations.
              </p>
              <p className="font-paragraph text-base text-primary/70 leading-relaxed mb-8">
                From conceptual design to final implementation, we provide comprehensive 
                aerospace services that ensure safety, efficiency, and technological advancement.
              </p>
              <button className="border border-primary text-primary px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                DISCOVER OUR STORY
              </button>
            </div>
            
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/8e00d8_480ad0acfb2348888bb3c3b5988761bb~mv2.png?originWidth=1024&originHeight=768"
                alt="Volatus Aerospace team and facilities"
                className="w-full aspect-[4/3] object-cover"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-light text-primary mb-8 tracking-tight">
            READY TO TAKE FLIGHT?
          </h2>
          <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Connect with our aerospace experts to discuss your project requirements 
            and discover how we can elevate your aviation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary/90 transition-colors duration-200">
              GET IN TOUCH
            </button>
            <button className="border border-primary text-primary px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}