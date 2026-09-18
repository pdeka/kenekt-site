"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ShieldCheck } from "@phosphor-icons/react/ssr";
import { RevealOnScroll } from "./RevealOnScroll";

const roles = ["Agent", "Builder", "Land Developer", "Buyer"];

export function SignupForm({ id }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-cream-soft border border-line p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <RevealOnScroll className="lg:col-span-5">
            <h2 className="font-display font-black tracking-tighter text-3xl md:text-4xl text-ink">
              Ask us about a Single Agent Account
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-[42ch]">
              Complete the form below and our team will help you with the
              sign up process.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft">
              <ShieldCheck size={18} weight="bold" className="text-purple" />
              100% Secure - Privacy Guaranteed
            </p>
          </RevealOnScroll>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full flex flex-col items-center justify-center text-center rounded-2xl border border-line bg-cream p-10"
                >
                  <p className="font-display font-bold text-xl text-ink mb-2">
                    Thanks — we&apos;ll be in touch.
                  </p>
                  <p className="text-ink-soft">
                    A member of the Kenekt team will reach out shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="flex flex-col gap-5"
                >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor={`${id}-name`}
                      className="text-sm font-semibold text-ink"
                    >
                      Full name
                    </label>
                    <input
                      id={`${id}-name`}
                      type="text"
                      required
                      placeholder="Enter Full Name Here..."
                      className="rounded-lg border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-purple"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor={`${id}-email`}
                      className="text-sm font-semibold text-ink"
                    >
                      Email address
                    </label>
                    <input
                      id={`${id}-email`}
                      type="email"
                      required
                      placeholder="Enter Email Address Here..."
                      className="rounded-lg border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-purple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor={`${id}-mobile`}
                      className="text-sm font-semibold text-ink"
                    >
                      Mobile
                    </label>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center rounded-lg border border-line bg-cream px-3 text-sm text-ink-soft shrink-0">
                        Australia +61
                      </span>
                      <input
                        id={`${id}-mobile`}
                        type="tel"
                        required
                        placeholder="Enter Mobile Here..."
                        className="w-full rounded-lg border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-purple"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor={`${id}-role`}
                      className="text-sm font-semibold text-ink"
                    >
                      I am a
                    </label>
                    <select
                      id={`${id}-role`}
                      required
                      defaultValue=""
                      className="rounded-lg border border-line bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-purple"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-tap mt-2 inline-flex items-center justify-center rounded-full bg-purple text-cream font-semibold text-sm px-6 py-3.5 hover:bg-purple-deep sm:self-start"
                >
                  Get started with Kenekt
                </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
