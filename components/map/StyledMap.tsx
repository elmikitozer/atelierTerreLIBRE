"use client"

import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api"

const ATELIER_POSITION = {
  lat: 48.88276563308417,
  lng: 2.3294777896746357,
}

const METRO_STATIONS = [
  { name: "Place de Clichy", lines: ["2", "13"], lat: 48.88356960353437,  lng: 2.3273558754821244  },
  { name: "Liège",           lines: ["13"],      lat: 48.87980784338081,  lng: 2.3268201553113377  },
  { name: "Blanche",         lines: ["2"],       lat: 48.88358956628967,  lng: 2.3329785070627045  },
  { name: "Pigalle",         lines: ["2", "12"], lat: 48.88246072371811,  lng: 2.337355872070644   },
]

const MAP_STYLE: google.maps.MapTypeStyle[] = [
  // Base crème
  { featureType: "all", elementType: "geometry", stylers: [{ color: "#faf7ee" }] },

  // POIs : masquer géométrie ET labels
  { featureType: "poi", elementType: "geometry", stylers: [{ visibility: "off" }] },
  { featureType: "poi", elementType: "labels",   stylers: [{ visibility: "off" }] },

  // Transit : tout masqué (on dessine nos propres markers)
  { featureType: "transit", stylers: [{ visibility: "off" }] },

  // Hiérarchie des routes
  { featureType: "road.highway", elementType: "geometry",        stylers: [{ color: "#1a1814" }, { weight: 1.5 }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#1a1814" }] },
  { featureType: "road.arterial", elementType: "geometry",        stylers: [{ color: "#1a1814" }, { weight: 1 }] },
  { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#1a1814" }] },
  { featureType: "road.arterial", elementType: "labels.text.stroke", stylers: [{ color: "#faf7ee" }, { weight: 2 }] },
  { featureType: "road.local", elementType: "geometry",           stylers: [{ color: "#1a1814" }, { weight: 0.4 }] },
  { featureType: "road.local", elementType: "labels.text.fill",   stylers: [{ color: "#6a6358" }] },
  { featureType: "road.local", elementType: "labels.text.stroke", stylers: [{ color: "#faf7ee" }, { weight: 2 }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "labels.icon",    stylers: [{ visibility: "off" }] },

  // Eau, paysage, administratif
  { featureType: "water",     elementType: "geometry",         stylers: [{ color: "#e8dfc4" }] },
  { featureType: "water",     elementType: "labels",           stylers: [{ visibility: "off" }] },
  { featureType: "landscape", elementType: "geometry",         stylers: [{ color: "#faf7ee" }] },
  { featureType: "landscape", elementType: "labels",           stylers: [{ visibility: "off" }] },
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#6a6358" }] },
  { featureType: "administrative.land_parcel",  stylers: [{ visibility: "off" }] },
  { featureType: "administrative.neighborhood", stylers: [{ visibility: "off" }] },
]

const MAP_OPTIONS: google.maps.MapOptions = {
  styles: MAP_STYLE,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  clickableIcons: false,
  backgroundColor: "#faf7ee",
  gestureHandling: "cooperative",
}

const LIBRARIES: never[] = []

// ─── Line badges ───────────────────────────────────────────

function LineBadge({ line }: { line: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/metro-line-${line}.svg`}
      width={20}
      height={20}
      alt={`Ligne ${line}`}
      style={{ display: "block", flexShrink: 0 }}
    />
  )
}

// ─── Metro marker ─────────────────────────────────────────

type MetroStation = typeof METRO_STATIONS[number]

function MetroMarker({ station }: { station: MetroStation }) {
  return (
    <OverlayView
      position={{ lat: station.lat, lng: station.lng }}
      mapPaneName={OverlayView.OVERLAY_LAYER}
      getPixelPositionOffset={(width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
      })}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "6px", pointerEvents: "none" }}>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/metro.svg" width={26} height={26} alt="" aria-hidden="true" style={{ display: "block", flexShrink: 0 }} />

        {/* Nom + badges lignes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <span style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "#1a1814",
            textShadow: "0 0 3px #faf7ee, 0 0 3px #faf7ee, 0 0 3px #faf7ee",
            whiteSpace: "nowrap",
            lineHeight: 1.1,
          }}>
            {station.name}
          </span>
          <div style={{ display: "flex", gap: "3px" }}>
            {station.lines.map((l) => <LineBadge key={l} line={l} />)}
          </div>
        </div>

      </div>
    </OverlayView>
  )
}

// ─── Map ──────────────────────────────────────────────────

export default function StyledMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: LIBRARIES,
  })

  if (!isLoaded) {
    return (
      <div className="w-full h-[500px] md:h-[600px] bg-[#d6cfbf] rounded-sm flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/40">
          Chargement de la carte…
        </p>
      </div>
    )
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-sm overflow-hidden">
      <GoogleMap
        center={ATELIER_POSITION}
        zoom={16}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={MAP_OPTIONS}
      >
        {/* Stations de métro — en dessous du marker atelier */}
        {METRO_STATIONS.map((station) => (
          <MetroMarker key={station.name} station={station} />
        ))}

        {/* Marker atelier */}
        <OverlayView
          position={ATELIER_POSITION}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={(width, height) => ({
            x: -(width / 2),
            y: -height,
          })}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "auto",
            cursor: "pointer",
          }}>
            <div style={{
              background: "#1a1814",
              color: "#faf7ee",
              padding: "8px 14px",
              borderRadius: "2px",
              fontSize: "13px",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(26, 24, 20, 0.15)",
            }}>
              <span style={{ fontWeight: 400 }}>atelier terre</span>
              <span style={{ fontWeight: 900, fontStyle: "italic", marginLeft: "3px", color: "#f1dd6a" }}>
                LIBRE
              </span>
            </div>
            <div style={{ width: "1.5px", height: "8px", background: "#1a1814" }} />
            <div style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#f1dd6a",
              border: "2.5px solid #1a1814",
              boxShadow: "0 2px 8px rgba(26, 24, 20, 0.2)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#1a1814",
              }} />
            </div>
          </div>
        </OverlayView>
      </GoogleMap>
    </div>
  )
}
