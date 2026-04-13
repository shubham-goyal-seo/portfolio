"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ACCESS_KEY = "57ab7526-bd65-4e2a-9cf0-656060350015";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setMessage("Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="hidden" name="subject" value="Portfolio Contact Form Submission" />
      <input type="hidden" name="from_name" value="Portfolio Website" />

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            disabled={status === "loading"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company / Role</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company name & your role"
          disabled={status === "loading"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="msg">Message</label>
        <textarea
          id="msg"
          name="message"
          required
          rows={4}
          placeholder="What would you like to discuss?"
          disabled={status === "loading"}
        />
      </div>

      <button type="submit" className="form-submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <><Loader2 size={16} className="spinner" /> Sending...</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>

      {status === "success" && (
        <div className="form-status success">
          <CheckCircle size={16} /> {message}
        </div>
      )}
      {status === "error" && (
        <div className="form-status error">
          <AlertCircle size={16} /> {message}
        </div>
      )}
    </form>
  );
}
