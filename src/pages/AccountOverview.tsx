import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './accountoverview.css'
import bg1 from '../assets/bg1.png'
import bg from '../assets/bg.png'
import geechi from '../assets/geechi.png'
import profileDot from '../assets/profile.png'

const AccountOverview = () => {
  return (
    <IonPage>
        <IonContent>
            <div className='account-overview bg-slate-50'>
              <div className='absolute_images absolute'>
                <img src={bg1} className='ml-72'/>
                <img src={bg} className='mt-20'/>
              </div>
                <div className='account_details_preview pt-20
                pl-6 flex items-center gap-4'>
                  <div className='details_preview_image'>
                    <img src={profileDot} className='absolute ml-12'/>
                    <img src={geechi} />
                  </div>

                  <div className='details_preview_text flex flex-col gap-2'>
                    <h5>Good morning</h5>
                    <h2 className='font-bold text-2xl'>GEECHI</h2>
                  </div>
                </div>

                <div className='account_balance m-8
                truncate rounded-2xl'>
                  <div className='account_balance_upper z-10
                  p-4'>
                    <h6>Current Balance</h6>
                    <h1 className='font-bold
                    text-2xl'>$12567.89</h1>
                  </div>

                  <div className='account_balance_lower p-4
                  text-white'>
                    <p>3452 1235 7894 1678</p>
                    <p>05/2025</p>
                  </div>
                </div>

                <div className='home_transactions flex flex-col
                gap-6'>
                  <h2 className='text-gray-700 font-bold
                  text-xl ml-8 pb-4'>LAST TRANSACTIONS</h2>

                  <div className='transaction flex items-center
                  bg-white p-3  px-6 justify-between
                  rounded-lg mx-5'>
                    <div>
                      <h3 className='font-bold'>Shopping</h3>
                      <p>Tue 12.05.2021</p>
                    </div>

                    <div className='amount'>
                      <h3 className='font-bold'>$29.90</h3>
                    </div>
                  </div>

                  <div className='transaction flex items-center
                  bg-white p-3  px-6 justify-between
                  rounded-lg mx-5'>
                    <div>
                      <h3 className='font-bold'>Shopping</h3>
                      <p>Tue 12.05.2021</p>
                    </div>

                    <div className='amount'>
                      <h3 className='font-bold'>$29.90</h3>
                    </div>
                  </div>

                  <div className='transaction flex items-center
                  bg-white p-3  px-6 justify-between
                  rounded-lg mx-5'>
                    <div>
                      <h3 className='font-bold'>Shopping</h3>
                      <p>Tue 12.05.2021</p>
                    </div>

                    <div className='amount'>
                      <h3 className='font-bold'>$29.90</h3>
                    </div>
                  </div>

                  <div className='transaction flex items-center
                  bg-white p-3  px-6 justify-between
                  rounded-lg mx-5'>
                    <div>
                      <h3 className='font-bold'>Shopping</h3>
                      <p>Tue 12.05.2021</p>
                    </div>

                    <div className='amount'>
                      <h3 className='font-bold'>$29.90</h3>
                    </div>
                  </div>

                  <div className='transaction flex items-center
                  bg-white p-3  px-6 justify-between
                  rounded-lg mx-5'>
                    <div>
                      <h3 className='font-bold'>Shopping</h3>
                      <p>Tue 12.05.2021</p>
                    </div>

                    <div className='amount'>
                      <h3 className='font-bold'>$29.90</h3>
                    </div>
                  </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default AccountOverview