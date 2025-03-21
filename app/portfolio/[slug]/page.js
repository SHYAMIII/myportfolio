// app/portfolio/[slug]/page.js
export default function PortfolioPage({ params }) {
    return (
      <div>
        <h1>Project: {params.slug}</h1>
        {/* Project details */}
      </div>
    )
  }