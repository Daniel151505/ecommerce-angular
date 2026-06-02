import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ProductDetailComponent } from './product-detail';
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
  paramMap: of(convertToParamMap({ id: '065304' })),
  queryParamMap: of(convertToParamMap({ fromCategory: 'todos' })),
  snapshot: {
    paramMap: convertToParamMap({ id: '065304' }),
    queryParamMap: convertToParamMap({ fromCategory: 'todos' }),
  },
};

const meta: Meta<ProductDetailComponent> = {
  title: 'Pages/ProductDetail',
  component: ProductDetailComponent,
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
    template: '<app-page-layout><app-product-detail></app-product-detail></app-page-layout>',
  }),
};

export default meta;
type Story = StoryObj<ProductDetailComponent>;

export const Default: Story = {};
