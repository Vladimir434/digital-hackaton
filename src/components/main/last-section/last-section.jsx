import s from "./last-section.module.css";
import WK from '../../../assets/wk.svg'
import Telegm from '../../../assets/telegram.svg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import CardSlider from "../../cards-components/card-slider/card-slider";

const LastSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={s.container_1}>
        <div className={s.div_date}>
          <h3>с 2019 года</h3>
        </div>
        <h2>
          <span>Более 40 000 </span>талантливых специалистов уже стали
          участниками сообщества ЛЦТ
        </h2>
      </div>
      <Swiper
      key={windowWidth}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={s.mySwiper2}
        breakpoints={{
          900: { slidesPerView: 2 }, 
        }}>
        <SwiperSlide>
          <CardSlider img={'https://i.moscow/upload/lending/lct2024/5e1b95.webp'} text={'«После победы в хакатоне в 2023 году запустили пилот с Комитетом по туризму. Сейчас тестируем рекомендательный сервис формирования персонализированных туристических пакетов.»'} textTwo={'Команда Magnum Opus'}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider img={'https://i.moscow/upload/lending/lct2024/1a0d8f.png'} text={'«Победив в ЛЦТ, мы успешно завершили пилотное тестирование интерактивной карты для формирования границ территорий Москвы в целях «Комплексного развития территорий». Совсем скоро сервис будет внедрён в Департаменте городского имущества города Москвы.»'} textTwo={'Команда GZPU_ninja'}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider img={'https://i.moscow/upload/lending/lct2024/b78563.webp'} text={'«Вместе с командой работал над задачей по созданию рекомендательного сервиса по прогнозированию динамики спроса на рейсы от компании «Аэрофлот». На защите проектов нашу команду заметил HR компании. Уже через неделю меня пригласили на техническое собеседование, после чего я получил оффер.»'} textTwo={'Алексей Олейник, команда Penguin Cod'}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider img={'https://i.moscow/upload/lending/lct2024/c5ed5e.webp'} text={'«На хакатоне ЛЦТ-2022 мы разработали сервис «Живой город», который позволяет оптимизировать работы со сметами и в короткие сроки готовить данные для взаимодействия с ЕАИСТ. Главконтроль его доработал, пропилотировал и готов интегрировать в информационные системы Москвы.»'} textTwo={'Команда Good Genius'}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider img={'https://i.moscow/upload/lending/lct2024/97b76a.webp'} text={'«Мы заняли 2-е место на хакатоне ЛЦТ-2023, решив задачу по созданию умного корпоративного ассистента для помощи в решении бизнес-задач от tada.team. Вскоре после хакатона Tada (ex. tada.team) внедрила наше решение.»'} textTwo={'Команда Garpix'}/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{ width: "305px",marginTop:'18px',marginBottom:'36px' }}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
  {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} style={{ cursor: "pointer" }}>
            <div
              style={{
                width: "22px",
                height: "5px",
                background: "hsla(0, 0%, 100%, .18)",
                transition: "background 0.3s",
              }}
              className="thumb"
            ></div>
          </SwiperSlide>
        ))}      </Swiper>
      <div className={s.div_subs}>
        <a href="#">
          <h4>Присоединиться к сообществу</h4>
          <img style={{maxWidth:'35px',width:'100%'}} src={Telegm} alt="no image" />
        </a>
      </div>
      <div className={s.container_organizers}>
        <h2 className={s.organizers_title}>Организаторы</h2>
        <div className={s.organizers}>
          <div className={s.organizers_block}>
            <div className={s.organizers_block_item}>
              <img
                style={{ maxWidth: "250px" }}
                src="https://i.moscow/upload/lending/lct2024/da9090.svg"
                alt="no image"
              />
            </div>
            <div className={s.organizers_card}>
              Департамент предпринимательства и инновационного развития города
              Москвы.
            </div>
          </div>
          <div className={s.organizers_block}>
            <div className={s.organizers_block_item}>
              <img
                style={{ maxWidth: "250px" }}
                src="https://i.moscow/upload/lending/DigitalHealth/d5d278.svg"
                alt="no image"
              />
            </div>
            <div className={s.organizers_card}>
              Городской институт развития технологического и инновационного
              предпринимательства.
            </div>
          </div>
        </div>
      </div>
      <div className={s.container_partners}>
        <h2 className={s.partners_title}>Партнеры</h2>
        <button className={s.partners_button}>Стать партнером</button>
        <div className={s.main_partners_wrapper}>
          <div className={s.div_main_partners}>
            <div className={s.div_main_partners_elem}>
              <h3 className={s.partners_item_subtitle}>
                Технологический партнер
              </h3>
              <div className={s.partners_item}>
                <img
                  style={{ maxWidth: "250px" }}
                  src="https://i.moscow/upload/lending/lct2024/e0a1ba.png"
                  alt="no image"
                />
              </div>
              <div className={s.partners_card}>
                <div className={s.ul_green}>
                  <li>
                    Free-tier и стартовый бонус каждой команде + индивидуальные
                    условия на платформу Cloud.ru Evolution{" "}
                  </li>
                  <li>Техническая поддержка 24/7</li>
                  <li>Консультации специалистов Cloud.ru</li>
                </div>
              </div>
            </div>
            <div className={s.div_main_partners_elem}>
              <h3 className={s.partners_item_subtitle}>
                Коммуникационный партнер
              </h3>
              <div className={s.partners_item}>
                <img
                  style={{ maxWidth: "250px" }}
                  src="https://i.moscow/upload/lending/lending_Ltc/d3b953.svg"
                  alt="no image"
                />
              </div>
              <h3 className={s.partners_card}>
                Бесплатный доступ к функциям мессенджера на 2024 год для
                участников хакатона по уникальному промокоду и специальная
                платформа для взаимодействия участников и организаторов.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={s.main_partners_wrapper}>
        <h3 className={s.partners__title2}>Международные партнеры</h3>
        <div className={s.div_main__partners2}>
          <div className={s.elem}>
            <div className={s.elem_item}>
              <img
                style={{ maxWidth: "250px", maxHeight: "103px" }}
                src="https://i.moscow/upload/lending/lct2024/03d432.png"
                alt="ni image"
              />
            </div>
            <h3 className={s.elem_card}>
              Проводит ежегодную премию в области городских инноваций
              International Award for Urban Innovation
            </h3>
          </div>
          <div className={s.elem}>
            <div className={s.elem_item}>
              <img
                style={{ maxWidth: "250px", maxHeight: "103px" }}
                src="https://i.moscow/upload/lending/lct2024/4dbbb9.webp"
                alt="ni image"
              />
            </div>
            <h3 className={s.elem_card}>
              Иранский Дом инноваций и технологий в Москве занимается
              продвижением иранских наукоемких и ИТ-технологий на российский
              рынок.
            </h3>
          </div>
          <div className={s.elem}>
            <div className={s.elem_item}>
              <img
                style={{ maxWidth: "250px", maxHeight: "70px" }}
                src="https://i.moscow/upload/lending/lct2024/d7838a.svg"
                alt="ni image"
              />
            </div>
            <h3 className={s.elem_card}>
              Занимается развитием и акселерацией стартапов в Узбекистане
            </h3>
          </div>
          <div className={s.elem}>
            <div className={s.elem_item}>
              <img
                style={{ maxWidth: "250px", maxHeight: "103px" }}
                src="https://i.moscow/upload/lending/lct2024/c8e7b6.png"
                alt="ni image"
              />
            </div>
            <h3 className={s.elem_card}>
              Цифровой департамент Правительства Аджмана – исполнительный орган
              государственной власти эмирата Аджман. В задачи департамента
              входит осуществление реформ в области цифровизации государственных
              услуг в эмирате
            </h3>
          </div>
          <div className={s.elem}>
            <div className={s.elem_item}>
              <img
                style={{ maxWidth: "250px", maxHeight: "103px" }}
                src="https://i.moscow/upload/lending/DigitalHealth/021bf7.png"
                alt="ni image"
              />
            </div>
            <h3 className={s.elem_card}>
              Основной целью Туринского политехнического университета в городе
              Ташкенте является подготовка высококвалифицированных кадров для
              автомобильной, машиностроительной и электротехнической отраслей
              промышленности, энергетики и др. Innovation
            </h3>
          </div>
          <div className={s.elem}>
            <div className={s.elem_item}>
              <img
                style={{ maxWidth: "250px", maxHeight: "103px" }}
                src="https://i.moscow/upload/lending/lct2024/c503be.svg"
                alt="ni image"
              />
            </div>
            <h3 className={s.elem_card}>
              Крупнейший университет Кении, который организовывает саму
              масштабную конференцию по инновациям в Африке Nairobi Innovation
              Week. Она объединяет представителей госструктур, крупного бизнеса
              и стартапов.
            </h3>
          </div>
          <div className={s.elem}>
            <div className={s.elem_item}>
              <img
                style={{ maxWidth: "250px", maxHeight: "103px" }}
                src="https://i.moscow/upload/lending/lct2024/219766.svg"
                alt="ni image"
              />
            </div>
            <h3 className={s.elem_card}>
              T-hub – инновационный посредник и один из крупнейший
              бизнес-инкубаторов Индии
            </h3>
          </div>
        </div>
      </div>
      <div className={s.main_partners_wrapper}>
        <h3 className={s.partners__title3}>Федеральные партнеры</h3>
        <div className={s.div_main__partners3}>
          <div className={s.div_main__partners3_card}>
            <a href="#">
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/8b1119.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_main__partners3_card}>
            <a href="#">
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.moscow/upload/lending/lct2024/a24139.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_main__partners3_card}>
            <a href="#">
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/59a7d9.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_main__partners3_card}>
            <a href="#">
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/825c44.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_main__partners3_card}>
            <a href="#">
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/b78c61.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_main__partners3_card}>
            <a href="#">
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/9e0847.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_main__partners3_card}>
            <a href="#">
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/7307f1.png"
                alt="no image"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={s.main_partners_wrapper}>
        <h3 className={s.partners__title3}>Интеллектуальные партнеры</h3>
        <div className={s.div_partners4}>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "118px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/4ad130.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/5a7af4.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/bcc4c9.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/07b48b.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "94px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/a8e9a2.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "100px" }}
                src="https://i.moscow/upload/lending/lct2024/2a142c.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/novator/758cbe.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/101602.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "109px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/f11109.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "109px" }}
                src="https://i.moscow/upload/lending/lct2024/970717.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "115px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/a4a738.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "159px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/02f60a.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/cb0152.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "137px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/99111a.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/508b2a.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/930140.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "115px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/a3674b.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "119px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/2668d0.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "78px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/3d4383.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "78px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/c72633.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "140px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/6353da.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/126688.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/f609ca.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/008666.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "84px" }}
                src="https://i.moscow/upload/lending/lct2024/51da63.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "160px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/08dae1.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/19f756.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/b84f13.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "164px" }}
                src="https://i.moscow/upload/lending/lct2024/7c91ea.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/d55a1f.webp"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "84px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/cd2542.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/94f2b5.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/64f9f3.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "84px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/ad15a9.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "162px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/b068f7.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/e1a2de.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/f5c822.svg"
                alt="no image"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={s.main_partners_wrapper}>
        <h3 className={s.partners__title3}>Региональный партнер</h3>
        <div className={s.div_partners5}>
          <div className={s.div_partners5_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/aa601a.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners5_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/d94d5a.svg"
                alt="no image"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={s.main_partners_wrapper}>
        <h3 className={s.partners__title3}>Комьюнити партнер</h3>
        <div className={s.div_partners4}>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "164px" }}
                src="https://i.moscow/upload/lending/lending_Ltc/c6b645.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "149px" }}
                src="https://i.moscow/upload/lending/lct2024/b6b627.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/ae07be.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "105px" }}
                src="https://i.moscow/upload/lending/lct2024/8afa00.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/2c592d.png"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/e7fa64.jpg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "95px" }}
                src="https://i.moscow/upload/lending/lct2024/0b7dc3.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "170px" }}
                src="https://i.moscow/upload/lending/lct2024/f97f00.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "106px" }}
                src="https://i.moscow/upload/lending/lct2024/26e3b3.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "76px" }}
                src="https://i.moscow/upload/lending/lct2024/ae6209.svg"
                alt="no image"
              />
            </a>
          </div>
          <div className={s.div_partners4_card}>
            <a href="#">
              <img
                style={{ maxWidth: "84px" }}
                src="https://i.moscow/upload/lending/lct2024/02de47.svg"
                alt="no image"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={s.container_faq}>
        <h3 className={s.faq_title}>FAQ</h3>
        <div className={s.faq_card}>
          <h4 className={s.faq_item_subtitle}>
            Кто может принять участие?{" "}
            <img
              style={{ maxWidth: "24px", maxHeight: "24px" }}
              src="https://i.moscow/upload/lending/lending_Ltc/e5e1bd.svg"
              alt=""
            />
          </h4>
          <div className={s.faq_card_text}>
            <li>
              Принять участие в хакатоне могут граждане РФ и других стран мира
              (ограничения прописаны на странице задачи) от 18 лет;
            </li>
            <li>
              Соревнование проходит онлайн, поэтому участвовать можно из любой
              точки мира;
            </li>
            <li>
              Впервые представлять решения и питчиться можно будет на английском
              языке (ограничения прописаны на странице задачи);
            </li>
            <li>
              Для участия в конкурсе необходимо зарегистрироваться на сайте,
              создать команду от 2 до 5 человек или присоединиться к
              существующей, а также подать командную заявку, выбрав для решения
              одну из поставленных задач. Если у тебя нет команды, ты сможешь
              найти ее с помощью удобного интерфейса в личном кабинете, в чате
              или обратиться к модераторам конкурса;
            </li>
            <li>
              На конкурсе мы ждем: Front / Back / FullStack, Web-разработчиков,
              UX / UI дизайнеров, Product / Project-менеджеров, Data Scientists,
              Data Engineers, аналитиков и других специалистов, которые готовы
              создать решение для города или бизнеса.
            </li>
          </div>
        </div>
        <div className={s.faq_card}>
          <h4 className={s.faq_item_subtitle}>
            Зачем принимать участие?{" "}
            <img
              style={{ maxWidth: "24px", maxHeight: "24px" }}
              src="https://i.moscow/upload/lending/lending_Ltc/e5e1bd.svg"
              alt=""
            />
          </h4>
          <div className={s.faq_card_text}>
            <li>
              Возможность получить премию Мэра Москвы в размере 1 000 000 руб.,
              сувенирную продукцию и призы от партнеров;
            </li>
            <li>
              Собрать команду и разработать решение, направленное на развитие
              городской среды или крупного бизнеса;
            </li>
            <li>
              Представить свое решение экспертам Правительства Москвы или
              крупного бизнеса;
            </li>
            <li>Прокачать hard&soft скиллы;</li>
            <li>
              Найти единомышленников и стать частью уникального комьюнити
              специалистов из России и других стран.
            </li>
          </div>
        </div>
        <div className={s.faq_card}>
          <h4 className={s.faq_item_subtitle}>
            Что будет проходить в рамках конкурса?{" "}
            <img
              style={{ maxWidth: "24px", maxHeight: "24px" }}
              src="https://i.moscow/upload/lending/lending_Ltc/e5e1bd.svg"
              alt=""
            />
          </h4>
          <div className={s.faq_card_text}>
            <li>
              Участникам предстоит зарегистрироваться, подать командную заявку,
              разработать и загрузить решение по одной из 24 представленных
              задач, защитить его перед экспертами и узнать на фестивале, кто же
              стал лучшим
            </li>
            <li>
              Регистрация участников и подача командных заявок продлится с 3
              апреля по 5 июня 2024 г.;
            </li>
            <li>
              Доступ к техническим заданиям и наборам данных по задачам
              открываются 3 июня 2024 г. для команд, которые выбрали задачу и
              отправили командную заявку;
            </li>
            <li>
              После получения ТЗ пройдут митапы, в рамках которых эксперты
              подробнее расскажут о поставленных задачах, а зарегистрированные
              команды смогут задать свои вопросы;
            </li>
            <li>
              До 23:59 16 июня 2024 г. необходимо загрузить разработанное
              решение в личном кабинете на сайте конкурса;
            </li>
            <li>
              Техническая экспертиза решений продлится до 21 июня 2024 г., а 23
              июня 2024 г. будет опубликован перечень топ-10 команд по каждой
              задаче, которые прошли в финальный этап конкурса;
            </li>
            <li>
              24 и 25 июня 2024 г. пройдут мастер-классы по подготовке
              презентаций и питчей от профильных экспертов;
            </li>
            <li>Питчи пройдут в онлайн-формате 25 и 26 июня 2024 г.</li>
            <li>
              Фестиваль ЛЦТ24 и церемония награждение победителей пройдет очно в
              Москве. У участников будет возможность пообщаться с постановщиками
              задач, принять участие в активностях фестиваля и, конечно, узнать,
              кто стал Лидером цифровой трансформации. А у тех команд, которые
              не смогут присутствовать очно, будет возможность подключаться к
              онлайн-трансляциям.
            </li>
          </div>
        </div>
        <div className={s.faq_card}>
          <h4 className={s.faq_item_subtitle}>
            Что будет проходить в рамках конкурса?{" "}
            <img
              style={{ maxWidth: "24px", maxHeight: "24px" }}
              src="https://i.moscow/upload/lending/lending_Ltc/e5e1bd.svg"
              alt=""
            />
          </h4>
          <div className={s.faq_card_text}>
            <li>
              Отправляй свой вопрос нам на почту{" "}
              <a href="#">info.leaders@develop.mos.ru </a>, в чат конкурса{" "}
              <a href="#"> @leaders_talk</a> или позвони на горячую линию +7
              (499) 225 9252
            </li>
          </div>
        </div>
      </div>
      <div className={s.bg_footer_form}>
      <div className={s.container_fitm__footer}>
        <div className={s.cnt_form}>
          <div className={s.form_title}>
            <h2>Связаться с нами</h2>
            <h2>
              Оставьте обращение, если у вас остались вопросы — мы обязательно
              свяжемся
            </h2>
          </div>
          <form className={s.form}>
            <div className={s.fio}>
              <label htmlFor="">ФИО*</label>
              <input type="text" />
            </div>
            <div className={s.div_email_tel}>
              <div className={s.div_email}>
                <label>Почта*</label>
                <input type="email" />
              </div>
              <div className={s.div_tel}>
                <label>Телефон*</label>
                <input type="text" />
              </div>
            </div>
            <div className={s.div_tem}>
              <label>Тема</label>
              <input type="text" />
            </div>
            <div className={s.div_message}>
              <label>Сообщение</label>
              <textarea></textarea>
            </div>
            <div className={s.div_input_checkbox}>
              <label>
              <input className={s.checkbox} type="checkbox" />
              <h4>Согласен на обработку персональных данных*</h4>
              </label>
            </div>
            <div className={s.captcha}>
              <label>Captcha</label>
              <input type="text" />
            </div>
            <div className={s.form_group}>
              <span>Отправить</span>
              <span>
                <img
                  src="https://i.moscow/upload/lending/lct2024/b085b2.svg"
                  alt="no image"
                />
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className={s.container_footer}>
        <div className={s.footer_top}>
          <div className={s.footer_top_blocl_1_2_wrapper}>
          <div className={s.footer_block_1}>
            <a href="#">
              <img style={{maxWidth:'273px',width:'100%'}} src="https://i.moscow/upload/lending/lending_Ltc/0e67ec.svg" alt="" />
            </a>
            <a href="#" className={s.footer_block_1_btn}>Связаться с нами</a>
          </div>
          <div className={s.footer_block_2}>
            <div className={s.footer_block_2_item}>
              <h4 className={s.footer_block_2_title}>Меню</h4>
              <div className={s.footer_block_2_item_cards}>
                <div className={s.div_footer_a}><a href="#">Главнвя</a></div>
                <div className={s.div_footer_a}><a href="#">Призовой фонд</a></div>
                <div className={s.div_footer_a}><a href="#">Для кого</a></div>
                <div className={s.div_footer_a}><a href="#">Таймлаин</a></div>
                <div className={s.div_footer_a}><a href="#">Истории успеха</a></div>
                <div className={s.div_footer_a}><a href="#">FAQ</a></div>
              </div>
            </div>
            <div className={s.footer_block_2_item}>
              <h4 className={s.footer_block_2_title}>Организаторы</h4>
              <div className={s.footer_block_2_item_cards_image}>
                <a href="#"><img style={{maxWidth:'168px'}} src="https://i.moscow/upload/lending/DigitalHealth/75b27a.svg" alt="" /></a>
                <a href="#"><img style={{maxWidth:'135px'}} src="https://i.moscow/upload/lending/DigitalHealth/d5d278.svg" alt="" /></a>
              </div>
            </div>
          </div>
          </div>
          <div className={s.footer_block_3}>
            <h4 className={s.footer_block_3_title}>Контакты</h4>
            <div className={s.footer_block_3_card}>
              <a href="#"> info.leaders@develop.mos.ru</a>
              <h4>ул. Арбат, д.1</h4>
              <div className={s.footer_block_3_card_image}>
                <a href="#"><img style={{maxWidth:'20px'}} src={WK} alt="no image" /> </a>
                <a href="#"><img style={{maxWidth:'26px'}} src={Telegm} alt="no image" /> </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr />
        <div className={s.footer_bottom}>
          <div className={s.footer_bottom_block_1}>
            <div className={s.footer_bottom_block_1_item}>Финалисты ЛЦТhref</div>
            <div className={s.footer_bottom_block_1_item}>Протокол предварительной экспертизы конкурса Мэра Москвыhref</div>
            <div className={s.footer_bottom_block_1_item}>Протокол предварительной экспертизы конкурса ЛЦТhref</div>
            <div className={s.footer_bottom_block_1_item}>Постановление об учреждении премииhref</div>
            <div className={s.footer_bottom_block_1_item}>Положение о конкурсе ЛЦТhref</div>
            <div className={s.footer_bottom_block_1_item}>Положение о конкурсе Мэра Москвыhref</div>
            <div className={s.footer_bottom_block_1_item}>Распоряжение о присуждении премии Мэра Москвыhref</div>
            <div className={s.footer_bottom_block_1_item}>Правила участия в конкурсе Мэра Москвыhref</div>
            <div className={s.footer_bottom_block_1_item}>Внесение изменений в Положение о конкурсе ЛЦТhref</div>
          </div>
          <div className={s.footer_bottom_block_2}>
            <div className={s.footer_bottom_block_2_item}>Политика в отношении обработки персональных данных</div>
            <div className={s.footer_bottom_block_2_item}>Согласие на обработку персональных данных</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LastSection;
