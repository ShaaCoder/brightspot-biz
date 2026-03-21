import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ badge, title, description }: SectionHeadingProps) => {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
