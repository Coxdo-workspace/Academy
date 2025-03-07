
const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">About COXDO Academy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of digital innovators through cutting-edge online education.
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-display">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At COXDO Academy, we're committed to providing accessible, high-quality education
                that prepares students for the digital future. Our platform combines cutting-edge
                technology with expert instruction to create an engaging learning experience.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden neo-brutalism">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 font-display text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Embracing new technologies and teaching methods to provide the best learning experience."
              },
              {
                title: "Excellence",
                description: "Maintaining high standards in education and student support."
              },
              {
                title: "Accessibility",
                description: "Making quality education available to everyone, everywhere."
              }
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-lg neo-brutalism bg-secondary/30">
                <h3 className="text-xl font-bold mb-4 font-display text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 font-display text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                name: "Jane Smith",
                role: "Head of Education",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              },
              {
                name: "Mike Johnson",
                role: "Tech Lead",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                name: "Sarah Williams",
                role: "Content Director",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
