import Accordion from "./Accordion";

export default function AccordionDemo() {
    return (
        <Accordion>
            <Accordion.Item title="What is Compound Component Pattern?">
                Its a React pattren that allows parent and child components to work together seamlessly while giving developers flexible compotions.
            </Accordion.Item>

            <Accordion.Item title="Why use it?">
                It makes UI libraries like models, tabs, accordions, menus, etc. easier to build and use.
            </Accordion.Item>
        </Accordion>
    );
}