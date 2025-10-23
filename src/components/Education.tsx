export default function Education() {
  const education = [
    {
      period: "2023 - Present",
      degree: "B.Tech CSE (Specialization in Health Informatics)",
      institution: "VIT Bhopal University, (Bhopal, Madhya Pradesh)",
      description:
        "I am currently a second-year student at VIT Bhopal University, pursuing a B.Tech. in Computer Science and Engineering with a specialization in Health Informatics. Throughout my 1st year, My Cumulative GPA is 9.4",
    },
    {
      period: "2021 - 2023",
      degree: "NEET U.G. Preparation",
      institution: "Allen Career Institute, Kota, Rajasthan",
      description:
        "I dedicated my time to preparing for the NEET Examination. To achieve my goal, I enrolled in ALLEN Institute, Kota, where I was in their prestigious SRG Batch and achieved 607/720 in the Exam.",
    },
  ]

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
      <p className="text-gray-600 mb-12">Academic background and qualifications</p>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={idx} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-900 mt-2"></div>
              {idx < education.length - 1 && <div className="w-0.5 h-24 bg-gray-200 mt-2"></div>}
            </div>
            <div className="pb-8">
              <p className="text-sm font-medium text-gray-500 mb-2">{edu.period}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
              <p className="text-sm text-gray-600 mb-3">{edu.institution}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
