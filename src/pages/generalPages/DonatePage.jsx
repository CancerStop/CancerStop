import SubHeader from '../../components/SubHeader';
import '../../style.css';

export default function DonatePage() {
    return (
        <div className='donatePage page'>
            <SubHeader text='Donate' />

            <iframe
                width='100%'
                height='2800'
                frameBorder='0'
                src='https://www.nfggive.com/guidestar/83-2805054'
            />
        </div>
    )
}
