import Shell from "@/components/Shell";
import PageMotion from "@/components/PageMotion";
import StageNav from "@/components/StageNav";
import { faq } from "@/lib/copy";

export default function FaqPage() {
  return (
    <Shell active="faq">
      <PageMotion>
        <section className="faq faq-page" id="faq" aria-labelledby="faq-title">
          <h1 id="faq-title" className="display display-md" data-rise>
            FAQ
          </h1>
          <div className="faq-list">
            {faq.map((f) => (
              <details className="faq-item" key={f.q} data-rise>
                <summary>
                  {f.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <StageNav id="faq" />
      </PageMotion>
    </Shell>
  );
}
