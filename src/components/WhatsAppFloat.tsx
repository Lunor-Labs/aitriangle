import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi AITriangle! I'm interested in learning more about your AI solutions. I'd like to discuss how you can help transform my business.`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded tooltip */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-xs animate-fade-in-up">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="pr-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Need Help?
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Chat with us on WhatsApp for instant support and quick answers to your AI questions.
            </p>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group bg-teal-500 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-teal-400 opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;