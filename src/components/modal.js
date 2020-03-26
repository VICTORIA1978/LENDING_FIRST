import React from 'react'
import { Link } from 'gatsby'


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
            <div
              className={`pulse_button_open navbar-burger  text-center${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >gsdg
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
           
            className={`modal-backdrop ${this.state.navBarActiveClass}`}
          >
                 <div className="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Условия сотрудничества</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span  className={`pulse_button_open navbar-burger  ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}>х</span>
        </button>
      </div>
      <div class="modal-body">
     
        <p>1) Какие условия сотрудничества?</p>

        <p>Мы предусматриваем несколько вариантов сотрудничества:</p>
        <p>1. Оптовый покупатель: 
        </p>
        <p>Свободные, ни к чему Вас не обязывающие отношения, начиная с момента первого оптового заказа по оптовым ценам. Такой вариант действен до момента, когда другой  клиент из вашего города проявит желание стать нашим эксклюзивным партнёром. В таком случае, Вы сможете покупать наши платья через эксклюзивного представителя в вашем городе.
        </p>
        <p> Эксклюзивный партнер.
        </p>
        <p>Вы единственный официальный представитель ТМ VictoriaSimak в Вашем городе.
        </p>
        <p>Вы будете размещены в разделе нашего сайта "Наши представительства".

Мы перенаправляем всех клиентов из Вашего города к Вам в салон.

Мы обеспечиваем Вас рекламной продукцией.

   Первый заказ эксклюзивного партнёра должен быть не меньше 10 платьев. 

Как оформить заказ?

Заказ можно оформлять в свободной форме, как вам удобно: на нашу электронную почту, позвонить по телефону нашему менеджеру, отправить сообщение через Viber или Whatsapp. Главное - точно и чётко указать номер модели, цвет, размер и количество.

<p>Почему я не вижу цены?</p>

<p>Цены доступны только тем пользователям, которые заполнили все необходимые данные в своём профиле. Заполните все поля в профиле, и наш менеджер предоставит Вам доступ к ценам в ближайшее время.

Какое минимальное количество платьев можно заказать?

Минимальный заказ свадебных платьев - 5 штук.

 Какие сроки выполнения заказа?

Сроки изготовления зависят от нагрузки на производстве , а также от количества изделий в Вашем заказе. Более детальную информацию предоставит наш менеджер. Если платья нужны Вам как можно быстрее - у нас есть услуга срочного пошива за дополнительную плату. Мы стараемся всегда работать оперативно и отдавать заказы в срок.

Возможен ли пошив по индивидуальным меркам, или с изменениями?

Возможен, все детали обсуждаются индивидуально с администратором.
 
Получу ли я качественный продукт?

Мы уверены, что Вы будете довольны нашей продукцией. Мы используем только лучшие материалы, и наши платья будут выглядеть  в точности как на фото. А так же за много лет в свадебной индустрии мы обрели множество постоянных клиентов, которые оставляют только положительные отзывы.</p>
</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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