import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart';
import { AnalyticsService } from '../../services/analytics.service';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout';

const mockAnalyticsService = {
  viewItem: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  viewItemList: () => {},
  pageView: () => {},
};

const meta: Meta<CartComponent> = {
  title: 'Pages/Cart',
  component: CartComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, PageLayoutComponent],
      providers: [
        { provide: AnalyticsService, useValue: mockAnalyticsService },
      ],
    }),
  ],
  render: () => ({
    template: '<app-page-layout><app-cart></app-cart></app-page-layout>',
  }),
};

export default meta;
type Story = StoryObj<CartComponent>;

export const Default: Story = {};
