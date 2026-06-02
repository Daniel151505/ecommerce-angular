import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
