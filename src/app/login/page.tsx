"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "club">("student");

  return (
    <main className="min-h-[85vh] pt-32 pb-20 flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(44,47,48,0.06)] overflow-hidden relative">
          <div className="h-40 relative overflow-hidden bg-primary-container/20">
            <img className="w-full h-full object-cover opacity-60" data-alt="vibrant abstract background with fluid shapes in indigo and purple tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD19Qy1B4XRs0yDpvenYV-i9w7SGXnCTR7y4Gw5qAt7iv4WdgXhGksvS0h9WYYG5VZwfMdRM9HmkbYf9svWmUyOjgIAm674E5wHvFEgPYBaBkaCqFqcrgyMCsz6-EKg3HHRTB3Y1-Mdr3C7H-cKWQAUivxBS4ZMLa-JTKvsck66WSkZzQAH0yyWrfcvYl44w3Os0lrYXP5CtXcOj2el-J2MGO098K-M9HVS5tL1V7e-_CuEqfmQPOebFqpIV9TZhQ7WsIJoYFWlg8Wa"/>
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-surface-container-lowest to-transparent">
              <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Welcome Back</h2>
              <p className="text-on-surface-variant font-medium">Join the heartbeat of your campus</p>
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                    {role === "student" ? "College Email / ID" : "Club Name / ID"}
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
                      {role === "student" ? "alternate_email" : "groups"}
                    </span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder={role === "student" ? "college_id@domain.edu" : "e.g. Debate Club"} type={role === "student" ? "email" : "text"} />
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">lock</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder="••••••••" type="password"/>
                  </div>
                </div>
              </div>
              <button className="w-full signature-gradient text-on-primary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-xl active:scale-95 transition-all duration-200" type="submit">
                Login to Dashboard
              </button>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-outline-variant/10">
                <Link className="text-sm font-semibold text-primary hover:underline" href="/">Forgot password?</Link>
                <div className="flex flex-col items-center sm:items-end gap-2 mt-2 sm:mt-0">
                  <p className="text-sm text-on-surface-variant">
                    Don't have an account? 
                    <Link href="/register"><button className="text-primary font-bold hover:underline ml-1" type="button">Register Here</button></Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-on-surface-variant/70 font-medium">Trusted by 50+ campus clubs and 10k+ students</p>
        </div>
      </div>
    </main>
  );
}
