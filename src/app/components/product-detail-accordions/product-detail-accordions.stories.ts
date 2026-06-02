import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ProductDetailAccordionsComponent } from './product-detail-accordions';
import { Detail } from '../../data/products-data';

const meta: Meta<ProductDetailAccordionsComponent> = {
  title: 'Components/ProductDetailAccordions',
  component: ProductDetailAccordionsComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ProductDetailAccordionsComponent>;

const exampleDetails: Detail[] = [
  { order: 1, key: 'LONG_DESCRIPTION', title: 'Descripción', content: '<p>Producto ideal para el cuidado diario.</p>' },
  { order: 2, key: 'COMPOSITION', title: 'Composición', content: '<ul><li>Ingrediente A</li><li>Ingrediente B</li></ul>' },
];

export const Default: Story = {
  args: {
    details: exampleDetails,
  },
};
