import './App.css'
import { useEffect, useRef, useState } from 'react'
import fond from './assets/fond1.jpg'
import jv88top from './assets/imgs/1779437088166&H6LD6KE9X8&logo.png'
import bisaTopUp from './assets/imgs/bisa top up.png'
import mencobaBtn from './assets/imgs/mencobaBtn.png'
import gunakanAplikasi from './assets/imgs/gunakan aplikasi.png'
import downloadBanner from './assets/imgs/1779430372473&RGUHFQYQJC&footer.png'
import QRcode from './assets/imgs/QRcode-en.png'
import service_button from './assets/imgs/service-button.png'

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

  // useEffect(() => {
  //   const section = gameSectionRef.current

  //   if (!section) return

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setGameSectionVisible(entry.isIntersecting)
  //     },
  //     {
  //       threshold: 0.25,
  //     }
  //   )

  //   observer.observe(section)

  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [])

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
                  mx-auto
                  block
                  w-[90%]
                  animate-pulse
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

            </div>

            {/* Bisa top up */}
            <img
              src={bisaTopUp}
              alt="Bisa Top Up"
              className="
                relative
                z-20
                -mt-10
                block
                w-full
              "
            />

            {/* =================================================
                BOUTON Mencoba Permainan
            ================================================== */}
            <button
              type="button"
              className="
                relative
                z-30
                mx-auto
                block
                w-[60%]
                transition-transform
                duration-100
                hover:scale-[1.01]
                active:scale-95
              "
            >
              <img
                src={mencobaBtn}
                alt="Mencoba Permainan"
                className="block w-full"
              />
            </button>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <img
              src={gunakanAplikasi}
              alt="Gunakan aplikasi untuk bermain game"
              className="
                relative
                z-20
                mt-2
                block
                w-full
              "
            />

          </div>

          {/* card desc */}
          <section className="mt-8 px-5 pb-2 sm:px-8">

            <div className="flex flex-col gap-5">

              {/* =================================================
                  1. DOWNLOAD
              ================================================== */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-yellow-600/40
                  bg-linear-to-b
                  from-[#3b2a0c]/75
                  via-[#1b1208]/75
                  to-[#0d0906]/40
                  p-3
                  shadow-[0_5px_25px_rgba(0,0,0,0.5)]
                  transition-all
                  duration-300
                  hover:border-yellow-400/80
                  hover:shadow-[0_5px_30px_rgba(212,175,55,0.2)]
                "
              >

                {/* Golden glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-yellow-500/10
                    blur-3xl
                  "
                />

                <div className="relative">

                  <h2
                    className="
                      text-center
                      text-xl
                      font-bold
                      uppercase
                      tracking-wider
                      text-yellow-300
                      drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
                      sm:text-2xl
                    "
                  >
                    下载按钮
                  </h2>

                  <p
                    className="
                      mt-3
                      text-center
                      text-sm
                      leading-6
                      text-yellow-100/75
                      sm:text-base
                    "
                  >
                    下载JV88应用，随时随地享受精彩游戏。
                  </p>

                </div>
              </div>

              {/* =================================================
                  2. LOGIN / REGISTER
              ================================================== */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-yellow-600/40
                  bg-linear-to-b
                  from-[#3b2a0c]/75
                  via-[#1b1208]/75
                  to-[#0d0906]/40
                  p-3
                  shadow-[0_5px_25px_rgba(0,0,0,0.5)]
                  transition-all
                  duration-300
                  hover:border-yellow-400/80
                  hover:shadow-[0_5px_30px_rgba(212,175,55,0.2)]
                "
              >

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-yellow-500/10
                    blur-3xl
                  "
                />

                <div className="relative">

                  <h2
                    className="
                      text-center
                      text-xl
                      font-bold
                      uppercase
                      tracking-wider
                      text-yellow-300
                      drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
                      sm:text-2xl
                    "
                  >
                    登录注册
                  </h2>

                  <p
                    className="
                      mt-3
                      text-center
                      text-sm
                      leading-6
                      text-yellow-100/75
                      sm:text-base
                    "
                  >
                    登录或注册JV88账号，进入您的个人中心。
                  </p>

                </div>
              </div>

              {/* =================================================
                  3. AGENT / PARTNERSHIP
              ================================================== */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-yellow-600/40
                  bg-linear-to-b
                  from-[#3b2a0c]/75
                  via-[#1b1208]/75
                  to-[#0d0906]/40
                  p-3
                  shadow-[0_5px_25px_rgba(0,0,0,0.5)]
                  transition-all
                  duration-300
                  hover:border-yellow-400/80
                  hover:shadow-[0_5px_30px_rgba(212,175,55,0.2)]
                "
              >

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -bottom-16
                    h-32
                    w-32
                    rounded-full
                    bg-yellow-500/10
                    blur-3xl
                  "
                />

                <div className="relative">

                  <h2
                    className="
                      text-center
                      text-xl
                      font-bold
                      uppercase
                      tracking-wider
                      text-yellow-300
                      drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
                      sm:text-2xl
                    "
                  >
                    代理加盟
                  </h2>

                  <p
                    className="
                      mt-3
                      text-center
                      text-sm
                      leading-6
                      text-yellow-100/75
                      sm:text-base
                    "
                  >
                    成为JV88合作代理，享受平台提供的更多合作机会。
                  </p>

                </div>
              </div>

              {/* =================================================
                  4. VIDEO
              ================================================== */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-yellow-600/40
                  bg-linear-to-b
                  from-[#3b2a0c]/75
                  via-[#1b1208]/75
                  to-[#0d0906]/40
                  p-3
                  shadow-[0_5px_25px_rgba(0,0,0,0.5)]
                  transition-all
                  duration-300
                  hover:border-yellow-400/80
                  hover:shadow-[0_5px_30px_rgba(212,175,55,0.2)]
                "
              >

                <div className="relative">

                  <h2
                    className="
                      text-center
                      text-xl
                      font-bold
                      uppercase
                      tracking-wider
                      text-yellow-300
                      drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
                      sm:text-2xl
                    "
                  >
                    美女视频
                  </h2>

                  <p
                    className="
                      mt-3
                      text-center
                      text-sm
                      leading-6
                      text-yellow-100/75
                      sm:text-base
                    "
                  >
                    观看精彩视频，了解更多JV88平台内容。
                  </p>

                </div>
              </div>

            </div>

          </section>

          {/* GAME IMAGES CONTENUS */}
          <section
            ref={gameSectionRef}
            className="mt-3 px-4 pb-4"
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
          ${
            gameDmSectionVisible
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

      {/* downolad banner */}
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
        <img
          src={downloadBanner}
          alt="Download JV88"
          className="block w-full"
        />
      </div>
    </div>
  )
}

export default App