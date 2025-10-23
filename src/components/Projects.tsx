export default function Projects() {
  const projects = [
    {
      title: "ViBe: A Text-to-Video Benchmark for Evaluating Hallucination in Large Multimodal Models",
      authors:
        "Vipula Rawte, Sarthak Jain, Aarush Sinha, Garv Kaushik, Aman Bansal, Prathiksha Rumale Vishwanath, Samyak Rajesh Jain, Aishwarya Naresh Reganti, Vinija Jain, Aman Chadha, Amit P Sheth, Amitava Das",
      venue: "The 5th Workshop on Trustworthy NLP @ NAACL 2025",
      image: "/research-paper-stack.png",
    },
    {
      title: "Dense Retrieval with Efficient Transformers",
      authors: "Your Name, Co-authors",
      venue: "Conference 2025",
      image: "/research-project.png",
    },
  ]

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
      <p className="text-gray-600 mb-12">Research papers and project work.</p>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="flex gap-6">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-48 h-32 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{project.authors}</p>
              <p className="text-sm text-gray-500">{project.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
