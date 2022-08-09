import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../styles/componentStyles/AccordionStyles.css';
import '../../styles/componentStyles/cancerMenuStyles/CancerMenuListStyles.css';
import { CancerMenuListData } from '../../data/CancerMenuListData';
import { cancerData } from "../../data/CancerData.ts";

function panel(cancer, index){
    return <AccordionItemPanel
                className='cancerMenuList_itemPanel'
                key={index}
            >
                <Link
                    className='cancerMenuList_itemLink'
                    to={cancer.url}
                >
                    {cancer.name}
                </Link>
            </AccordionItemPanel>;
}

export default function CancerMenuList() {
    return (
        <div className='cancerMenuList'>
            <Accordion style={{borderRadius: '10px'}} allowZeroExpanded allowMultipleExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Cancer List
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    {CancerMenuListData.map((item, index) =>
                        typeof item == "object" ?
                            <AccordionItemPanel key={index}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {item.name}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    {item.items.map((cancer_id, index) => panel(cancerData[cancer_id], index))}
                                </AccordionItem>
                            </AccordionItemPanel>
                        :
                            panel(cancerData[item], index)
                    )}
                </AccordionItem>
            </Accordion>
        </div>
    )
}
