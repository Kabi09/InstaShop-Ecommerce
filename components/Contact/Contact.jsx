'use client';

import { useState } from 'react';
import styles from './Contact.module.scss';
import { companyInfo } from '../../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Web Development',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message or requirements summary.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (serverError) {
      setServerError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setServerError(data.error || 'Failed to dispatch email. Please email us directly.');
      }
    } catch (err) {
      setServerError('Network error. Please try again or reach out to contact@dudez.in directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: 'Web Development',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
    setServerError('');
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-subtitle">
            Tell us about your project, timeline, and expectations. We typically respond within one business day.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info */}
          <div className={styles.directDetails}>
            <div className={styles.detailBlock}>
              <h3 className={styles.blockTitle}>Direct Contact Channels</h3>
              <p className={styles.blockSub}>
                Prefer direct communication? Reach out to us via email or call directly.
              </p>

              <div className={styles.channelsList}>
                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Primary Enquiries</span>
                    <a href={`mailto:${companyInfo.email}`} className={styles.channelValue}>
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Founder Email</span>
                    <a href={`mailto:${companyInfo.founderEmail}`} className={styles.channelValue}>
                      {companyInfo.founderEmail}
                    </a>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Phone &amp; WhatsApp</span>
                    <a href={companyInfo.phoneHref} className={styles.channelValue}>
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Office Location</span>
                    <p className={styles.channelLocation}>{companyInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className={styles.timingsCard}>
                <div className={styles.timingsHeader}>Working Hours</div>
                <div className={styles.timingsValue}>{companyInfo.hours}</div>
                <p className={styles.timingsNotice}>Client discussions can also be scheduled over Google Meet or Zoom.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Enquiry Sent Successfully</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.name}</strong>. Your enquiry has been received and forwarded to our team. A confirmation receipt has also been dispatched to <strong>{formData.email}</strong>.
                </p>
                <button type="button" onClick={handleReset} className={styles.btnReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                {serverError && (
                  <div className={styles.serverErrorBox}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>{serverError}</span>
                  </div>
                )}

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      required
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@company.com"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      required
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="company" className={styles.label}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Retail Pvt Ltd"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formField}>
                  <label htmlFor="projectType" className={styles.label}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Web Development">Web Development (Website / Web App)</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="E-Commerce Development">E-Commerce Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI / UX Development">UI / UX Design &amp; Development</option>
                    <option value="Maintenance & Support">Maintenance &amp; Support</option>
                    <option value="Other Business Solution">Other Custom Business Solution</option>
                  </select>
                </div>

                <div className={styles.formField}>
                  <label htmlFor="message" className={styles.label}>
                    Project Requirements / Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you are looking to build, expected features, or current challenges..."
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    required
                  ></textarea>
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <div className={styles.formSubmitRow}>
                  <button type="submit" disabled={loading} className={styles.submitBtn}>
                    {loading ? (
                      <>
                        <span className={styles.btnSpinner}></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                  <span className={styles.privacyNote}>
                    Automatic receipt sent to your email.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
