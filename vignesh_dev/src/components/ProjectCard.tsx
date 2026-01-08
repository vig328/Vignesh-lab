import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  index: number;
}

const ProjectCard = ({
  title,
  image,
  shortDescription,
  fullDescription,
  index,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden">
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="lg:w-2/5 relative overflow-hidden">
          <div className="aspect-video lg:aspect-auto lg:h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent lg:hidden" />
        </div>

        {/* Content */}
        <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {shortDescription}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="prose prose-invert prose-sm max-w-none mb-4">
                  {fullDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3 mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-1 w-4 h-4" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="ml-1 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
