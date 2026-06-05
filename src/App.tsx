import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Dining } from '@/pages/Dining'
import { HealthSuite } from '@/pages/HealthSuite'
import { Accommodations } from '@/pages/Accommodations'
import { RoomPage } from '@/pages/RoomPage'
import { Facilities } from '@/pages/Facilities'
import { FacilityPage } from '@/pages/FacilityPage'
import { SignatureRetreat } from '@/pages/SignatureRetreat'
import { RetreatProgramPage } from '@/pages/RetreatProgramPage'
import { Offers } from '@/pages/Offers'
import { Experience } from '@/pages/Experience'
import { Contact } from '@/pages/Contact'
import { ContentPage } from '@/pages/ContentPage'
import { NotFound } from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />

        {/* Accommodations */}
        <Route path="accommodations" element={<Accommodations />} />
        <Route path="accommodations/grand-deluxe" element={<RoomPage slug="grand-deluxe" />} />
        <Route
          path="accommodations/grand-deluxe/:variant"
          element={<RoomPage slug="grand-deluxe" />}
        />
        <Route
          path="accommodations/prestige-pool-villa"
          element={<RoomPage slug="prestige-pool-villa" />}
        />
        <Route
          path="accommodations/prestige-pool-villa/:variant"
          element={<RoomPage slug="prestige-pool-villa" />}
        />

        {/* Facilities */}
        <Route path="facilities" element={<Facilities />} />
        <Route path="facilities/:slug" element={<FacilityPage />} />

        <Route path="dining" element={<Dining />} />
        <Route path="health-suite" element={<HealthSuite />} />

        {/* Offers */}
        <Route path="offers" element={<Offers />} />
        <Route path="offers/:slug" element={<Offers />} />

        {/* Retreats */}
        <Route path="retreat/signature" element={<SignatureRetreat />} />
        <Route
          path="retreat/signature/journey-of-self-restoration"
          element={<ContentPage pageKey="/retreat/signature/journey-of-self-restoration" />}
        />
        <Route path="retreat/signature/:slug" element={<RetreatProgramPage />} />
        <Route
          path="retreat/host-your-retreat"
          element={<ContentPage pageKey="/retreat/host-your-retreat" />}
        />
        <Route
          path="retreat/tarzans-jungle-retreat"
          element={<ContentPage pageKey="/retreat/tarzans-jungle-retreat" />}
        />

        {/* Experience */}
        <Route path="experience" element={<Experience />} />
        <Route path="experience/wedding" element={<ContentPage pageKey="/experience/wedding" />} />
        <Route
          path="experience/vip-concierge"
          element={<ContentPage pageKey="/experience/vip-concierge" />}
        />
        <Route path="experience/nyepi" element={<ContentPage pageKey="/experience/nyepi" />} />

        {/* Info */}
        <Route path="activities" element={<ContentPage pageKey="/activities" />} />
        <Route path="gallery" element={<ContentPage pageKey="/gallery" />} />
        <Route path="awards" element={<ContentPage pageKey="/awards" />} />
        <Route path="press-release" element={<ContentPage pageKey="/press-release" />} />
        <Route path="events" element={<ContentPage pageKey="/events" />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="privacy-policy" element={<ContentPage pageKey="/privacy-policy" />} />
        <Route path="general-policy" element={<ContentPage pageKey="/general-policy" />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
