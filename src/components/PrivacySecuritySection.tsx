import { Lock, MapPin, Globe } from "lucide-react";

const PrivacySecuritySection = () => {
  return (
    <section className="bg-pure-black py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[56px] font-bold text-pure-white mb-8 leading-tight">
            Privacy and Security
          </h2>
          <p className="text-lg text-light-gray max-w-[800px] mx-auto leading-relaxed">
            Sentinel prioritize protecting users' privacy and data security, adhering
            to the principle of "local-first" and "minimal data collection".
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px] lg:gap-[60px]">
          {/* Column 1 - Privacy-First by Design */}
          <div className="text-left">
            <Lock className="w-8 h-8 text-electric-blue mb-6" />
            <h3 className="text-2xl font-semibold text-pure-white mb-4">
              Privacy-First by Design
            </h3>
            <p className="text-base text-light-gray leading-relaxed">
              Sentinel never requires bank access, app tracking, or invasive permissions. 
              We only process the data you explicitly share—nothing more, nothing less.
            </p>
          </div>

          {/* Column 2 - Secure Local Processing */}
          <div className="text-left">
            <MapPin className="w-8 h-8 text-electric-blue mb-6" />
            <h3 className="text-2xl font-semibold text-pure-white mb-4">
              Secure Local Processing
            </h3>
            <p className="text-base text-light-gray leading-relaxed">
              Your data stays where it belongs: with you. Email parsing, browser detections, 
              and analytics are processed locally or with temporary encryption. No persistent 
              storage without your consent.
            </p>
          </div>

          {/* Column 3 - Localized & Compliant Infrastructure */}
          <div className="text-left">
            <Globe className="w-8 h-8 text-electric-blue mb-6" />
            <h3 className="text-2xl font-semibold text-pure-white mb-4">
              Localized & Compliant Infrastructure
            </h3>
            <p className="text-base text-light-gray leading-relaxed">
              Sentinel deploys infrastructure regionally with strict data isolation. Your 
              information is stored and processed in compliance with US, EU, and other local 
              privacy regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySecuritySection;