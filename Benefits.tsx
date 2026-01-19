import { motion } from "framer-motion";

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1609130825188-a66b4aef2278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWlucyUyMGNsb3NlfGVufDF8fHx8MTc2ODgzMzU5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wheat grains"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-400 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The Punchkon Promise
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Finest Wheat Selection",
                  description: "We carefully select premium wheat grains from trusted farms, ensuring only the best make it to your kitchen."
                },
                {
                  title: "Advanced Processing",
                  description: "Our modern milling technology preserves nutrients while maintaining the perfect texture and consistency."
                },
                {
                  title: "Strict Quality Control",
                  description: "Every batch undergoes rigorous testing to meet our high standards of purity, safety, and freshness."
                },
                {
                  title: "Sustainable Practices",
                  description: "We are committed to environmentally responsible sourcing and production methods."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-amber-100 text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}