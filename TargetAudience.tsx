import { Home, UtensilsCrossed, ChefHat, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: Home,
    title: "Homes",
    description: "Perfect for daily family meals, rotis, parathas, and traditional recipes that bring loved ones together.",
    image: "https://images.unsplash.com/photo-1758874960466-fb0a3e0007bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb29raW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY4NzgzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Building2,
    title: "Hotels",
    description: "Consistent quality and freshness for high-volume requirements, ensuring guest satisfaction every time.",
    image: "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWZ8ZW58MXx8fHwxNzY4ODAwNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: ChefHat,
    title: "Restaurants",
    description: "Premium atta that helps create authentic, delicious dishes that keep customers coming back.",
    image: "https://images.unsplash.com/photo-1763951719324-d1ff7eff0f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByb3RpJTIwY2hhcGF0aXxlbnwxfHx8fDE3Njg4MTIyODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Businesses",
    description: "Reliable supply of high-quality flour for bakeries, catering services, and food manufacturers.",
    image: "https://images.unsplash.com/photo-1629450758083-32a79d61cbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG91ciUyMHBvd2RlciUyMHdoaXRlfGVufDF8fHx8MTc2ODgzMzU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function TargetAudience() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Made for Every Kitchen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From family kitchens to commercial establishments, Punchkon serves 
            diverse needs with unwavering quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${audience.image})`,
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-8 md:p-12">
                  <motion.div
                    className="bg-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}