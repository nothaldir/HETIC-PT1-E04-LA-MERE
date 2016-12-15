import Homepage from './pages/Homepage'
import Experience from './pages/Experience'
import Reveal from './pages/Reveal'
import Testimonials from './pages/Testimonials'
import Testimonial from './pages/Testimonial'

const routes = [
  { path: '/', component: Homepage },
  { path: '/experience', component: Experience },
  { path: '/reveal', component: Reveal },
  { path: '/testimonials', component: Testimonials },
  { path: '/testimonials/:id', component: Testimonial },
]

export default routes
