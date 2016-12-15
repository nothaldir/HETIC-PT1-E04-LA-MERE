import Homepage from './pages/Homepage'
import Experience from './pages/Experience'
import Reveal from './pages/Reveal'
import Credits from './pages/Credits'
import Testimonials from './pages/Testimonials'
import Testimonial from './pages/Testimonial'

const routes = [
  { path: '/', component: Homepage },
  { path: '/experience', component: Experience },
  { path: '/reveal', component: Reveal },
  { path: '/testimonials', component: Testimonials },
  { path: '/testimonials/:id', component: Testimonial },
  { path: '/credits', component: Credits },
]

export default routes
