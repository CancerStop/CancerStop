import '../../styles/pageStyles/SearchPageStyles.css';
import SubHeader from "../../components/SubHeader";

export default function SearchPage() {
    return (
        <div className='searchPage'>
            <SubHeader text='Search' />
            {(() => {
                /* I'm not sure if this is the best way to do this */
                const script = document.createElement("script");
                script.src = "https://cse.google.com/cse.js?cx=004715292727045167679:c87ei5ji6we";
                script.async = true;
            
                document.body.appendChild(script);
            })()}
            <div className='gcse-search'>
                Loading...
            </div>
        </div>
    )
}
