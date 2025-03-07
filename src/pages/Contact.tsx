
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for any questions or support
          </p>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg neo-brutalism bg-secondary/30">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground">support@coxdoacademy.com</p>
            </div>
            <div className="p-6 rounded-lg neo-brutalism bg-secondary/30">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+91 90618 97902</p>
            </div>
            <div className="p-6 rounded-lg neo-brutalism bg-secondary/30">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Coxdo Academy, Coxdo Academy</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground border border-border/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground border border-border/10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground border border-border/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground border border-border/10"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
