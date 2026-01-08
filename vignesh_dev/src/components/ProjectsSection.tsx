import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectCoworking from "@/assets/project-coworking.png";
import projectRestaurant from "@/assets/project-restaurant.png";
import projectStayeasy from "@/assets/project-stayeasy.png";

const projects = [
  {
    title: "AI Co-Working Space Management Platform",
    image: projectCoworking,
    shortDescription:
      "An intelligent, role-aware workplace ecosystem powered by LLMs and automation.",
    fullDescription: `This project is a full-stack, AI-powered co-working space management system designed to streamline workplace operations across multiple companies operating within a shared property. The platform introduces a three-tier authority model—Admin, Employer, and Employee—each governed by role-specific access control and intelligent conversational agents.

By combining Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and automated workflows, the system enables frictionless communication, resource management, and operational transparency while maintaining strict data isolation between organizations.

Key Features:
• Role-Aware System Architecture with Admin, Employer, and Employee domains
• Property & Infrastructure Intelligence for Admins
• Organizational Control & Workforce Oversight for Employers
• AI-Assisted Workplace Experience for Employees
• Automated Leave & Approval Workflows
• Intelligent Meeting Room Booking System
• Secure, Production-Grade Backend with RBAC

Tech Stack: FastAPI, React, LLM Engine, RAG Pipeline, Role-based Access Control`,
  },
  {
    title: "Fifty Shades of Gravy – AI-Driven Restaurant Management",
    image: projectRestaurant,
    shortDescription:
      "A full-stack, AI-driven restaurant management platform with dynamic pricing and personalization.",
    fullDescription: `Fifty Shades of Gravy is a comprehensive restaurant management solution that transforms dining operations through intelligent automation, personalization, and real-time decision support.

At the core lies an AI-powered restaurant chatbot capable of understanding diverse customer intents, including menu exploration, order placement, table reservations, and general inquiries. The chatbot uses context-aware conversational flows for natural interactions.

Key Features:
• AI-Powered Chatbot with intent detection and entity extraction
• Dynamic, Dashboard-Driven Menu System with real-time updates
• Intelligent Ordering System with cart-based workflow
• Smart Table Booking Engine for real-time and advance reservations
• Personalized Menu & Smart Pricing Engine
• Table Demand-Based Surge Pricing
• Stripe Payment Gateway Integration

Tech Stack: FastAPI, Gemini LLM, RAG Pipeline, Google Sheets API, Stripe API, React`,
  },
  {
    title: "Stay Easy – AI Concierge for Smart Hospitality",
    image: projectStayeasy,
    shortDescription:
      "An enterprise-grade, LLM-powered concierge platform redefining guest experience.",
    fullDescription: `Stay Easy is a full-stack, AI-driven concierge system engineered to modernize hospitality operations by automating guest interactions, service workflows, and operational intelligence.

The system replaces rigid, rule-based chatbots with a context-aware conversational AI agent built on Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) architecture, enabling hotels to deliver seamless, real-time guest support.

Key Features:
• Intelligent Conversational Core with LLM-powered agent
• Retrieval-Augmented Generation (RAG) Architecture
• Advanced Intent Classification & Context Routing
• Dashboard-Driven Data Management Layer
• End-to-End Guest Service Automation
• Multi-Interface Support (CLI, Web UI, WhatsApp via Twilio)
• Secure, Production-Grade Backend Architecture

Tech Stack: Python, FastAPI, LLMs, RAG, Vector Databases (FAISS), RESTful APIs`,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Intelligent systems I've built that combine AI, automation, and modern web technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                shortDescription={project.shortDescription}
                fullDescription={project.fullDescription}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
