"use client";

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const LeadCapture: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      return 'Name, email, and company are required fields.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to submit the form. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <Container>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Panel: Value Prop & Trust Markers */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              Let's Build Your <br />
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Enterprise Program</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Get in touch to discover how Accredian can transform your workforce with cutting-edge skills. Our enterprise team will get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col gap-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg mb-1">Fast Onboarding</h4>
                    <p className="text-neutral-600 leading-relaxed">Launch your custom corporate training program in weeks, not months.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg mb-1">Expert Instructors</h4>
                    <p className="text-neutral-600 leading-relaxed">Learn directly from industry leaders and practitioners with real-world experience.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
                <p className="text-green-700 text-lg mb-6">Your message has been received. Our enterprise team will be in touch shortly.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-800">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-800">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-800">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:opacity-50"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-800">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:opacity-50 resize-y"
                    placeholder="Tell us about your learning objectives..."
                  />
                </div>

                {status === 'error' && (
                  <div className="text-red-600 text-sm font-medium p-4 bg-red-50 rounded-xl border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeadCapture;
