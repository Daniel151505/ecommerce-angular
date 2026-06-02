import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CatalogFiltersComponent } from './catalog-filters';

const meta: Meta<CatalogFiltersComponent> = {
  title: 'Components/CatalogFilters',
  component: CatalogFiltersComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    searchQuery: { control: 'text' },
    selectedSubcategories: { control: 'object' },
    selectedPresentations: { control: 'object' },
    selectedBrands: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<CatalogFiltersComponent>;

export const Default: Story = {
  args: {
    searchQuery: 'pañales',
    selectedSubcategories: [4, 8],
    selectedPresentations: ['pack'],
    selectedBrands: ['HUGGIES'],
    presentations: [
      { label: 'Cajas / Paquetes', value: 'pack' },
      { label: 'Blíster / Fraccionados', value: 'blister' },
      { label: 'Bolsa', value: 'bag' },
    ],
    brands: ['HUGGIES', 'BABYSEC', 'NINET'],
    subcategories: [
      { id: 4, name: 'Pañales', count: 12 },
      { id: 8, name: 'Toallitas', count: 6 },
    ],
  },
};
