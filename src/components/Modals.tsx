import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, fullName: string) => void;
  error?: string;
  isLoading?: boolean;
}

export const WaitlistModal = ({ isOpen, onClose, onSubmit, error, isLoading }: WaitlistModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit(formData.get('email') as string, formData.get('fullName') as string);
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-[#17111A] rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-[#86AFB8] text-2xl font-semibold mb-6">
          Join the Waitlist Now
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name..."
              className="w-full p-3 bg-transparent border border-[#86AFB8] rounded text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 bg-transparent border border-[#86AFB8] rounded text-white"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-3 bg-[#514F86] text-white rounded flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight size={20} className="text-white text-center" />
                </>
              )}
            </button>
          </div>
          {error && (
            <div className="mt-4 text-red-500 text-sm text-center">
              {error}
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

// SuccessModal.tsx
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export const SuccessModal = ({ isOpen, onClose, email }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-[#514F86] rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-200 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-[#17111A] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-[#86AFB8]"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          
          <h2 className="text-white text-xl font-semibold mb-2">
            We have Successfully added<br />you to our Waiting list
          </h2>
          
          <p className="text-gray-200 text-sm mb-4">
            we will let you know when CONNEFT is ready
          </p>
          
          <div className="bg-[#17111A] p-2 rounded text-gray-300 text-sm">
            {email}
          </div>
        </div>
      </div>
    </motion.div>
  );
};