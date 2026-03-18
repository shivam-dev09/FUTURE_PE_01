import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import latteImg from "@/assets/latte.jpg";
import croissantImg from "@/assets/croissant.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import bakeryImg from "@/assets/bakery.jpg";

const services = [
  {
    img: latteImg,
    title: "Signature Coffee Lattes",
    desc: "Our lattes are crafted from hand-selected, premium coffee beans. Whether you like it classic, flavoured, or iced — every sip is smooth, rich, and unforgettable.",
    includes: ["Classic Latte", "Hazelnut Latte", "Caramel Latte", "Iced Latte", "Espresso Shots"],
    benefits: ["Premium beans for richer flavour", "Barista-crafted latte art on every cup", "Customisable sweetness & milk options"],
    alt: "Signature coffee latte",
  },
  {
    img: croissantImg,
    title: "Artisan Croissants",
    desc: "Flaky, buttery, and baked to golden perfection every single morning. Our croissants are made from scratch using traditional techniques — no shortcuts.",
    includes: ["Classic Butter Croissant", "Chocolate Croissant", "Almond Croissant", "Ham & Cheese Croissant"],
    benefits: ["Baked fresh every morning", "Authentic French-style laminated dough", "Perfect grab-and-go breakfast"],
    alt: "Fresh croissant",
  },
  {
    img: pizzaImg,
    title: "Wood-Fired Pizzas",
    desc: "Hand-tossed dough, house-made sauce, and premium toppings — fired in our wood oven for that perfect charred crust and smoky flavour.",
    includes: ["Margherita", "Pepperoni", "BBQ Chicken", "Four Cheese", "Veggie Supreme"],
    benefits: ["Authentic wood-fired smoky taste", "Made-to-order with fresh ingredients", "Shareable sizes perfect for groups"],
    alt: "Wood-fired pizza",
  },
  {
    img: bakeryImg,
    title: "Fresh Bakery",
    desc: "From sourdough loaves to chocolate chip cookies, our bakery counter is stocked daily with freshly baked goodies you won't be able to resist.",
    includes: ["Artisan Breads", "Muffins & Cupcakes", "Cookies & Brownies", "Savoury Rolls", "Custom Cakes (on order)"],
    benefits: ["All baked in-house daily", "No preservatives — just real ingredients", "Great for gifting or personal treats"],
    alt: "Bakery display",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center max-w-3xl space-y-5">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-accent text-sm font-semibold tracking-widest uppercase">
            Our Menu
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Crafted With Love,<br />Served With Care
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-muted-foreground text-lg leading-relaxed">
            Every item at Aroma di Indi is made fresh, with premium ingredients and a whole lot of heart. Explore what we have in store for you.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
        >
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={i % 2 !== 0 ? "lg:order-2" : ""}
              >
                <img src={service.img} alt={service.alt} className="rounded-2xl w-full aspect-[4/3] object-cover shadow-lg" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`space-y-5 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                <p className="font-body text-muted-foreground leading-relaxed">{service.desc}</p>

                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-2">What's on offer:</h4>
                  <ul className="space-y-1.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-2">Why you'll love it:</h4>
                  <ul className="space-y-1.5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 font-body text-sm text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body text-sm font-semibold hover:bg-accent transition-colors"
                >
                  Order Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="section-padding bg-espresso text-center">
        <div className="container mx-auto max-w-2xl space-y-5">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Hungry Yet?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg">
            Come visit Aroma di Indi and taste the difference. Walk-ins always welcome — your seat is waiting!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-warm-gold text-espresso px-8 py-4 rounded-lg font-body font-bold text-sm hover:bg-accent transition-colors"
          >
            Visit Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
