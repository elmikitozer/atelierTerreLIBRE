import { writeClient } from "./lib/writeClient"

async function seed() {
  console.log("Seeding Sanity...")

  // 1. Rentrée
  await writeClient.createOrReplace({
    _id: "rentree",
    _type: "rentree",
    dateAdultes: "15 septembre 2025",
    dateEnfants: "15 septembre 2025",
  })
  console.log("✓ Rentrée")

  // 2. Cours enfants
  await writeClient.createOrReplace({
    _id: "coursEnfants",
    _type: "coursEnfants",
    minAge: 4,
    schedule: [
      { _key: "ce-1", _type: "timeSlot", day: "Mardi",     hours: ["17h30 / 19h"] },
      { _key: "ce-2", _type: "timeSlot", day: "Mercredi",  hours: ["10h / 11h45", "14h / 15h45", "16h / 17h45"] },
      { _key: "ce-3", _type: "timeSlot", day: "Jeudi",     hours: ["17h30 / 19h"] },
      { _key: "ce-4", _type: "timeSlot", day: "Samedi",    hours: ["13h30 / 15h15"] },
    ],
    prices: [
      { _key: "pe-1", _type: "price", duration: "1h45", amount: 275, unit: "/ trimestre" },
      { _key: "pe-2", _type: "price", duration: "2h",   amount: 300, unit: "/ trimestre" },
    ],
    essaiPossible: true,
  })
  console.log("✓ Cours enfants")

  // 3. Cours adultes
  await writeClient.createOrReplace({
    _id: "coursAdultes",
    _type: "coursAdultes",
    schedule: [
      { _key: "ca-1", _type: "timeSlot", day: "Lundi",                    hours: ["10h / 12h30", "14h / 16h", "20h / 22h30"] },
      { _key: "ca-2", _type: "timeSlot", day: "Mardi",                    hours: ["13h / 15h30", "19h30 / 22h"] },
      { _key: "ca-3", _type: "timeSlot", day: "Mercredi",                 hours: ["19h30 / 22h"] },
      { _key: "ca-4", _type: "timeSlot", day: "Jeudi",                    hours: ["10h / 12h30", "19h30 / 22h"] },
      { _key: "ca-5", _type: "timeSlot", day: "Vendredi (1 semaine / 2)", hours: ["17h / 19h30"] },
      { _key: "ca-6", _type: "timeSlot", day: "Samedi",                   hours: ["10h30 / 13h"] },
    ],
    prices: [
      { _key: "pa-1", _type: "price", duration: "2h",   amount: 420, unit: "/ trimestre" },
      { _key: "pa-2", _type: "price", duration: "2h30", amount: 525, unit: "/ trimestre" },
      { _key: "pa-3", _type: "price", duration: "3h",   amount: 650, unit: "/ trimestre" },
    ],
    adulteSurCreneauEnfant: true,
  })
  console.log("✓ Cours adultes")

  // 4. Stages vacances
  const stagesVacances = [
    {
      _id: "stage-vacances-1",
      title: "Stage Été",
      dateRange: "du 7 au 11 juillet 2025",
      hours: "10h-12h",
      tarifEnfantSemaine: 200,
      tarifEnfantSeance: 45,
      tarifAdulteSemaine: 250,
      tarifAdulteSeance: 55,
      order: 1,
    },
    {
      _id: "stage-vacances-2",
      title: "Stage Été",
      dateRange: "du 21 juillet au 1er août 2025",
      hours: "10h-12h",
      tarifEnfantSemaine: 200,
      tarifEnfantSeance: 45,
      tarifAdulteSemaine: 250,
      tarifAdulteSeance: 55,
      order: 2,
    },
  ]

  for (const stage of stagesVacances) {
    await writeClient.createOrReplace({ _type: "stageVacances", ...stage })
  }
  console.log(`✓ Stages vacances (${stagesVacances.length})`)

  // 5. Stages dimanche
  const stagesDimanche = [
    {
      _id: "stage-dimanche-1",
      date: "5 octobre 2025",
      hours: "11h30 / 15h30",
      tarifAdulte: 100,
      tarifEnfant: 80,
      order: 1,
    },
    {
      _id: "stage-dimanche-2",
      date: "25 janvier 2026",
      hours: "11h30 / 15h30",
      tarifAdulte: 100,
      tarifEnfant: 80,
      order: 2,
    },
  ]

  for (const stage of stagesDimanche) {
    await writeClient.createOrReplace({ _type: "stageDimanche", ...stage })
  }
  console.log(`✓ Stages dimanche (${stagesDimanche.length})`)

  // 6. Tarifs événements
  await writeClient.createOrReplace({
    _id: "tarifsEvenements",
    _type: "tarifsEvenements",
    anniversaireBase: 350,
    anniversaireSeuilEnfants: 8,
    anniversaireEnfantSupp: 35,
    teamBuildingMention: "Sur mesure — devis personnalisé selon durée, taille du groupe, déjeuner.",
  })
  console.log("✓ Tarifs événements")

  console.log("Seeding terminé.")
}

seed().catch((err) => {
  console.error("Erreur de seeding :", err)
  process.exit(1)
})
