import React from 'react';
import { Target, Users, Trophy, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We empower businesses to leverage AI technology for sustainable growth and competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to meet your unique business needs and objectives.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We deliver world-class AI solutions that exceed expectations and drive results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of AI technology to bring you cutting-edge solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About AITriangle
          </h2>
          <p className="text-xl text-navy-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking AI company dedicated to transforming businesses through 
            intelligent automation and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Pioneering the Future of AI
            </h3>
            <div className="space-y-4 text-navy-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Founded on the principle that artificial intelligence should be accessible and 
                beneficial to businesses of all sizes, AITriangle has been at the forefront of 
                AI innovation since our inception.
              </p>
              <p>
                Our team of expert engineers, data scientists, and business strategists work 
                collaboratively to create solutions that not only meet today's challenges but 
                anticipate tomorrow's opportunities.
              </p>
              <p>
                We believe in the transformative power of AI to enhance human capabilities, 
                streamline operations, and unlock new possibilities for growth and innovation.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                AI
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-200 dark:bg-teal-800 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-300 dark:bg-teal-700 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl text-white mb-4">
                <value.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h4>
              <p className="text-navy-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;