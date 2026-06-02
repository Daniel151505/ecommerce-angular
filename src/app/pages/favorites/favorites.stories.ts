import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoritesComponent } from './favorites';
import { AnalyticsService } from '../../services/analytics.service';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout';

const mockAnalyticsService = {
  viewItem: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  viewItemList: () => {},
  pageView: () => {},
};

const meta: Meta<FavoritesComponent> = {
  title: 'Pages/Favorites',
  component: FavoritesComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, PageLayoutComponent],
      providers: [
        { provide: AnalyticsService, useValue: mockAnalyticsService },
      ],
    }),
  ],
  render: () => ({
    template: '<app-page-layout><app-favorites></app-favorites></app-page-layout>',
  }),
};

export default meta;
type Story = StoryObj<FavoritesComponent>;

export const Default: Story = {};
