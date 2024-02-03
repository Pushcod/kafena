import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

export default function Hero() {
    return (
      <section className="w-full py-20">
        <Container> 
          <div className="w-full flex items-center">
              <div className="w-[60%]">
                  <h1 className="uppercase text-5xl leading-[70px]">ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h1>
                  <p className="text-base text-left mt-8 leading-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation
                      laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="flex items-center gap-6 mt-12">
                    <li className="inline-flex">
                        <Button href="/" type="primary">Explore More</Button>
                    </li>
                    <li className="inline-flex">
                        <Button href="/" type="outline">Read More</Button>
                    </li>
                  </ul>
              </div>
              <img src="/hero_img.png" className='object-cover' alt="Кофейные зёрна" />
          </div>
        </Container>
      </section>
    )
  }
