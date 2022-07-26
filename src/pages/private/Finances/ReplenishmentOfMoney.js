import React, {useState} from 'react'
import { Formik, Form, Field } from 'formik'
import { Row, Col, Button, FormGroup } from 'reactstrap'
import * as yup from 'yup'
import { api } from '../../../api'
import cl from './Finance.module.css';

import dollarImg from './../../../scss/media/dollar-svgrepo-com.svg'
import roubleImg from './../../../scss/media/rouble-svgrepo-com.svg'
import euroImg from './../../../scss/media/euro-sign-svgrepo-com.svg'
import btcImg from './../../../scss/media/btc-svgrepo-com.svg'
import usdtImg from './../../../scss/media/usdt-svgrepo-com.svg'
import ethImg from './../../../scss/media/eth-svgrepo-com.svg'
import bchImg from './../../../scss/media/bch-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95105.svg'
import ltcImg from './../../../scss/media/ltc-alt-svgrepo-com.svg'
import dashImg from './../../../scss/media/dash-svgrepo-com.svg'
import xrpImg from './../../../scss/media/ripple-svgrepo-com.svg'
import dogeImg from './../../../scss/media/doge-alt-svgrepo-com.svg'
import trxImg from './../../../scss/media/trx-logo.svg'
import MyModal from 'src/components/modal/MyModal';



import Input from '../../../components/Input'
import ReplenishmentOfMoneyItem from './ReplenishmentOfMoneyItem'

const initialValues = { amount: '' }

const validationSchema = yup.object({
  amount: yup
    .number()
    .typeError('Сумма должно быть числом')
    .positive('Сумма должна быть положительной')
    .required('Необходимо заполнить это поле'),
})

function ReplenishmentOfMoney() {
  const submitCreatePayForm = ({ amount }) => {
    api
      .createPay({ amount: Number(amount) })
      .then((response) => {
        if (response.url) {
          window.location.replace(response.url)
        }
      })
      .catch(() => {})
  }
  

  const submitCreatePayeerPayForm = ({ amount }) => {
    api
      .createPayeerPay({ amount: Number(amount) })
      .then((response) => {
        if (response.url) {
          window.location.replace(response.url)
        }
      })
      .catch(() => {})
  }

  const infoData = [{nameCash: 'usd', sign: dollarImg,count: '0.00', classes: cl.dollarItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'rub', sign: roubleImg,count: '0.00', classes: cl.rubItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'eur', sign: euroImg,count: '0.00', classes: cl.euroItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'btc', sign: btcImg,count: '0.00000000', classes: cl.btcItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'usdt', sign: usdtImg,count: '0.00', classes: cl.usdtItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'eth', sign: ethImg,count: '0.00000000', classes: cl.ethItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'bch', sign: btcImg,count: '0.00000000', classes: cl.bchItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'ltc', sign: ltcImg,count: '0.00000000', classes: cl.ltcItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'dash', sign: dogeImg,count: '0.00000000', classes: cl.dashItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'xrp', sign:xrpImg,count: '0.000000', classes: cl.xrpItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'doge', sign: dogeImg,count: '0.00000000', classes: cl.dageItem, roubleCount: '0.00', urlOut: '', urlIn: ''},
  {nameCash: 'trx', sign: trxImg,count: '0.000000', classes: cl.trxItem, roubleCount: '0.00', urlOut: '', urlIn: ''}]
  const [modal, setModal] = useState(false)
 

  return (
    <div className={cl.transBlock}>
      {/* <div className={cl.transCard}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitCreatePayForm}
        >
          {({ isValid, dirty }) => (
            <Form className={cl.transForm}>
              <div className={cl.transCardItem}>
                <div className={cl.transImg}>
                  <a
                      className="pay-image"
                      href="https://www.free-kassa.ru/"
                      rel="noreferrer"
                      target="_blank"
                    >
                    <img src="https://www.free-kassa.ru/img/fk_btn/23.png" alt="Free-Kassa" />
                  </a>
                </div>
               
                <FormGroup>
                  <Field type="text" name="amount" placeholder="Сумма" component={Input} />
                </FormGroup>
                <div className={cl.btnBlock}>
                  <Button type="submit" disabled={!(isValid && dirty)} className='fin-btn' block>
                    Подтвердить
                  </Button>
                </div>
              </div>
              
            </Form>
          )}
        </Formik>
      </div>
      <div className={cl.transCard}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitCreatePayeerPayForm}
        >
          {({ isValid, dirty }) => (
            <Form className={cl.transForm}>
              <div className={cl.transCardItem}>
                <div className={cl.transImg}>
                  <img src={payeerLogo} alt="Payeer" />
                </div>
                <div className={cl.transFrom}>
                  <Field name="amount" type="text" placeholder="Сумма"  component={Input} />
                </div>
                <div className={cl.btnBlock}>
                <Button type="submit" disabled={!(isValid && dirty)} className='fin-btn'>
                  Подтвердить
                </Button>
              </div>
              </div>
              
            </Form>
          )}
        </Formik>
      </div> */}
      {infoData.map(e=>
        <ReplenishmentOfMoneyItem infoData={e} setActiveModal={setModal} activeModal={modal}/>
      )}
      <MyModal  title={'Укажите сумму'} setVisible={setModal} visible={modal}/>
    </div>
  )
}

export default ReplenishmentOfMoney
