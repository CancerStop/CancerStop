import '../../style.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
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
                            {/* <input
                                name="search"
                                id="CancerMenuSearchBox"
                                type="text"
                                placeholder="Search here..."
                                value={window.location.search?.split("?search=")?.[1] ?? ""}
                                style={{"margin-left": "15%"}}
                                onChange={() => {
                                    window.location.search = "?search=" + document.getElementById("CancerMenuSearchBox")?.value;
                                }}
                            /> */}
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