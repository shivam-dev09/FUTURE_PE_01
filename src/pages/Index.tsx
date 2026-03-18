import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Coffee, Star, Clock, Heart, ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import heroCafe from "@/assets/hero-cafe.jpg";
import latteImg from "@/assets/latte.jpg";
import croissantImg from "@/assets/croissant.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import bakeryImg from "@/assets/bakery.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCafe} alt="Aroma di Indi cafe interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-espresso/60" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl space-y-6"
          >
            <motion.p custom={0} variants={fadeUp} className="font-body text-warm-gold text-sm md:text-base font-semibold tracking-widest uppercase">
              Bakery & Cafe · Dumka
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Where Every Sip<br />
              <span className="text-warm-gold">Tells a Story</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Handcrafted lattes, buttery croissants, and wood-fired pizzas — all under one roof. Dumka's cosiest corner awaits you.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/services"
                className="bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-warm-gold transition-colors inline-flex items-center gap-2"
              >
                Explore Our Menu <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Visit Us Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Intro */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-5"
          >
            <p className="font-body text-accent text-sm font-semibold tracking-widest uppercase">Welcome to Aroma di Indi</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              More Than a Cafe — It's an Experience
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              At Aroma di Indi, we believe great food brings people together. From our signature coffee lattes crafted with premium beans to our freshly baked croissants and hand-tossed pizzas, every item on our menu is made with care and passion. We're not just a cafe — we're Dumka's favourite hangout spot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Serve</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Specialties</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: latteImg, title: "Signature Lattes", desc: "Creamy, aromatic lattes made from hand-selected coffee beans. Every cup is a work of art.", alt: "Coffee latte with latte art" },
              { img: croissantImg, title: "Fresh Croissants", desc: "Buttery, flaky, and baked fresh every morning. The perfect companion to your coffee.", alt: "Freshly baked croissant" },
              { img: pizzaImg, title: "Wood-Fired Pizzas", desc: "Hand-tossed dough, premium toppings, and that unmistakable smoky char. Pizza done right.", alt: "Wood-fired artisan pizza" },
              { img: bakeryImg, title: "Artisan Bakery", desc: "Breads, muffins, cookies, and more — all baked in-house with the finest ingredients.", alt: "Assorted bakery items" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-xl overflow-hidden bg-background border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent hover:text-primary transition-colors"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="font-body text-accent text-sm font-semibold tracking-widest uppercase">Why Aroma di Indi</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Dumka's Go-To Spot for Good Vibes & Great Food
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Coffee, text: "Premium coffee beans sourced for the perfect latte" },
                  { icon: Sparkles, text: "Everything baked fresh in-house, daily" },
                  { icon: Heart, text: "A warm, Instagram-worthy space to chill with friends" },
                  { icon: Clock, text: "Quick service so you never miss a beat" },
                  { icon: Star, text: "Loved by 500+ happy customers in Dumka" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <p className="font-body text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={latteImg} alt="Signature latte" className="rounded-2xl w-full aspect-square object-cover shadow-xl" />
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-xl font-body text-sm font-semibold shadow-lg">
                ☕ 500+ Happy Customers
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm font-semibold tracking-widest uppercase mb-3">What People Say</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Loved by Dumka</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { text: "Best coffee in Dumka, hands down! The croissants are to die for. This place is my happy corner.", name: "Priya S.", role: "Regular Customer" },
              { text: "The pizzas here are unreal — crispy, cheesy, and so flavourful. Perfect hangout spot with friends!", name: "Rahul K.", role: "Food Enthusiast" },
              { text: "Such a cozy vibe! I come here every weekend for their latte and pastries. Absolutely love it.", name: "Ananya M.", role: "Coffee Lover" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-xl p-6 border border-border space-y-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCafe} alt="Cafe ambience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-espresso/75" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Your Table Is Waiting
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-lg mx-auto">
            Drop by Aroma di Indi today. Great coffee, amazing food, and the best vibes in Dumka — all in one place.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-warm-gold text-espresso px-8 py-4 rounded-lg font-body font-bold text-sm hover:bg-accent transition-colors"
          >
            Visit Us Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
