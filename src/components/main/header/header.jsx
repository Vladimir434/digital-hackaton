import { useEffect, useState } from "react";
import s from "./header.module.css";
import Search from "../../../assets/Vector.svg";
import IconUser from "../../../assets/user.svg";

const Header = () => {
  const [activeTab, setActiveTab] = useState("organization");
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setHidden(false);
      } else if (currentScrollY > scrollY) {
        setHidden(true);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div style={{
      position: "relative",
      top: hidden ? "-100px" : "0", 
      transition: "top 0.8s ease", 
      width: "100%",
      zIndex: 50,
    }} className={s.body}>
      <header className={s.header}>
        <div className={s.header_wrapper}>
          <div className={s.header_logo}>
            <div className={s.header_logo_image}>
              <img
              style={{maxWidth:'98px',maxHeight:"22px"}}
                src="https://i.moscow/upload/lending/lct2024/4a7c10.svg"
                alt="no image"
              />
            </div>
          </div>
          <div className={s.container_menu_burger_icon_user_login}>
            <h4>Войти</h4>
            <img style={{maxWidth:'24px',maxHeight:'24px',borderRadius:'50%'}} src="https://as2.ftcdn.net/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" />
            <div className={s.container_menu}>
              <div className={s.item_menu}></div>
              <div className={s.item_menu}></div>
              <div className={s.item_menu}></div>
            </div>
          </div>
          <div className={s.header_cont}>
            <div className={s.header_menu}>
              <div
                className={`${s.header_menu_1} ${
                  activeTab === "organization" ? s.active_tab : ""
                }`}
                onClick={() => setActiveTab("organization")}
              >
                Организациям и ИП
                {activeTab === "organization" && (
                  <span className={s.active_line}></span>
                )}
              </div>
              <div
                style={{
                  width: "2px",
                  height: "12px",
                  backgroundColor: "#fff",
                }}
              ></div>

              <div
                className={`${s.header_menu_2} ${
                  activeTab === "individual" ? s.active_tab : ""
                }`}
                onClick={() => setActiveTab("individual")}
              >
                Физическим лицам
                {activeTab === "individual" && (
                  <span className={s.active_line}></span>
                )}
              </div>
            </div>

            <div className={s.header_buttons}>
              <button className={s.button_1}>Кластер «Ломоносова»</button>
              <div>
                <button className={s.button_2}>Авторизация</button>
                <img src={IconUser} alt="" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={s.container}>
        <div className={s.container_wrapper}>
          <div className={s.container_blocks}>
            {activeTab === "organization" ? (
              <>
                <h3 className={s.organization_block}>Инвестиции</h3>
                <h3 className={s.organization_block}>Спрос и кооперация</h3>
                <h3 className={s.organization_block}>Поддержка стартапов</h3>
                <h3 className={s.organization_block}>Гранты и кредиты</h3>
                <h3 className={s.organization_block}>Инфраструктура</h3>
                <h3 className={s.organization_block}>Патентование</h3>
                <h3 className={s.organization_block}>Проекты для мегаполиса</h3>
                <h3 className={s.organization_block}>О Кластере</h3>
              </>
            ) : (
              <>
                <h3 className={s.organization_block}>Лидеры цифровой трансформации</h3>
                <h3 className={s.organization_block}>Академия инноваторов</h3>
                <h3 className={s.organization_block}>Новатор Москвы</h3>
                <h3 className={s.organization_block}>Обучение</h3>
              </>
            )}
          </div>
          <img src={Search} alt="no image" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default Header;
