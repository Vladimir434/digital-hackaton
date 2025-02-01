/* eslint-disable react/prop-types */
import s from './card-for-Whom.module.css'
const CardForWhom = ({img,name, subTitle}) => {
  return (
    <div className={s.for_whom_card}>
      <div className={s.block_image}>
        <img style={{maxWidth:'24px',maxHeight:'24px'}} src={img} alt="" />
      </div>
      <div className={s.card_text}>
        <h2>{name}</h2>
        <h2>{subTitle}</h2>
      </div>
    </div>
  )
}

export default CardForWhom