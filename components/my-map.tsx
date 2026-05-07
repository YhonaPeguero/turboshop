'use client';

import { MapPin } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel } from '@/components/ui/map';

const office = {
  latitude: -33.3993591,
  longitude: -70.5747241,
};

export function MyMap() {
  return (
    <Card className="relative h-[320px] w-full overflow-hidden rounded-[22px] border border-[rgba(107,33,232,0.35)] bg-turbo-surface2 p-0 shadow-[0_26px_70px_rgba(107,33,232,0.22)] sm:h-[360px] lg:h-[400px]">
      <Map
        theme="dark"
        center={[office.longitude, office.latitude]}
        zoom={14.8}
        minZoom={10}
        maxZoom={18}
        cooperativeGestures
        className="h-full w-full"
      >
        <MapMarker longitude={office.longitude} latitude={office.latitude} anchor="bottom">
          <MarkerContent>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-turboGradient text-white shadow-[0_0_0_8px_rgba(107,33,232,0.22),0_16px_36px_rgba(0,0,0,0.35)]">
              <span className="absolute inset-0 rounded-full border border-white/30" />
              <MapPin className="h-6 w-6" strokeWidth={2.5} />
            </div>
          </MarkerContent>
          <MarkerLabel className="rounded-full border border-white/10 bg-[rgba(15,15,26,0.88)] px-3 py-1.5 font-sans text-xs font-bold text-white shadow-lg backdrop-blur-xl">
            TurboShop
          </MarkerLabel>
        </MapMarker>
        <MapControls position="bottom-right" showCompass showZoom />
      </Map>
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/10" />
    </Card>
  );
}
