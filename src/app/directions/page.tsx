import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Outlier } from "@/components/brand/Outlier";

const directions = [
  {
    id: "products",
    number: "01",
    title: "The product shelf",
    purpose: "Help people find something useful.",
    description:
      "A featured product, generous interface previews, and a clear reason to try each tool. The company is the maker behind the work.",
    structure: "Introduction → featured product → more tools → the lab",
    action: "Try a product",
    image: "products",
    alt: "Product-led homepage with a compact introduction and a featured Orb UI interface",
  },
  {
    id: "lab",
    number: "02",
    title: "A look inside the lab",
    purpose: "Make people curious about the company.",
    description:
      "Lead with a point of view, then tell the story through real projects. A more editorial introduction to the people and interests behind the software.",
    structure: "The idea → visual overview → project stories → the founder",
    action: "Explore the work and follow along",
    image: "lab",
    alt: "Lab-led homepage with an editorial headline and three staggered project screenshots",
  },
  {
    id: "gallery",
    number: "03",
    title: "The Gallery / updated",
    purpose: "Let the work speak first.",
    description:
      "The selected direction, updated with the agreed company language. Six equally sized project cards, TypeChinese first, and RxRecall marked New.",
    structure: "Introduction → project gallery → the lab",
    action: "Browse and open a project",
    image: "gallery",
    alt: "Gallery homepage with an introduction and a visual collection of equally sized project cards",
  },
];

export default function DirectionsIndex() {
  return (
    <main id="main" className="directions-index direction-gutter">
      <header className="directions-index-header">
        <Outlier />
        <span className="direction-label">EXPERIMENTAL SOFTWARE / WHITE ROOM</span>
      </header>
      <div className="directions-index-intro">
        <h1>
          Same identity.
          <br />
          Three different priorities.
        </h1>
        <p>
          The typography, colors, and logo stay the same. These studies change what a
          visitor sees first, what they learn, and where we invite them to go.
        </p>
      </div>
      <div className="directions-options">
        {directions.map((direction) => (
          <article key={direction.id}>
            <Link
              href={`/directions/${direction.id}`}
              className="directions-option-link"
            >
              <div className="directions-option-top">
                <span className="direction-label">DIRECTION {direction.number}</span>
                <ArrowUpRight size={24} aria-hidden="true" />
              </div>
              <div className="directions-option-image">
                <Image
                  src={`/marketing/directions/${direction.image}.webp`}
                  width={1280}
                  height={720}
                  sizes="(max-width: 760px) 100vw, 33vw"
                  alt={direction.alt}
                />
              </div>
              <h2>{direction.title}</h2>
              <p className="directions-option-purpose">{direction.purpose}</p>
              <p>{direction.description}</p>
              <span className="direction-text-link">
                Open this version <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </article>
        ))}
      </div>
      <section className="directions-comparison" aria-labelledby="compare-title">
        <p className="direction-label">WHAT WE’RE COMPARING</p>
        <h2 id="compare-title">The job of the homepage.</h2>
        <div className="directions-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Direction</th>
                <th scope="col">Content order</th>
                <th scope="col">Main invitation</th>
              </tr>
            </thead>
            <tbody>
              {directions.map((direction) => (
                <tr key={direction.id}>
                  <th scope="row">
                    {direction.number} / {direction.title}
                  </th>
                  <td>{direction.structure}</td>
                  <td>{direction.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="directions-review-note">
          <p>
            The Gallery is the selected foundation for the current homepage. Its updated
            copy leads with “From experimentation to production.” Projects receive
            equal prominence, with TypeChinese first and RxRecall marked New.
          </p>
          <Link href="/" className="direction-text-link">
            Open the current homepage <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
