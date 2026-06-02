import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbsComponent } from './catalog-breadcrumbs';

const meta: Meta<BreadcrumbsComponent> = {
  title: 'Components/Breadcrumbs',
  component: BreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    category: { control: 'text' },
    categoryLink: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsComponent>;

export const Default: Story = {
  args: {
    title: 'Farmacia',
    category: 'Categoría',
    categoryLink: '/categoria/farmacia',
  },
};
