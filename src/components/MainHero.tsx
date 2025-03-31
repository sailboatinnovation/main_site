import ContactForm from "./ContactForm";
import DividerWithText from "./DividerWithText";
import TestimonialsGrid from "./TestimonialsGrid";
import { WhyWorkWithMe } from "./WhyWork";

function MainHero() {
  return <div>
    <WhyWorkWithMe/>
    <DividerWithText title="Contact" />
    <ContactForm />
    <DividerWithText title="Client Testimonials" />
    <TestimonialsGrid />
    <DividerWithText title="Who I Work With" />
    <DividerWithText title="Client Testimonials" />
    <DividerWithText title="Final Call to Action" />
    <DividerWithText title="News Letter Signup" />
  </div>
}

export default MainHero;