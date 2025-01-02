import React from 'react'

const Timeline = () => {
  return (
    <section className="flex flex-col justify-center py-12 items-center bg-wacwhite">
      <h2 className="text-3xl text-center bg-wacwhite font-bold text-wacred mb-6">  
        Wydad Athletic Club History
      </h2>
      <div className="px-4 py-6 bg-wacwhite text-center">
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-wac">
            1937
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-wac">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-wacred"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-wacred">
              Founding of Wydad Athletic Club
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Wydad Athletic Club (WAC) was established on May 8, 1937, in Casablanca, Morocco, and quickly became a symbol of national pride and resistance.
            </p>
          </div>
        </div>

        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-wac">
            1948
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-wac">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-wacred"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-wacred">
              First Moroccan League Title
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              WAC won their first Moroccan league championship, marking the beginning of their dominance in Moroccan football.
            </p>
          </div>
        </div>

        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-wac">
            1992
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-wac">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-wacred"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-wacred">
              CAF Champions League Triumph
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Wydad secured their first African Champions League title, becoming one of the continent's footballing giants.
            </p>
          </div>
        </div>

        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-wac">
            2017
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-wac">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-wacred"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-wacred">
              Second CAF Champions League Title
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              WAC reclaimed their status as African champions with another CAF Champions League victory, thrilling their passionate fans.
            </p>
          </div>
        </div>

        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-wac">
            2022
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-wac">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-wacred"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-wacred">
              Continuing the Legacy
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Wydad Athletic Club remains a force in African and Moroccan football, adding more titles and inspiring future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
