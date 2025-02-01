import TaskCard from "../../cards-components/task-card/task-card";
import s from "./task-section.module.css";
const TaskSection = () => {
  return (
    <>
      <div className={s.main_wrapper}>
        <div className={s.main_container}>
          <div className={s.container_title}>
            <h2>Задачи</h2>
            <div className={s.title_menu}>
              <div className={s.title_menu_block}>
                <h2>Москва</h2>
                <span></span>
              </div>
              <div className={s.title_menu_block}>
                <h2>Бизнес</h2>
                <span></span>
              </div>
              <div className={s.title_menu_block}>
                <h2>Регион РФ</h2>
                <span></span>
              </div>
            </div>
          </div>
          <div className={s.task_info}>
            <div className={s.task_info_text}>
              <h2>Хакатон</h2>
              <h2>Реши одну из 25 актуальных зада</h2>
            </div>
            <div className={s.task_info_text}>
              <h2>Язык проведения</h2>
              <h2>Русский и английский</h2>
            </div>
            <div className={s.task_info_text}>
              <h2>Условия участия</h2>
              <h2>Граждане РФ и других стран мира</h2>
            </div>
          </div>

          <div className={s.container_tasks}>
            <TaskCard
              num={"01"}
              name={"Наука"}
              title={"Сервис анализа патентной активности компаний Москвы"}
              subTitle={
                "Департамент предпринимательства и инновационного развития города Москвы"
              }
              img={'https://rpp.mos.ru/services/files/2024/03/21/295a737e14ae4694984e274edee888b6.png'}
            />
            <TaskCard
              num={"02"}
              name={"Государственные закупки"}
              title={"Сервис для прогнозирования и формирования закупок"}
              subTitle={
                "Департамент предпринимательства и инновационного развития города Москвы"
              }
              img={'https://rpp.mos.ru/services/files/2024/03/19/975c799f17d942cb9c31e25f55a82e04.png'}
            />
            <TaskCard
              num={"03"}
              name={"Государственные закупки"}
              title={
                "Конструктор пространственных решений по смарт-наполнению зон отдыха дворовых территорий"
              }
              subTitle={
                "Департамент предпринимательства и инновационного развития города Москвы"
              }
              img={'https://rpp.mos.ru/services/files/2024/03/19/901ad059f93c4ba18bf5b853b994fdc8.png'}
            />
            <TaskCard
              num={"04"}
              name={"Экономика"}
              title={
                "Сервис подбора и оценки территорий для вовлечения в хозяйственный оборот"
              }
              subTitle={
                "Департамент предпринимательства и инновационного развития города Москвы"
              }
              img={'https://rpp.mos.ru/services/files/2024/03/19/9e381291c9414d50b7b77cd02af6442e.png'}
            />
            <TaskCard
              num={"05"}
              name={"Экономика"}
              title={
                "Умный помощник по комплексному подбору инвестиционных площадок"
              }
              subTitle={
                "Департамент предпринимательства и инновационного развития города Москвы"
              }
              img={'https://rpp.mos.ru/services/files/2024/03/19/901ad059f93c4ba18bf5b853b994fdc8.png'}
            />
            <TaskCard
              num={"06"}
              name={"Градостроительное моделирование"}
              title={
                "Сервис для автоматического моделирования движения объектов на Цифровом двойнике Москвы"
              }
              subTitle={
                "Департамент предпринимательства и инновационного развития города Москвы"
              }
              img={'https://rpp.mos.ru/services/files/2024/03/21/5829b39565b544cb91c8cad4c9ab53ba.png'}
            />
          </div>
        </div>
        <div className={s.time_line}>
          <div className={s.timeline_container}>
            <div className={s.timeline_bg}>
              <h2 className={s.timeline_title}>Таймлайн</h2>
              <img
                className={`${s.timeline_bg_img} ${s.d_lg_block}`}
                src="https://i.moscow/upload/lending/lct2024/a5af0b.svg"
                alt="no image"
              />
              <img
                className={`${s.timeline_bg_img} ${s.d_md_block}`}
                src="https://i.moscow/upload/lending/lct2024/31c962.svg"
                alt="no image"
              />
              <div className={`${s.timeline} ${s.timeline_card_1}`}>
                <div className={s.timeline_tag_wrap}>
                  <span>онлаин</span>
                </div>
                <div className={s.timeline_card_img}>
                  <img
                    src="https://i.moscow/upload/lending/lct2024/1e7146.png"
                    alt="no image"
                  />
                </div>
                <div className={s.timeline_card_border}>
                  <div className={s.timeline_card}>
                    <div className={s.timeline_card_data}>
                      03 апреля - 05 июня
                    </div>
                    <h3 className={s.timeline_card_title}>Прием заявок</h3>
                    <button className={s.timeline_card_btn}>
                      Зарегистрироваться
                    </button>
                    <div className={s.timeline_card_num}>1</div>
                  </div>
                </div>
              </div>
              <div className={`${s.timeline} ${s.timeline_card_2}`}>
                <div className={s.timeline_tag_wrap}>
                  <span>онлаин</span>
                </div>
                <div className={s.timeline_card_img}>
                  <img
                    src="https://i.moscow/upload/lending/lct2024/6b98e9.png"
                    alt="no image"
                  />
                </div>
                <div className={s.timeline_card_border}>
                  <div className={s.timeline_card}>
                    <div className={s.timeline_card_data}>03 - 06 июня</div>
                    <h3 className={s.timeline_card_title}>
                      Разработка решений
                    </h3>
                    <div className={s.timeline_card_num}>2</div>
                  </div>
                </div>
              </div>
              <div className={`${s.timeline} ${s.timeline_card_3}`}>
                <div className={s.timeline_tag_wrap}>
                  <span>онлаин</span>
                </div>
                <div className={s.timeline_card_img}>
                  <img
                    src="https://i.moscow/upload/lending/lct2024/dd7a40.png"
                    alt="no image"
                  />
                </div>
                <div className={s.timeline_card_border}>
                  <div className={s.timeline_card}>
                    <div className={s.timeline_card_data}>17 - 21 июня</div>
                    <h3 className={s.timeline_card_title}>
                      Техническая экспертиза
                    </h3>
                    <div className={s.timeline_card_num}>3</div>
                  </div>
                </div>
              </div>
              <div className={`${s.timeline} ${s.timeline_card_4}`}>
                <div className={s.timeline_tag_wrap}>
                  <span>онлаин</span>
                </div>
                <div className={s.timeline_card_img}>
                  <img
                    src="https://i.moscow/upload/lending/lct2024/e28dd6.png"
                    alt="no image"
                  />
                </div>
                <div className={s.timeline_card_border}>
                  <div className={s.timeline_card}>
                    <div className={s.timeline_card_data}>25 - 26 июня</div>
                    <h3 className={s.timeline_card_title}>Питч-сессии</h3>
                    <div className={s.timeline_card_num}>4</div>
                  </div>
                </div>
              </div>
              <div className={`${s.timeline} ${s.timeline_card_5}`}>
                <div className={s.timeline_tag_wrap}>
                  <span>онлаин</span>
                </div>
                <div
                  className={`${s.timeline_card_img} ${s.last_timeline_image}`}
                >
                  <img
                    src="https://i.moscow/upload/lending/lct2024/e28dd6.png"
                    alt="no image"
                  />
                </div>
                <div className={s.timeline_card_border}>
                  <div className={s.timeline_card}>
                    <div className={s.timeline_card_data}>28-29 июня</div>
                    <h3 className={s.timeline_card_title}>
                      Церемония награждения
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.container_iframe}>
        <div className={s.iframe_anner}>
          <div className={s.iframe_wrapper}>
            <h2 className={s.sd}>
              Фестиваль <br /> 28-29 июня
            </h2>
            <p className={s.div_descr}>
              Финал хакатона в формате двухдневного фестиваля в Москве
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskSection;
