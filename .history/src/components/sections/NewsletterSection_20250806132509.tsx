'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('footer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-10 right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary/10 rounded-full blur-xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Stay in the Loop
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8"
          >
            {t('newsletter')} and get the latest articles, tutorials, and insights delivered straight to your inbox.
          </motion.p>

          {/* Form */}
          <motion.div variants={itemVariants}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="h-12 px-8"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      {t('subscribe')}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg max-w-md mx-auto"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="h-5 w-5" />
                </motion.div>
                <span className="font-medium">Thank you for subscribing!</span>
              </motion.div>
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground"
          >
            {[
              { icon: '📧', text: 'Weekly newsletter' },
              { icon: '🚀', text: 'Latest tutorials' },
              { icon: '🔒', text: 'No spam, ever' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-muted/30"
              >
                <span className="text-lg">{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-primary">5,000+</span> developers already subscribed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}