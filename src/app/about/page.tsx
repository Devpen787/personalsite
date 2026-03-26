import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Devinson Peña",
  description: "Product, partnerships, and the gap between what technology can do and what people actually trust it to do.",
};

export default function About() {
  return (
    <section className="section" style={{ paddingTop: "5rem" }}>
      <div className="page-shell">
        <p className="label mb-2.5">About</p>
        <h1
          className="font-serif mb-9"
          style={{ fontSize: "1.75rem", lineHeight: 1.25 }}
        >
          The same question kept showing up everywhere I worked: why do people struggle to adopt products that technically work?
        </h1>

        <div
          className="prose-about flex flex-col gap-5 mb-12"
          style={{ color: "var(--muted)" }}
        >
          <p className="text-body">
            I studied finance at{" "}
            <a href="https://northeastern.edu" target="_blank" rel="noopener noreferrer">
              Northeastern
            </a>{" "}
            and worked at{" "}
            <a href="https://www.ml.com" target="_blank" rel="noopener noreferrer">
              Merrill Lynch
            </a>{" "}
            right as the 2008 crisis hit. That experience shaped something early: systems that look solid from the outside can be deeply fragile underneath. It made me skeptical of surface-level trust and curious about what makes people actually believe in the tools they use.
          </p>

          <p className="text-body">
            I moved to Europe, studied at{" "}
            <a href="https://www.comillas.edu" target="_blank" rel="noopener noreferrer">
              Comillas in Madrid
            </a>
            , then spent over six years in Germany working across product, operations, and consulting. My MSc thesis was on the practical applications of AI, years before large language models went mainstream. At{" "}
            <a href="https://www.xaxis.com" target="_blank" rel="noopener noreferrer">
              Xaxis
            </a>{" "}
            and{" "}
            <a href="https://www.lightreaction.com" target="_blank" rel="noopener noreferrer">
              Light Reaction
            </a>
            , both part of{" "}
            <a href="https://www.groupm.com" target="_blank" rel="noopener noreferrer">
              GroupM
            </a>{" "}
            (the world&rsquo;s largest media investment company, roughly one in three ads globally), I ran product programs at real scale. Then{" "}
            <a href="https://trakken.de" target="_blank" rel="noopener noreferrer">
              Trakken
            </a>{" "}
            on the consulting side and{" "}
            <a href="https://digitl.com" target="_blank" rel="noopener noreferrer">
              Digitl
            </a>{" "}
            where I led a team through a $10M+ pipeline and 100+ client onboardings.
          </p>

          <p className="text-body">
            Every role reinforced the same pattern: the technology works, but the product fails because the workflow around it isn&rsquo;t clear enough for people to trust. Onboarding is where most things break. Not the protocol. Not the code. The first five minutes.
          </p>

          <p className="text-body">
            I believed in the philosophy of Bitcoin and Ethereum long before I made the jump. The idea that value, ownership, and coordination could be restructured from the ground up felt inevitable to me. But I also watched a gap develop between the tech world I was in and the tech world forming underneath it. Around 2024 I stopped watching. I went through{" "}
            <a href="https://web3x.io" target="_blank" rel="noopener noreferrer">
              Web3x
            </a>
            , then{" "}
            <a href="https://polkadot.network/development/blockchain-academy/" target="_blank" rel="noopener noreferrer">
              PBA-X
            </a>{" "}
            (Polkadot Blockchain Academy, executive track), then the{" "}
            <a href="https://www.hslu.ch" target="_blank" rel="noopener noreferrer">
              CAS Blockchain at HSLU
            </a>
            , a postgraduate program 20 minutes from{" "}
            <a href="https://cryptovalley.swiss" target="_blank" rel="noopener noreferrer">
              Crypto Valley in Zug
            </a>
            , where the density of real builders and protocols is unlike anywhere else in Europe.
          </p>

          <p className="text-body">
            Now I&rsquo;m in Zurich, building{" "}
            <a href="/work">ChopDot</a>, writing about tokenomics, doing hackathons, and looking for the right problems to work on. I&rsquo;d rather consult or freelance than go back to the wrong room. But I&rsquo;m very open to the right one.
          </p>
        </div>

        <div className="flex items-center gap-3">
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
