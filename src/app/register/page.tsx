"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState<"student" | "club">("student");

  return (
    <main className="min-h-[85vh] pt-32 pb-20 flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(44,47,48,0.06)] overflow-hidden relative">
          <div className="h-40 relative overflow-hidden bg-primary-container/20">
            <img className="w-full h-full object-cover opacity-60" data-alt="abstract register background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArNB6bVg6h1AgE3QeGgzgOa18-TVE1j4UQIZXZz6pVXP_AJ-d58fL8YhVTwsEMIvvA6BIM3j9oWNRuTl506YeLjpZ3LM_8HZiNnapgqRp0gX2X81fyllupyM-7wQdfUMsEFew-omnG3o-hNKS65MwOijVbp4Th8StyQp6oSiWFjuwLridGBAuF_clpGRZ4XZPwAmPAgrp1sFlBpqDM5B6_FRDA6UQjjNamzCyC75-LZxZ808NWdTqq-jlHGE6zAaZWqI7wLqAVoomG" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-surface-container-lowest to-transparent">
              <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Create an Account</h2>
              <p className="text-on-surface-variant font-medium">Join the CampusPulse community</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="flex p-1 bg-surface-container-low rounded-full mb-8">
              <button onClick={() => setRole("student")} type="button" className={`flex-1 py-3 text-sm font-bold rounded-full transition-all duration-200 ${role === "student" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>
                Student
              </button>
              <button onClick={() => setRole("club")} type="button" className={`flex-1 py-3 text-sm font-bold rounded-full transition-all duration-200 ${role === "club" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>
                Club
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">College ID</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">badge</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder="e.g. 12345678" type="text" />
                  </div>
                </div>

                {role === "club" && (
                  <div className="relative group animate-fade-in-up">
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Team Name</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">groups</span>
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder="e.g. Debate Club" type="text" />
                    </div>
                  </div>
                )}
                
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">lock</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder="••••••••" type="password" />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Confirm Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">lock_reset</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder="••••••••" type="password" />
                  </div>
                </div>
              </div>

              <button className="w-full signature-gradient text-on-primary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-xl active:scale-95 transition-all duration-200" type="submit">
                {role === "student" ? "Register as Student" : "Register Team"}
              </button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center pt-4 border-t border-outline-variant/10">
                <p className="text-sm text-on-surface-variant">
                  Already have an account? 
                  <Link href="/login"><button className="text-primary font-bold hover:underline ml-1" type="button">Login Instead</button></Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
