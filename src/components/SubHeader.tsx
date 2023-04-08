import '../styles/componentStyles/SubHeaderStyles.css';

export default function SubHeader({children = null}:{children: JSX.Element | string | undefined | null;}) {
    return (
        <div className='subHeader'>
            <h2 className='subHeader_text'>{children}</h2>
        </div>
    )
}
