"use client";

import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

interface Section {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  bottomParagraphs?: string[];
  contactInfo?: {
    contactPerson?: string;
    company?: string;
    email: string;
    phone: string;
    website?: string;
    address?: string;
    gstin?: string;
  };
}

const sections: Section[] = [
  {
    id: "who-we-are",
    number: "01",
    title: "WHO WE ARE",
    paragraphs: [
      "Slay The Strategy is a digital marketing and creative agency operating as a sole proprietorship of Dipani Handa, registered in India.",
    ],
    contactInfo: {
      company: "Slay The Strategy",
      email: "hello@slaystrategy.com",
      phone: "+91 90363 83777",
      website: "www.slaystrategy.com",
      gstin: "29ANPPH3571F1ZQ",
      address:
        "No. 7084, Glen Field Prestige Wellington Park, Gangama Circle, Jalahalli West, Bengaluru Urban, Karnataka 560013",
    },
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "INFORMATION WE COLLECT",
    paragraphs: [
      "Depending on your interactions with us, we may collect the following information:",
    ],
    bullets: [
      "Full name",
      "Email address and phone number",
      "Business or company name",
      "Job title and professional information",
      "Website and social media details",
      "Business requirements, marketing objectives and budget information",
      "Information submitted through enquiry forms, advertisements or direct communications",
      "IP address, browser information, device information and website usage data",
      "Billing and transaction information, where applicable",
    ],
    bottomParagraphs: [
      "We may collect this information through our website, Meta (Facebook and Instagram) lead generation forms, social media platforms, WhatsApp, email and other communication channels.",
    ],
  },
  {
    id: "how-we-use-your-information",
    number: "03",
    title: "HOW WE USE YOUR INFORMATION",
    paragraphs: [
      "We may use your personal information for the following purposes:",
    ],
    bullets: [
      "Responding to enquiries and service requests.",
      "Scheduling consultations, discovery calls and meetings.",
      "Sharing proposals, quotations and information about our services.",
      "Providing digital marketing, advertising and creative services.",
      "Communicating with prospective and existing clients.",
      "Improving our website, services and customer experience.",
      "Measuring and optimising advertising campaign performance.",
      "Sending relevant marketing communications, where permitted.",
      "Managing billing, contracts and business operations.",
      "Complying with applicable legal and regulatory obligations.",
    ],
    bottomParagraphs: [
      "We process personal information based on your consent or other grounds permitted under applicable law.",
    ],
  },
  {
    id: "meta-advertisements-and-lead-generation",
    number: "04",
    title: "META ADVERTISEMENTS AND LEAD GENERATION",
    paragraphs: [
      "Slay The Strategy may use Meta advertising platforms, including Facebook and Instagram, to promote its services and collect enquiries from potential clients.",
      "When you voluntarily submit your information through a Meta lead generation form or an advertisement, we may use that information to contact you regarding your enquiry, discuss your requirements, provide service-related information and arrange consultations.",
      "Your information may be stored in our authorised customer relationship management systems and accessed by relevant team members for these purposes.",
      "We do not sell or rent your personal information to third parties.",
      "Meta may independently collect and process information in accordance with its own Privacy Policy, available at https://www.facebook.com/privacy/policy/.",
    ],
  },
  {
    id: "cookies-and-tracking-technologies",
    number: "05",
    title: "COOKIES AND TRACKING TECHNOLOGIES",
    paragraphs: [
      "Our website may use cookies, tracking pixels and similar technologies, including Meta Pixel and Google Analytics, where implemented.",
      "These technologies may help us:",
    ],
    bullets: [
      "Understand how visitors interact with our website.",
      "Measure website traffic and advertising performance.",
      "Improve website functionality and user experience.",
      "Deliver relevant advertisements and remarketing campaigns.",
      "Measure conversions and understand audience behaviour.",
    ],
    bottomParagraphs: [
      "You may manage or disable cookies through your browser settings and applicable privacy preference controls.",
      "Where required by law, we will seek your consent before using non-essential tracking technologies.",
    ],
  },
  {
    id: "sharing-your-information",
    number: "06",
    title: "SHARING YOUR INFORMATION",
    paragraphs: [
      "We do not sell or rent personal information. However, we may share relevant information with:",
    ],
    bullets: [
      "Authorised employees and contractors.",
      "Technology and customer relationship management service providers.",
      "Advertising and analytics platforms.",
      "Website hosting and communication service providers.",
      "Payment processors and professional advisers.",
      "Government or regulatory authorities, where legally required.",
    ],
    bottomParagraphs: [
      "Such information is shared only for legitimate business, operational, service-related or legal purposes, subject to appropriate safeguards.",
    ],
  },
  {
    id: "data-storage-and-security",
    number: "07",
    title: "DATA STORAGE AND SECURITY",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, disclosure, alteration or loss.",
      "Access to personal information is restricted to authorised individuals who require it for legitimate business purposes.",
      "While we take reasonable precautions, no method of electronic transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "data-retention",
    number: "08",
    title: "DATA RETENTION",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary to fulfil the purposes outlined in this Privacy Policy, provide our services, maintain business records, resolve disputes and comply with applicable legal obligations.",
      "When personal information is no longer required, we will take reasonable steps to securely delete or anonymise it.",
    ],
  },
  {
    id: "marketing-communications",
    number: "09",
    title: "MARKETING COMMUNICATIONS",
    paragraphs: [
      "Where permitted, we may contact you through email, telephone, WhatsApp or other communication channels regarding your enquiries, our services, relevant offers and business updates.",
      "You may opt out of promotional communications at any time by contacting us at hello@slaystrategy.com or using the unsubscribe option, where available.",
    ],
  },
  {
    id: "your-privacy-rights",
    number: "10",
    title: "YOUR PRIVACY RIGHTS",
    paragraphs: [
      "Subject to applicable data protection laws, you may have the right to:",
    ],
    bullets: [
      "Request access to your personal information.",
      "Request correction or updating of inaccurate information.",
      "Request deletion of your personal information.",
      "Withdraw previously provided consent.",
      "Opt out of promotional communications.",
      "Raise a grievance regarding the processing of your personal information.",
      "Exercise any other rights available under applicable law.",
    ],
    bottomParagraphs: [
      "To exercise these rights, please contact us at hello@slaystrategy.com.",
    ],
  },
  {
    id: "third-party-websites-and-services",
    number: "11",
    title: "THIRD-PARTY WEBSITES AND SERVICES",
    paragraphs: [
      "Our website may contain links to third-party websites, social media platforms and external services.",
      "Slay The Strategy is not responsible for the privacy practices, content or security of these external platforms. We encourage users to review their respective privacy policies before sharing personal information.",
    ],
  },
  {
    id: "international-data-processing",
    number: "12",
    title: "INTERNATIONAL DATA PROCESSING",
    paragraphs: [
      "As a digital marketing agency working with technology providers and clients across different locations, personal information may be stored or processed outside India.",
      "Where applicable, such processing will be subject to relevant data protection requirements and appropriate safeguards.",
    ],
  },
  {
    id: "childrens-privacy",
    number: "13",
    title: "CHILDREN’S PRIVACY",
    paragraphs: [
      "Our website and lead generation activities are intended for individuals aged 18 years and above.",
      "We do not knowingly collect personal information from children through our website or lead generation forms. If we become aware that such information has been collected without legally required consent, we will take appropriate steps to remove it.",
    ],
  },
  {
    id: "updates-to-this-privacy-policy",
    number: "14",
    title: "UPDATES TO THIS PRIVACY POLICY",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our business practices, technology or applicable legal requirements.",
      "The updated policy will be published on this website with the revised effective date.",
    ],
  },
  {
    id: "contact-and-grievance-redressal",
    number: "15",
    title: "CONTACT AND GRIEVANCE REDRESSAL",
    paragraphs: [
      "For any questions, concerns, complaints, data deletion requests or requests relating to your personal information, please contact:",
    ],
    contactInfo: {
      contactPerson: "Dipani Handa",
      company: "Slay The Strategy",
      email: "hello@slaystrategy.com",
      phone: "+91 90363 83777",
      website: "www.slaystrategy.com",
    },
    bottomParagraphs: [
      "We will respond to privacy-related requests within the timelines prescribed under applicable law.",
    ],
  },
];

