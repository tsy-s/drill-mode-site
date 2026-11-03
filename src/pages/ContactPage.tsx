import { useState, type FormEvent } from "react";
import { IconPhone } from "../components/icons";
import { Icon } from "../components/icons/registry";
import { Reveal } from "../components/layout/Reveal";
import { PageHeader } from "../components/ui/PageHeader";
import { PixelButton } from "../components/ui/PixelButton";
import { SmartLink } from "../components/ui/SmartLink";
import { SocialLinks } from "../components/ui/SocialLinks";
import { CONTACT } from "../content/contact";
import { SITE } from "../content/site";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * CONTACT PAGE. Text is in src/content/contact.ts, which also explains how the form
 * sends messages (the visitor's email app by default, or a form service).
 */
export function ContactPage() {
  usePageMeta("Contact", CONTACT.header.text);
  const form = CONTACT.form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl)) as Record<string, string>;

    if (!CONTACT.formEndpoint) {
      const subject = `[${data.topic}] Message from ${data.name}`;
      const body = `${data.message}\n\n${data.name}${data.organisation ? `, ${data.organisation}` : ""}\n${data.email}`;
      window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) formEl.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader eyebrow={CONTACT.header.eyebrow} title={CONTACT.header.title} text={CONTACT.header.text} color="#c77dff" />

      <section className="section" style={{ paddingTop: "clamp(48px, 7vw, 80px)" }}>
        <div className="container-site grid gap-10 lg:grid-cols-[1.5fr_1fr] items-start">
          <Reveal>
            <form onSubmit={onSubmit} className="pixel-card flex flex-col gap-5 p-6 md:p-8" style={{ borderColor: "#c77dff", boxShadow: "6px 6px 0 #c77dff44" }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="field-label">{form.name}</span>
                  <input className="field" name="name" required autoComplete="name" />
                </label>
                <label>
                  <span className="field-label">{form.email}</span>
                  <input className="field" name="email" type="email" required autoComplete="email" />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="field-label">{form.organisation}</span>
                  <input className="field" name="organisation" autoComplete="organization" />
                </label>
                <label>
                  <span className="field-label">{form.topic}</span>
                  <select className="field" name="topic" defaultValue={CONTACT.topics[0]}>
                    {CONTACT.topics.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
              </div>
              <label>
                <span className="field-label">{form.message}</span>
                <textarea className="field" name="message" required />
              </label>
              <div className="flex flex-col gap-3">
                <div>
                  <PixelButton color="#c77dff" size="lg" disabled={status === "sending"}>
                    {status === "sending" ? form.sending : form.send}
                  </PixelButton>
                </div>
                {status === "sent" && <p role="status" style={{ margin: 0, color: "#00ff88" }}>{form.success}</p>}
                {status === "error" && <p role="alert" style={{ margin: 0, color: "#ff8095" }}>{form.error} <a className="text-link" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></p>}
                {!CONTACT.formEndpoint && <p className="text-sm text-muted-foreground" style={{ margin: 0 }}>{form.mailtoNote}</p>}
              </div>
            </form>
          </Reveal>

          <div className="flex flex-col gap-5">
            {CONTACT.cards.map((card, i) => {
              const text = card.text.replace("{email}", SITE.contactEmail);
              const link = card.link.replace("{email}", SITE.contactEmail);
              return (
                <Reveal key={card.title} delay={i * 100}>
                  <SmartLink to={link} className="flex gap-4 p-5 transition-colors bg-[#0d1322] hover:bg-[#111a2e]" style={{ border: `3px solid ${card.color}55` }}>
                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 44, height: 44, border: `3px solid ${card.color}`, background: "#0a0e1a" }}>
                      <Icon name={card.icon} size={18} color={card.color} />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-sm uppercase tracking-widest" style={{ color: card.color }}>{card.title}</span>
                      <span className="text-white break-words">{text}</span>
                    </div>
                  </SmartLink>
                </Reveal>
              );
            })}
            <Reveal delay={200}>
              <div className="flex flex-col gap-3 p-5" style={{ background: "#0d1322", border: "3px solid #2a3a5c" }}>
                <span className="text-sm uppercase tracking-widest text-soft-foreground">{CONTACT.socialsTitle}</span>
                <SocialLinks />
              </div>
            </Reveal>
            <Reveal delay={300}>
              <a href={`tel:${SITE.helpline.number}`} className="flex items-center gap-4 p-5" style={{ background: "#2a0d17", border: "3px solid #ff2d55" }}>
                <IconPhone size={22} color="#ff2d55" />
                <span className="flex flex-col">
                  <span className="text-sm uppercase tracking-widest" style={{ color: "#ff8095" }}>{CONTACT.helplineTitle}</span>
                  <span className="text-white">Call the {SITE.helpline.label}: {SITE.helpline.number}</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
