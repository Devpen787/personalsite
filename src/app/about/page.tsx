import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Devinson Peña",
  description: "Product, partnerships, and the gap between what technology can do and what people actually trust it to do.",
};

export default function About() {
  return (
    <section className="section" style={{ paddingTop: "5rem" }}>
      <div className="page-shell">
        <p className="label mb-4">About</p>
        <h1
          className="font-serif mb-10"
          style={{ fontSize: "1.75rem", lineHeight: 1.25 }}
        >
          The same question kept showing up everywhere I worked: why do people struggle to adopt products that technically work?
        </h1>

        <div className="space-y-6" style={{ color: "var(--muted)" }}>

          <p className="text-body">
            I studied finance at{" "}
            <a href="https://northeastern.edu" target="_blank" rel="noopener noreferrer">Northeastern</a>{" "}
            and worked at{" "}
            <a href="https://www.ml.com" target="_blank" rel="noopener noreferrer">Merrill Lynch</a>{" "}
            right as the 2008 crisis hit. Watching that collapse from the inside shaped something early: systems that look solid can be deeply fragile, and the people inside them are often the last to see it. It made me permanently skeptical of surface-level trust and curious about what makes people actually believe in the tools they use.
          </p>

          <p className="text-body">
            I moved to Europe, studied at{" "}
            <a href="https://www.comillas.edu" target="_blank" rel="noopener noreferrer">Comillas in Madrid</a>,
            then spent years in Germany working across product, operations, and consulting. My MSc thesis was on the practical applications of AI, years before large language models made it obvious. At{" "}
            <a href="https://www.xaxis.com" target="_blank" rel="noopener noreferrer">Xaxis</a>{" "}
            and Light Reaction, both part of{" "}
            <a href="https://www.groupm.com" target="_blank" rel="noopener noreferrer">GroupM</a>{" "}
            (the world&rsquo;s largest media investment company, roughly one in three ads globally), I ran product programs at a scale where the friction between what a tool could do and what a client would actually trust it to do was a daily problem. Then{" "}
            <a href="https://trakken.de" target="_blank" rel="noopener noreferrer">Trakken</a>{" "}
            on the consulting side and{" "}
            <a href="https://digitl.com" target="_blank" rel="noopener noreferrer">Digitl</a>{" "}
            where I led a team through a $10M+ pipeline and 100+ client onboardings.
          </p>

          <p className="text-body">
            The pattern was consistent across all of it. Onboarding is where most things break. Not the protocol, not the code. The first five minutes. The moment someone has to decide whether to trust a workflow is the moment most teams have not designed for.
          </p>

          <p className="text-body">
            I believed in the philosophy of Bitcoin and Ethereum long before I made the jump. The idea that value, ownership, and coordination could be restructured from the ground up felt inevitable, not idealistic. But I also noticed a gap forming between the tech world I was operating in and the one growing underneath it. Around 2024 I stopped watching. I went through{" "}
            <a href="https://web3x.io" target="_blank" rel="noopener noreferrer">Web3x</a>,
            then{" "}
            <a href="https://polkadot.network/development/blockchain-academy/" target="_blank" rel="noopener noreferrer">PBA-X</a>{" "}
            (Polkadot Blockchain Academy, executive track for ecosystem builders), then the{" "}
            <a href="https://www.hslu.ch" target="_blank" rel="noopener noreferrer">CAS Blockchain at HSLU</a>{" "}
            in Switzerland, twenty minutes from{" "}
            <a href="https://cryptovalley.swiss" target="_blank" rel="noopener noreferrer">Crypto Valley in Zug</a>,
            where the density of real builders and protocols is unlike anywhere else in Europe.
          </p>

          <p className="text-body">
            Now I&rsquo;m in Zurich, building{" "}
            <a href="/work">ChopDot</a>,
            writing about tokenomics, doing hackathons, and looking for the right problems to work on. I&rsquo;d rather consult or freelance than go back to the wrong room. But I&rsquo;m open to the right one.
          </p>
        </div>

        <div style={{ marginTop: 40 }}>
          <a
            href="https://cal.com/devinsonpena"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a call
          </a>
          <span style={{ margin: "0 12px", color: "var(--faint)" }}>·</span>
          <a
            href="mailto:devinsonpena@gmail.com"
            className="btn btn-outline"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
