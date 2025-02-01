/* eslint-disable react/prop-types */
import s from './task-card.module.css'

const TaskCard = ({num,name,title,subTitle,img}) => {
  return (
    <div className={s.card_wrapper}>
      <h3 className={s.number}>{num}</h3>
      <div className={s.opacity_image}>
      <img src="https://i.moscow/upload/lending/lct2024/205138.png" alt="no image" />
      </div>
    <div className={s.card_item}>
      <div className={s.buttons}>
        <div className={s.button_1}>
        <span></span>
        <h4>
        {name}
        </h4>
        </div>
        <div className={s.net}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <h2 className={s.title}>{title}</h2>
      <div className={s.subTitle_block}>
        <div className={s.subTitle_img_block}>
        <img src={img} alt="no image" />
        </div>
        <h2 className={s.subTitle}>{subTitle}</h2>
      </div>
      <button className={s.details}>
          Подровнее
      </button>
    </div>
    </div>
  )
}

export default TaskCard