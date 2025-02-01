import Header from "./header/header";
import Telegram from "../../assets/menu-telegram..svg";
import TitleMainPage from "./title-main-page/title-main-page";
import s from "./main-page.module.css";
import ForWhom from "./for-whom/for-whom";
import TaskSection from "./task-section/task-section";
import LastSection from "./last-section/last-section";
import HomeSvg from "../../assets/home.svg";
import RtophySvg from "../../assets/trophy.svg";
import UserSvg from "../../assets/users.svg";
import TaskSvg from "../../assets/task-square.svg";
import NoteTextSvg from "../../assets/note-text.svg";
import StorySvg from "../../assets/story.svg";
import QustionSvg from "../../assets/question-circle.svg";
const MainPage = () => {
  return (
    <div className={s.maun}>
      <div className={s.main_wrapper}>
        <Header />
        <TitleMainPage />
        <ForWhom />
      </div>
      <TaskSection />
      <LastSection />
      <div className={s.menu}>
        <div className={s.menu_wrap_1}>
          <div className={s.menu_wrap_card_1}>
            <a href="#">
              <h2>RU</h2>
              <div className={s.menu_wrap_card_1_btn}></div>
              <h2>EN</h2>
            </a>
            <a href="#">EN</a>
          </div>
          <div className={s.menu_wrap_card_2}>
            <div className={s.menu_wrap_2_block_elems}>
              <a href="#" className={s.menu_wrap_2_elem}>
                <div className={s.elem_block}>
                  <h4>Главная</h4>
                  <img
                    style={{ maxWidth: "18px", maxHeight: "18px" }}
                    src={HomeSvg}
                    alt="no image"
                  />
                </div>
              </a>
              <div className={s.spase}></div>
              <a href="#" className={s.menu_wrap_2_elem}>
                <div className={s.elem_block}>
                  <h4>Призовой фонд</h4>
                  <img
                    style={{ maxWidth: "18px", maxHeight: "18px" }}
                    src={RtophySvg}
                    alt="no image"
                  />
                </div>
              </a>
              <div className={s.spase}></div>
              <a href="#" className={s.menu_wrap_2_elem}>
                <div className={s.elem_block}>
                  <h4>Для кого</h4>
                  <img
                    style={{ maxWidth: "18px", maxHeight: "18px" }}
                    src={UserSvg}
                    alt="no image"
                  />
                </div>
              </a>
              <div className={s.spase}></div>
              <a href="#" className={s.menu_wrap_2_elem}>
                <div className={s.elem_block}>
                  <h4>Задачи</h4>
                  <img
                    style={{ maxWidth: "18px", maxHeight: "18px" }}
                    src={NoteTextSvg}
                    alt="no image"
                  />
                </div>
              </a>
              <div className={s.spase}></div>
              <a href="#" className={s.menu_wrap_2_elem}>
                <div className={s.elem_block}>
                  <h4>Таймлаин</h4>
                  <img
                    style={{ maxWidth: "18px", maxHeight: "18px" }}
                    src={TaskSvg}
                    alt="no image"
                  />
                </div>
              </a>
              <div className={s.spase}></div>
              <a href="#" className={s.menu_wrap_2_elem}>
                <div className={s.elem_block}>
                  <h4>История успеха</h4>
                  <img
                    style={{ maxWidth: "18px", maxHeight: "18px" }}
                    src={StorySvg}
                    alt="no image"
                  />
                </div>
              </a>
              <div className={s.spase}></div>
              <a href="#" className={s.menu_wrap_2_elem}>
                <div className={s.elem_block}>
                  <h4>История успеха</h4>
                  <img
                    style={{ maxWidth: "18px", maxHeight: "18px" }}
                    src={QustionSvg}
                    alt="no image"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className={s.menu_wrap_card_3}>
            <a href="#">
              <h4>Тедеграм</h4>
                <img style={{ maxWidth: "24px" }} src={Telegram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
