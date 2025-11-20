import { Image } from '@/components/ui/image';

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl lg:text-6xl font-light text-primary mb-8 tracking-tight">
              ABOUT VOLATUS
              <br />
              AEROSPACE
            </h1>
            <p className="font-paragraph text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Pioneering aerospace innovation through cutting-edge technology, 
              exceptional engineering expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-8 tracking-tight">
                OUR STORY
              </h2>
              <p className="font-paragraph text-lg text-primary/80 leading-relaxed mb-6">
                Founded with a vision to revolutionize the aerospace industry, Volatus Aerospace 
                has grown from a small engineering firm to a leading provider of comprehensive 
                aviation solutions. Our journey began with a simple belief: that innovation 
                and excellence should drive every aspect of aerospace development.
              </p>
              <p className="font-paragraph text-base text-primary/70 leading-relaxed mb-8">
                Over the years, we have built a reputation for delivering cutting-edge solutions 
                that meet the evolving needs of the aviation industry. From conceptual design 
                to final implementation, our team of experts ensures that every project exceeds 
                expectations and sets new standards for quality and performance.
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/8e00d8_241ffbdafc2649ce957fa08d9f6d611d~mv2.png?originWidth=576&originHeight=448"
                alt="Volatus Aerospace company history and milestones"
                className="w-full aspect-[4/3] object-cover"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-2xl lg:text-3xl font-light text-primary mb-6 tracking-wide">
                OUR MISSION
              </h3>
              <p className="font-paragraph text-lg text-primary/80 leading-relaxed">
                To advance the aerospace industry through innovative engineering solutions, 
                cutting-edge technology, and uncompromising commitment to safety and excellence. 
                We strive to push the boundaries of what's possible in aviation.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-2xl lg:text-3xl font-light text-primary mb-6 tracking-wide">
                OUR VISION
              </h3>
              <p className="font-paragraph text-lg text-primary/80 leading-relaxed">
                To be the global leader in aerospace innovation, setting new standards for 
                technological advancement and operational excellence while contributing to 
                a safer, more efficient, and sustainable future of aviation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-8 tracking-tight">
              OUR VALUES
            </h2>
            <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment to excellence 
              in every aspect of aerospace innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-4 tracking-wide">
                INNOVATION
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Continuously pushing the boundaries of aerospace technology through 
                creative problem-solving and forward-thinking approaches.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-4 tracking-wide">
                EXCELLENCE
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Maintaining the highest standards of quality and performance in 
                every project, service, and client interaction.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-4 tracking-wide">
                SAFETY
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Prioritizing safety in all aspects of our work, ensuring reliable 
                and secure aerospace solutions for our clients.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-4 tracking-wide">
                COLLABORATION
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Working closely with clients and partners to achieve shared goals 
                and deliver exceptional results through teamwork.
              </p>
            </div>

            {/* Value 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-4 tracking-wide">
                SUSTAINABILITY
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Developing environmentally responsible solutions that contribute 
                to a more sustainable future for the aerospace industry.
              </p>
            </div>

            {/* Value 6 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-heading text-xl font-light text-primary mb-4 tracking-wide">
                INTEGRITY
              </h3>
              <p className="font-paragraph text-sm text-primary/80 leading-relaxed">
                Conducting business with honesty, transparency, and ethical 
                practices in all our professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-8 tracking-tight">
              OUR LEADERSHIP
            </h2>
            <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Meet the experienced professionals who guide our vision and drive 
              our commitment to aerospace excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden bg-primary/10">
                <Image
                  src="https://static.wixstatic.com/media/8e00d8_66643f522a53411db7e7b9caab9ef1b7~mv2.png?originWidth=256&originHeight=256"
                  alt="Chief Executive Officer"
                  className="w-full h-full object-cover"
                  width={300}
                />
              </div>
              <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                SARAH MITCHELL
              </h3>
              <p className="font-paragraph text-sm text-primary/70 mb-3">
                Chief Executive Officer
              </p>
              <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                20+ years of aerospace industry leadership experience
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden bg-primary/10">
                <Image
                  src="https://static.wixstatic.com/media/8e00d8_0f514b57cfae4e85ad8d11f021906dd8~mv2.png?originWidth=256&originHeight=256"
                  alt="Chief Technology Officer"
                  className="w-full h-full object-cover"
                  width={300}
                />
              </div>
              <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                DAVID CHEN
              </h3>
              <p className="font-paragraph text-sm text-primary/70 mb-3">
                Chief Technology Officer
              </p>
              <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                Expert in aerospace systems and innovation
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden bg-primary/10">
                <Image
                  src="https://static.wixstatic.com/media/8e00d8_c893b06dd3d74780a740da6b5cb3a91b~mv2.png?originWidth=256&originHeight=256"
                  alt="Chief Operations Officer"
                  className="w-full h-full object-cover"
                  width={300}
                />
              </div>
              <h3 className="font-heading text-lg font-light text-primary mb-2 tracking-wide">
                MARIA RODRIGUEZ
              </h3>
              <p className="font-paragraph text-sm text-primary/70 mb-3">
                Chief Operations Officer
              </p>
              <p className="font-paragraph text-xs text-primary/60 leading-relaxed">
                Operational excellence and project management specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-[120rem] mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-light text-primary mb-8 tracking-tight">
            JOIN OUR JOURNEY
          </h2>
          <p className="font-paragraph text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Discover how Volatus Aerospace can elevate your aviation projects 
            with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary/90 transition-colors duration-200">
              CONTACT US
            </button>
            <button className="border border-primary text-primary px-8 py-3 font-paragraph text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              VIEW SERVICES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}