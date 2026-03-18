import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Heart, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import aboutImg from "@/assets/about-cafe.jpg";
import heroCafe from "@/assets/hero-cafe.jpg";

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center max-w-3xl space-y-5">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-accent text-sm font-semibold tracking-widest uppercase">
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Born From a Love<br />for Good Food
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-muted-foreground text-lg leading-relaxed">
            Aroma di Indi isn't just a cafe — it's a dream that started with a simple idea: bring world-class coffee, bakery, and food culture to Dumka.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={aboutImg} alt="Inside Aroma di Indi cafe" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">How It All Started</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                It started with late-night conversations over coffee and a shared frustration — why doesn't Dumka have a place where you can get a really good latte, a perfectly baked croissant, or a proper wood-fired pizza?
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                That question turned into Aroma di Indi. We set out to create a space that feels like home but tastes like a world-class cafe. A spot where students can study, friends can hang out, and families can share a meal — all while enjoying food made with genuine passion.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Today, we're proud to be Dumka's favourite cafe, serving hundreds of happy customers who keep coming back for more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold tracking-widest uppercase mb-3">What Sets Us Apart</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Commitment to Quality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Premium Ingredients", desc: "We source the finest coffee beans, flour, and produce. No compromises on quality." },
              { icon: Users, title: "Trained Team", desc: "Our baristas and bakers are passionate about their craft and trained in the art of perfection." },
              { icon: Leaf, title: "Fresh Daily", desc: "Nothing sits overnight. Every croissant, bread, and pizza is made fresh each day." },
              { icon: Heart, title: "Made With Love", desc: "We put heart into everything we do — from recipes to the way we welcome you." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-xl p-6 border border-border text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Dumka Trusts Us
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            With 500+ happy customers and counting, Aroma di Indi has become more than a cafe — it's a community. People come for the food and stay for the vibe. Whether it's your first visit or your fiftieth, we treat every guest like family.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            We believe in transparency — you can see our kitchen, meet our bakers, and watch your coffee being crafted. No secrets, just honest food made by passionate people.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCafe} alt="Cafe atmosphere" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-espresso/75" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Come Say Hello
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-lg mx-auto">
            We'd love to meet you. Drop by for a coffee, stay for the experience. Your favourite corner in Dumka is waiting.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-warm-gold text-espresso px-8 py-4 rounded-lg font-body font-bold text-sm hover:bg-accent transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
