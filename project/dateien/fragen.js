let fragen =  [
    {
      "Frage": "Soll die wöchentliche Arbeitszeit auf 32 Stunden reduziert werden?",
      "Antworten": {
        "SPÖ": "Ja, kürzere Arbeitszeiten steigern Produktivität und Lebensqualität.",
        "Grüne": "Ja, aber nur mit schrittweiser Umsetzung und Evaluierung.",
        "NEOS": "Nein, das würde Unternehmen wirtschaftlich belasten.",
        "FPÖ": "Nein, das wäre ein weiterer Schritt zur Deindustrialisierung.",
        "ÖVP": "Nein, stattdessen setzen wir auf flexiblere Arbeitszeiten.",
        "APÖ": "Nein, aber Überstunden sollten steuerfrei sein."
      }
    },
    {
      "Frage": "Soll es ab dem ersten Geburtstag einen kostenlosen Rechtsanspruch auf Kinderbetreuung geben?",
      "Antworten": {
        "SPÖ": "Ja, um die Vereinbarkeit von Familie und Beruf zu verbessern.",
        "Grüne": "Ja, aber mit Fokus auf qualitativ hochwertige Betreuung.",
        "NEOS": "Ja, aber es soll auch mehr private Angebote geben.",
        "FPÖ": "Nein, Eltern sollten selbst entscheiden, ohne staatlichen Zwang.",
        "ÖVP": "Nein, stattdessen soll das Kindergeld erhöht werden.",
        "APÖ": "Nein, aber Eltern sollen Steuervergünstigungen für Betreuungskosten erhalten."
      }
    },
    {
      "Frage": "Sollen Lehrlinge ab dem ersten Lehrjahr mindestens 1.200 Euro verdienen?",
      "Antworten": {
        "SPÖ": "Ja, das erhöht die Attraktivität der Lehre.",
        "Grüne": "Ja, faire Entlohnung stärkt das Handwerk.",
        "NEOS": "Nein, Löhne sollten durch Angebot und Nachfrage geregelt werden.",
        "FPÖ": "Ja, Lehrlinge leisten wertvolle Arbeit und verdienen faire Bezahlung.",
        "ÖVP": "Nein, Unternehmen sollen selbst entscheiden, aber Lehrlingsförderungen sollen ausgebaut werden.",
        "APÖ": "Ja, zusätzlich sollen Betriebe steuerliche Anreize für Lehrstellen bekommen."
      }
    },
    {
      "Frage": "Soll der Verkauf von Neuwagen mit Verbrennungsmotoren ab 2035 verboten werden?",
      "Antworten": {
        "FPÖ": "Nein, Menschen sollen selbst entscheiden, welches Auto sie fahren.",
        "ÖVP": "Nein, klimafreundlichere Alternativen sollen gefördert werden.",
        "NEOS": "Nein, der Markt soll den Wandel selbst steuern.",
        "Grüne": "Ja, langfristig müssen wir aus fossilen Antrieben aussteigen.",
        "SPÖ": "Nein, aber strengere Abgasnormen und Anreize für E-Mobilität sind sinnvoll.",
        "APÖ": "Nein, aber Wasserstoff- und synthetische Kraftstoffe sollen gefördert werden."
      }
    },
    {
      "Frage": "Soll eine Vermögenssteuer für hohe Privatvermögen eingeführt werden?",
      "Antworten": {
        "SPÖ": "Ja, große Vermögen sollen stärker zur Finanzierung des Staates beitragen.",
        "Grüne": "Ja, um soziale Ungleichheit zu reduzieren.",
        "NEOS": "Nein, eine Vermögenssteuer würde Investitionen verhindern.",
        "FPÖ": "Nein, das ist eine Enteignung von hart erarbeiteten Besitztümern.",
        "ÖVP": "Nein, es sollen lieber Anreize für Investitionen geschaffen werden.",
        "APÖ": "Nein, aber hohe Erbschaften sollten stärker besteuert werden."
      }
    },
    {
      "Frage": "Soll Österreich den Pandemievertrag der WHO unterzeichnen?",
      "Antworten": {
        "SPÖ": "Ja, internationale Kooperation ist essenziell für künftige Pandemien.",
        "Grüne": "Ja, eine koordinierte Antwort auf Pandemien ist notwendig.",
        "NEOS": "Ja, aber mit klaren nationalen Vorbehalten.",
        "FPÖ": "Nein, das schränkt Österreichs Souveränität ein.",
        "ÖVP": "Ja, aber nur, wenn nationale Entscheidungsfreiheit erhalten bleibt.",
        "APÖ": "Nein, Österreich soll eigenständig auf Gesundheitskrisen reagieren können."
      }
    },
    {
      "Frage": "Soll der Besitz und Konsum von Cannabis legalisiert werden?",
      "Antworten": {
        "SPÖ": "Ja, die Kriminalisierung von Konsumenten ist nicht mehr zeitgemäß.",
        "Grüne": "Ja, aber mit klaren Alters- und Abgaberegelungen.",
        "NEOS": "Ja, eine kontrollierte Abgabe würde den Schwarzmarkt eindämmen.",
        "FPÖ": "Nein, Cannabis ist eine Einstiegsdroge.",
        "ÖVP": "Nein, gesundheitliche Risiken sind zu hoch.",
        "APÖ": "Nein, aber medizinisches Cannabis sollte leichter zugänglich sein."
      }
    },
    {
      "Frage": "Soll das gesetzliche Pensionsantrittsalter an die steigende Lebenserwartung angepasst werden?",
      "Antworten": {
        "SPÖ": "Nein, die Menschen sollen nicht noch länger arbeiten müssen.",
        "Grüne": "Nein, stattdessen sollen ältere Arbeitnehmer bessere Anreize für längeres Arbeiten bekommen.",
        "NEOS": "Ja, eine schrittweise Anpassung ist notwendig.",
        "FPÖ": "Nein, das Pensionssystem muss stabil bleiben.",
        "ÖVP": "Ja, um das Pensionssystem langfristig finanzierbar zu halten.",
        "APÖ": "Nein, aber Überstunden sollen steuerfrei sein, um längeres Arbeiten attraktiver zu machen."
      }
    },
    {
      "Frage": "Soll Österreich mehr Flüchtlinge aufnehmen?",
      "Antworten": {
        "SPÖ": "Ja, aus humanitären Gründen ist das notwendig.",
        "Grüne": "Ja, aber mit besseren Integrationsmaßnahmen.",
        "FPÖ": "Nein, Österreich hat bereits überproportional viele Flüchtlinge aufgenommen.",
        "ÖVP": "Nein, stattdessen soll mehr auf Hilfe vor Ort gesetzt werden.",
        "NEOS": "Nein, das bestehende System muss erst reformiert werden.",
        "APÖ": "Nein, Migration soll stärker an den Arbeitsmarkt gekoppelt werden."
      }
    },
    {
      "Frage": "Soll Bargeld in der Verfassung als Zahlungsmittel verankert werden?",
      "Antworten": {
        "FPÖ": "Ja, Bargeld ist ein wichtiges Mittel der Freiheit und Eigenständigkeit.",
        "ÖVP": "Ja, aber ergänzend zu digitalen Zahlungsmethoden.",
        "NEOS": "Nein, Bargeld ist bereits gesetzlich geschützt.",
        "Grüne": "Nein, moderne Zahlungssysteme sind auf dem Vormarsch.",
        "SPÖ": "Nein, aber es soll keine Einschränkungen für Bargeldzahlungen geben.",
        "APÖ": "Ja, Bargeld soll immer eine Alternative bleiben."
      }
    },
    {
      "Frage": "Soll es ein fixes steuerfreies Taschengeld für Schüler*innen geben?",
      "Antworten": {
        "APÖ": "Ja, das würde Schüler*innen mehr finanzielle Eigenständigkeit geben.",
        "FPÖ": "Nein, das ist eine unnötige Belastung für den Staatshaushalt.",
        "ÖVP": "Nein, stattdessen sollte es mehr gezielte Förderungen für bedürftige Familien geben.",
        "NEOS": "Nein, finanzielle Unterstützung für Schüler*innen sollte durch Stipendien erfolgen.",
        "SPÖ": "Ja, aber nur für sozial schwache Haushalte.",
        "Grüne": "Ja, aber gekoppelt an schulische Leistungen."
      }
    },
    {
      "Frage": "Soll ehrenamtliche Arbeit stärker gefördert werden, zum Beispiel durch steuerliche Vorteile oder Bildungsgutscheine?",
      "Antworten": {
        "APÖ": "Ja, ehrenamtliches Engagement sollte stärker honoriert werden.",
        "Grüne": "Ja, aber es soll eine freiwillige Entscheidung bleiben.",
        "FPÖ": "Nein, ehrenamtliche Arbeit sollte nicht finanziell belohnt werden.",
        "ÖVP": "Nein, stattdessen sollten gemeinnützige Organisationen besser gefördert werden.",
        "NEOS": "Ja, steuerliche Anreize könnten mehr Menschen motivieren, sich zu engagieren.",
        "SPÖ": "Ja, aber nur für bestimmte gesellschaftlich besonders wertvolle Tätigkeiten."
      }
    },
    {
      "Frage": "Soll der Schulunterricht um Fächer wie Finanzbildung und digitale Kompetenz erweitert werden?",
      "Antworten": {
        "APÖ": "Ja, das ist notwendig, um Schüler*innen besser auf das Leben vorzubereiten.",
        "NEOS": "Ja, Finanzbildung ist essenziell für wirtschaftliche Eigenverantwortung.",
        "ÖVP": "Ja, aber nur als Wahlfach, um die Schüler nicht zu überlasten.",
        "FPÖ": "Nein, stattdessen sollte der Fokus auf klassischen Fächern bleiben.",
        "Grüne": "Ja, aber mit klarem Fokus auf soziale Gerechtigkeit und Nachhaltigkeit.",
        "SPÖ": "Nein, der Lehrplan ist bereits überfrachtet."
      }
    },
    {
      "Frage": "Soll es eine verpflichtende Unternehmensgründungsschulung für Jugendliche geben, um Unternehmertum zu fördern?",
      "Antworten": {
        "APÖ": "Ja, Unternehmertum soll als Option für junge Menschen attraktiver gemacht werden.",
        "NEOS": "Ja, das kann helfen, wirtschaftliche Eigenverantwortung zu stärken.",
        "SPÖ": "Nein, nicht jeder muss Unternehmer*in werden.",
        "ÖVP": "Nein, stattdessen sollte die Berufsorientierung verbessert werden.",
        "FPÖ": "Nein, staatliche Eingriffe in Bildung sollten reduziert werden.",
        "Grüne": "Ja, aber nur als Wahlmodul für Interessierte."
      }
    },
    {
      "Frage": "Soll es striktere Grenzkontrollen geben, um illegale Migration zu verhindern?",
      "Antworten": {
        "APÖ": "Ja, Migration muss stärker reguliert werden.",
        "FPÖ": "Ja, Grenzkontrollen müssen ausgeweitet werden.",
        "Grüne": "Nein, eine europäische Lösung ist besser als nationale Maßnahmen.",
        "SPÖ": "Nein, stattdessen sollten legale Migrationswege verbessert werden.",
        "ÖVP": "Ja, aber mit Ausnahmen für Arbeitsmigration.",
        "NEOS": "Nein, verstärkte Integration ist der bessere Weg."
      }
    }
  ]