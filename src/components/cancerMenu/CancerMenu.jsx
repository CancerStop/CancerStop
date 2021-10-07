import '../../style.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// import '../../Accordion.css';
import { CancerMenuData } from './CancerMenuData';
import { Link } from 'react-router-dom';
import '../../style.css';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function CancerMenu() {
    return (
        <div className='cancerMenu'>
            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Choose a Cancer
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    {CancerMenuData.map((item) => (
                        <AccordionItemPanel
                            className='cancerMenu_itemPanel'
                            key={item.id}
                        >
                            <Link
                                className='cancerMenu_itemLink'
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        </AccordionItemPanel>
                    ))}
                </AccordionItem>
            </Accordion>
        </div>
    )
}