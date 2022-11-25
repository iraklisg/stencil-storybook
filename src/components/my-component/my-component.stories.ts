export default {
  title: 'Components/MyComponent',
};

const Template = ({ first, middle, last }) => `<my-component first="${first}" middle="${middle}" last="${last}"></my-component>`;

export const Example = Template.bind({});
Example.args = {
  first: 'Winnie',
  middle: 'The',
  last: 'Pooh',
};
