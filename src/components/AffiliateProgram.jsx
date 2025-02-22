import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  Gift, 
  TrendingUp, 
  UserPlus, 
  Star, 
  Copy, 
  Check,
  Users, 
  Zap
} from 'lucide-react';

const AffiliateProgram = ({ isHindi = false }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('benefits');
  const [referralCode] = useState('HR' + Math.random().toString(36).substring(2, 8).toUpperCase());
  const [stats, setStats] = useState({
    totalAffiliates: 1247,
    totalEarnings: '₹2,345,678',
    averageCommission: '₹1,890'
  });

  const content = {
    headerTitle: isHindi ? 'हमारे सहायक कार्यक्रम में शामिल हों' : 'Join Our Affiliate Program',
    headerDescription: isHindi
      ? 'हमारे साथ साझेदारी करें और दूसरों को हमारी अद्भुत सेवाओं की खोज में मदद करते हुए कमाएं। यह सरल, लाभदायक और एक शानदार अवसर है!'
      : 'Partner with us and earn while you help others discover our amazing services. Its simple, rewarding, and a great opportunity!',
      joinNow: isHindi ? 'अभी शामिल हों' : 'Join Now',
      whyJoin: isHindi ? 'क्यों शामिल हों?' : 'Why Join?',
    benefits: [
      {
        title: isHindi ? 'कमीशन कमाएं' : 'Earn Commission',
        description: isHindi
          ? 'हर रेफ़रल के लिए एक अच्छा कमीशन अर्जित करें।'
          : 'Earn a generous commission for every referral.',
        icon: DollarSign,
        color: 'bg-green-100 text-green-600'
      },
      {
        title: isHindi ? 'विशेष पुरस्कार' : 'Exclusive Rewards',
        description: isHindi
          ? 'जैसे-जैसे आप बढ़ते हैं, विशेष पुरस्कार और लाभ प्राप्त करें।'
          : 'Unlock exclusive rewards and perks as you grow.',
        icon: Gift,
        color: 'bg-purple-100 text-purple-600'
      },
      {
        title: isHindi ? 'मार्केटिंग सामग्री' : 'Marketing Materials',
        description: isHindi
          ? 'बैनर, टेम्पलेट और संसाधनों तक पहुंच प्राप्त करें।'
          : 'Get access to banners, templates, and resources.',
        icon: TrendingUp,
        color: 'bg-blue-100 text-blue-600'
      },
    ],
    tabs: {
      benefits: isHindi ? 'लाभ' : 'Benefits',
      howItWorks: isHindi ? 'कैसे काम करता है' : 'How It Works',
      earnings: isHindi ? 'कमाई' : 'Earnings'
    },
    footerTitle: isHindi ? 'शुरू करने के लिए तैयार हैं?' : 'Ready to get started?',
    signUp: isHindi ? 'सहायक के रूप में साइन अप करें' : 'Sign Up as an Affiliate',
    referralCode: isHindi ? 'आपका रेफरल कोड' : 'Your Referral Code'
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const tabContent = {
    benefits: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {content.benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-lg text-center ${benefit.color}`}
          >
            <div className="mb-4 flex items-center justify-center">
              <benefit.icon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    ),
    howItWorks: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {[
          { 
            title: isHindi ? 'साइन अप करें' : 'Sign Up', 
            description: isHindi 
              ? 'अपना खाता बनाएं और अपना रेफरल कोड प्राप्त करें।' 
              : 'Create your account and get your unique referral code.',
            icon: UserPlus
          },
          { 
            title: isHindi ? 'साझा करें' : 'Share', 
            description: isHindi 
              ? 'अपने रेफरल कोड को दोस्तों और परिवार के साथ साझा करें।' 
              : 'Share your referral code with friends and family.',
            icon: Copy
          },
          { 
            title: isHindi ? 'कमाएं' : 'Earn', 
            description: isHindi 
              ? 'हर सफल रेफरल पर कमीशन प्राप्त करें।' 
              : 'Earn commission on every successful referral.',
            icon: DollarSign
          }
        ].map((step, index) => (
          <div key={index} className="flex items-center space-x-6 bg-blue-50 p-4 rounded-xl">
            <div className="bg-blue-100 p-3 rounded-full">
              <step.icon className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    ),
    earnings: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {[
          { 
            title: isHindi ? 'कुल सहयोगी' : 'Total Affiliates', 
            value: stats.totalAffiliates,
            icon: Users
          },
          { 
            title: isHindi ? 'कुल कमाई' : 'Total Earnings', 
            value: stats.totalEarnings,
            icon: DollarSign
          },
          { 
            title: isHindi ? 'औसत कमीशन' : 'Avg. Commission', 
            value: stats.averageCommission,
            icon: Star
          }
        ].map((stat, index) => (
          <div 
            key={index} 
            className="bg-white border-2 border-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition"
          >
            <div className="mb-4 flex items-center justify-center">
              <stat.icon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-800">{stat.title}</h3>
            <p className="text-2xl font-extrabold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </motion.div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {content.headerTitle}
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            {content.headerDescription}
          </p>
        </motion.header>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b">
            {Object.entries(content.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 p-4 text-lg font-semibold transition ${
                  activeTab === key 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 bg-blue-600 text-white p-8 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">{content.referralCode}</h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white text-blue-800 px-6 py-3 rounded-lg text-2xl font-mono">
              {referralCode}
            </div>
            <button 
              onClick={copyReferralCode}
              className="bg-white text-blue-600 p-3 rounded-lg hover:bg-blue-50 transition"
            >
              {copiedCode ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {content.footerTitle}
          </h2>
          <button className="bg-blue-600 text-white px-12 py-4 rounded-full text-xl hover:bg-blue-700 transition flex items-center justify-center mx-auto space-x-2">
            <Zap className="w-6 h-6" />
            <span>{content.signUp}</span>
            <Zap className="w-6 h-6" />
          </button>
        </motion.footer>
      </div>
    </div>
  );
};

export default AffiliateProgram;