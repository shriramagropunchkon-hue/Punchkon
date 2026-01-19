import { Shield, Heart, Sparkles, Leaf, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "100% Pure",
    description: "No additives, no preservatives. Just pure, natural wheat flour for your family's health.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Sparkles,
    title: "Hygienically Processed",
    description: "State-of-the-art facilities ensuring the highest standards of cleanliness and quality.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Nutritious & Healthy",
    description: "Rich in fiber, vitamins, and minerals, supporting your daily nutritional needs.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Sourced from the finest wheat grains, ensuring freshness from farm to table.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: CheckCircle2,
    title: "Premium Quality",
    description: "Rigorous quality checks at every stage to deliver excellence in every pack.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export function Features() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Punchkon?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering the finest quality wheat flour that meets 
            the highest standards of purity, nutrition, and hygiene.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}