import { FontIconExample } from "./Example";

export default {
    title: 'Atoms/Font Icons',
    component: FontIconExample,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        className: {
            description: "font icon classname",
        }
    }
};

export const Normal = {
    args: {
        className: "bi-ic-download"
    },
};