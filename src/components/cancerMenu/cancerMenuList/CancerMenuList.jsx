import '../../../style.css';
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { CancerMenuListData } from './CancerMenuListData';

export default function CancerMenuList() {
    return (
        <div className='cancerMenuList'>
            <Accordion style={{borderRadius: '10px'}} allowZeroExpanded  allowMultipleExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Cancer List
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    {CancerMenuListData.map((item) => {
                        if (item.group) {
                            return (
                                <AccordionItemPanel>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {item.name}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        {item.items.map((sub_item) => (
                                            <AccordionItemPanel 
                                                className='cancerMenuList_itemPanel' 
                                                key={sub_item.id}
                                            >
                                                <Link 
                                                    className='cancerMenuList_itemLink'
                                                    to={sub_item.path}
                                                >
                                                    {sub_item.name}
                                                </Link>
                                            </AccordionItemPanel>
                                        ))}
                                    </AccordionItem>
                                </AccordionItemPanel>
                            )
                        } else {
                            return (
                                <AccordionItemPanel
                                    className='cancerMenuList_itemPanel'
                                    key={item.id}
                                >
                                    <Link
                                        className='cancerMenuList_itemLink'
                                        to={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </AccordionItemPanel>
                            )
                        }
                    })}
                </AccordionItem>
            </Accordion>
        </div>
    )
}