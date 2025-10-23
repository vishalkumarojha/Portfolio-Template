export default function About() {
  return (
    <section className="py-16 border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
          <img src="/profile-photo.jpg" alt="About" className="w-full rounded-lg object-cover mb-6" />
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a Masters student in Computer Science at the University of Copenhagen, specializing in Information
            Retrieval and Natural Language Processing. I previously completed my undergraduate at VIT Chennai. My
            research is centered on enhancing the reasoning and retrieval capabilities and overall performance of small
            language models while ensuring efficiency.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I am fortunate to collaborate with wonderful mentors across various labs. I previously worked on
            hallucinations in Text2Video models with Prof. Amitava Das at the AI Institute, UofSC and on building
            efficient dense retrievers with Prof. Nirav Bhatt at IIT-Madras. Currently, at the Stanford STAIR Lab, I'm
            working with Rylan Schaeffer and Prof. Sanmi Koyejo on model collapse and exploring agent evaluation with
            Prof. Anand Rao at Carnegie Mellon University.
          </p>
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Information Retrieval",
                "Natural Language Processing",
                "AI Safety",
                "Reasoning in Language Models",
              ].map((interest) => (
                <span key={interest} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
