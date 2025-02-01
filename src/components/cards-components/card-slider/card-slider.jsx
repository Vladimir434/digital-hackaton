/* eslint-disable react/prop-types */
import s from './card-style.module.scss'

const CardSlider = ({text,textTwo,img}) => {
  return (
    <div className={s.elem}>
      <div className={s.card__image}>
        <img className={s.image} src={img} alt="no image" />
      </div>
      <div className={s.elem__text}>
        <a className={s.text} href="#" >
          {text} 
          <br />
          {textTwo}
        </a>
      </div>
    </div>
  )
}

export default CardSlider