import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { CartDrawerComponent } from './cart-drawer';

const meta: Meta<CartDrawerComponent> = {
  title: 'Components/CartDrawer',
  component: CartDrawerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<CartDrawerComponent>;

export const Default: Story = {};
