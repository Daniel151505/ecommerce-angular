import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ProductDetailGalleryComponent } from './product-detail-gallery';

const meta: Meta<ProductDetailGalleryComponent> = {
  title: 'Components/ProductDetailGallery',
  component: ProductDetailGalleryComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    activeImage: { control: 'text' },
    thumbnails: { control: 'object' },
    isSoldOut: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ProductDetailGalleryComponent>;

export const Default: Story = {
  args: {
    activeImage: 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304X.jpg',
    thumbnails: [
      'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304X.jpg',
      'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg',
    ],
    isSoldOut: false,
  },
};
