/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { toast } from 'sonner';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            toast.success("Thank you for subscribing!");
            setEmail("");
        } catch (error) {
            toast.error((error as any).message);
        }
    };

    return (
        <section className="bg-[#1B380A] w-full py-32 border-t border-slate-100">
            <section className="max-w-7xl mx-auto p-8 bg-slate-300 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-green-900 text-center">Subscribe to Our Newsletter</h2>
                <p className="text-center text-gray-700 mt-3 mb-8">
                    Join our mailing list for updates on new plants, gardening tips, and exclusive discounts!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full md:flex-1 p-3 border  rounded-full focus:outline-none "
                    />
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-green-900 text-white font-semibold px-5 py-3 rounded-full hover:bg-green-700 transition duration-300 disabled:opacity-50"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-6">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </section>
        </section>
    );
};

export default NewsletterForm;
