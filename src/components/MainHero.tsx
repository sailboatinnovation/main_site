import ContactForm from "./ContactForm";
import DividerWithText from "./DividerWithText";
import TestimonialsGrid from "./TestimonialsGrid";
import { WhyWorkWithMe } from "./WhyWork";

function MainHero() {
  return <div>
    <section id="whyWorkWithMe">
      <WhyWorkWithMe />
    </section>

    <section id="contact">
      <DividerWithText title="Contact" />
      <ContactForm />
    </section>
    <section id="clientTestimonials">
      <DividerWithText title="Client Testimonials" />
      <TestimonialsGrid />
    </section>

    <section id="whoIWorkWith">
      <DividerWithText title="Who I Work With" /> 
    </section>

    <section id="finalCall">
      <DividerWithText title="Final Call to Action" /> 
    </section>

    <section id="newsLetter">
      <DividerWithText title="News Letter Signup" />
    </section>
  </div>
}

export default MainHero;