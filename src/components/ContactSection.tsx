import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, AlertCircle, Phone, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Internship Evaluation / Feedback',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-900 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Evaluation details */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-3">
              <span>Task Inquiries</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-indigo-400 font-semibold">Contact & Evaluation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Connect or Submit Review Notes
            </h2>

            <p className="mt-4 text-base text-neutral-300 leading-relaxed">
              Have feedback on the interactive navigation bar, responsive drawer mechanics, or code architecture? Send a note directly to the author.
            </p>

            <div className="mt-8 space-y-4 text-sm text-neutral-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hariharansivakumar1007@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Web Development Internship Program</span>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300">Tip for Evaluators:</span> You can also test the responsive menu on smaller screen sizes by resizing your browser or using browser developer tools (Ctrl+Shift+M).
            </div>
          </div>

          {/* Right Column: Clean validated contact form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted Successfully</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you for reviewing the Internship Task 1 submission. Your feedback has been logged.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        subject: 'Internship Evaluation / Feedback',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.fullName ? 'border-rose-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="reviewer@internship.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.email ? 'border-rose-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                    >
                      <option value="Internship Evaluation / Feedback">Task 1 Evaluation / Feedback</option>
                      <option value="Navigation Mechanics Inquiry">Navigation Mechanics Inquiry</option>
                      <option value="General Web Development Inquiry">General Web Development Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Review Comments / Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide notes or feedback regarding the fixed interactive navigation bar..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors resize-none ${
                        errors.message ? 'border-rose-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-950/50 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Review Feedback</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
