import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCardComponent } from './product-card';
import type { Product } from '../../data/products-data';

function createMockProduct(overrides: Partial<Product> = {}): Product {
  return {
    id: '065304',
    name: 'Pañales Huggies Bigpack Natural Care XXXG',
    longDescription: '',
    shortDescription: '',
    brand: 'HUGGIES',
    sapCode: '814953',
    eanCode: '',
    isLam: 'N',
    familyType: '',
    recurrent: false,
    howToConsume: null,
    imageList: [
      {
        url: 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304X.jpg',
        thumbnails: [],
      },
    ],
    price: 65.5,
    fractionatedPrice: 0,
    prescription: 'Venta Libre',
    precautions: null,
    sideEffects: null,
    favorite: false,
    concentration: null,
    presentation: 'PAQUETE',
    quantityUnits: 1,
    unitMeasure: 'UN',
    fractionalMode: false,
    activePrinciples: null,
    fractionatedForm: null,
    fractionatedText: null,
    noFractionatedText: 'PAQUETE 54 UN',
    productStatusId: 1,
    productStatus: 'AVAILABLE',
    productStatusMessage: null,
    maxUnitSale: 6,
    maxUnitSaleFractionated: 0,
    categoryList: [],
    stock: 772,
    fractionalStock: 0,
    stockRet: 772,
    fractionalRetStock: 0,
    showStockAlert: 'N',
    fractionalShowStockAlert: 'N',
    fractionatedSelected: null,
    unitPriceSelected: null,
    quantitySelected: 0,
    subTotal: null,
    fractionalCore: false,
    quantityUnitsCore: 1,
    limitOfferTime: null,
    slug: 'panales-huggies-bigpack-natural-care-xxxg-paquete',
    skuParentState: null,
    skuParentMain: null,
    brandResourcePath: null,
    label: null,
    gtin: null,
    promotionAlerts: null,
    skuVariants: [],
    details: [],
    presentationIdSelected: null,
    fractionatedPresentationId: null,
    presentationId: 1,
    quantityUnitsFractionated: null,
    visiblePresentations: ['pack'],
    pricePack: 65.5,
    quantityUnitsPack: 1,
    unitPrice: 0,
    descriptionUnits: null,
    tagImageUrl: null,
    secondaryTagImageUrl: null,
    alertTagText: null,
    priceAllPaymentMethod: 0,
    fractionatedPriceAllPaymentMethod: 0,
    priceWithpaymentMethod: 0,
    fractionatedPriceWithpaymentMethod: 0,
    crossOutPL: false,
    crossOutFractionatedPL: false,
    paymentMethodCardType: '0',
    unitPriceAllPaymentMethod: 0,
    unitPriceWithPaymentMethod: 0,
    subTotalAllPaymentMethod: null,
    subTotalWithPaymentMethod: null,
    priceHighDiscount: 0,
    fractionatedPriceHighDiscount: 0,
    unitPriceHighDiscount: 0,
    subTotalHighDiscount: null,
    isFromSeller: false,
    sellerId: null,
    sellerName: null,
    ranking: 6,
    itemsPack: null,
    totalAmountComponentPack: null,
    productPack: false,
    guaranteed: 'GP',
    saleChannels: ['MOBILE', 'WEB', 'CALL'],
    complementary: [],
    segment: '',
    skuMifarma: '300237',
    publishWithoutStock: false,
    productAliviamed: null,
    skuGenericSuggest: '',
    prescriptionCode: 0,
    typeComplementary: null,
    typeProductSheet: true,
    videoList: [],
    bannerList: [],
    guaranteedEcommerce: 'GP',
    substituteList: [],
    descriptionColor: null,
    codeColor: null,
    colorImageUrl: null,
    size: '',
    attributeDetails: [],
    gifts: null,
    fromSeller: false,
    isUnitPresentationDefault: false,
    isGeneric: false,
    ...overrides,
  };
}

const meta: Meta<ProductCardComponent> = {
  title: 'Components/ProductCard',
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
    }),
  ],
  argTypes: {
    product: { control: 'object' },
    fromCategory: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ProductCardComponent>;


export const Default: Story = {
  args: {
    product: createMockProduct(),
  },
};


export const SoldOut: Story = {
  args: {
    product: createMockProduct({
      id: '136049',
      name: 'Ácido Fólico 0.5mg Tableta',
      brand: 'PORTUGAL',
      price: 10,
      presentation: 'CAJA',
      quantityUnits: 100,
      noFractionatedText: 'CAJA 100 UN',
      productStatus: 'SOLD_OUT',
      stock: 0,
      ranking: 3000,
      isGeneric: true,
      imageList: [
        {
          url: 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg',
          thumbnails: [],
        },
      ],
    }),
  },
};

export const GenericProduct: Story = {
  args: {
    product: createMockProduct({
      id: '136049',
      name: 'Paracetamol 500mg Tableta',
      brand: 'GENÉRICO',
      price: 3.5,
      presentation: 'CAJA',
      quantityUnits: 20,
      noFractionatedText: 'CAJA 20 UN',
      isGeneric: true,
      ranking: 3000,
      imageList: [
        {
          url: 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg',
          thumbnails: [],
        },
      ],
    }),
  },
};

export const WithPromotion: Story = {
  args: {
    product: createMockProduct({
      name: 'Pañales Ninet Suave Cuidado Talla XXL',
      brand: 'NINET',
      price: 48.9,
      presentation: 'BOLSA',
      noFractionatedText: 'BOLSA 40 UN',
      ranking: 5,
      imageList: [
        {
          url: 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036779X.jpg',
          thumbnails: [],
        },
      ],
    }),
  },
};


export const NoDiscount: Story = {
  args: {
    product: createMockProduct({
      name: 'Crema Hidratante Premium',
      brand: 'PREMIUM',
      price: 120.0,
      ranking: null,
      imageList: [
        {
          url: 'https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304X.jpg',
          thumbnails: [],
        },
      ],
    }),
  },
};
