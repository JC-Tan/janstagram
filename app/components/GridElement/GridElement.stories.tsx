import GridElement, { IGridElement } from './GridElement'
export default {
  component: GridElement,
  title: 'GridElement',
  argTypes: {
    index: 2,
    onClick: {
      action: 'clicked',
    },
  },
}

const _GridElement = (args: IGridElement) => (
  <GridElement {...args} url='/pikachu.png' />
)

export const Default = _GridElement.bind({})
_GridElement.args = {}
