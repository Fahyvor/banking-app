import { IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonToolbar } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'

const Transactions = () => {

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
    }
  return (
    <IonPage>
        <IonContent>
            <div className='transaction_container p-4 bg-slate-50'>
                <div className='transaction_header mt-4'>
                    <div className='back_button' onClick={previousPage}>
                        <IonIcon icon={arrowBackOutline}></IonIcon>
                    </div>

                    <div className='header_and_year flex gap-3 items-baseline mt-3'>
                        <h2 className='text-2xl font-bold text-gray-600'>
                            Transactions</h2>
                        <h4>2021</h4>
                    </div>

                    <div className='month_toggle flex gap-4 mt-5'>
                        <p>JAN</p>
                        <p>FEB</p>
                        <p>MAR</p>
                        <p>APR</p>
                        <p>MAY</p>
                    </div>
                </div>

                <div className='transaction_cards mt-8 flex
                flex-col gap-6 pb-5'>
                    <div className='transaction_card mx-3 p-4
                    bg-white rounded-2xl flex items-center
                    justify-between'>
                        <div className='single_card_left'>
                            <h2 className='font-bold'>Shopping</h2>
                            <p>Tue 12.05.2021</p>
                        </div>

                        <div className='single_card-right'>
                            <h2 className='font-bold'>$29.90</h2>
                        </div>
                    </div>

                    <div className='transaction_card mx-3 p-4
                    bg-white rounded-2xl flex items-center
                    justify-between'>
                        <div className='single_card_left'>
                            <h2 className='font-bold'>Movie Ticket</h2>
                            <p>Tue 12.05.2021</p>
                        </div>

                        <div className='single_card-right'>
                            <h2 className='font-bold'>$29.90</h2>
                        </div>
                    </div>

                    <div className='transaction_card mx-3 p-4
                    bg-white rounded-2xl flex items-center
                    justify-between'>
                        <div className='single_card_left'>
                            <h2 className='font-bold'>Amazon</h2>
                            <p>Tue 12.05.2021</p>
                        </div>

                        <div className='single_card-right'>
                            <h2 className='font-bold'>$29.90</h2>
                        </div>
                    </div>

                    <div className='transaction_card mx-3 p-4
                    bg-white rounded-2xl flex items-center
                    justify-between'>
                        <div className='single_card_left'>
                            <h2 className='font-bold'>Udemy</h2>
                            <p>Tue 12.05.2021</p>
                        </div>

                        <div className='single_card-right'>
                            <h2 className='font-bold'>$29.90</h2>
                        </div>
                    </div>

                    <div className='transaction_card mx-3 p-4
                    bg-white rounded-2xl flex items-center
                    justify-between'>
                        <div className='single_card_left'>
                            <h2 className='font-bold'>Books</h2>
                            <p>Tue 12.05.2021</p>
                        </div>

                        <div className='single_card-right'>
                            <h2 className='font-bold'>$29.90</h2>
                        </div>
                    </div>

                    <div className='transaction_card mx-3 p-4
                    bg-white rounded-2xl flex items-center
                    justify-between'>
                        <div className='single_card_left'>
                            <h2 className='font-bold'>Spotify</h2>
                            <p>Tue 12.05.2021</p>
                        </div>

                        <div className='single_card-right'>
                            <h2 className='font-bold'>$29.90</h2>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Transactions