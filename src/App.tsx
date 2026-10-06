import './App.css'
import { useEffect, useRef, useState } from 'react'
import fond from './assets/fond1.jpg'
import jv88top from './assets/imgs/1779437088166&H6LD6KE9X8&logo.png'
// import banner_trans from './assets/imgs/tyty.png'
// import btn_down from './assets/imgs/down.png'
import QRcode from './assets/imgs/QRcode-en.png'
import service_button from './assets/imgs/service-button.png'
import modalQR from './assets/pop-up/modalQR.webp'

import btn1 from './assets/btn/1.webp'
import btn2 from './assets/btn/ll.png'
import btn3 from './assets/btn/wew3e.webp'
import btn4 from './assets/btn/4.webp'

//logo games
import tembakIkan from './assets/imgs/tembakIkan.png'
import dragon from './assets/imgs/dragon.png'
import starlight from './assets/imgs/starlight.png'
import mahjong from './assets/imgs/mahjong.png'
import quiqui from './assets/imgs/quiqui.png'
import crash from './assets/imgs/crash.png'
import gateOfOlympus from './assets/imgs/cateOfOlympus.png'
import sweetBonanza from './assets/imgs/sweetBonanza.png'

//demo games
import tembakIkanDm from './assets/imgs/tembakDm.png'
import dragonDm from './assets/imgs/dragonDm.png'
import starlightDm from './assets/imgs/starlightDm.png'
import mahjongDm from './assets/imgs/mahjongDm.png'
import quiquiDm from './assets/imgs/quiquiDm.png'
import crashDm from './assets/imgs/crashDm.png'
import gateOfOlympusDm from './assets/imgs/gatesDm.png'
import sweetBonanzaDm from './assets/imgs/sweetDm.png'


const menuButtons = [
  {
    image: btn1,
    alt: 'Button 1',

  },
  {
    image: btn2,
    alt: 'Button 2',
  },
  {
    image: btn3,
    alt: 'Button 3',
  },
  {
    image: btn4,
    alt: 'Button 4',
  },
]

