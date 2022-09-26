import '../styles/componentStyles/SubHeaderStyles.css';

export default function SubHeader({text}: {text:string}) {
    return (
        <div className='subHeader'>
            <h2 className='subHeader_text'>{text}</h2>
        </div>
    )
}
