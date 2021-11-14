import '../styles/componentStyles/FooterStyles.css';

export default function Footer() {
    return (
        <div className='footer'>
            <p className="footer_text">
                Content provided is for information and research purposes only.
                Always consult with your healthcare provider and healthcare professional. No responsibility is claimed whatsoever.
                Please refer to the FAQ section for further information.
            </p>

            <p className="footer_text">
                © 2021 Queromatics. All Rights Reserved | 
                Developed by
                <a target='_blank' rel="noreferrer" href='https://github.com/BalaM314'> Balaadithya Muralitharan</a>,
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/vedanth-ramji-191530215/'> Vedanth Ramji</a>,
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ganeshramjanakiraman/'> Ganesh Ram</a> and
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/natarajanganesan/'> Dr. Natarajan Ganesan</a>
            </p>
        </div>
    )
}
