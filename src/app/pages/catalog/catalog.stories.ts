import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { CatalogComponent } from './catalog';
import { AnalyticsService } from '../../services/analytics.service';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout';

const mockAnalyticsService = {
  viewItem: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  viewItemList: () => {},
  pageView: () => {},
};

const mockActivatedRoute = {
  queryParams: of({}),
  snapshot: {
    queryParamMap: convertToParamMap({}),
  },
};

const meta: Meta<CatalogComponent> = {
  title: 'Pages/Catalog',
  component: CatalogComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, PageLayoutComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AnalyticsService, useValue: mockAnalyticsService },
      ],
    }),
  ],
  render: () => ({
    template: '<app-page-layout><app-catalog></app-catalog></app-page-layout>',
  }),
};

export default meta;
type Story = StoryObj<CatalogComponent>;

export const Default: Story = {};
