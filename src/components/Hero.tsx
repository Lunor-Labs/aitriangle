import React from 'react';
import { ArrowRight, Sparkles, Zap, Bot, Brain, Cpu } from 'lucide-react';
import { colors } from '../styles/colors';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
          <div className="w-full h-full border-2 border-teal-500 rounded-lg rotate-45 animate-pulse"></div>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute bottom-32 left-20 w-20 h-20 opacity-10">
          <div className="w-full h-full border-2 border-teal-700 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Floating AI Icons */}
        <div className="absolute top-32 right-32 text-teal-500 opacity-20 animate-float">
          <Bot className="h-16 w-16" />
        </div>
        <div className="absolute bottom-40 right-40 text-teal-700 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Brain className="h-12 w-12" />
        </div>
        <div className="absolute top-60 left-32 text-teal-600 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <Cpu className="h-14 w-14" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900/30 dark:to-teal-800/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-l from-teal-200 to-cyan-200 dark:from-teal-800/30 dark:to-cyan-800/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in border border-teal-200 dark:border-teal-800 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Revolutionary AI Solutions for Modern Business</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gray-900 dark:text-white">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Business with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Unlock the power of artificial intelligence with our cutting-edge chatbots, 
            expert consultancy, and innovative solutions tailored for your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400 mb-16">
            <button
              onClick={scrollToContact}
              className="group bg-teal-500 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg min-w-[200px]"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center space-x-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm min-w-[200px]"
            >
              <Zap className="h-5 w-5" />
              <span>Explore Solutions</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-700 dark:text-teal-300 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;