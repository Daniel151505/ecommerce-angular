import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductMostSearchedComponent } from './product-most-searched';
import { ProductService } from '../../services/product.service';

const meta: Meta<ProductMostSearchedComponent> = {
  title: 'Components/ProductMostSearched',
  component: ProductMostSearchedComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      providers: [ProductService],
    }),
  ],
  argTypes: {
    currentId: { control: 'text' },
    limit: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<ProductMostSearchedComponent>;

export const Default: Story = {
  args: {
    currentId: '065304',
    limit: 4,
  },
};
