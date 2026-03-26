import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Devinson Peña",
  description: "Product, partnerships, and the gap between what technology can do and what people actually trust it to do.",
};

export default function About() {
  return (
    <section className="section" style={{ paddingTop: "var(--section-pad-y-top)" }}>
      <div className="page-shell">
        <div className="measure-wide">
          <p className="label mb-2.5">About</p>
          <h1 className="font-serif page-heading mb-7">
            I have spent most of my career around products that worked technically but still had not earned trust.
          </h1>
        </div>

        <div className="measure prose-about flex flex-col gap-5 mb-10" style={{ color: "var(--muted)" }}>
          <p className="text-body">
            That gap between capability and adoption is the thread that matters most to me. I have worked across finance,
            adtech, consulting, product programs, onboarding, and commercial environments, but I do not see those as disconnected chapters.
            The through-line has been the same in each one. Strong systems fail when the people around them cannot understand,
            trust, or act on them with confidence.
          </p>

          <p className="text-body">
            Web3 drew me in because it makes those problems impossible to ignore. Trust, coordination, incentive design,
            product framing, and workflow all sit much closer to the surface. HSLU, PBA-X, builder programs, and ChopDot made that interest concrete.
            What I value in this space is not the rhetoric around the future. It is the chance to work on systems where product judgment actually matters.
          </p>

          <p className="text-body">
            The same is true for AI. My interest there predates the current model cycle, but only recently has the tooling become usable enough to matter in real work.
            I care less about AI as identity and more about AI as utility. The interesting question is whether it reduces friction, sharpens decision-making,
            and improves the workflow around the product rather than adding noise to it.
          </p>

          <p className="text-body">
            I am most useful when a product is real but the path to adoption is still unsettled. That can mean product clarity,
            partnerships, GTM translation, onboarding, or practical automation inside the operating layer around the product.
            I care about the moment when something complex becomes understandable enough for serious people to actually use.
          </p>
        </div>

        <div className="measure flex items-center gap-3">
          <a
            href="https://cal.eu/devinson/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a call
          </a>
          <a href="mailto:devinsonpena@gmail.com" className="btn btn-outline">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
