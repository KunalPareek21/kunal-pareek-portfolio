'use client';

import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState<{ id: number; message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ id: Date.now(), message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name?.trim()) {
      showToast('Please fill out Your Name', 'error');
      return;
    }
    if (!email?.trim()) {
      showToast('Please provide your Email address', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please provide a valid Email address', 'error');
      return;
    }
    if (!message?.trim()) {
      showToast('Please write a Message', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      if (!FORMSPREE_ENDPOINT) {
        throw new Error('Missing contact form endpoint');
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setIsSubmitted(true);
      showToast('Message sent successfully!', 'success');
      form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-xl p-8 md:p-12 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
      >
        <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-8" style={{ color: 'var(--text-muted)' }}>
          <Mail className="w-4 h-4 text-emerald-500" />
          Contact &amp; Collaboration
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-[14px] font-bold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>Open to Engineering Opportunities &amp; Collaboration</h3>
              <p className="text-[12px] leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                Interested in remote engineering opportunities, open-source collaboration, WordPress ecosystem tooling, and scalable product development.
              </p>
              <p className="text-[11px] font-medium leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
                Experienced working with distributed teams, modern frontend systems, and custom WordPress engineering.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-bold px-8 py-3.5 rounded-lg transition-all border hover:opacity-90 hover:scale-[1.02]" style={{ backgroundColor: 'var(--text-primary)', borderColor: 'var(--text-primary)', color: 'var(--background)' }}>
                <FileText className="w-4 h-4" />
                Resume / CV
              </Link>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link href="mailto:kunalpareek56@gmail.com" className="flex-1 sm:flex-none flex items-center justify-center w-12 h-12 rounded-lg transition-all border hover:scale-105" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                  <Mail className="w-4 h-4" />
                </Link>
                <Link href="https://github.com/KunalPareek21" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center w-12 h-12 rounded-lg transition-all border hover:scale-105" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                  <Github className="w-4 h-4" />
                </Link>
                <Link href="https://www.linkedin.com/in/kunal-pareek21/" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center w-12 h-12 rounded-lg transition-all border hover:scale-105" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center rounded-xl border p-8 text-center h-full min-h-[320px]"
                  style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)' }}
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 relative"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-sm"
                      style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="hello@example.com"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-sm"
                      style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we collaborate?"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-sm resize-none"
                      style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: 'var(--text-primary)', color: 'var(--background)' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Global Toast Overlay */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 backdrop-blur-md border shadow-2xl px-5 py-4 rounded-xl max-w-sm"
            style={{ backgroundColor: 'var(--header-bg)', borderColor: 'var(--border)' }}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            )}
            <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed" style={{ color: 'var(--text-primary)' }}>{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
