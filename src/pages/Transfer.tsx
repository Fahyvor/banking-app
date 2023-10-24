import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import geechi from '../assets/geechi.png'
import profileDot from '../assets/profile.png'
import addPayee from '../assets/addPayee.png'
import paypal from '../assets/payPal.png'
import stripe from '../assets/stripe.png'
import kay from '../assets/kay.png'
import n26 from '../assets/n26.png'
import ES from '../assets/ES.png'
import EA from '../assets/EA.png'
import CW from '../assets/CW.png'
import SB from '../assets/SB.png'
import OW from '../assets/OW.png'


const Transfer = () => {
  return (
    <IonPage>
        <IonContent>
            <div className='transfer_container bg-gray-100'>
                <div className='transfer_header flex justify-between px-6 pt-8
                items-center'>
                    <div className='header_image'>
                        <div className='details_preview_image'>
                        <img src={profileDot} className='absolute ml-12'/>
                        <img src={geechi} />
                        </div>
                    </div>

                    <div className='header_writeup'>
                        <h2 className='font-bold
                        text-2xl'>Transfer</h2>
                    </div>

                    <div className='add_icon'>
                        <img src={addPayee} />
                    </div>
                </div>

                <div className='transfer_payment_icons flex px-3
                py-8 justify-between'>
                    <div className='payment_icon flex bg-white rounded-2xl'>
                        <img src={paypal} />
                    </div>

                    <div className='payment_icon flex bg-white rounded-2xl'>
                        <img src={stripe} />
                    </div>

                    <div className='payment_icon flex bg-white rounded-2xl p-4
                    flex'>
                        <img src={kay} className='object-cover'/>
                    </div>

                    <div className='payment_icon flex bg-white rounded-2xl p-4'>
                        <img src={n26} className='object-cover'/>
                    </div>
                </div>

                <div className='transaction_details mx-5 bg-white p-4
                rounded-2xl mt-5 flex gap-4'>
                    <div className='user_profile'>
                        <img src={ES} />
                    </div>

                    <div className='user_name_and_details'>
                        <h2>Evelyn Smith</h2>
                        <p>AW BANK UNI 234-46589-000</p>
                    </div>
                </div>

                <div className='transaction_details mx-5 bg-white p-4
                rounded-2xl mt-5 flex gap-4'>
                    <div className='user_profile'>
                        <img src={EA} />
                    </div>

                    <div className='user_name_and_details'>
                        <h2>Emily Atkinson</h2>
                        <p>AW BANK UNI 234-46589-000</p>
                    </div>
                </div>

                <div className='transaction_details mx-5 bg-white p-4
                rounded-2xl mt-5 flex gap-4'>
                    <div className='user_profile'>
                        <img src={OW} />
                    </div>

                    <div className='user_name_and_details'>
                        <h2>Oliver Wilson</h2>
                        <p>AW BANK UNI 234-46589-000</p>
                    </div>
                </div>

                <div className='transaction_details mx-5 bg-white p-4
                rounded-2xl mt-5 flex gap-4'>
                    <div className='user_profile'>
                        <img src={SB} />
                    </div>

                    <div className='user_name_and_details'>
                        <h2>Sophie Baker</h2>
                        <p>AW BANK UNI 234-46589-000</p>
                    </div>
                </div>

                <div className='transaction_details mx-5 bg-white p-4
                rounded-2xl mt-5 flex gap-4'>
                    <div className='user_profile'>
                        <img src={CW} />
                    </div>

                    <div className='user_name_and_details'>
                        <h2>Charlie Wilson</h2>
                        <p>AW BANK UNI 234-46589-000</p>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Transfer