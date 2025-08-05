import { useState } from "react";
import { X } from "lucide-react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Sign in attempt:", { email, password });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-pure-black/80 backdrop-blur-lg z-[10000] flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-dark-gray-card border-2 border-electric-blue rounded-2xl p-12 w-full max-w-[480px] relative animate-slide-in-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-light-gray hover:text-pure-white transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-pure-white text-2xl font-bold mb-2">SENTINEL</div>
          <h2 className="text-pure-white text-[32px] font-bold">Sign In</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 bg-[#333333] border border-border-gray rounded-lg px-4 text-pure-white placeholder:text-medium-gray focus:border-electric-blue focus:outline-none transition-colors duration-300"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 bg-[#333333] border border-border-gray rounded-lg px-4 text-pure-white placeholder:text-medium-gray focus:border-electric-blue focus:outline-none transition-colors duration-300"
              required
            />
          </div>

          {/* Get Started Button */}
          <button
            type="submit"
            className="w-full h-14 bg-electric-blue text-pure-white rounded-lg font-semibold text-lg hover:bg-blue-hover transition-colors duration-300"
          >
            Get Started
          </button>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full h-14 bg-[#555555] text-pure-white rounded-lg font-medium text-base hover:bg-[#666666] transition-colors duration-300 flex items-center justify-center gap-3"
          >
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-[#4285F4] text-sm font-bold">G</span>
            </div>
            Login With Google
            <span className="text-lg">→</span>
          </button>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-light-gray">Don't have an Account? </span>
            <a href="#" className="text-electric-blue hover:text-blue-hover transition-colors duration-300">
              Sign Up →
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;