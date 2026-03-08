import React from 'react';
import { ShieldCheck, ArrowRight, Settings, Smartphone, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* SIMPLE NAV */}
      <nav className="w-full border-b border-slate-100 px-6 py-4 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">detailor.</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-blue-600">Back to Home</Link>
        </div>
      </nav>

      {/* HEADER */}
      <div className="bg-slate-50 py-24 px-6 text-center border-b border-slate-100">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Getting Started</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">How Detailor Works</h1>
          <p className="text-slate-500 text-lg">A simple 3-step guide to migrating your detailing business to our platform.</p>
        </div>
      </div>

      {/* STEPS */}
      <div className="max-w-4xl mx-auto py-24 px-6 space-y-16">
        
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Settings size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">1. Sign Up & Configure Services</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Create your account in 60 seconds. Set your business name, operating hours, and input your specific detailing packages (e.g., "Full Detail - $150", "Interior Only - $80"). You can completely customize the duration and cost of every service you offer.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Smartphone size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">2. Share Your Booking Link</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Once configured, Detailor generates a custom, professional booking page for your shop. Put this link in your Instagram bio, Facebook page, or website. Clients click the link, select their vehicle size, pick a service, and book an open time slot on your calendar without you having to lift a finger.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <CreditCard size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">3. Accept Jobs & Get Paid</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              When a booking comes in, you get a notification. The client is automatically added to your CRM vault, and an automated text message is sent to confirm their appointment. After the job is done, charge their card directly through the app using our seamless Stripe integration.
            </p>
          </div>
        </div>

        <div className="pt-12 text-center">
           <Link href="https://detailor-app.vercel.app/login" className="inline-flex px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-colors items-center gap-2">
              Launch Your Detailor Dashboard <ArrowRight size={18} />
           </Link>
        </div>
      </div>
    </div>
  );
}