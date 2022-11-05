import React from 'react'
import 'aos/dist/aos.css'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Community = () => {
  return (
    <section id="experience">
    <div className="container experience__container">
        <div data-aos="fade-up" className="experience__content">
          <div className="experience__title">
            <h1 className="experience__title-h1"><span className='experience__span-md'>Farmers</span><span className='experience__span-sm'>and<br/>the</span><span className="experience__span-lg">Community</span></h1>
          </div>
          <hr className="experience__solid-three"></hr>
          <hr className="experience__solid-four"></hr>
          <hr className="experience__solid-five"></hr>
          {/* <div className="experience__cards">
            <div className="experience__card">
              <h5>Experience</h5>
            </div>
            <div className="experience__card">
              <h5>Clients</h5>
            </div>
            <div className="experience__card">
              <h5>Service</h5>
            </div>
          </div> */}
          <div className="experience__p">
            <div>
              <p><mark className="mark__title">Experience</mark> <br/><br/><mark>We are leaders in catastrophe response, often the first Mobile Catastrophe fleet on the ground to serve communities affected by disasters. As part of our commitment to the environment, we became the first major insurer to offer a discount for alternative-fuel vehicles.</mark> We opened the University of Farmers, voted No. 1 corporate training center in the country by Training magazine, to provide our agents and employees with best of the best in insurance education. <br/><br/>We continue to serve our communities, contributing to community-centered organizations. In 2010, we became the title sponsor of the Farmers Insurance Open P G A Tournament at Torrey Pines. Since then, Farmers has partnered with the P G A Tournament and the Century Club of San Diego to raise more than $24 million for San Diego area charities. We've also proudly sponsored Rickie Fowler since 2013. Fowler has partnered with Farmers in numerous natural disaster recovery efforts. He made a special effort for the residents of Moore, Oklahoma, when a 2013 tornado devastated their city. As we look forward, we are determined to continue serving our communities and helping people protect what matters most to them.
              </p>
              <hr className="experience__solid-one"></hr>
            </div>
            <div>
              <p className="p1"> <mark className="mark__title">Clients</mark> <br/><br/>In 1928, two men shared a dream of providing a quality insurance product at a reasonable price. In the decades that followed we've grown and adapted to meet the changing needs of Americans. But one constant has remained: We have an unwavering commitment to uphold our founding ideals to provide industry-leading products and first-rate services to the customers we're privileged to serve. <br/><br/>Different Eras, Same Exceptional Service Farmers not only prides itself on helping you plan wisely for the unexpected, but also on helping restore order when it occurs, so you can keep moving along the road of your life's plans. <br/><br/>In 1959 a Farmers customer wrote us a letter of surprised gratitude when his car battery was replaced just an hour after it was stolen. A letter from a couple in 2002 wrote that their Farmers agent and claims adjuster <mark>“were exceptional in their handling of our grief, what we needed to do, and helpful in many other ways.” That same year, when Hurricane Rita struck Beaumont, Texas, Farmers sent 300 agents to assess damages while policy holders were evacuated. Farmers also donated $100,000 for the city's emergency operations center and two megawatt generators that restored power to Beaumont. Whatever year or decade a disaster occurs, you can count on us to be there for you.</mark> Today, our companies make up one of the country's largest insurers of vehicles, homes and small businesses and provide a wide range of other insurance and financial services products.Farmers is proud to serve more than 10 million households with more than 19 million individual policies across all 50 states through the efforts of over 48,000 exclusive and independent agents and nearly 21,000 employees.
              </p>
              <hr className="experience__solid-two"></hr>
            </div>
            <div>
              <p><mark className="mark__title">Service</mark><br/><br/> <mark>When it comes to providing great customer service, Farmers Insurance ties with State Farm and Nationwide with a score of 4.3, just behind top-ranked USAA.</mark> Of all respondents, 57% said they were totally satisfied with how easy it was to open a policy with Farmers. More than 48% said they were completely satisfied with how easy it was to contact Farmers customer service. And more than 50% said they were completely satisfied with the customer service provided by Farmers.<br/><br/> When asked about the customer service they received when reaching out to Farmers regarding a claim, nearly 53% said they were completely satisfied.Farmers ties with State Farm with a score of 4.2 out of 5, just behind a three-way tie between top-rated Travelers, USAA, and Farmers, all of which have a score of 4.3, based on our survey data. When asked how their claims were handled by Farmers, 57% said they were satisfied with how easy it was to file a claim. Once that claim was filed, nearly 52% of respondents said they were satisfied with the updates they received from Farmers regarding their case. And 56% said they were completely satisfied with how their claim was resolved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section id="experience">
    //   <div className="container experience__container">
    //     <div data-aos="fade-right" className="experience__frontend">
    //       <h3>Frontend</h3>
    //       <div className="experience__content">
    //         <article className="experience__details">
    //           <BsPatchCheckFill className='experience__details-icon'/>
    //           <div>
    //             <h4>Skill</h4>
    //             <small className='text-light'>experienced</small>
    //           </div>
    //         </article>
    //         <article className="experience__details">
    //           <BsPatchCheckFill className='experience__details-icon'/>
    //           <div>
    //             <h4>Skill</h4>
    //             <small className='text-light'>experienced</small>
    //           </div>
    //         </article>
    //         <article className="experience__details">
    //           <BsPatchCheckFill className='experience__details-icon'/>
    //           <div>
    //             <h4>Skill</h4>
    //             <small className='text-light'>experienced</small>
    //           </div>
    //         </article>
    //         <article className="experience__details">
    //           <BsPatchCheckFill className='experience__details-icon'/>
    //           <div>
    //             <h4>Skill</h4>
    //             <small className='text-light'>experienced</small>
    //           </div>
    //         </article>
    //         <article className="experience__details">
    //           <BsPatchCheckFill className='experience__details-icon'/>
    //           <div>
    //             <h4>Skill</h4>
    //             <small className='text-light'>experienced</small>
    //           </div>
    //         </article>
    //         <article className="experience__details">
    //           <BsPatchCheckFill className='experience__details-icon'/>
    //           <div>
    //             <h4>Skill</h4>
    //             <small className='text-light'>experienced</small>
    //           </div>
    //         </article>
    //       </div>
    //     </div>
    //       <p data-aos="fade-left" className="experience__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat pariatur id. Rem amet ducimus inventore unde quibusdam deleniti accusantium numquam neque, corporis modi saepe, magnam optio aut delectus ullam.
    //         </p>
    //       <p data-aos="fade-left" className="experience__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat pariatur id. Rem amet ducimus inventore unde quibusdam deleniti accusantium numquam neque, corporis modi saepe, magnam optio aut delectus ullam.
    //         </p>
    //       <p data-aos="fade-left" className="experience__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat pariatur id. Rem amet ducimus inventore unde quibusdam deleniti accusantium numquam neque, corporis modi saepe, magnam optio aut delectus ullam.
    //         </p>
        // </div>
    // </section>
  )
}

export default Community