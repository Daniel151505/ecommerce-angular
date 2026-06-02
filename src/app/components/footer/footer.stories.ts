import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer';

const meta: Meta<FooterComponent> = {
  title: 'Components/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {};
