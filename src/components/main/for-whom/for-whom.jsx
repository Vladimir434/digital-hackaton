import CardForWhom from "../../cards-components/cards-for-whom/card-for-whom";
import s from "./for-whom.module.css";
  
const ForWhom = () => {
  return (
    <>
      <div className={s.main_wrapper}>
        <div className={s.main_container}>
          <div className={s.container_text}>
            <p>Призовой фонд</p>
            <p>50 000 000 ₽</p>
          </div>
        </div>
        <div className={s.container_card_wrapper}> 
        <div className={s.container_card}>
          <div className={s.container_title}>
            <div className={s.container_image}>
              <img
              style={{width:'100%',height:'auto'}}
                src="https://i.moscow/upload/lending/lct2024/6117e0.png"
                alt=""
              />
            </div>
            <div className={s.container_title_text}>
              <h2>Для кого</h2>
              <div className={s.sub_title}>
                <h3>
                  <span>01</span> Команда от 2 до 5 человек
                </h3>
                <h3>
                  <span>02</span> Специалисты из РФ и других стран мира
                </h3>
                <h3>
                  <span>03</span> Возраст участника от 18 лет
                </h3>
              </div>
            </div>
          </div>
          <div className={s.container_scrolls}>
            <CardForWhom
              img={"https://play-lh.googleusercontent.com/qAHtJwdg6Bt1rISdUiW-60aQ0P1rUe1sTVqKC4G4AeLajYzfT3-1QT8afblEvpbu6Q"}
              name={"Product, "}
              subTitle={"Project-менеджеры"}
            />
            <CardForWhom
              img={"https://play-lh.googleusercontent.com/AcM-sJ8qCUHqsJw8KZ-TPkrD3Elnk1DtlhsLQMAA6yhIQGRoXm7c09na6ZYBBansxdo=w240-h480-rw"}
              name={"Аналитики "}
              subTitle={"и маркетологи"}
            />
            <CardForWhom
              img={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkeunhqMrxG1UGWcRX2osuUJvZ2b5lo0muLGirFeiAJj3IVOXM"}
              name={"IT-предприниматели"}
              subTitle={""}
            />
            <CardForWhom
              img={"https://styles.redditmedia.com/t5_83y0jo/styles/communityIcon_wlhvvzopkqpa1.png"}
              name={"Front, Back, Fullstack "}
              subTitle={"разработчики"}
            />
            <CardForWhom
              img={"https://play-lh.googleusercontent.com/AcM-sJ8qCUHqsJw8KZ-TPkrD3Elnk1DtlhsLQMAA6yhIQGRoXm7c09na6ZYBBansxdo=w240-h480-rw"}
              name={"UX / UI "}
              subTitle={"дизайнеры"}
            />
          </div>
        </div>
          <div className={s.title_block}>
            <span> Зарегистрироватся</span>
            <span>
              <img
                src="https://i.moscow/upload/lending/lct2024/b085b2.svg"
                alt="no image"
              />
            </span>
          </div>
        </div>

        <div className={s.container_opportunity_cards}>
          <h2 className={s.title_opportunity_cards}>
          Возможности <br /> для участников
          </h2>
          <div className={s.container_cards_item}>
            <div className={s.card_wrapper}>
              <div className={s.card_block}>
                <h3>01</h3>
                <h2>Решегте</h2>
                <p>актуальную задачу для развития города или бизнеса</p>
                <div className={s.card_block_img}>
                <img src="https://i.moscow/upload/lending/lct2024/3307a4.png" alt="" />
                </div>
              </div>
            </div>
            <div className={s.card_wrapper}>
              <div className={`${s.card_block} ${s.block_link}`}>
                <h3>02</h3>
                <h2>Присоединись</h2>
                <p>к уникальному международному IT-сообществу</p>
                <div className={s.card_block_img}>
                <img src="https://i.moscow/upload/lending/lct2024/67ca0c.png" alt="" />
                </div>
              </div>
              <div className={s.card_link}>
            <span>
              <img
                src="https://i.moscow/upload/lending/lct2024/b085b2.svg"
                alt="no image"
              />
            </span>
          </div>

            </div>
            <div className={s.card_wrapper}>
              <div className={s.card_block}>
                <h3>03</h3>
                <h2>Прокачай</h2>
                <p>свои навыки и получи обратную связь от лучших экспертов</p>
                <div className={s.card_block_img}>
                <img src="https://i.moscow/upload/lending/lct2024/ea97a5.png" alt="" />
                </div>
              </div>

            </div>
            <div className={s.card_wrapper}>
              <div className={s.card_block}>
                <h3>04</h3>
                <h2>Выиграй</h2>
                <p>денежный приз</p>
                <div className={s.card_block_img}>
                <img src="https://i.moscow/upload/lending/lct2024/b6b217.png" alt="" />
                </div>
              </div>

            </div>
            <div className={s.card_wrapper}>
              <div className={s.card_block}>
                <h3>05</h3>
                <h2>Войди</h2>
                <p>в инновационную экосистему для создания и развития своего стартапа</p>
                <div className={s.card_block_img}>
                <img src="https://i.moscow/upload/lending/lct2024/3276e1.png" alt="" />
                </div>
              </div>

            </div>
            <div className={s.card_wrapper}>
              <div className={s.card_block}>
                <h3>06</h3>
                <h2>Получи</h2>
                <p>первую стажировку или оффер в лучшие компании</p>
                <div className={s.card_block_img}>
                <img src="https://i.moscow/upload/lending/lct2024/d7e3f0.png" alt="" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ForWhom;
