import SubHeader from '../../components/SubHeader';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import '../../styles/pageStyles/FaqPageStyles.css';
import '../../styles/componentStyles/AccordionStyles.css';

export default function FaqPage() {
    return (
        <div className='faqPage page'>
            <SubHeader text='FAQ' />

            <div style={{marginTop: 20, padding: 5}}>
                <Accordion className="faq_accordionBody" allowZeroExpanded  allowMultipleExpanded>
                    <AccordionItem className="faq_mainAccordionSection">
                        <div>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button faq_accordionButton">
                                    Survival curves
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is this feature?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            This feature is an interactive tool that presents the
                                            survival curve for a given cancer and age of diagnosis.
                                        </p>
                                        <br />
                                        <p>
                                            Actual results from graphs may vary based on health of the
                                            individual like tissue grading and staging(in case of solid
                                            tumors), ECOG score, success of the proposed treatment in
                                            clinical trials, besides other factors. These represent
                                            typically observed survival rates as culled from the NCI's
                                            SEER program.
                                        </p>
                                        <br />
                                        <p>
                                            As medical research and technology advances further and the
                                            standard of living improves these are very likely to change.
                                            Numbers for these curves are for information purposes only.
                                            NO RESPONSIBILITY IS CLAIMED WHATSOEVER.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How are survival curves computed?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Currently, the values for a given age are projected from the
                                            survival rates presented for specified age ranges in the
                                            SEER Registry. Survival rates are presented up to 10 years
                                            from the time of diagnosis.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is the source of data for these survival curves?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            The source for these data is from the website of NCI's SEER
                                            program.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What type of survival curve is presented here?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Curves presented here are 'Relative Survival by Survival
                                            Time'.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Please explain 'Relative Survival by Suvival Time'?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            The survival curve presented here are termed as 'Relative
                                            Survival by Survival Time'. The link to NCI SEER's
                                            explaination of this term can be found <a rel="noreferrer" target="_blank" href="https://seer.cancer.gov/explorer/help.html#survival">here</a>
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Will more types of cancers be included in this feature?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Yes they will be. The current list is a representation of
                                            some cancers that are known and prevalent. Plans are to
                                            eventually include all listed cancers and possibly include
                                            more sub-stratified information based on other parameters
                                            like gender and ethnicities.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </AccordionItemPanel>
                        </div>
                    </AccordionItem>

                    <AccordionItem className="faq_mainAccordionSection">
                        <div>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button faq_accordionButton">
                                    Search
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is this tool?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            WebSeq is a curated search engine powered by Google Custom
                                            Search. Sites and sources are manually curated and checked
                                            so as to keep the results as relevant as possible.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What are tabs for?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            The tabs are for further refinement of the search results.
                                            The 'Literature' tab narrows down the results to show only
                                            relevant papers and biomedical literature from sources like
                                            Pubmed and others.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Can more sites be added for curation?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Yes, certainly! Please contact us for any other medically
                                            relevant sources that you feel should also be included. We
                                            will be glad to review it and add it to our list.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </AccordionItemPanel>
                        </div>
                    </AccordionItem>

                    <AccordionItem className="faq_mainAccordionSection">
                        <div>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button faq_accordionButton">
                                    Clinical Trials
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is this feature?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            This feature links the selected cancer on the initial page
                                            to Clinicaltrials.gov. Herein one is connected to different
                                            ongoing clinical trials from around the globe.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Can one change the search parameters?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Yes! You can include search parameters in the search box
                                            that is presented.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Can one use advanced searches?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Yes! The feature currently links directly to their site and
                                            hence all features that are available therin are made
                                            available.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </AccordionItemPanel>
                        </div>
                    </AccordionItem>

                    <AccordionItem className="faq_mainAccordionSection">
                        <div>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button faq_accordionButton">
                                    Approved Drugs(NCI)
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is this feature?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            This feature connects you to the NCI's webpage of drugs
                                            approved for specific types fo cancer.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Is this information current?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            These pages are updated by NCI when new cancer drugs are
                                            approved.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </AccordionItemPanel>
                        </div>
                    </AccordionItem>

                    <AccordionItem className="faq_mainAccordionSection">
                        <div>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button faq_accordionButton">
                                    Genes & More
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is this feature?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Genes & More provides you with more information about a gene
                                            and its variants. Currently, this feature connects you to
                                            ClinVar(from NCBI). In the future, this could be updated.
                                        </p>
                                        <br />
                                        <p>
                                            With the advent of whole genome sequencing techniques, this
                                            feature becomes especially useful as gene panel reports
                                            become available to everyone who gets their genome
                                            sequenced. As costs for sequencing come down further it's
                                            only time before every user needs to access services like
                                            these to determine the course of therapy using precision
                                            medicine.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is the input format?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            1. For Genes: enter the gene name in HUGO format, e.g. BCOR,
                                            NPM1
                                        </p>
                                        <br />
                                        <p>2. For variants: you may enter any of these values:</p>
                                        <br />
                                        <p>a) 'c' for a coding DNA sequence (like 'c.4009C{">"}T')</p>
                                        <p>b) 'g' for a genomic sequence (like g.119522C {">"} T)</p>
                                        <p>c) 'p' for a protein sequence (like p.Ser1397Tyr).</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Can I use gene aliases?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            So long as the input is used to get gene info. If you need
                                            to get variant info you need to use the HUGO format.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <div className="faq_note">
                                    <b>
                                        Note: This feature is likely to undergo more improvements and
                                        upgrades for use in precision medicine.
                                    </b>
                                </div>
                            </AccordionItemPanel>
                        </div>
                    </AccordionItem>

                    <AccordionItem className="faq_mainAccordionSection">
                        <div>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button faq_accordionButton">
                                    General
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Is this tool/site affiliated to other sources of data?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            NO. This site/tool is an independent source that collects,
                                            processes and presents relevant clinical information in
                                            regard to different cancers. Information provided is here
                                            for information purposes only. NO RESPONSIBILITY IS CLAIMED
                                            WHATSOEVER. Sites and sources used here are from prominently
                                            used information sources. These are likely to change and get
                                            updated as new features are incorporated.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Should I speak to my doctor/health care professional?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            YES! You should always speak with your doctor or health care
                                            professional for any further guidance. Content provided
                                            here is for information purposes only. NO RESPONSIBILITY IS
                                            CLAIMED WHATSOEVER.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className="faq_subAccordion">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Can I reach out to you for further suggestions and/or
                                            information?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className="faq_accordionContent">
                                        <p>
                                            Most certainly! Please feel free to reach us anytime and we
                                            will be glad to discuss further.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </AccordionItemPanel>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
