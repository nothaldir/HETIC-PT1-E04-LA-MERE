import Homepage from './pages/Homepage'
import Bar from './pages/Bar'
import Testimonials from './pages/Testimonials'
import Testimonial from './pages/Testimonial'

const routes = [
  { path: '/', component: Homepage },
  { path: '/bar', component: Bar },
  { path: '/testimonials', component: Testimonials },
  { path: '/testimonials/:id', component: Testimonial },
]

export default routes
