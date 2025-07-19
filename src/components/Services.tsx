import React from 'react';
import { MessageSquare, Brain, Cog, BarChart3, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents that provide 24/7 customer support and engagement.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training', 'Analytics Dashboard']
    },
    {
      icon: Brain,
      title: 'AI Consultancy',
      description: 'Strategic guidance to help you identify and implement AI solutions for your business.',
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning', 'ROI Analysis']
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      features: ['Workflow Optimization', 'Document Processing', 'Data Entry Automation', 'Integration Services']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced AI analytics.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Protect your AI systems and data with cutting-edge security measures.',
      features: ['Threat Detection', 'Model Protection', 'Privacy Compliance', 'Security Audits']
    },
    {
      icon: Zap,
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically for your unique business needs.',
      features: ['Bespoke Development', 'API Integration', 'Scalable Architecture', 'Ongoing Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-navy-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to accelerate your digital transformation 
            and drive measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg flex items-center justify-center text-white mr-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-navy-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-navy-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;