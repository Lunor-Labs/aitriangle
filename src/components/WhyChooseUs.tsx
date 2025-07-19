import React from 'react';
import { CheckCircle, Clock, Users, Award, Headphones, Globe } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Over 500 successful AI implementations across diverse industries with measurable ROI.'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running quickly with our streamlined implementation process.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified AI specialists, data scientists, and industry experts.'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions recognized by leading technology organizations.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for all our solutions.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized solutions and multi-language support.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', color: 'text-teal-600 dark:text-teal-400' },
    { number: '95%', label: 'Client Retention', color: 'text-emerald-600 dark:text-emerald-400' },
    { number: '50+', label: 'Industries Served', color: 'text-cyan-600 dark:text-cyan-400' },
    { number: '24/7', label: 'Support Available', color: 'text-green-600 dark:text-green-400' }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose AITriangle?
          </h2>
          <p className="text-xl text-navy-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven expertise to deliver AI solutions 
            that drive real business value and competitive advantage.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-navy-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-teal-50 hover:to-teal-100 dark:hover:from-teal-900/20 dark:hover:to-teal-800/20 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {advantage.title}
                </h3>
              </div>
              <p className="text-navy-600 dark:text-gray-300 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 text-teal-100">
            Join hundreds of satisfied clients who have revolutionized their operations with our AI solutions.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your AI Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;