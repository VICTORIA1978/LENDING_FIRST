import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Forme from './form'
const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is_active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand m-0">
           
            {/* Hamburger menu */}
            <ScrollAnimation animateIn="rubberBand"> <div
           
              className={`pulse_button_open navbar-burger  d-flex align-items-center justify-content-center${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            ><span style={{fontWeight:'100'}} >ПОДРОБНЕЙ</span>
              
            </div> </ScrollAnimation>
          
          </div>
          <div
           
            className={`modal-backdrop ${this.state.navBarActiveClass}`}
          >
                 <div className="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Условия сотрудничества</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span  className={`btn btn-secondary   ${this.state.navBarActiveClass}`}
              type="button"
              data-dismiss="modal"
              onClick={() => this.toggleHamburger()}>close</span>
        </button>
      </div>
      <div class="modal-body">
     
        <p><strong style={{fontWeight:'400'}}>Мы очень рады, что вы решили стать нашим партнером.
Какие условия сотрудничества?</strong>
</p>

        <p><strong style={{fontWeight:'400'}}>1. Мы предусматриваем несколько вариантов сотрудничества:</strong></p>
        <p><strong style={{fontWeight:'400'}}>1.1 Оптовый покупатель: </strong>
        </p>
        <ul>
        <li style={{fontWeight:'100'}}>свободные, ни к чему Вас не обязывающие отношения, начиная с момента первого оптового заказа по оптовым ценам. Такой вариант действен до момента, когда другой  клиент из вашего города проявит желание стать нашим эксклюзивным партнёром. В таком случае, Вы сможете покупать наши платья через эксклюзивного представителя в вашем городе.
        </li></ul>
        <p><strong style={{fontWeight:'400'}}>1.2  Эксклюзивный партнер.</strong>
        </p>
        <ul>
        <li style={{fontWeight:'100'}}>вы единственный официальный представитель ТМ VictoriaSimak в Вашем регионе.
        </li>
        <li style={{fontWeight:'100'}}>вы будете размещены в разделе нашего сайта "Наши представительства".
        </li>
        <li style={{fontWeight:'100'}}>мы перенаправляем всех клиентов из Вашего города к Вам в салон.
        </li>
        <li style={{fontWeight:'100'}}>мы обеспечиваем Вас рекламной продукцией.
        </li>
        <li style={{fontWeight:'100'}}>
   первый заказ эксклюзивного партнёра должен быть не меньше 10 платьев. 
        </li>
        
        </ul>
        <p><strong style={{fontWeight:'400'}}>2. Как оформить заказ?</strong>
        </p>
        <ul>
        <li style={{fontWeight:'100'}}>заказ можно оформлять в свободной форме, как вам удобно: на нашу электронную почту, позвонить по телефону нашему менеджеру, отправить сообщение через Viber или Whatsapp. Главное - точно и чётко указать номер модели, цвет, размер и количество.
        </li></ul>
        <p><strong style={{fontWeight:'400'}}>3. Какое минимальное количество платьев можно заказать?</strong>
        </p>
        <ul>
        <li style={{fontWeight:'100'}}>минимальный заказ свадебных платьев - 5 штук.
        </li></ul>
        <p><strong style={{fontWeight:'400'}}>4. Какие сроки выполнения заказа?</strong>
        </p>
        <ul>
        <li style={{fontWeight:'100'}}>сроки изготовления зависят от нагрузки на производстве , а также от количества изделий в Вашем заказе. Более детальную информацию предоставит наш менеджер. Если платья нужны Вам как можно быстрее - у нас есть услуга срочного пошива за дополнительную плату. Мы стараемся всегда работать оперативно и отдавать заказы в срок.
        </li></ul>
        <p><strong style={{fontWeight:'400'}}>5. Возможен ли пошив по индивидуальным меркам, или с изменениями?</strong>
        </p>
        <ul>
        <li style={{fontWeight:'100'}}>возможен, все детали обсуждаются индивидуально с администратором.
        </li></ul>
        <p><strong style={{fontWeight:'400'}}>
6. Получу ли я качественный продукт?</strong>
        </p>
        <ul>
        <li style={{fontWeight:'100'}}>мы уверены, что Вы будете довольны нашей продукцией. Мы используем только лучшие материалы, и наши платья будут выглядеть  в точности как на фото. А так же за много лет в свадебной индустрии мы обрели множество постоянных клиентов, которые оставляют только положительные отзывы.
        </li></ul>
      </div>
      <div class="modal-footer p-0 bg-secondary text-white">
    <Forme></Forme>
      </div>
    </div>
            </div>
          
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar