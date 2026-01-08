import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "vignesh.loharkar123@gmail.com",
      href: "mailto:vignesh.loharkar123@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9119556042",
      href: "tel:+919119556042",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vig328",
      href: "https://github.com/vig328",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "loharkarvignesh",
      href: "https://www.linkedin.com/in/loharkarvignesh-",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-10"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am <span className="text-foreground font-medium">Vignesh Sunil Loharkar</span>, an AI and Full-Stack Developer with a strong foundation in data science, machine learning, and intelligent system design. I hold a Bachelor's degree in Mathematics from MSG College of Arts and Science, Malegaon, which has equipped me with strong analytical thinking, problem-solving abilities, and a deep understanding of logical systems.
              </p>
              <p>
                To further strengthen my practical and industry-ready skill set, I completed an Advanced Data Science program from <span className="text-foreground font-medium">upGrad, Bengaluru</span>, where I gained hands-on experience in Python, machine learning workflows, data analysis, backend development, and real-world AI applications. This academic journey allowed me to bridge the gap between theoretical knowledge and production-grade system development.
              </p>
              <p>
                Currently, I am working at <span className="text-primary font-medium">WEBSIDOM AI</span> as an AI & ML Engineer and Full-Stack Developer, where I design and build intelligent, scalable, and automation-driven products. My work focuses on developing LLM-powered applications, Retrieval-Augmented Generation (RAG) systems, conversational AI platforms, and full-stack solutions that solve real business problems across domains such as hospitality, co-working spaces, and enterprise operations.
              </p>
              <p>
                I specialize in building end-to-end AI systems, from backend API orchestration and data pipelines to modern frontend interfaces and AI-driven workflows. I am particularly passionate about creating role-aware, context-intelligent systems that combine clean architecture, security, and scalability with seamless user experience.
              </p>
              <p>
                I am continuously exploring advanced AI patterns, system design, and real-world product engineering, with the goal of building impactful, production-ready solutions that merge intelligence with usability.
              </p>
            </div>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card glass-card-hover rounded-xl p-5 flex items-center gap-4 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