const renderTextWithLinks = (text: string) => {
  const parts = text.split(
    /(https?:\/\/[^\s)]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
  );

  return parts.map((part, index) => {
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#536757] underline hover:text-[#435346] transition-colors break-all"
        >
          {part}
        </a>
      );
    }
    if (part.includes("@") && !part.startsWith("http")) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="text-[#536757] underline hover:text-[#435346] transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 md:pt-44 mb-16 sm:mb-24 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            <div className="relative max-w-4xl mx-auto text-center">
              {/* Doodle on Top Left */}
              <div className="absolute -top-7 sm:-top-9 md:-top-11 left-2 sm:left-10 md:left-18 lg:left-24 -rotate-12 pointer-events-none select-none">
                <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7E8B80]/80">
                  Privacy
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
                PRIVACY POLICY
              </h1>

              {/* Subheading */}
              <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-5">
                At Slay The Strategy, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, process and protect information when you visit our website, interact with our advertisements, submit an enquiry or engage with our services.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE8E4] border border-black/[0.06] text-xs sm:text-[13px] font-medium text-[#536757]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#536757]" />
                  Last Updated: 24 November 2026
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE8E4] border border-black/[0.06] text-xs sm:text-[13px] font-medium text-[#242424]/80">
                  GSTIN: 29ANPPH3571F1ZQ
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE8E4] border border-black/[0.06] text-xs sm:text-[13px] font-medium text-[#242424]/80">
                  Bengaluru, Karnataka
                </span>
                <a
                  href="mailto:hello@slaystrategy.com"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#536757] text-white text-xs sm:text-[13px] font-medium hover:bg-[#435346] transition-colors"
                >
                  hello@slaystrategy.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar on Desktop */}
        <section className="mb-40 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Sticky Sidebar Navigation (Desktop) */}
              <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-36 bg-[#ECEAE6]/70 backdrop-blur-md rounded-[28px] p-6 border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] mb-4">
                  <h3 className="font-heading font-semibold text-lg text-[#242424]">
                    Table of Contents
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#536757]/10 text-[#536757]">
                    15 Sections
                  </span>
                </div>

                <nav className="flex flex-col gap-1 max-h-[calc(100vh-240px)] overflow-y-auto pr-1">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => handleScrollTo(sec.id)}
                        className={`text-left px-3.5 py-2 rounded-xl text-xs sm:text-[13px] transition-all flex items-center gap-2.5 cursor-pointer ${
                          isActive
                            ? "bg-[#536757] text-white font-medium shadow-sm"
                            : "text-[#242424]/70 hover:text-[#242424] hover:bg-black/[0.04]"
                        }`}
                      >
                        <span
                          className={`font-mono text-[11px] shrink-0 ${
                            isActive ? "text-white/80" : "text-[#536757]"
                          }`}
                        >
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Main Privacy Content List */}
              <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
                {sections.map((sec) => (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="bg-white/80 backdrop-blur-sm rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 md:p-10 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                  >
                    {/* Section Number + Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#536757]/10 text-[#536757] font-heading font-bold text-sm sm:text-base flex items-center justify-center shrink-0 border border-[#536757]/15">
                        {sec.number}
                      </span>
                      <h2 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-[#242424] tracking-tight">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-3.5 sm:space-y-4 text-neutral-700 font-body text-sm sm:text-base leading-relaxed">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{renderTextWithLinks(p)}</p>
                      ))}

                      {/* Bulleted List if present */}
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="space-y-2.5 pt-1.5 pl-1">
                          {sec.bullets.map((b, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3 text-neutral-700 font-body text-sm sm:text-base leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#536757] mt-2.5 shrink-0" />
                              <span>{renderTextWithLinks(b)}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Bottom Paragraphs if present */}
                      {sec.bottomParagraphs &&
                        sec.bottomParagraphs.map((bp, bpIdx) => (
                          <p key={bpIdx}>{renderTextWithLinks(bp)}</p>
                        ))}
                    </div>

                    {/* Contact Info or Registered Details Card */}
                    {sec.contactInfo && (
                      <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-[#F5F4F3] border border-black/[0.05] flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center justify-between text-xs sm:text-sm">
                        <div className="flex flex-col gap-1 text-[#242424]">
                          {sec.contactInfo.contactPerson && (
                            <span className="text-neutral-600">
                              <strong className="text-[#242424]">
                                Privacy & Grievance Contact:{" "}
                              </strong>
                              {sec.contactInfo.contactPerson}
                            </span>
                          )}
                          {sec.contactInfo.company && (
                            <span className="text-neutral-600">
                              <strong className="text-[#242424]">
                                Company:{" "}
                              </strong>
                              {sec.contactInfo.company}
                            </span>
                          )}
                          {sec.contactInfo.address && (
                            <span className="text-neutral-600">
                              <strong className="text-[#242424]">
                                Registered Address:{" "}
                              </strong>
                              {sec.contactInfo.address}
                            </span>
                          )}
                          {sec.contactInfo.gstin && (
                            <span className="text-neutral-600">
                              <strong className="text-[#242424]">
                                GSTIN:{" "}
                              </strong>
                              {sec.contactInfo.gstin}
                            </span>
                          )}
                          {sec.contactInfo.website && (
                            <span className="text-neutral-600">
                              <strong className="text-[#242424]">
                                Website:{" "}
                              </strong>
                              <a
                                href={`https://${sec.contactInfo.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#536757] hover:underline font-medium"
                              >
                                {sec.contactInfo.website}
                              </a>
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={`mailto:${sec.contactInfo.email}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#536757] text-white font-medium text-xs hover:bg-[#435346] transition-colors"
                          >
                            ✉ {sec.contactInfo.email}
                          </a>
                          <a
                            href={`tel:${sec.contactInfo.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-[#242424] font-medium text-xs hover:bg-neutral-50 transition-colors"
                          >
                            📞 {sec.contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
