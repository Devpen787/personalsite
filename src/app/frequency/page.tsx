import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Margin | Devinson Peña",
  description: "Things I keep returning to that don't belong in the main navigation.",
  robots: { index: false, follow: false },
};

type FrequencyItem = {
  title: string;
  href: string;
  note?: string;
};

type FrequencySection = {
  label: string;
  note?: string;
  items: FrequencyItem[];
};

const sections: FrequencySection[] = [
  {
    label: "Returning to",
    items: [
      {
        title: "Tuesdays with Morrie",
        href: "https://www.penguinrandomhouse.com/books/169140/tuesdays-with-morrie-by-mitch-albom/",
        note: "Read it, but bring tissues. It is one of those books that quietly reminds you life is short and pretending otherwise is not a strategy.",
      },
      {
        title: "How to Split the Pie",
        href: "https://www.amazon.com/How-Split-Pie-Other-Negotiation/dp/0060764579",
        note: "One of the few negotiation books that feels like someone quietly removing the romanticism and leaving the leverage on the table.",
      },
      {
        title: "2312",
        href: "https://us.macmillan.com/books/9780765335162/2312",
        note: "Useful because the future in it is not sleek at all. It is political, infrastructural, compromised, and still full of very recognizable humans.",
      },
      {
        title: "The Fifth Element",
        href: "https://www.imdb.com/title/tt0119116/",
        note: "I have watched it more than a hundred times. Leeloo learned how to kick ass in space, the Diva song will live rent free in my head forever, and somehow the whole thing still works.",
      },
      {
        title: "Teenage Mutant Ninja Turtles",
        href: "https://en.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles",
        note: "Four wildly different personalities, one sewer, and somehow a functioning team. Also, if Raphael is your favorite, we will probably get along.",
      },
    ],
  },
  {
    label: "Still useful",
    items: [
      {
        title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        href: "https://bitcoin.org/bitcoin.pdf",
        note: "I first read it in 2010. Still worth rereading because the original idea is calmer, smaller, and more disciplined than most of the noise built on top of it.",
      },
      {
        title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
        href: "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf",
        note: "Worth reading as a founding document. I love the ambition and deeply distrust the confidence.",
      },
      {
        title: "Vitalik: The Three Transitions",
        href: "https://vitalik.eth.limo/general/2023/06/09/three_transitions.html",
        note: "One of the cleaner explanations of why technically correct systems still lose if the real world is not ready to meet them halfway.",
      },
    ],
  },
  {
    label: "Soundtracking work",
    note: "Things that slap.",
    items: [
      {
        title: "Justice",
        href: "https://open.spotify.com/artist/1gR0gsQYfi6joyO1dlp76N",
      },
      {
        title: "RUFUS DU SOL",
        href: "https://open.spotify.com/artist/5Pb27ujIyYb33zBqVysBkj",
      },
      {
        title: "Charlotte de Witte",
        href: "https://open.spotify.com/artist/7bxuYgJQT8X0B9fJjR1S8C",
      },
      {
        title: "Bad Bunny",
        href: "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
      },
      {
        title: "Foo Fighters",
        href: "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
      },
      {
        title: "The Killers",
        href: "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu",
      },
      {
        title: "Arctic Monkeys",
        href: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
      },
    ],
  },
];

export default function Frequency() {
  return (
    <section className="section" style={{ paddingTop: "var(--section-pad-y-top)" }}>
      <div className="page-shell">
        <div className="measure-wide" style={{ marginBottom: "var(--block-gap)" }}>
          <p className="label mb-3" style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
            Margin
          </p>
          <h1 className="font-serif page-heading mb-5" style={{ lineHeight: 1.3 }}>
            Things I keep around the edges of the main story.
          </h1>
          <p className="text-body" style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            This page does not need to be in the navigation. It is just a small canon of books, papers, films, and music that keep turning up in the background radiation.
          </p>
        </div>

        <div className="measure-wide" style={{ marginBottom: "var(--block-gap)" }}>
          {sections.map((section) => (
            <div key={section.label} style={{ marginBottom: "2rem" }}>
              <p className="label mb-3">{section.label}</p>
              {"note" in section && section.note ? (
                <p className="text-small" style={{ color: "var(--muted)", marginTop: -6, marginBottom: 12 }}>
                  {section.note}
                </p>
              ) : null}
              <div className="flex flex-col">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "12px 0 14px",
                      borderBottom: "1px solid var(--faint)",
                    }}
                  >
                    <TrackedLink
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body"
                      style={{ fontWeight: 500, textDecoration: "none" }}
                      eventName={`margin_${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_click`}
                      eventProps={{ location: "margin" }}
                    >
                      {item.title}
                    </TrackedLink>
                    {item.note ? (
                      <p className="text-small" style={{ color: "var(--muted)", marginTop: 4 }}>
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-small measure" style={{ color: "var(--muted)", fontStyle: "italic" }}>
          If you made it here, curiosity is probably not your problem.{" "}
          <TrackedLink
            href="https://cal.eu/devinson/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
            eventName="margin_book_call_click"
            eventProps={{ location: "margin" }}
          >
            Book a call
          </TrackedLink>{" "}
          or{" "}
          <TrackedLink
            href="mailto:devinsonpena@gmail.com"
            style={{ color: "var(--accent)", textDecoration: "none" }}
            eventName="margin_email_click"
            eventProps={{ location: "margin" }}
          >
            email me
          </TrackedLink>
          .
        </p>
      </div>
    </section>
  );
}
