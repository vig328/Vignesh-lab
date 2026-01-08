import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:vignesh.loharkar123@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+919119556042",
      label: "Phone",
    },
    {
      icon: Github,
      href: "https://github.com/vig328",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/loharkarvignesh-",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h3 className="font-display text-2xl font-bold mb-2">
            <span className="text-gradient">Vignesh</span>
            <span className="text-foreground">.dev</span>
          </h3>

          <p className="text-muted-foreground mb-6 max-w-md">
            Building intelligent systems that merge AI with seamless user experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-11 h-11 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-muted-foreground mb-6">
            <a
              href="mailto:vignesh.loharkar123@gmail.com"
              className="hover:text-primary transition-colors"
            >
              vignesh.loharkar123@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+919119556042" className="hover:text-primary transition-colors">
              +91 9119556042
            </a>
          </div>

          <div className="text-sm text-muted-foreground/60 flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Vignesh</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
