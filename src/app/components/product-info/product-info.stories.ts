import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info';
import { CartService } from '../../services/cart.service';
import { Product } from '../../data/products-data';
import { MOCK_PRODUCTS } from '../../data/products-data';

const meta: Meta<ProductInfoComponent> = {
  title: 'Components/ProductInfo',
  component: ProductInfoComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      providers: [CartService],
    }),
  ],
  argTypes: {
    product: { control: 'object' },
    activeImage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ProductInfoComponent>;

const product: Product = MOCK_PRODUCTS[0];

export const Default: Story = {
  args: {
    product,
    activeImage: product.imageList[0]?.url || '',
  },
};
