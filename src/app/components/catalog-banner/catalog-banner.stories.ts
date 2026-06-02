import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CatalogBannerComponent } from './catalog-banner';

const meta: Meta<CatalogBannerComponent> = {
  title: 'Components/CatalogBanner',
  component: CatalogBannerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
    colorFrom: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<CatalogBannerComponent>;

export const Default: Story = {
  args: {
    title: 'Mamá y Bebé',
    description: 'Encuentra productos de cuidado para tu bebé con descuentos exclusivos.',
    image: 'https://images.unsplash.com/photo-1545167622-3a1e4aea9d26?q=80&w=1200&auto=format&fit=crop',
    colorFrom: '#009639',
  },
};