function App() {

  const images = [
    tembakIkan,
    starlight,
    mahjong,
    dragon,
    quiqui,
    crash,
    gateOfOlympus,
    sweetBonanza
  ]

  const imagesDm = [
    tembakIkanDm,
    starlightDm,
    mahjongDm,
    dragonDm,
    quiquiDm,
    crashDm,
    gateOfOlympusDm,
    sweetBonanzaDm
  ]

  const gameSectionRef = useRef<HTMLElement | null>(null)
  const gameDmSectionRef = useRef<HTMLElement | null>(null)

  const [gameSectionVisible, setGameSectionVisible] = useState(false)
  const [gameDmSectionVisible, setGameDmSectionVisible] = useState(false)
  const [qrModalOpen, setQrModalOpen] = useState(false)

  useEffect(() => {
    if (!qrModalOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setQrModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [qrModalOpen])

  useEffect(() => {
    const gameSection = gameSectionRef.current
    const gameDmSection = gameDmSectionRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === gameSection) {
            setGameSectionVisible(entry.isIntersecting)
          }

          if (entry.target === gameDmSection) {
            setGameDmSectionVisible(entry.isIntersecting)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    if (gameSection) {
      observer.observe(gameSection)
    }

    if (gameDmSection) {
      observer.observe(gameDmSection)
    }

    return () => {
      observer.disconnect()
    }
  }, [])


  return (
    <div className="min-h-screen bg-white">

      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          xl:max-w-210
          overflow-hidden
          bg-[#0b0807]
          bg-top
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${fond})`,
          backgroundSize: '100% auto',
        }}
      >

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />

        {/* contenu principal */}
        <main className="relative z-10">

          {/* partie haut */}
          <div className="flex flex-col items-center">

            {/* LOGO + SERVICE + QRCODE */}
            <div className="relative w-full">

              {/* Logo principal */}
              <img
                src={jv88top}
                alt="JV88"
                className="
                md:mt-3
                  mx-auto
                  block
                  w-[90%]
                  animate-custom-bounce
                "
              />

              {/* BOUTONS SERVICE + QRCODE */}
              <div
                className="
                  absolute
                  right-[4%]
                  top-[60%]
                  z-30
                  flex
                  flex-col
                  items-center
                  gap-2
                "
              >
                {/* Service */}
                <button
                  type="button"
                  className="
                    w-[12vw]
                    max-w-21.25
                    min-w-13.75
                    transition-transform
                    duration-200
                    hover:scale-105
                    active:scale-95
                  "
                >
                  <img
                    src={service_button}
                    alt="Service"
                    className="block w-full"
                  />
                </button>

                {/* QRcode */}
                <button
                  type="button"
                  onClick={() => setQrModalOpen(true)}
                  className="
                    w-[12vw]
                    max-w-21.25
                    min-w-13.75
                    transition-transform
                    duration-200
                    hover:scale-105
                    active:scale-95
                  "
                >
                  <img
                    src={QRcode}
                    alt="QR Code"
                    className="block w-full"
                  />
                </button>
              </div>

              {qrModalOpen && (
                <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                  onClick={() => setQrModalOpen(false)}
                >
                  <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="QR Code"
                    className="relative max-h-[90vh] max-w-[90vw]"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      aria-label="Fermer"
                      onClick={() => setQrModalOpen(false)}
                      className="absolute -right-3 -top-3 flex size-9 items-center justify-center rounded-full bg-white text-2xl text-black shadow-lg"
                    >
                      &times;
                    </button>
                    <img
                      src={modalQR}
                      alt="QR Code"
                      className="max-h-[90vh] max-w-[90vw] object-contain"
                    />
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* MENU BUTTONS */}
          <section className="mt-15 px-5 pb-6 sm:px-8">

            <div className="flex flex-col items-center gap-2">

              {menuButtons.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  className="
          group
          relative
          aspect-4/1 md:aspect-7/2

          w-full
          md:w-[98%]
          lg:w-[78%]
          xl:w-[92%]
          max-w-255

          transition-transform
          duration-200
          hover:scale-[1.02]
          active:scale-95
        "
                >
                  <img
                    src={button.image}
                    alt={button.alt}
                    className="block w-full"
                  />
                </button>
              ))}

            </div>

          </section>

          {/* GAME IMAGES CONTENUS */}
          <section
            ref={gameSectionRef}
            className="mt-2 px-4 pb-4"
          >
            <div className="grid grid-cols-4 gap-1">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`
                    game-image
                    h-auto
                    w-full
                    object-cover
                    ${gameSectionVisible ? 'game-image-visible' : ''}
                    ${index % 2 === 0
                      ? 'game-image-left'
                      : 'game-image-right'
                    }
                  `}
                  style={{
                    animationDelay: gameSectionVisible
                      ? `${index * 150}ms`
                      : '0ms',
                  }}
                />
              ))}
            </div>
          </section>

          {/* GAME DM IMAGES CONTENUS */}
          <section
            ref={gameDmSectionRef}
            className="mt-3 px-4 pb-10"
          >
            <div className="flex flex-col space-y-2">
              {imagesDm.map((imgDm, index) => (
                <img
                  key={index}
                  src={imgDm}
                  alt={`Game demo ${index + 1}`}
                  className={`
                    game-dm-image
                    h-auto
                    w-full
                    ${gameDmSectionVisible
                      ? 'game-dm-image-show'
                      : 'game-dm-image-hide'
                    }
                  `}
                  style={{
                    animationDelay: gameDmSectionVisible
                      ? `${index * 80}ms`
                      : '0ms',
                  }}
                />
              ))}
            </div>
          </section>

        </main>

      </div>

      {/* DOWNLOAD BANNER */}
      <div
        className="
          fixed
          bottom-0
          left-1/2
          z-50
          w-full
          -translate-x-1/2
          xl:max-w-210
        "
      >

        {/* Banner */}
        {/* <div className="relative w-full"> */}

        {/* Download button */}
        {/* <div
            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-end
              pr-[1.5%]
              pointer-events-none
            "
          > */}
        {/* <button
              type="button"
              className="
                pointer-events-auto relative -right-1 cursor-pointer
                w-[27%]
                max-w-90
                transition-transform
                duration-200
                hover:scale-101
                active:scale-95
              "
            >
              <img
                src={btn_down}
                alt="Download"
                className="block w-full"
              />
            </button> */}
      </div>

      {/* Banner */}
      {/* <img
            src={banner_trans}
            alt="JV88"
            className="block w-full border-t border-[#603614]"
          /> */}

      {/* </div> */}
      {/* </div> */}
    </div >
  )
}

export default App