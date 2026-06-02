import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryMostViewedComponent } from './category-most-viewed';
import { MOCK_PRODUCTS } from '../../data/products-data';

const meta: Meta<CategoryMostViewedComponent> = {
  title: 'Components/CategoryMostViewed',
  component: CategoryMostViewedComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<CategoryMostViewedComponent>;

export const Default: Story = {
  args: {
    featuredProducts: MOCK_PRODUCTS.slice(0, 6),
  },
};
