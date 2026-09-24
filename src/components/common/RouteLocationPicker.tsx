'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Compass, RotateCcw, CheckCircle2, ChevronDown, LocateFixed, ExternalLink } from 'lucide-react';
import { apDistricts, majorInterstateCorridors } from '@/data/apDistricts';

interface RouteLocationPickerProps {
  movingFrom: string;
  movingTo: string;
  onChangeFrom: (val: string) => void;
  onChangeTo: (val: string) => void;
  onDistanceCalculated?: (distanceKm: number) => void;
}

export function RouteLocationPicker({
  movingFrom,
  movingTo,
  onChangeFrom,
  onChangeTo,
  onDistanceCalculated,
}: RouteLocationPickerProps) {
  const [activeTab, setActiveTab] = useState<'map' | 'dropdown'>('dropdown');
  const [pin1, setPin1] = useState<{ lat: number; lng: number; label: string } | null>(null);
  const [pin2, setPin2] = useState<{ lat: number; lng: number; label: string } | null>(null);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  // Dropdown states
  const [fromDistrict, setFromDistrict] = useState('Vizianagaram');
  const [fromCity, setFromCity] = useState('');
  const [toDistrict, setToDistrict] = useState('');
  const [toCity, setToCity] = useState('');
  const [toInterstate, setToInterstate] = useState('');

  // Map Container Ref
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const polylineRef = useRef<any>(null);

  // Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  };

  // Initialize Leaflet Map when map tab is open
  useEffect(() => {
    if (activeTab !== 'map' || typeof window === 'undefined') return;

    let isMounted = true;

    import('leaflet').then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      if (!mapInstanceRef.current) {
        // Default center on Vizianagaram
        const map = L.map(mapContainerRef.current).setView([18.105076, 83.3949883], 9);
        mapInstanceRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        map.on('click', (e: any) => {
          handleMapClick(e.latlng.lat, e.latlng.lng, L);
        });
      } else {
        setTimeout(() => {
          mapInstanceRef.current?.invalidateSize();
        }, 150);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  const handleMapClick = async (lat: number, lng: number, L: any) => {
    if (!pin1 || (pin1 && pin2)) {
      // Set Pin 1 (Pickup)
      const label = `Pickup (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
      setPin1({ lat, lng, label });
      setPin2(null);
      setDistanceKm(null);
      onChangeFrom(label);

      // Try reverse geocoding
      fetchLocationName(lat, lng).then((name) => {
        if (name) {
          setPin1({ lat, lng, label: name });
          onChangeFrom(name);
        }
      });

      renderMarkers(L, { lat, lng }, null);
    } else {
      // Set Pin 2 (Dropoff)
      const label = `Destination (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
      setPin2({ lat, lng, label });
      onChangeTo(label);

      const d = calculateDistance(pin1.lat, pin1.lng, lat, lng);
      setDistanceKm(d);
      if (onDistanceCalculated) onDistanceCalculated(d);

      fetchLocationName(lat, lng).then((name) => {
        if (name) {
          setPin2({ lat, lng, label: name });
          onChangeTo(name);
        }
      });

      renderMarkers(L, pin1, { lat, lng });
    }
  };

  const fetchLocationName = async (lat: number, lng: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      if (data && data.address) {
        const addr = data.address;
        const name =
          addr.suburb ||
          addr.city ||
          addr.town ||
          addr.village ||
          addr.county ||
          addr.state_district ||
          'Vizianagaram Region';
        return `${name}, ${addr.state || 'Andhra Pradesh'}`;
      }
    } catch {
      // Fallback
    }
    return null;
  };

  const renderMarkers = (L: any, p1: any, p2: any) => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    // Clear old markers and polyline
    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];
    if (polylineRef.current) {
      map.removeLayer(polylineRef.current);
      polylineRef.current = null;
    }

    if (p1) {
      const marker1 = L.marker([p1.lat, p1.lng])
        .addTo(map)
        .bindPopup('<b>🟢 Pin 1: Pickup Location</b>')
        .openPopup();
      markersRef.current.push(marker1);
    }

    if (p2) {
      const marker2 = L.marker([p2.lat, p2.lng])
        .addTo(map)
        .bindPopup('<b>🔴 Pin 2: Drop Location</b>')
        .openPopup();
      markersRef.current.push(marker2);

      // Connect with polyline
      const line = L.polyline(
        [
          [p1.lat, p1.lng],
          [p2.lat, p2.lng],
        ],
        { color: '#EA580C', weight: 4, dashArray: '6, 8' }
      ).addTo(map);
      polylineRef.current = line;

      // Fit bounds
      map.fitBounds([
        [p1.lat, p1.lng],
        [p2.lat, p2.lng],
      ], { padding: [40, 40] });
    }
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        import('leaflet').then((L) => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.setView([lat, lng], 13);
            handleMapClick(lat, lng, L);
          }
        });
      },
      (err) => {
        setIsLocating(false);
        alert('Could not retrieve your location: ' + err.message);
      }
    );
  };

  const handleResetMap = () => {
    setPin1(null);
    setPin2(null);
    setDistanceKm(null);
    onChangeFrom('');
    onChangeTo('');
    import('leaflet').then((L) => {
      if (!mapInstanceRef.current) return;
      markersRef.current.forEach((m) => mapInstanceRef.current.removeLayer(m));
      markersRef.current = [];
      if (polylineRef.current) {
        mapInstanceRef.current.removeLayer(polylineRef.current);
        polylineRef.current = null;
      }
      mapInstanceRef.current.setView([18.105076, 83.3949883], 9);
    });
  };

  // Dropdown update handlers
  const handleFromDistrictChange = (dName: string) => {
    setFromDistrict(dName);
    const dist = apDistricts.find((d) => d.name === dName);
    const firstCity = dist?.cities[0] || dName;
    setFromCity(firstCity);
    onChangeFrom(`${firstCity}, ${dName} (AP)`);
  };

  const handleFromCityChange = (cName: string) => {
    setFromCity(cName);
    onChangeFrom(`${cName}, ${fromDistrict} (AP)`);
  };

  const handleToDistrictChange = (dName: string) => {
    setToDistrict(dName);
    setToInterstate('');
    const dist = apDistricts.find((d) => d.name === dName);
    const firstCity = dist?.cities[0] || dName;
    setToCity(firstCity);
    onChangeTo(`${firstCity}, ${dName} (AP)`);
  };

  const handleToCityChange = (cName: string) => {
    setToCity(cName);
    onChangeTo(`${cName}, ${toDistrict} (AP)`);
  };

  const handleToInterstateChange = (dest: string) => {
    setToInterstate(dest);
    setToDistrict('');
    setToCity('');
    onChangeTo(dest);
  };

  return (
    <div className="space-y-4">
      {/* Option Mode Selector */}
      <div className="flex items-center justify-between p-1 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab('dropdown')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'dropdown'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>AP Districts &amp; Cities</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('map')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'map'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>📍 Drop 2 Pins On Map</span>
        </button>
      </div>

      {/* Mode A: Drop 2 Pins on Interactive Map */}
      {activeTab === 'map' && (
        <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-bold text-slate-800 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Click 1st: Pickup Pin 🟢 • Click 2nd: Destination Pin 🔴
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                disabled={isLocating}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-orange-600 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <LocateFixed className="w-3 h-3 text-emerald-600" />
                <span>{isLocating ? 'Locating...' : 'Current GPS'}</span>
              </button>

              <button
                type="button"
                onClick={handleResetMap}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-600 hover:text-rose-600 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Leaflet Map Box */}
          <div
            ref={mapContainerRef}
            className="w-full h-56 rounded-xl border border-slate-300 shadow-inner z-0"
            style={{ minHeight: '220px' }}
          />

          {/* Pin Status & Distance Pill */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
            <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2 truncate">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-slate-500 text-[10px] uppercase font-bold shrink-0">From:</span>
              <span className="font-semibold text-slate-800 truncate">
                {pin1 ? pin1.label : 'Click on map to drop Pin 1'}
              </span>
            </div>

            <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2 truncate">
              <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0" />
              <span className="text-slate-500 text-[10px] uppercase font-bold shrink-0">To:</span>
              <span className="font-semibold text-slate-800 truncate">
                {pin2 ? pin2.label : 'Click on map to drop Pin 2'}
              </span>
            </div>
          </div>

          {distanceKm !== null && (
            <div className="p-2.5 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-between text-xs font-bold text-orange-900">
              <span>Estimated Direct Road Distance:</span>
              <span className="text-sm font-black text-orange-600 font-heading">
                ~{distanceKm} km
              </span>
            </div>
          )}
        </div>
      )}

      {/* Mode B: Andhra Pradesh Districts & Major Cities Dropdowns */}
      {activeTab === 'dropdown' && (
        <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          {/* Pickup Selection */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Moving From (AP District &amp; City)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <select
                value={fromDistrict}
                onChange={(e) => handleFromDistrictChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {apDistricts.map((d) => (
                  <option key={d.id} value={d.name}>
                    District: {d.name}
                  </option>
                ))}
              </select>

              <select
                value={fromCity}
                onChange={(e) => handleFromCityChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select City / Town / Mandal</option>
                {apDistricts
                  .find((d) => d.name === fromDistrict)
                  ?.cities.map((city, idx) => (
                    <option key={idx} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Destination Selection */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Moving To (Within AP or Interstate)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <select
                value={toDistrict}
                onChange={(e) => handleToDistrictChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">-- Select AP Destination District --</option>
                {apDistricts.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name} District
                  </option>
                ))}
              </select>

              {toDistrict ? (
                <select
                  value={toCity}
                  onChange={(e) => handleToCityChange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select City / Town</option>
                  {apDistricts
                    .find((d) => d.name === toDistrict)
                    ?.cities.map((city, idx) => (
                      <option key={idx} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              ) : (
                <select
                  value={toInterstate}
                  onChange={(e) => handleToInterstateChange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">-- Or Interstate Metros --</option>
                  {majorInterstateCorridors.map((m, idx) => (
                    <option key={idx} value={m.name}>
                      {m.name} ({m.transitTime})
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
            <span>Selected Route:</span>
            <span className="font-bold text-orange-600 truncate max-w-[280px]">
              {movingFrom || 'Vizianagaram'} → {movingTo || 'Select destination'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
