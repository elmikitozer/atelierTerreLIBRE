import {
  getRentree,
  getCoursEnfants,
  getCoursAdultes,
  getStagesVacances,
  getStagesDimanche,
} from "@/lib/sanity/queries"

export const revalidate = 10

export default async function SanityTestPage() {
  const [rentree, coursEnfants, coursAdultes, stagesVacances, stagesDimanche] =
    await Promise.all([
      getRentree(),
      getCoursEnfants(),
      getCoursAdultes(),
      getStagesVacances(),
      getStagesDimanche(),
    ])

  const sections = [
    { label: "Rentrée",          data: rentree },
    { label: "Cours enfants",    data: coursEnfants },
    { label: "Cours adultes",    data: coursAdultes },
    { label: "Stages vacances",  data: stagesVacances },
    { label: "Stages dimanche",  data: stagesDimanche },
  ]

  return (
    <div className="p-8 font-mono text-sm space-y-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold">Sanity — debug</h1>
      {sections.map(({ label, data }) => (
        <section key={label}>
          <h2 className="text-base font-bold mb-2 text-gray-700">{label}</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto text-xs leading-relaxed">
            {JSON.stringify(data, null, 2)}
          </pre>
        </section>
      ))}
    </div>
  )
}
