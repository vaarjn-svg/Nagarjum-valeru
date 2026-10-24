import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send, Check, Copy, MessageSquare, Download } from 'lucide-react';
import { AUTHOR_BIO } from '../data/portfolio-data.ts';
import { downloadResumeFile } from '../utils/resume-download.ts';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Senior SEO Content Writer Role',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [resumeDownloaded, setResumeDownloaded] = useState(false);

  const handleDownload = () => {
    downloadResumeFile();
    setResumeDownloaded(true);
    setTimeout(() => setResumeDownloaded(false), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AUTHOR_BIO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${AUTHOR_BIO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Nagarjun,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#D8CECA]">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#641E32]">
            <MessageSquare className="w-4 h-4 text-[#B59A62]" />
            <span>DIRECT INQUIRIES</span>
            <span aria-hidden="true">·</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
            Contact Nagarjun Valeru
          </h2>

          <p className="text-sm sm:text-base text-[#66585B] leading-relaxed">
            Available for Senior SEO Content Writer, Technical SEO Specialist, and Organic Growth leadership opportunities.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="p-6 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] shadow-2xs space-y-5">
              <span className="text-xs font-bold text-[#641E32] uppercase tracking-wider block">
                Direct Communication Channels
              </span>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs text-[#66585B] block font-medium">Email Address</span>
                <div className="flex items-center justify-between gap-2 p-3 bg-white rounded-lg border border-[#D8CECA]">
                  <a 
                    href={`mailto:${AUTHOR_BIO.email}`}
                    className="text-xs sm:text-sm font-semibold text-[#1C1517] hover:text-[#641E32] transition-colors truncate"
                  >
                    {AUTHOR_BIO.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[#66585B] hover:text-[#641E32] rounded hover:bg-[#F4EBEB] transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-700 font-semibold block pt-1">
                    ✓ Email address copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs text-[#66585B] block font-medium">Telephone</span>
                <div className="p-3 bg-white rounded-lg border border-[#D8CECA] flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-[#1C1517]">
                    {AUTHOR_BIO.phone}
                  </span>
                  <Phone className="w-4 h-4 text-[#B98C91]" />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <span className="text-xs text-[#66585B] block font-medium">Location</span>
                <div className="p-3 bg-white rounded-lg border border-[#D8CECA] flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-[#1C1517]">
                    Bengaluru, Karnataka, India
                  </span>
                  <MapPin className="w-4 h-4 text-[#B98C91]" />
                </div>
              </div>

            </div>

            {/* Quick Profiles and Resume Download Box */}
            <div className="p-6 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-3">
              <span className="text-xs font-bold text-[#641E32] uppercase tracking-wider block">
                Verified External Profiles
              </span>

              <a
                href={AUTHOR_BIO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#D8CECA] text-xs font-semibold text-[#1C1517] hover:bg-[#F4EBEB] transition-colors"
              >
                <span>LinkedIn Professional Profile</span>
                <ExternalLink className="w-4 h-4 text-[#66585B]" />
              </a>

              <a
                href={AUTHOR_BIO.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#D8CECA] text-xs font-semibold text-[#641E32] hover:bg-[#F4EBEB] transition-colors"
              >
                <span>WeRize Author Articles</span>
                <ExternalLink className="w-4 h-4 text-[#B98C91]" />
              </a>

              <button
                type="button"
                onClick={handleDownload}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 p-3 bg-[#641E32] text-white rounded-lg text-xs font-semibold hover:bg-[#461423] transition-colors shadow-2xs cursor-pointer"
                title="Download verified resume (Nagarjun_Valeru_Resume.pdf)"
              >
                {resumeDownloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Downloaded! (Nagarjun_Valeru_Resume.pdf)</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Nagarjun's Resume (PDF)</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-[#FBF8F6] p-6 sm:p-8 rounded-xl border border-[#D8CECA] shadow-2xs">
            <h3 className="font-serif text-2xl font-bold text-[#1C1517] mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-[#66585B] mb-6">
              Fill out the details below to open a direct email draft with pre-formatted message context.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1C1517] block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8CECA] rounded-lg focus:outline-none focus:border-[#641E32] focus:ring-1 focus:ring-[#641E32]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1C1517] block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sjenkins@company.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8CECA] rounded-lg focus:outline-none focus:border-[#641E32] focus:ring-1 focus:ring-[#641E32]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1C1517] block">
                  Subject / Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8CECA] rounded-lg focus:outline-none focus:border-[#641E32] focus:ring-1 focus:ring-[#641E32]"
                >
                  <option value="Senior SEO Content Writer Role">Senior SEO Content Writer Role</option>
                  <option value="Technical SEO & AEO/GEO Consulting">Technical SEO &amp; AEO/GEO Consulting</option>
                  <option value="Content Architecture & Keyword Strategy Project">Content Architecture &amp; Keyword Strategy Project</option>
                  <option value="General Professional Inquiry">General Professional Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1C1517] block">
                  Message Details
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your team, role expectations, timeline, or SEO requirements..."
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D8CECA] rounded-lg focus:outline-none focus:border-[#641E32] focus:ring-1 focus:ring-[#641E32]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#641E32] text-white text-xs font-semibold rounded-lg hover:bg-[#461423] transition-all shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Nagarjun</span>
              </button>

              {submitted && (
                <p className="text-xs text-emerald-800 font-semibold pt-1">
                  ✓ Email composer opened! You can also reach out directly at {AUTHOR_BIO.email}.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
