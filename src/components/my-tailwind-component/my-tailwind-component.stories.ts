export default {
  title: 'Components/MyTailwindComponent',
};

const Template = ({ buttonText }) => `<my-tailwind-component button-text="${buttonText}"></my-tailwind-component>`;

export const Example = Template.bind({});
Example.args = {
  buttonText: 'Winnie',
};
