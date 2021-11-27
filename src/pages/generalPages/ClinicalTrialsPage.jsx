import SubHeader from '../../components/SubHeader';

export default function ClinicalTrialsPage() {
    return (
        <div className='clinicalTrialsPage page'>
            <SubHeader text='Clinical Trials' />

            <iframe
                title='Clinical Trials'
                width='90%'
								height='800'
                src='https://www.clinicaltrials.gov/ct2/home'
								alt="Loading..."
								style={{marginLeft: "5%", marginRight: "5%", border: "2px solid black"}}
            />
        </div>
    )
}
