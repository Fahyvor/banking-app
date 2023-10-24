import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import geechi from '../assets/geechi.png'
import profileDot from '../assets/profile.png'


const Transfer = () => {
  return (
    <IonPage>
        <IonContent>
            <div className='transfer_container bg-gray-100'>
                <div className='transfer_header flex justify-between px-6 pt-5
                items-center'>
                    <div className='header_image'>
                        <div className='details_preview_image'>
                        <img src={profileDot} className='absolute ml-12'/>
                        <img src={geechi} />
                        </div>
                    </div>

                    <div className='header_writeup'>
                        <h2>Transfer</h2>
                    </div>

                    <div className='add_icon'>

                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Transfer