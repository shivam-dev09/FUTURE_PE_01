import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center max-w-3xl space-y-5">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-accent text-sm font-semibold tracking-widest uppercase">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold text-foreground">
            We'd Love to<br />Hear From You
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-muted-foreground text-lg leading-relaxed">
            Whether you want to reserve a table, place a bulk order, or just say hello — we're all ears. Come visit us or drop a message below!
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Visit Aroma di Indi</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Walk in anytime during our working hours. We're conveniently located in the heart of Dumka — easy to find and hard to leave!
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: Mail, label: "Email Us", value: "hello@aromadiindi.com", href: "mailto:hello@aromadiindi.com" },
                  { icon: MapPin, label: "Find Us", value: "Main Road, Dumka, Jharkhand", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-foreground font-medium hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Working Hours</h3>
                </div>
                <div className="space-y-2 font-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday – Saturday</span>
                    <span className="text-foreground font-medium">8:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">9:00 AM – 10:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Send Us a Message</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-accent transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-espresso text-center">
        <div className="container mx-auto max-w-2xl space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
            Don't Wait — Your Perfect Cup Is Brewing
          </h2>
          <p className="font-body text-primary-foreground/70 text-base">
            Walk in today or call us to reserve your spot. Aroma di Indi, Main Road, Dumka.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-warm-gold text-espresso px-8 py-4 rounded-lg font-body font-bold text-sm hover:bg-accent transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
