import '../../styles/pageStyles/ContactUsPageStyles.css';
import SubHeader from '../../components/SubHeader';

export default function ContactUsPage() {
    return (
        <div className='contactUsPage'>
            <SubHeader text='Contact Us' />
            <iframe
                title='Contact Us Form'
                width='100%'
                height='2000'
                frameBorder='0'
                src='https://docs.google.com/forms/d/e/1FAIpQLSdo_Jg0tnQhWFjiMGHWVXOqzeoKwHayl7_a6Ayn6nTDGzP0Ug/viewform?embedded=true'
            />
        </div>
    )
}
