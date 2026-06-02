export interface ImageItem {
  url: string;
  thumbnails: string[];
}

export interface Category {
  id: number;
  name: string;
  keyword: string;
  categories: Category[];
}

export interface SkuVariant {
  sku: string;
  type: string;
  code: string;
  description: string;
  slug: string;
  hasStock: boolean;
  imageUrl: string;
  size: string | null;
  lowestPrice: number | null;
  unitMeasure: string | null;
  colorImageUrl: string | null;
  brandResourcePath: string | null;
  promotionAlerts: any[];
}

export interface Detail {
  order: number;
  title: string;
  content: string;
  key: string;
}

export interface Product {
  id: string;
  name: string;
  longDescription: string;
  shortDescription: string;
  brand: string;
  sapCode: string;
  eanCode: string;
  isLam: string;
  familyType: string;
  recurrent: boolean;
  howToConsume: string | null;
  imageList: ImageItem[];
  price: number;
  fractionatedPrice: number;
  prescription: string;
  precautions: string | null;
  sideEffects: string | null;
  favorite: boolean;
  concentration: string | null;
  presentation: string;
  quantityUnits: number;
  unitMeasure: string;
  fractionalMode: boolean;
  activePrinciples: string[] | null;
  fractionatedForm: string | null;
  fractionatedText: string | null;
  noFractionatedText: string | null;
  productStatusId: number;
  productStatus: string;
  productStatusMessage: string | null;
  maxUnitSale: number;
  maxUnitSaleFractionated: number;
  categoryList: Category[];
  stock: number;
  fractionalStock: number;
  stockRet: number;
  fractionalRetStock: number;
  showStockAlert: string;
  fractionalShowStockAlert: string;
  fractionatedSelected: boolean | null;
  unitPriceSelected: number | null;
  quantitySelected: number;
  subTotal: number | null;
  fractionalCore: boolean;
  quantityUnitsCore: number;
  limitOfferTime: string | null;
  slug: string;
  skuParentState: string | null;
  skuParentMain: string | null;
  brandResourcePath: string | null;
  label: string | null;
  gtin: string | number | null;
  promotionAlerts: any[] | null;
  skuVariants: SkuVariant[];
  details: Detail[];
  presentationIdSelected: number | null;
  fractionatedPresentationId: number | null;
  presentationId: number;
  quantityUnitsFractionated: number | null;
  visiblePresentations: string[];
  pricePack: number;
  quantityUnitsPack: number;
  unitPrice: number;
  descriptionUnits: string | null;
  tagImageUrl: string | null;
  secondaryTagImageUrl: string | null;
  alertTagText: string | null;
  priceAllPaymentMethod: number;
  fractionatedPriceAllPaymentMethod: number;
  priceWithpaymentMethod: number;
  fractionatedPriceWithpaymentMethod: number;
  crossOutPL: boolean;
  crossOutFractionatedPL: boolean;
  paymentMethodCardType: string;
  unitPriceAllPaymentMethod: number;
  unitPriceWithPaymentMethod: number;
  subTotalAllPaymentMethod: number | null;
  subTotalWithPaymentMethod: number | null;
  priceHighDiscount: number;
  fractionatedPriceHighDiscount: number;
  unitPriceHighDiscount: number;
  subTotalHighDiscount: number | null;
  isFromSeller: boolean;
  sellerId: string | null;
  sellerName: string | null;
  ranking: number | null;
  itemsPack: any[] | null;
  totalAmountComponentPack: number | null;
  productPack: boolean;
  guaranteed: string;
  saleChannels: string[];
  complementary: any[];
  segment: string;
  skuMifarma: string;
  publishWithoutStock: boolean;
  sellerData?: {
    priceTmpFromSellerCenter: boolean;
    pricePromoSellerCenter: number;
    priceTagName: string | null;
    priceTagIdentifier: string | null;
  };
  productAliviamed: any | null;
  skuGenericSuggest: string;
  prescriptionCode: number;
  typeComplementary: any | null;
  typeProductSheet: boolean;
  videoList: any[] | null;
  bannerList: any[] | null;
  guaranteedEcommerce: string | null;
  substituteList: any[] | null;
  descriptionColor: string | null;
  codeColor: string | null;
  colorImageUrl: string | null;
  size: string | null;
  attributeDetails: any[];
  gifts: any | null;
  fromSeller: boolean;
  isUnitPresentationDefault: boolean;
  isGeneric: boolean;
}

export const MOCK_MAMA_BEBE: Product[] = [
  {
    "id": "136049",
    "name": "Ácido Fólico 0.5mg Tableta",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
    "shortDescription": "",
    "brand": "PORTUGAL",
    "sapCode": "100097",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/136049L.jpg",
        "thumbnails": []
      }
    ],
    "price": 10,
    "fractionatedPrice": 1,
    "prescription": "Venta Libre",
    "precautions": null,
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "CAJA",
    "quantityUnits": 100,
    "unitMeasure": "UN",
    "fractionalMode": true,
    "activePrinciples": [
      "Ácido fólico  0.5mg"
    ],
    "fractionatedForm": "BLÍSTER",
    "fractionatedText": "BLÍSTER 10 UN",
    "noFractionatedText": "CAJA 100 UN",
    "productStatusId": 3,
    "productStatus": "SOLD_OUT",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 60,
    "categoryList": [
      {
        "id": 100003,
        "name": "Nutrición para Todos",
        "categories": [
          {
            "id": 200036,
            "name": "Vitaminas",
            "categories": [
              {
                "id": 300180,
                "name": "Vitamina B",
                "categories": [],
                "keyword": "vitamina-b-1"
              }
            ],
            "keyword": "vitaminas"
          },
          {
            "id": 201385,
            "name": "Promociones en Suplementos y Vitaminas",
            "categories": [
              {
                "id": 765237,
                "name": "Vitamina B y Complejo B B6 y B12",
                "categories": [],
                "keyword": "vitamina-b-y-complejo-b-b6-y-b12"
              }
            ],
            "keyword": "promociones-en-suplementos-y-vitaminas"
          }
        ],
        "keyword": "nutricion-para-todos"
      },
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200058,
            "name": "Vitaminas y Suplementos",
            "categories": [
              {
                "id": 300379,
                "name": "Ácido Fólico",
                "categories": [],
                "keyword": "acido-folico"
              }
            ],
            "keyword": "vitaminas-y-suplementos"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 0,
    "fractionalStock": 0,
    "stockRet": 0,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": true,
    "quantityUnitsCore": 100,
    "limitOfferTime": null,
    "slug": "acido-folico-0-5mg-tableta",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Ácido fólico  0.5mg",
        "key": "COMPOSITION"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": 3,
    "presentationId": 1,
    "quantityUnitsFractionated": 10,
    "visiblePresentations": [
      "pack",
      "collection1"
    ],
    "pricePack": 10,
    "quantityUnitsPack": 100,
    "unitPrice": 0.1,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "130084",
    "publishWithoutStock": true,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "NG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "037797",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "037775",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "035572",
        "guaranteed": "GG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "136032",
        "guaranteed": "NG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": true
  },
  {
    "id": "065304",
    "name": "Pañales Huggies Bigpack Natural Care XXXG",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Cuenta con una gama de productos como: pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">EL mejor cuidado para tu bebé con los Pañales Huggies XG Bigpack Natural Care</span></strong></center></h2><p></p><center><p><p>Los Pañales Huggies® Natural Care están diseñados para brindar una suavidad excepcional y una protección confiable durante el día y la noche. Su enfoque en el cuidado de la piel del bebé permite acompañar cada etapa con comodidad, frescura y tranquilidad.</p><h3>Características del Producto</h3><ul>  <li>Producto hipoalergénico y dermatológicamente testado.</li>  <li>Cintura, orejas y barreras elásticas que se adaptan al movimiento del bebé.</li>  <li>Más de 10,000 poros respirables que favorecen la circulación de aire.</li>  <li>Tecnología avanzada de absorción diseñada para caquita líquida.</li>  <li>Diseñado con la calidad y tecnología Huggies®.</li></ul><h3>Beneficios</h3><ul>  <li>Ayuda a proteger la piel sensible del bebé.</li>  <li>Mantiene al bebé seco y cómodo por más tiempo.</li>  <li>Permite libertad de movimiento con una sensación de frescura constante.</li></ul><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Con capa especial para una mejor protección</h3></strong><p> Tu bebé más seco con Huggies</p></center></center></center><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010470X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470\" target=\"_blank&quot;\">Pañal Recién Nacido Huggies Natural Care</a> <p></p></h3><p>Pañal especialmente diseñado para los primeros 100 días de tu bebé, con materiales extra suaves y esponjocitos, que mantienen el PH natural de las pieles más sensibles y delicadas.</p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\">Pañal Huggies Unisex Talla P Natural Care</a> <p></p></h3><p>Pañal hecho con fibras naturales, tan suave como el algodón y libre de parabenos y fragancias. Cuenta con indicador de humedad y Tecnología de burbujas para mayor absorción.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026072X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\">Pañales Huggies Bigpack Natural Care Puro y Natural Talla G</a> <p></p></h3> <p>Cuidado puro y natural, nuestra máxima protección para la piel de tu bebé. Un pañal hecho con fibras naturales, tan suave como el algodón, libre de parabenos y fragancias. Cubierta más suave y respirable.</p></div> </div></center><p></p>",
    "shortDescription": "<li>Máxima protección de la piel<li>Con cintura, orejas y barreras elásticas<li>Sus más de 10,000 poros respirables permiten una circulación de aire óptima<li>Calidad Huggies<li>Con la tecnología de absorción más avanzada<li>NCOA07478-18CO",
    "brand": "HUGGIES",
    "sapCode": "814953",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "¿Cómo ponerlo? Abrir el pañal y las orejas traseras y levantar las barreras. Poner al bebé y asegúrese de que el pañal le cubra la espalda hasta la cintura.¿Cómo cerrarlo? Quitar las orejas y fijars en la tira delantera del pañal, ajustando según el cuerpo del bebé. Cuando las orejas ya no alcancen el pegue, cambie al siguiente tamaño de pañal.¿Cómo ajustarlo? Ajustar el elástico de la pierna para asegurarse de que no se doble sobre las barreras internas.¿Cómo desecharlo? Enrollar el pañal y asegurar utilizando las orejas ajustables. Desechar los pañales usados a la basura, nunca en el sanitario.",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-3X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-4X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-3L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-4L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304-5L.jpg"
        ]
      }
    ],
    "price": 65.5,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Huggies como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Mantener fuera del alcance de los niños para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal. En caso de irritación, consulte a su médico.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "PAQUETE",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Celulosa",
      " Poliacrilato de Sodio",
      " Polipropileno",
      " Adhesivos",
      " Polietileno",
      " Poliéster",
      " Elásticos."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "PAQUETE 54 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300380,
                "name": "Talla XXXG / XXXL",
                "categories": [],
                "keyword": "talla-xxxg--xxxl"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 772,
    "fractionalStock": 0,
    "stockRet": 772,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "panales-huggies-bigpack-natural-care-xxxg-paquete",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [
      {
        "sku": "036335",
        "type": "T",
        "code": "G",
        "description": "Chico",
        "slug": "panales-huggies-g-bigpack-natural-care-bolsa-66-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036335X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036336",
        "type": "T",
        "code": "XG",
        "description": "Muy grande",
        "slug": "panales-huggies-xg-bigpack-natural-care-60-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036336X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036337",
        "type": "T",
        "code": "XXG",
        "description": "Muy muy grande",
        "slug": "panales-huggies-xxg-bigpack-natural-care-58-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "065304",
        "type": "T",
        "code": "XXXG",
        "description": "Super extra grande",
        "slug": "panales-huggies-bigpack-natural-care-xxxg-paquete",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      }
    ],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Cuenta con una gama de productos como: pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">EL mejor cuidado para tu bebé con los Pañales Huggies XG Bigpack Natural Care</span></strong></center></h2><p></p><center><p><p>Los Pañales Huggies® Natural Care están diseñados para brindar una suavidad excepcional y una protección confiable durante el día y la noche. Su enfoque en el cuidado de la piel del bebé permite acompañar cada etapa con comodidad, frescura y tranquilidad.</p><h3>Características del Producto</h3><ul>  <li>Producto hipoalergénico y dermatológicamente testado.</li>  <li>Cintura, orejas y barreras elásticas que se adaptan al movimiento del bebé.</li>  <li>Más de 10,000 poros respirables que favorecen la circulación de aire.</li>  <li>Tecnología avanzada de absorción diseñada para caquita líquida.</li>  <li>Diseñado con la calidad y tecnología Huggies®.</li></ul><h3>Beneficios</h3><ul>  <li>Ayuda a proteger la piel sensible del bebé.</li>  <li>Mantiene al bebé seco y cómodo por más tiempo.</li>  <li>Permite libertad de movimiento con una sensación de frescura constante.</li></ul><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Con capa especial para una mejor protección</h3></strong><p> Tu bebé más seco con Huggies</p></center></center></center><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010470X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470\" target=\"_blank&quot;\">Pañal Recién Nacido Huggies Natural Care</a> <p></p></h3><p>Pañal especialmente diseñado para los primeros 100 días de tu bebé, con materiales extra suaves y esponjocitos, que mantienen el PH natural de las pieles más sensibles y delicadas.</p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\">Pañal Huggies Unisex Talla P Natural Care</a> <p></p></h3><p>Pañal hecho con fibras naturales, tan suave como el algodón y libre de parabenos y fragancias. Cuenta con indicador de humedad y Tecnología de burbujas para mayor absorción.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026072X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\">Pañales Huggies Bigpack Natural Care Puro y Natural Talla G</a> <p></p></h3> <p>Cuidado puro y natural, nuestra máxima protección para la piel de tu bebé. Un pañal hecho con fibras naturales, tan suave como el algodón, libre de parabenos y fragancias. Cubierta más suave y respirable.</p></div> </div></center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "¿Cómo ponerlo? Abrir el pañal y las orejas traseras y levantar las barreras. Poner al bebé y asegúrese de que el pañal le cubra la espalda hasta la cintura.¿Cómo cerrarlo? Quitar las orejas y fijars en la tira delantera del pañal, ajustando según el cuerpo del bebé. Cuando las orejas ya no alcancen el pegue, cambie al siguiente tamaño de pañal.¿Cómo ajustarlo? Ajustar el elástico de la pierna para asegurarse de que no se doble sobre las barreras internas.¿Cómo desecharlo? Enrollar el pañal y asegurar utilizando las orejas ajustables. Desechar los pañales usados a la basura, nunca en el sanitario.",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Celulosa, Poliacrilato de Sodio, Polipropileno, Adhesivos, Polietileno, Poliéster, Elásticos.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Huggies como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Mantener fuera del alcance de los niños para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal. En caso de irritación, consulte a su médico.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 65.5,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 6,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "GP",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "300237",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "GP",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "080037",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080038",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080036",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "028995",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068011",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "028886",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068012",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "024270",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036781",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036779",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": "Super extra grande",
    "codeColor": "XXXG",
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "036779",
    "name": "Pañales Ninet Suave Cuidado Talla XXL",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png\"></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu Bebé con los Pañales Ninet</span></strong></center></h2><p></p><center><p>Comodidad y cuidado con los pañales desechables Ninet, más horas de protección y con la misma calidad que merece tu bebé. Bolsa de 40 pañales en talla XXL, ideal para bebes de 9 -14 kg aproximadamente. Más sequitos durante todo el día, absorbe rápidamente y mantiene la piel de tu bebé más seca.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Ninet-6.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Días y noches más sequitos </h3></strong><p>Absorción hasta por 12 horas con los Pañales Ninet</p></center>",
    "shortDescription": "<ul><li>12 horas de protección</li><li>Absorbe rápidamente y mantiene seca la piel de tu bebé</li></ul>",
    "brand": "NINET",
    "sapCode": "150042",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<ul><p>Usar el producto de la siguiente manera:</p><li>1. Ponga el pañal plano, eche al bebé en él, coloque la parte frontal sobre su estómago y mantenga las cintas pega pega hacia arriba</li><li>2. Junte las cintas pega pega a la parte frontal del pañal envolviendo al bebé, del tal manera que las cintas estén equidistantes al medio del pañal</li><li>3. Para mejor desempeño del pañal, jálelo hacia arriba para que calce bien, luego fije las barreras antiderrame correctamente para evitar filtraciones</li></ul>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036779X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036779M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036779L.jpg",
        "thumbnails": []
      }
    ],
    "price": 48.9,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "No usar en dermatitis o eczemas. Mantener fuera del alcance de los niños.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "BOLSA",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Desechable"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "BOLSA 40 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300381,
                "name": "Talla XXG / XXL",
                "categories": [],
                "keyword": "talla-xxg--xxl"
              }
            ],
            "keyword": "panales-para-bebe"
          },
          {
            "id": 200059,
            "name": "Todo en Ninet",
            "categories": [],
            "keyword": "todo-en-ninet"
          },
          {
            "id": 201382,
            "name": "Promociones para el Cuidado Infantil",
            "categories": [
              {
                "id": 765214,
                "name": "Ninet Suave Cuidado a donde Vayas",
                "categories": [],
                "keyword": "ninet-suave-cuidado-a-donde-vayas"
              }
            ],
            "keyword": "promociones-para-el-cuidado-infantil"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 227,
    "fractionalStock": 0,
    "stockRet": 227,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "panales-ninet-suave-cuidado-talla-xxl-bolsa-40-un",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [
      {
        "sku": "032606",
        "type": "T",
        "code": "S",
        "description": "Small",
        "slug": "panales-ninet-suave-cuidado-talla-s",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/032606X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036776",
        "type": "T",
        "code": "M",
        "description": "Medium",
        "slug": "panales-ninet-suave-cuidado-talla-m-bolsa-58-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036776X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036777",
        "type": "T",
        "code": "L",
        "description": "Large",
        "slug": "panales-ninet-suave-cuidado-talla-l-bolsa-52-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036777X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036778",
        "type": "T",
        "code": "XL",
        "description": "Extra Large",
        "slug": "panales-ninet-suave-cuidado-talla-xl-bolsa-44-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036778X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036779",
        "type": "T",
        "code": "XXL",
        "description": "Extra extra Large",
        "slug": "panales-ninet-suave-cuidado-talla-xxl-bolsa-40-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036779X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      }
    ],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png\"></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu Bebé con los Pañales Ninet</span></strong></center></h2><p></p><center><p>Comodidad y cuidado con los pañales desechables Ninet, más horas de protección y con la misma calidad que merece tu bebé. Bolsa de 40 pañales en talla XXL, ideal para bebes de 9 -14 kg aproximadamente. Más sequitos durante todo el día, absorbe rápidamente y mantiene la piel de tu bebé más seca.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Ninet-6.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Días y noches más sequitos </h3></strong><p>Absorción hasta por 12 horas con los Pañales Ninet</p></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<ul><p>Usar el producto de la siguiente manera:</p><li>1. Ponga el pañal plano, eche al bebé en él, coloque la parte frontal sobre su estómago y mantenga las cintas pega pega hacia arriba</li><li>2. Junte las cintas pega pega a la parte frontal del pañal envolviendo al bebé, del tal manera que las cintas estén equidistantes al medio del pañal</li><li>3. Para mejor desempeño del pañal, jálelo hacia arriba para que calce bien, luego fije las barreras antiderrame correctamente para evitar filtraciones</li></ul>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Desechable",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "No usar en dermatitis o eczemas. Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 48.9,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 5,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "GG",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "814986",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "GG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "080037",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080038",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080036",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "028995",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068011",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "028886",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068012",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "024270",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036781",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036776",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": "Extra extra Large",
    "codeColor": "XXL",
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "036778",
    "name": "Pañales Ninet Suave Cuidado Talla XL",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu Bebé con los Pañales Ninet</span></strong></center></h2><p></p><center><p>Comodidad y cuidado con los pañales desechables Ninet, más horas de protección y con la misma calidad que merece tu bebé. Bolsa de 44 pañales en talla XL, ideal para bebes de 14 -16 kg aproximadamente. Más sequitos durante todo el día, absorbe rápidamente y mantiene la piel de tu bebé más seca.</p></center><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Ninet-7.png></center><br><center><strong><h3 class=“heading-1”>Días y nocbes más sequitos </h3></strong><p>Absorción hasta por 12 horas con los Pañales Ninet</p></center>",
    "shortDescription": "<ul><li>12 horas de protección</li><li>Absorbe rápidamente y mantiene seca la piel de tu bebé.</li></ul>",
    "brand": "NINET",
    "sapCode": "150041",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<ul><p>Usar el producto de la siguiente manera:</p><li>1. Ponga el pañal plano, eche al bebé en él, coloque la parte frontal sobre su estómago y mantenga las cintas pega pega hacia arriba</li><li>2. Junte las cintas pega pega a la parte frontal del pañal envolviendo al bebé, del tal manera que las cintas estén equidistantes al medio del pañal</li><li>3. Para mejor desempeño del pañal, jálelo hacia arriba para que calce bien, luego fije las barreras antiderrame correctamente para evitar filtraciones</li></ul>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036778X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036778M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036778L.jpg",
        "thumbnails": []
      }
    ],
    "price": 48.9,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "No usar en dermatitis o eczemas. Mantener fuera del alcance de los niños.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "BOLSA",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Desechable"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "BOLSA 44 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300382,
                "name": "Talla XG / XL",
                "categories": [],
                "keyword": "talla-xg--xl"
              }
            ],
            "keyword": "panales-para-bebe"
          },
          {
            "id": 200059,
            "name": "Todo en Ninet",
            "categories": [],
            "keyword": "todo-en-ninet"
          },
          {
            "id": 201382,
            "name": "Promociones para el Cuidado Infantil",
            "categories": [
              {
                "id": 765214,
                "name": "Ninet Suave Cuidado a donde Vayas",
                "categories": [],
                "keyword": "ninet-suave-cuidado-a-donde-vayas"
              }
            ],
            "keyword": "promociones-para-el-cuidado-infantil"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 78,
    "fractionalStock": 0,
    "stockRet": 78,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "panales-ninet-suave-cuidado-talla-xl-bolsa-44-un",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [
      {
        "sku": "032606",
        "type": "T",
        "code": "S",
        "description": "Small",
        "slug": "panales-ninet-suave-cuidado-talla-s",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/032606X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036776",
        "type": "T",
        "code": "M",
        "description": "Medium",
        "slug": "panales-ninet-suave-cuidado-talla-m-bolsa-58-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036776X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036777",
        "type": "T",
        "code": "L",
        "description": "Large",
        "slug": "panales-ninet-suave-cuidado-talla-l-bolsa-52-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036777X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036778",
        "type": "T",
        "code": "XL",
        "description": "Extra Large",
        "slug": "panales-ninet-suave-cuidado-talla-xl-bolsa-44-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036778X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036779",
        "type": "T",
        "code": "XXL",
        "description": "Extra extra Large",
        "slug": "panales-ninet-suave-cuidado-talla-xxl-bolsa-40-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036779X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      }
    ],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu Bebé con los Pañales Ninet</span></strong></center></h2><p></p><center><p>Comodidad y cuidado con los pañales desechables Ninet, más horas de protección y con la misma calidad que merece tu bebé. Bolsa de 44 pañales en talla XL, ideal para bebes de 14 -16 kg aproximadamente. Más sequitos durante todo el día, absorbe rápidamente y mantiene la piel de tu bebé más seca.</p></center><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Ninet-7.png></center><br><center><strong><h3 class=“heading-1”>Días y nocbes más sequitos </h3></strong><p>Absorción hasta por 12 horas con los Pañales Ninet</p></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<ul><p>Usar el producto de la siguiente manera:</p><li>1. Ponga el pañal plano, eche al bebé en él, coloque la parte frontal sobre su estómago y mantenga las cintas pega pega hacia arriba</li><li>2. Junte las cintas pega pega a la parte frontal del pañal envolviendo al bebé, del tal manera que las cintas estén equidistantes al medio del pañal</li><li>3. Para mejor desempeño del pañal, jálelo hacia arriba para que calce bien, luego fije las barreras antiderrame correctamente para evitar filtraciones</li></ul>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Desechable",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "No usar en dermatitis o eczemas. Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 48.9,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 11,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "GG",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "814985",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "GG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "080037",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080038",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080036",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "028995",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068011",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "028886",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068012",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "024270",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036781",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036779",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": "Extra Large",
    "codeColor": "XL",
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "036337",
    "name": "Pañales Huggies XXG Bigpack Natural Care",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Cuenta con una gama de productos como: pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">EL mejor cuidado para tu bebé con los Pañales Huggies XG Bigpack Natural Care</span></strong></center></h2><p></p><center><p><p>Los Pañales Huggies® Natural Care están diseñados para brindar una suavidad excepcional y una protección confiable durante el día y la noche. Su enfoque en el cuidado de la piel del bebé permite acompañar cada etapa con comodidad, frescura y tranquilidad.</p><h3>Características del Producto</h3><ul>  <li>Producto hipoalergénico y dermatológicamente testado.</li>  <li>Cintura, orejas y barreras elásticas que se adaptan al movimiento del bebé.</li>  <li>Más de 10,000 poros respirables que favorecen la circulación de aire.</li>  <li>Tecnología avanzada de absorción diseñada para caquita líquida.</li>  <li>Diseñado con la calidad y tecnología Huggies®.</li></ul><h3>Beneficios</h3><ul>  <li>Ayuda a proteger la piel sensible del bebé.</li>  <li>Mantiene al bebé seco y cómodo por más tiempo.</li>  <li>Permite libertad de movimiento con una sensación de frescura constante.</li></ul><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Con capa especial para una mejor protección</h3></strong><p> Tu bebé más seco con Huggies</p></center></center></center><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010470X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470\" target=\"_blank&quot;\">Pañal Recién Nacido Huggies Natural Care</a> <p></p></h3><p>Pañal especialmente diseñado para los primeros 100 días de tu bebé, con materiales extra suaves y esponjocitos, que mantienen el PH natural de las pieles más sensibles y delicadas.</p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\">Pañal Huggies Unisex Talla P Natural Care</a> <p></p></h3><p>Pañal hecho con fibras naturales, tan suave como el algodón y libre de parabenos y fragancias. Cuenta con indicador de humedad y Tecnología de burbujas para mayor absorción.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026072X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\">Pañales Huggies Bigpack Natural Care Puro y Natural Talla G</a> <p></p></h3> <p>Cuidado puro y natural, nuestra máxima protección para la piel de tu bebé. Un pañal hecho con fibras naturales, tan suave como el algodón, libre de parabenos y fragancias. Cubierta más suave y respirable.</p></div> </div></center><p></p>",
    "shortDescription": "<li>Máxima protección de la piel<li>Con cintura, orejas y barreras elásticas<li>Sus más de 10,000 poros respirables permiten una circulación de aire óptima<li>Calidad Huggies<li>Con la tecnología de absorción más avanzada<li>NSOA07478-18CO",
    "brand": "HUGGIES",
    "sapCode": "149652",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "¿Cómo ponerlo? Abrir el pañal y las orejas traseras y levantar las barreras. Poner al bebé y asegúrese de que el pañal le cubra la espalda hasta la cintura.¿Cómo cerrarlo? Quitar las orejas y fijars en la tira delantera del pañal, ajustando según el cuerpo del bebé. Cuando las orejas ya no alcancen el pegue, cambie al siguiente tamaño de pañal.¿Cómo ajustarlo? Ajustar el elástico de la pierna para asegurarse de que no se doble sobre las barreras internas.¿Cómo desecharlo? Enrollar el pañal y asegurar utilizando las orejas ajustables. Desechar los pañales usados a la basura, nunca en el sanitario.",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-3X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-4X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-3L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-4L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337-5L.jpg"
        ]
      }
    ],
    "price": 65.5,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Huggies como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Mantener fuera del alcance de los niños para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal. En caso de irritación, consulte a su médico.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "BOLSA",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Celulosa",
      " Poliacrilato de Sodio",
      " Polipropileno",
      " Adhesivos",
      " Polietileno",
      " Poliéster",
      " Elásticos."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "BOLSA 58 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 12,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300381,
                "name": "Talla XXG / XXL",
                "categories": [],
                "keyword": "talla-xxg--xxl"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 710,
    "fractionalStock": 0,
    "stockRet": 710,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "panales-huggies-xxg-bigpack-natural-care-58-un",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [
      {
        "sku": "036335",
        "type": "T",
        "code": "G",
        "description": "Chico",
        "slug": "panales-huggies-g-bigpack-natural-care-bolsa-66-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036335X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036336",
        "type": "T",
        "code": "XG",
        "description": "Muy grande",
        "slug": "panales-huggies-xg-bigpack-natural-care-60-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036336X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036337",
        "type": "T",
        "code": "XXG",
        "description": "Muy muy grande",
        "slug": "panales-huggies-xxg-bigpack-natural-care-58-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036337X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "065304",
        "type": "T",
        "code": "XXXG",
        "description": "Super extra grande",
        "slug": "panales-huggies-bigpack-natural-care-xxxg-paquete",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/065304X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      }
    ],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Cuenta con una gama de productos como: pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">EL mejor cuidado para tu bebé con los Pañales Huggies XG Bigpack Natural Care</span></strong></center></h2><p></p><center><p><p>Los Pañales Huggies® Natural Care están diseñados para brindar una suavidad excepcional y una protección confiable durante el día y la noche. Su enfoque en el cuidado de la piel del bebé permite acompañar cada etapa con comodidad, frescura y tranquilidad.</p><h3>Características del Producto</h3><ul>  <li>Producto hipoalergénico y dermatológicamente testado.</li>  <li>Cintura, orejas y barreras elásticas que se adaptan al movimiento del bebé.</li>  <li>Más de 10,000 poros respirables que favorecen la circulación de aire.</li>  <li>Tecnología avanzada de absorción diseñada para caquita líquida.</li>  <li>Diseñado con la calidad y tecnología Huggies®.</li></ul><h3>Beneficios</h3><ul>  <li>Ayuda a proteger la piel sensible del bebé.</li>  <li>Mantiene al bebé seco y cómodo por más tiempo.</li>  <li>Permite libertad de movimiento con una sensación de frescura constante.</li></ul><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Con capa especial para una mejor protección</h3></strong><p> Tu bebé más seco con Huggies</p></center></center></center><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010470X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470\" target=\"_blank&quot;\">Pañal Recién Nacido Huggies Natural Care</a> <p></p></h3><p>Pañal especialmente diseñado para los primeros 100 días de tu bebé, con materiales extra suaves y esponjocitos, que mantienen el PH natural de las pieles más sensibles y delicadas.</p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-huggies-unisex-talla-p-natural-care/010472\" target=\"_blank&quot;\">Pañal Huggies Unisex Talla P Natural Care</a> <p></p></h3><p>Pañal hecho con fibras naturales, tan suave como el algodón y libre de parabenos y fragancias. Cuenta con indicador de humedad y Tecnología de burbujas para mayor absorción.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026072X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\">Pañales Huggies Bigpack Natural Care Puro y Natural Talla G</a> <p></p></h3> <p>Cuidado puro y natural, nuestra máxima protección para la piel de tu bebé. Un pañal hecho con fibras naturales, tan suave como el algodón, libre de parabenos y fragancias. Cubierta más suave y respirable.</p></div> </div></center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "¿Cómo ponerlo? Abrir el pañal y las orejas traseras y levantar las barreras. Poner al bebé y asegúrese de que el pañal le cubra la espalda hasta la cintura.¿Cómo cerrarlo? Quitar las orejas y fijars en la tira delantera del pañal, ajustando según el cuerpo del bebé. Cuando las orejas ya no alcancen el pegue, cambie al siguiente tamaño de pañal.¿Cómo ajustarlo? Ajustar el elástico de la pierna para asegurarse de que no se doble sobre las barreras internas.¿Cómo desecharlo? Enrollar el pañal y asegurar utilizando las orejas ajustables. Desechar los pañales usados a la basura, nunca en el sanitario.",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Celulosa, Poliacrilato de Sodio, Polipropileno, Adhesivos, Polietileno, Poliéster, Elásticos.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Huggies como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Mantener fuera del alcance de los niños para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal. En caso de irritación, consulte a su médico.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 65.5,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "GP",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "814760",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "GP",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "080037",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080038",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080036",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "028995",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068011",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "028886",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068012",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "024270",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036781",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036779",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": "Muy muy grande",
    "codeColor": "XXG",
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "028995",
    "name": "Pañales Ninet Suave Cuidado Recién Nacido",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png></center><center><p>Bienvenidos a un mundo de experiencias y aventuras para disfrutar con tu bebé. Los productos Ninet fueron diseñados, especialmente, para ayudarte y acompañarte en cada etapa del desarrollo de tu bebé. Disfruta de calidad, seguridad, cuidado y aventuras con Ninet.</p></center><p><center><strong>Protección y cuidado para tu bebé con Ninet Suave Cuidado</strong></center></p><center><p>Los pañales Ninet Suave Cuidado para Recién Nacido te ayudan con el cuidado y protección para tu bebé. Su diseño para recién nacidos hasta 4 Kg, con corte para el ombligo te brinda máxima absorción y suavidad.</p></center><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Ninet-12.png></center>",
    "shortDescription": "<ul><li>Protección por 12 horas</li><li>Diseño anatómico, ultra gel con capa de absorción</li><li>Barreras más altas<li>Cubierta tipo tela</li><li>NSOA00248-19PE</li></ul>",
    "brand": "NINET",
    "sapCode": "142175",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<ul><p>Usar el producto de la siguiente manera:</p><li>Paso 1. Poner el pañal plano y colocar al bebé en él, mientras coloca la parte frontal sobre su estómago y mantiene las cintas pegables hacia arriba.</li><li>Paso 2. Juntar las cintas pegables a la parte frontal del pañal envolviendo al bebé, de tal manera, que las cintas estén equidistantes al medio del pañal.</li><li>Paso 3. Para mejor desempeño del pañal, jálelo hacia arriba para que calce bien y fije las barreras antiderrame.</li></ul>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/028995X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/028995M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/028995L.jpg",
        "thumbnails": []
      }
    ],
    "price": 11,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Almacenar en un lugar fresco.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "BOLSA",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "BOLSA 20 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200059,
            "name": "Todo en Ninet",
            "categories": [],
            "keyword": "todo-en-ninet"
          },
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300386,
                "name": "Recién Nacido",
                "categories": [],
                "keyword": "recien-nacido"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 91,
    "fractionalStock": 0,
    "stockRet": 91,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "panales-ninet-suave-cuidado-recien-nacido-20un",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [
      {
        "sku": "013433",
        "type": "T",
        "code": "S",
        "description": "Small",
        "slug": "panal-ninet-mega-talla-s",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/013433X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "024270",
        "type": "T",
        "code": "XXL",
        "description": "Extra extra Large",
        "slug": "panal-ninet-bebe-talla-xxl",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/024270X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "028995",
        "type": "T",
        "code": "RN",
        "description": "Recien nacido",
        "slug": "panales-ninet-suave-cuidado-recien-nacido-20un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/028995X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036782",
        "type": "T",
        "code": "M",
        "description": "Medium",
        "slug": "panales-ninet-talla-m-bolsa-68",
        "hasStock": false,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036782X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036783",
        "type": "T",
        "code": "L",
        "description": "Large",
        "slug": "panales-ninet-talla-l-bolsa-60-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036783X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "036784",
        "type": "T",
        "code": "XL",
        "description": "Extra Large",
        "slug": "panales-ninet-talla-xl-bolsa-48-un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/036784X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      }
    ],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png></center><center><p>Bienvenidos a un mundo de experiencias y aventuras para disfrutar con tu bebé. Los productos Ninet fueron diseñados, especialmente, para ayudarte y acompañarte en cada etapa del desarrollo de tu bebé. Disfruta de calidad, seguridad, cuidado y aventuras con Ninet.</p></center><p><center><strong>Protección y cuidado para tu bebé con Ninet Suave Cuidado</strong></center></p><center><p>Los pañales Ninet Suave Cuidado para Recién Nacido te ayudan con el cuidado y protección para tu bebé. Su diseño para recién nacidos hasta 4 Kg, con corte para el ombligo te brinda máxima absorción y suavidad.</p></center><center><img src=https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Ninet-12.png></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<ul><p>Usar el producto de la siguiente manera:</p><li>Paso 1. Poner el pañal plano y colocar al bebé en él, mientras coloca la parte frontal sobre su estómago y mantiene las cintas pegables hacia arriba.</li><li>Paso 2. Juntar las cintas pegables a la parte frontal del pañal envolviendo al bebé, de tal manera, que las cintas estén equidistantes al medio del pañal.</li><li>Paso 3. Para mejor desempeño del pañal, jálelo hacia arriba para que calce bien y fije las barreras antiderrame.</li></ul>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Almacenar en un lugar fresco.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 11,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 86,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "GG",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "546224",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "3G",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "080037",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080038",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080036",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068011",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "028886",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068012",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "024270",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036781",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036779",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036776",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": "Recien nacido",
    "codeColor": "RN",
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "025396",
    "name": "Toallas Húmedas Ninet Clásicas",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png\"></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu bebé con las Toallitas Húmedas Ninet</span></strong></center></h2><p></p><center><p>Formuladas con aloe vera que limpian y protegen la piel de tu bebé.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Babysec-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la línea de Toallas Húmedas para tu bebé</span></b></center></h2><p></p><p></p><center>Suave cuidado para la delicada piel de tu bebé</center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/pa%C3%B1itos-humedos-ninet-020264.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/toallitas-humedas-clasicas-ninet/020264 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/toallitas-humedas-clasicas-ninet/020264\" target=\"_blank&quot;\">Toallitas Húmedas Clásicas Ninet</a> <p></p></h3><p>Protege y cuida la limpieza de tu bebé. </p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/toallas-humedas-ninet-025394.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/toallas-humedas-clasicas-ninet/025394\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/toallas-humedas-clasicas-ninet/025394\" target=\"_blank&quot;\">Toallas Húmedas Clásicas Ninet</a> <p></p></h3> <p>Formulado con aloe vera que limpian y protegen la piel de tu bebé.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/toallitas-humedas-ninet-025395.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/toallitas-humedas-ninet-clasicas-60un/025395\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/toallitas-humedas-ninet-clasicas-60un/025395\" target=\"_blank&quot;\">Toallitas Húmedas Ninet Clásicas</a> <p></p></h3> <p>Toallitas de gran resistencia, cuenta con aloe vera y es un producto libre de parabenos.</p></div> </div></center><p></p>",
    "shortDescription": "<ul><li>Cuidado e higiene infantil</li><li>Hidratación y limpieza de la piel</li><li>Con aloe vera</li><li>Bolsa de 100 unidades</li><li>NSOC38100-18PE</li></ul>",
    "brand": "NINET",
    "sapCode": "138226",
    "eanCode": "",
    "isLam": "Y",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/025396X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/025396M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/025396L.jpg",
        "thumbnails": []
      }
    ],
    "price": 7.9,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Mantener fuera del alcance de los niños.",
    "sideEffects": "Ninguna.",
    "favorite": false,
    "concentration": null,
    "presentation": "BOLSA",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "BOLSA 100 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 10,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200071,
            "name": "Aseo Bebé / Niños",
            "categories": [
              {
                "id": 300415,
                "name": "Toallas de Baño Infantil",
                "categories": [],
                "keyword": "toallas-de-bano-infantil"
              }
            ],
            "keyword": "aseo-bebe--ninos"
          },
          {
            "id": 200059,
            "name": "Todo en Ninet",
            "categories": [],
            "keyword": "todo-en-ninet"
          },
          {
            "id": 200060,
            "name": "Toallitas Húmedas",
            "categories": [],
            "keyword": "toallitas-humedas"
          },
          {
            "id": 201382,
            "name": "Promociones para el Cuidado Infantil",
            "categories": [
              {
                "id": 765216,
                "name": "Pañitos Húmedos para tu Día a Día",
                "categories": [],
                "keyword": "panitos-humedos-para-tu-dia-a-dia"
              }
            ],
            "keyword": "promociones-para-el-cuidado-infantil"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 1199,
    "fractionalStock": 0,
    "stockRet": 1199,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "toallas-humedas-ninet-clasicas",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "Ninguna.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png\"></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu bebé con las Toallitas Húmedas Ninet</span></strong></center></h2><p></p><center><p>Formuladas con aloe vera que limpian y protegen la piel de tu bebé.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Babysec-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la línea de Toallas Húmedas para tu bebé</span></b></center></h2><p></p><p></p><center>Suave cuidado para la delicada piel de tu bebé</center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/pa%C3%B1itos-humedos-ninet-020264.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/toallitas-humedas-clasicas-ninet/020264 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/toallitas-humedas-clasicas-ninet/020264\" target=\"_blank&quot;\">Toallitas Húmedas Clásicas Ninet</a> <p></p></h3><p>Protege y cuida la limpieza de tu bebé. </p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/toallas-humedas-ninet-025394.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/toallas-humedas-clasicas-ninet/025394\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/toallas-humedas-clasicas-ninet/025394\" target=\"_blank&quot;\">Toallas Húmedas Clásicas Ninet</a> <p></p></h3> <p>Formulado con aloe vera que limpian y protegen la piel de tu bebé.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/toallitas-humedas-ninet-025395.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/toallitas-humedas-ninet-clasicas-60un/025395\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/toallitas-humedas-ninet-clasicas-60un/025395\" target=\"_blank&quot;\">Toallitas Húmedas Ninet Clásicas</a> <p></p></h3> <p>Toallitas de gran resistencia, cuenta con aloe vera y es un producto libre de parabenos.</p></div> </div></center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 7.9,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 45,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "GG",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "529973",
    "publishWithoutStock": true,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "GG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "072341",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025412",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "034639",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025401",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "032605",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "026340",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025399",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "029938",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025394",
        "guaranteed": "GG"
      },
      {
        "orderId": "5",
        "skuInkafarma": "073675",
        "guaranteed": "GP"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "010472",
    "name": "Pañales Huggies Natural Care P",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Huggies pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Protección y Seguridad para tu Bebé con Huggies Natural Care Talla P</span></strong></center></h2><p></p><p>Los Pañales Huggies® Natural Care están diseñados para brindar una protección superior y un cuidado delicado desde los primeros días de vida. Gracias a su tecnología innovadora, ayudan a mantener la piel del bebé más seca y protegida, ofreciendo comodidad y tranquilidad en cada cambio.</p><h3>Características del Producto</h3><ul>  <li>Tecnología con dos zonas de absorción que separa la caquita líquida del pis.</li>  <li>Diseño que reduce hasta un 95% el contacto de la caquita líquida con la piel.</li>  <li>Dermatológicamente testeados con materiales suaves y seguros.</li>  <li>Ideales para bebés de 3,5 a 6 kg.</li>  <li>Desarrollados con la calidad y tecnología Huggies®.</li></ul><h3>Beneficios</h3><ul>  <li>Ayudan a prevenir irritaciones y cuidar la piel delicada del recién nacido.</li>  <li>Mantienen al bebé más seco y cómodo por más tiempo.</li>  <li>Brindan seguridad y confianza para el cuidado diario del bebé.</li></ul><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Huggies Natural Care en Todas las Tallas</span></b></center></h2><p></p><p></p><center>Cuidado superior y capa especial para la delicada piel de tu bebé. </center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010470X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470\" target=\"_blank&quot;\">Pañal Recién Nacido Huggies Natural Care</a> <p></p></h3><p>Pañal especialmente diseñado para los primeros 100 días de tu bebé, con materiales extra suaves y esponjocitos, que mantienen el PH natural de las pieles más sensibles y delicadas.</p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011390X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-natural-care-m-60un/011390\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-natural-care-m-60un/011390\" target=\"_blank&quot;\">Pañales Huggies Hiperpack Natural Care Unisex Talla M</a> <p></p></h3> <p>bebé. Su diseño libre de químicos, con fibras naturales y sistema de absorción diferenciada te ayuda con la protección y seguridad de tu bebé, mientras le brinda comodidad con sus orejas elastizadas y cubierta más respirable. Sin fragancia.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026072X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\">Pañales Huggies Bigpack Natural Care Puro y Natural Talla G</a> <p></p></h3> <p>Cuidado puro y natural, nuestra máxima protección para la piel de tu bebé. Un pañal hecho con fibras naturales, tan suave como el algodón, libre de parabenos y fragancias. Cubierta más suave y respirable.</p></div> </div></center><p></p>",
    "shortDescription": "<li>Con dos zonas de absorción<li> Protección superior contra irritaciones<li>Dermatológicamente testeado<li>Ayuda a prevenir irritaciones<li>NSOA06856-18CO",
    "brand": "SHAKRA",
    "sapCode": "121642",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-3X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-4X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-3L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-4L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472-5L.jpg"
        ]
      }
    ],
    "price": 37,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Mantener fuera del alcance de los niños.",
    "sideEffects": "No usar en dermatitis  o eczemas.",
    "favorite": false,
    "concentration": null,
    "presentation": "BOLSA",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "BOLSA 50 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300383,
                "name": "Talla S / P",
                "categories": [],
                "keyword": "talla-s--p"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 244,
    "fractionalStock": 0,
    "stockRet": 244,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "panal-huggies-unisex-talla-p-natural-care",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [
      {
        "sku": "010470",
        "type": "T",
        "code": "RN",
        "description": "Recien nacido",
        "slug": "panal-recien-nacido-huggies-natural-care",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010470X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "010472",
        "type": "T",
        "code": "P",
        "description": "Pequeño",
        "slug": "panal-huggies-unisex-talla-p-natural-care",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010472X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      },
      {
        "sku": "011390",
        "type": "T",
        "code": "M",
        "description": "Medio",
        "slug": "panales-huggies-natural-care-m-60un",
        "hasStock": true,
        "imageUrl": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011390X.jpg",
        "size": null,
        "lowestPrice": null,
        "unitMeasure": null,
        "colorImageUrl": null,
        "brandResourcePath": null,
        "promotionAlerts": []
      }
    ],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "No usar en dermatitis  o eczemas.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Huggies pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Protección y Seguridad para tu Bebé con Huggies Natural Care Talla P</span></strong></center></h2><p></p><p>Los Pañales Huggies® Natural Care están diseñados para brindar una protección superior y un cuidado delicado desde los primeros días de vida. Gracias a su tecnología innovadora, ayudan a mantener la piel del bebé más seca y protegida, ofreciendo comodidad y tranquilidad en cada cambio.</p><h3>Características del Producto</h3><ul>  <li>Tecnología con dos zonas de absorción que separa la caquita líquida del pis.</li>  <li>Diseño que reduce hasta un 95% el contacto de la caquita líquida con la piel.</li>  <li>Dermatológicamente testeados con materiales suaves y seguros.</li>  <li>Ideales para bebés de 3,5 a 6 kg.</li>  <li>Desarrollados con la calidad y tecnología Huggies®.</li></ul><h3>Beneficios</h3><ul>  <li>Ayudan a prevenir irritaciones y cuidar la piel delicada del recién nacido.</li>  <li>Mantienen al bebé más seco y cómodo por más tiempo.</li>  <li>Brindan seguridad y confianza para el cuidado diario del bebé.</li></ul><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Huggies Natural Care en Todas las Tallas</span></b></center></h2><p></p><p></p><center>Cuidado superior y capa especial para la delicada piel de tu bebé. </center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010470X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1al-recien-nacido-huggies-natural-care/010470\" target=\"_blank&quot;\">Pañal Recién Nacido Huggies Natural Care</a> <p></p></h3><p>Pañal especialmente diseñado para los primeros 100 días de tu bebé, con materiales extra suaves y esponjocitos, que mantienen el PH natural de las pieles más sensibles y delicadas.</p> </div> <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011390X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-natural-care-m-60un/011390\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-natural-care-m-60un/011390\" target=\"_blank&quot;\">Pañales Huggies Hiperpack Natural Care Unisex Talla M</a> <p></p></h3> <p>bebé. Su diseño libre de químicos, con fibras naturales y sistema de absorción diferenciada te ayuda con la protección y seguridad de tu bebé, mientras le brinda comodidad con sus orejas elastizadas y cubierta más respirable. Sin fragancia.</p> </div>  <div class=\"col-6 col-lg-4 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026072X.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/pa%C3%B1ales-huggies-bigpack-natural-care-puro-y-natura/026072\" target=\"_blank&quot;\">Pañales Huggies Bigpack Natural Care Puro y Natural Talla G</a> <p></p></h3> <p>Cuidado puro y natural, nuestra máxima protección para la piel de tu bebé. Un pañal hecho con fibras naturales, tan suave como el algodón, libre de parabenos y fragancias. Cubierta más suave y respirable.</p></div> </div></center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 37,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 36,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "GP",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "528222",
    "publishWithoutStock": true,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "GP",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "080037",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080038",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "080036",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "028995",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068011",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "028886",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068012",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "024270",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036781",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "036779",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": "Pequeño",
    "codeColor": "P",
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB42",
    "name": "Pack Pañal Babysec Packetón Premium Talla XXG",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Babysec-1.png\"></center><center><p>Softys cuenta con marcas locales muy reconocidas y valoradas por los consumidores como: Elite, Noble, Cotidian, Ladysoft, Babysec, Ok Pet y más. Además, su propósito es desarrollar marcas que entreguen el mejor cuidado que las personas necesitan en su día a día y en cada etapa de sus vidas</p></center><p></p><h2><center><strong><span style=\"\" font-size:=\"\" 13px;\"\"=\"\">Seguridad y Protección con Babysec Pañales Premium Super Mega</span></strong></center></h2><p></p><center><p>Pañal Babysec Premium con suave cubierta tipo tela y centro super absorbente que resiste hasta 12 horas. Sus cintas son reajustables y tiene cintura ela?stica.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Huggies-10.png\"></center><br><center><strong><h3 class=\"heading-1\">Máximo cuidado para tu bebé</h3></strong><p>¡Hasta con 12 horas de absorción!</p></center>",
    "shortDescription": "<ul><li>Absorción y suavidad.</li><li>Resistente hasta 12 horas.</li><li>NSOA00181-17PE</li></ul>",
    "brand": "BABYSEC",
    "sapCode": "PACKMB42",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "Abrir y extender el pañal con las dos cintas pegables hacia arriba. Coloque al bebé sobre el centro del pañal y pase la parte inferior del pañal entre sus piernitas. Fije las cintas pegables en la banda frontal.",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB42X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB42-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB42-3X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB42M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB42L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB42-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB42-3L.jpg"
        ]
      }
    ],
    "price": 131.8,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Los pañales desechables pueden incendiarse si son expuestos al fuego; para seguridad de sus niños manténgalos siempre alejados. Para evitar peligro de sofocación mantenga la bolsa de plástico lejos de bebés y niños. Si observa alguna reacción desfavorable, suspenda su uso. En caso de que persista, consulte a su médico.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Superabsorbente",
      " Celulosa",
      " Polietileno",
      " Tela no Tejida",
      " Elásticos",
      " Cinta frontal",
      " Cinta precombinada",
      " Adhesivos",
      " Elástico de cintura",
      " Aroma."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300381,
                "name": "Talla XXG / XXL",
                "categories": [],
                "keyword": "talla-xxg--xxl"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 34,
    "fractionalStock": 0,
    "stockRet": 34,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-panal-babysec-premium-super-mega-talla-xxg",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Babysec-1.png\"></center><center><p>Softys cuenta con marcas locales muy reconocidas y valoradas por los consumidores como: Elite, Noble, Cotidian, Ladysoft, Babysec, Ok Pet y más. Además, su propósito es desarrollar marcas que entreguen el mejor cuidado que las personas necesitan en su día a día y en cada etapa de sus vidas</p></center><p></p><h2><center><strong><span style=\"\" font-size:=\"\" 13px;\"\"=\"\">Seguridad y Protección con Babysec Pañales Premium Super Mega</span></strong></center></h2><p></p><center><p>Pañal Babysec Premium con suave cubierta tipo tela y centro super absorbente que resiste hasta 12 horas. Sus cintas son reajustables y tiene cintura ela?stica.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Huggies-10.png\"></center><br><center><strong><h3 class=\"heading-1\">Máximo cuidado para tu bebé</h3></strong><p>¡Hasta con 12 horas de absorción!</p></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "Abrir y extender el pañal con las dos cintas pegables hacia arriba. Coloque al bebé sobre el centro del pañal y pase la parte inferior del pañal entre sus piernitas. Fije las cintas pegables en la banda frontal.",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Superabsorbente, Celulosa, Polietileno, Tela no Tejida, Elásticos, Cinta frontal, Cinta precombinada, Adhesivos, Elástico de cintura, Aroma.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Los pañales desechables pueden incendiarse si son expuestos al fuego; para seguridad de sus niños manténgalos siempre alejados. Para evitar peligro de sofocación mantenga la bolsa de plástico lejos de bebés y niños. Si observa alguna reacción desfavorable, suspenda su uso. En caso de que persista, consulte a su médico.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 131.8,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "037526",
        "name": null,
        "presentationText": "PAQUETE 72 UN",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB42",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB290",
    "name": "Pack 04 Pañales Recién Nacido Huggies Natural Care",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
    "shortDescription": "<ul><li>Pañales para bebés recién nacidos</li><li>Bebés hasta con 4 kg</li><li>Bolsa de 20 unidades</li><li>NSOA00397-10CO</li></ul>",
    "brand": "HUGGIES",
    "sapCode": "PACKMB290",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB290X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB290M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB290L.jpg",
        "thumbnails": []
      }
    ],
    "price": 52,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Mantener fuera del alcance de los niños.",
    "sideEffects": "Pañal Recién Nacido Huggies Natural Care: No usar en dermatitis  o eczemas.",
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 3,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300386,
                "name": "Recién Nacido",
                "categories": [],
                "keyword": "recien-nacido"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 26,
    "fractionalStock": 0,
    "stockRet": 26,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-04-panales-recien-nacido-huggies-natural-care",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "Pañal Recién Nacido Huggies Natural Care: No usar en dermatitis  o eczemas.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 52,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": null,
    "itemsPack": [
      {
        "sku": "010470",
        "name": null,
        "presentationText": "BOLSA 20 UN",
        "quantity": 4,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "MOBILE",
      "WEB"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB290",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB288",
    "name": "Pack Pañales Huggies Natural Care Talla RN + Talla P",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
    "shortDescription": "<p>Pañal Recién Nacido Huggies Natural Care: <ul><li>Pañales para bebés recién nacidos</li><li>Bebés hasta con 4 kg</li><li>Bolsa de 20 unidades</li><li>NSOA00397-10CO</li></ul><p>Pañal Huggies Unisex Talla P Natural Care:<ul><li>Pañales para bebés recién nacidos</li><li>Bebés con 3.5 a 6 kg</li><li>Talla P</li><li>Bolsa de 50 unidades</li><li>NSOA00397-10CO</li></ul>",
    "brand": "HUGGIES",
    "sapCode": "PACKMB288",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB288X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB288M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB288L.jpg",
        "thumbnails": []
      }
    ],
    "price": 50,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Mantener fuera del alcance de los niños.",
    "sideEffects": "No usar en dermatitis o eczemas.",
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 3,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300386,
                "name": "Recién Nacido",
                "categories": [],
                "keyword": "recien-nacido"
              },
              {
                "id": 300383,
                "name": "Talla S / P",
                "categories": [],
                "keyword": "talla-s--p"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 104,
    "fractionalStock": 0,
    "stockRet": 104,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-panales-huggies-naturalcare-rn-talla-p",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "No usar en dermatitis o eczemas.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 50,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": null,
    "itemsPack": [
      {
        "sku": "010470",
        "name": null,
        "presentationText": "BOLSA 20 UN",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      },
      {
        "sku": "010472",
        "name": null,
        "presentationText": "BOLSA 50 UN",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "MOBILE",
      "WEB"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB288",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB24",
    "name": "Pack Toallas Húmedas Ninet Clásicas",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png\"></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu bebé con las Toallitas Húmedas Ninet</span></strong></center></h2><p></p><center><p>Formuladas con aloe vera que limpian y protegen la piel de tu bebé.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Babysec-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la línea de Toallas Húmedas para tu bebé</span></b></center></h2><p></p><p></p><center>Suave cuidado para la delicada piel de tu bebé</center><p></p><p></p>",
    "shortDescription": "<ul><li>Cuidado e higiene infantil</li><li>Hidratación y limpieza de la piel</li><li>Con aloe vera</li><li>Bolsa de 100 unidades</li><li>NSOC38100-18PE</li></ul>",
    "brand": "NINET",
    "sapCode": "PACKMB24",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB24X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB24M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB24L.jpg",
        "thumbnails": []
      }
    ],
    "price": 15.8,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Mantener fuera del alcance de los niños.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      },
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200060,
            "name": "Toallitas Húmedas",
            "categories": [],
            "keyword": "toallitas-humedas"
          },
          {
            "id": 200059,
            "name": "Todo en Ninet",
            "categories": [],
            "keyword": "todo-en-ninet"
          },
          {
            "id": 201382,
            "name": "Promociones para el Cuidado Infantil",
            "categories": [
              {
                "id": 765216,
                "name": "Pañitos Húmedos para tu Día a Día",
                "categories": [],
                "keyword": "panitos-humedos-para-tu-dia-a-dia"
              }
            ],
            "keyword": "promociones-para-el-cuidado-infantil"
          }
        ],
        "keyword": "mama-y-bebe"
      }
    ],
    "stock": 599,
    "fractionalStock": 0,
    "stockRet": 599,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-toallas-humedas-ninet-clasicas",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Ninet.png\"></center><center><p>Los productos Ninet fueron diseñados para ayudarte en cada etapa del desarrollo de tu bebé y con un gran compromiso con todas las familias peruanas de brindarte productos de calidad. Un mundo de experiencias y aventuras para disfrutar con tu bebé. </p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Higiene y Cuidado de tu bebé con las Toallitas Húmedas Ninet</span></strong></center></h2><p></p><center><p>Formuladas con aloe vera que limpian y protegen la piel de tu bebé.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Babysec-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la línea de Toallas Húmedas para tu bebé</span></b></center></h2><p></p><p></p><center>Suave cuidado para la delicada piel de tu bebé</center><p></p><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 15.8,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "025396",
        "name": null,
        "presentationText": "BOLSA 100 UN",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB24",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB237",
    "name": "Pack Pañal Huggies Dermacare Talla G",
    "longDescription": "<center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies, especialmente desarrollados para brindarte calidad, higiene y confianza. Pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Pack de Pañales Huggies Dermacare Talla G Ultra Suave y Respirable</span></strong></center></h2><p></p><center><p><CENTER><p><b>¡El cuidado más avanzado para la piel del bebé!   </b>      </p></CENTER>                     <p style=\"text-align: justify;\" >Pañal ultra suave y respirable con una cubierta ultradelgada que permite brindarle al bebé, la comodidad que necesita manteniendo su piel fresca y sequita hasta con 12 horas de absorción. Diseñado con barrera anti-filtraciones especialmente para contener las heces del recién nacido. Además, es un producto hipoalergénico y dermatológicamente probado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggiesDermacare.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Dermatológicamente testeado para pieles sensibles y delicadas</span></b></center></h2><p></p><p></p><center>Producto sin fragancias ni parabenos ni otras sustancias nocivas</center><p></p><p></p><center>",
    "shortDescription": "<ul>  <li>Ultra Suave y respirable.</li>  <li>Con un toque de Vitamina E que ayuda a prevenir irritaciones.</li>  <li>Barrera trasera anti - filtraciones, especialmente diseñada para las heces del recién nacido.</li>  <li>Ultradelgado para mayor comodidad del bebé.</li>  <li>Súper absorción de hasta 12 h.</li>  <li>Material respirable que permite una piel protegida y sequita.</li><li>NSOA00356-23PE</li></ul>",
    "brand": "HUGGIES",
    "sapCode": "PACKMB237",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<p>¿Cómo ponerlo? Abra el pañal, coloque el extremo con las orejas debajo de la espalda del bebé y a la altura de la cintura. </p><p>¿Cómo cerrarlo? Lleve el otro extremo hacia adelante y pegue las orejas. </p><p>¿Cómo ajustarlo? Verifique el ajuste de los elásticos de las piernas. </p><p>¿Cómo desecharlo? Enrolle el pañal y ciérrelo utilizando las orejas ajustables, Desechar los pañales usados a la basura, nunca en el sanitario. </p>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB237X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB237-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB237-3X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB237M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB237L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB237-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB237-3L.jpg"
        ]
      }
    ],
    "price": 107,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Huggies® como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Poliacrilato de Sodio",
      " Polipropileno con Trazas de Vitamina E",
      " Poliéster",
      " Polietileno",
      " Adhesivos",
      "Elásticos y Viscosa."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 3,
    "productStatus": "SOLD_OUT",
    "productStatusMessage": null,
    "maxUnitSale": 3,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300385,
                "name": "Talla G / L",
                "categories": [],
                "keyword": "talla-g--l"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 0,
    "fractionalStock": 0,
    "stockRet": 0,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-panal-huggies-dermacare-talla-g",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies, especialmente desarrollados para brindarte calidad, higiene y confianza. Pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Pack de Pañales Huggies Dermacare Talla G Ultra Suave y Respirable</span></strong></center></h2><p></p><center><p><CENTER><p><b>¡El cuidado más avanzado para la piel del bebé!   </b>      </p></CENTER>                     <p style=\"text-align: justify;\" >Pañal ultra suave y respirable con una cubierta ultradelgada que permite brindarle al bebé, la comodidad que necesita manteniendo su piel fresca y sequita hasta con 12 horas de absorción. Diseñado con barrera anti-filtraciones especialmente para contener las heces del recién nacido. Además, es un producto hipoalergénico y dermatológicamente probado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggiesDermacare.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Dermatológicamente testeado para pieles sensibles y delicadas</span></b></center></h2><p></p><p></p><center>Producto sin fragancias ni parabenos ni otras sustancias nocivas</center><p></p><p></p><center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<p>¿Cómo ponerlo? Abra el pañal, coloque el extremo con las orejas debajo de la espalda del bebé y a la altura de la cintura. </p><p>¿Cómo cerrarlo? Lleve el otro extremo hacia adelante y pegue las orejas. </p><p>¿Cómo ajustarlo? Verifique el ajuste de los elásticos de las piernas. </p><p>¿Cómo desecharlo? Enrolle el pañal y ciérrelo utilizando las orejas ajustables, Desechar los pañales usados a la basura, nunca en el sanitario. </p>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Poliacrilato de Sodio, Polipropileno con Trazas de Vitamina E, Poliéster, Polietileno, Adhesivos,Elásticos y Viscosa.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Huggies® como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 107,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "071795",
        "name": null,
        "presentationText": "PAQUETE 48 UN",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB237",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": [
      {
        "skuInkafarma": "079455",
        "skuMifarma": "313981",
        "price": 0.1,
        "image": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079455L.jpg",
        "name": "Producto Promocional Huggies Minnie Mouse",
        "stock": 0,
        "presentation": "PELUCHE 1 UN",
        "isLam": "N",
        "familyType": "",
        "eanCode": ""
      }
    ],
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB236",
    "name": "Pack Pañal Huggies Dermacare Talla XG",
    "longDescription": "<center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies, especialmente desarrollados para brindarte calidad, higiene y confianza. Pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Pack de Pañales Huggies Dermacare Talla XG Ultra Suave y Respirable</span></strong></center></h2><p></p><center><p><CENTER><p><b>¡El cuidado más avanzado para la piel del bebé!   </b>      </p></CENTER>                     <p style=\"text-align: justify;\" >Pañal ultra suave y respirable con una cubierta ultradelgada que permite brindarle al bebé, la comodidad que necesita manteniendo su piel fresca y sequita hasta con 12 horas de absorción. Diseñado con barrera anti-filtraciones especialmente para contener las heces del recién nacido. Además, es un producto hipoalergénico y dermatológicamente probado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggiesDermacare.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Dermatológicamente testeado para pieles sensibles y delicadas</span></b></center></h2><p></p><p></p><center>Producto sin fragancias ni parabenos ni otras sustancias nocivas</center><p></p><p></p><center>",
    "shortDescription": "<ul>  <li>Ultra Suave y respirable.</li>  <li>Con un toque de Vitamina E que ayuda a prevenir irritaciones.</li>  <li>Barrera trasera anti - filtraciones, especialmente diseñada para las heces del recién nacido.</li>  <li>Ultradelgado para mayor comodidad del bebé.</li>  <li>Súper absorción de hasta 12 h.</li>  <li>Material respirable que permite una piel protegida y sequita.</li><li>NSOA00356-23PE</li></ul>",
    "brand": "HUGGIES",
    "sapCode": "PACKMB236",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<p>¿Cómo ponerlo? Abra el pañal, coloque el extremo con las orejas debajo de la espalda del bebé y a la altura de la cintura. </p><p>¿Cómo cerrarlo? Lleve el otro extremo hacia adelante y pegue las orejas. </p><p>¿Cómo ajustarlo? Verifique el ajuste de los elásticos de las piernas. </p><p>¿Cómo desecharlo? Enrolle el pañal y ciérrelo utilizando las orejas ajustables, Desechar los pañales usados a la basura, nunca en el sanitario. </p>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB236X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB236-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB236-3X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB236M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB236L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB236-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB236-3L.jpg"
        ]
      }
    ],
    "price": 107,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Huggies® como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Poliacrilato de Sodio",
      " Polipropileno con Trazas de Vitamina E",
      " Poliéster",
      " Polietileno",
      " Adhesivos",
      "Elásticos y Viscosa."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 3,
    "productStatus": "SOLD_OUT",
    "productStatusMessage": null,
    "maxUnitSale": 3,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300382,
                "name": "Talla XG / XL",
                "categories": [],
                "keyword": "talla-xg--xl"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 0,
    "fractionalStock": 0,
    "stockRet": 0,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-panal-huggies-dermacare-talla-xg",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies, especialmente desarrollados para brindarte calidad, higiene y confianza. Pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Pack de Pañales Huggies Dermacare Talla XG Ultra Suave y Respirable</span></strong></center></h2><p></p><center><p><CENTER><p><b>¡El cuidado más avanzado para la piel del bebé!   </b>      </p></CENTER>                     <p style=\"text-align: justify;\" >Pañal ultra suave y respirable con una cubierta ultradelgada que permite brindarle al bebé, la comodidad que necesita manteniendo su piel fresca y sequita hasta con 12 horas de absorción. Diseñado con barrera anti-filtraciones especialmente para contener las heces del recién nacido. Además, es un producto hipoalergénico y dermatológicamente probado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggiesDermacare.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Dermatológicamente testeado para pieles sensibles y delicadas</span></b></center></h2><p></p><p></p><center>Producto sin fragancias ni parabenos ni otras sustancias nocivas</center><p></p><p></p><center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<p>¿Cómo ponerlo? Abra el pañal, coloque el extremo con las orejas debajo de la espalda del bebé y a la altura de la cintura. </p><p>¿Cómo cerrarlo? Lleve el otro extremo hacia adelante y pegue las orejas. </p><p>¿Cómo ajustarlo? Verifique el ajuste de los elásticos de las piernas. </p><p>¿Cómo desecharlo? Enrolle el pañal y ciérrelo utilizando las orejas ajustables, Desechar los pañales usados a la basura, nunca en el sanitario. </p>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Poliacrilato de Sodio, Polipropileno con Trazas de Vitamina E, Poliéster, Polietileno, Adhesivos,Elásticos y Viscosa.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Huggies® como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 107,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "071796",
        "name": null,
        "presentationText": "PAQUETE 38 UN",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB236",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": [
      {
        "skuInkafarma": "079455",
        "skuMifarma": "313981",
        "price": 0.1,
        "image": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079455L.jpg",
        "name": "Producto Promocional Huggies Minnie Mouse",
        "stock": 0,
        "presentation": "PELUCHE 1 UN",
        "isLam": "N",
        "familyType": "",
        "eanCode": ""
      }
    ],
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB234",
    "name": "Pack Pañal Huggies Dermacare Talla M",
    "longDescription": "<center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies, especialmente desarrollados para brindarte calidad, higiene y confianza. Pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Pack de Pañales Huggies Dermacare Talla M Ultra Suave y Respirable</span></strong></center></h2><p></p><center><p><CENTER><p><b>¡El cuidado más avanzado para la piel del bebé!   </b>      </p></CENTER>                     <p style=\"text-align: justify;\">Pañal ultra suave y respirable con una cubierta ultradelgada que permite brindarle al bebé, la comodidad que necesita manteniendo su piel fresca y sequita hasta con 12 horas de absorción. Diseñado con barrera anti-filtraciones especialmente para contener las heces del recién nacido. Además, es un producto hipoalergénico y dermatológicamente probado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggiesDermacare.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"\"font-size: 13px;\">Dermatológicamente testeado para pieles sensibles y delicadas</span></b></center></h2><p></p><p></p><center>Producto sin fragancias ni parabenos ni otras sustancias nocivas</center><p></p><p></p><center>",
    "shortDescription": "<ul>  <li>Ultra Suave y respirable.</li>  <li>Con un toque de Vitamina E que ayuda a prevenir irritaciones.</li>  <li>Barrera trasera anti - filtraciones, especialmente diseñada para las heces del recién nacido.</li>  <li>Ultradelgado para mayor comodidad del bebé.</li>  <li>Súper absorción de hasta 12 h.</li>  <li>Material respirable que permite una piel protegida y sequita.</li><li>NSOA00356-23PE</li></ul>",
    "brand": "HUGGIES",
    "sapCode": "PACKMB234",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<p>¿Cómo ponerlo? Abra el pañal, coloque el extremo con las orejas debajo de la espalda del bebé y a la altura de la cintura. </p><p>¿Cómo cerrarlo? Lleve el otro extremo hacia adelante y pegue las orejas. </p><p>¿Cómo ajustarlo? Verifique el ajuste de los elásticos de las piernas. </p><p>¿Cómo desecharlo? Enrolle el pañal y ciérrelo utilizando las orejas ajustables, Desechar los pañales usados a la basura, nunca en el sanitario. </p>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB234X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB234-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB234-3X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB234M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB234L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB234-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB234-3L.jpg"
        ]
      }
    ],
    "price": 113,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Huggies® como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Poliacrilato de Sodio",
      " Polipropileno con Trazas de Vitamina E",
      " Poliéster",
      " Polietileno",
      " Adhesivos",
      "Elásticos y Viscosa."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 3,
    "productStatus": "SOLD_OUT",
    "productStatusMessage": null,
    "maxUnitSale": 3,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300384,
                "name": "Talla M",
                "categories": [],
                "keyword": "talla-m"
              }
            ],
            "keyword": "panales-para-bebe"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 0,
    "fractionalStock": 0,
    "stockRet": 0,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-panal-huggies-dermacare-talla-m",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies, especialmente desarrollados para brindarte calidad, higiene y confianza. Pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Pack de Pañales Huggies Dermacare Talla M Ultra Suave y Respirable</span></strong></center></h2><p></p><center><p><CENTER><p><b>¡El cuidado más avanzado para la piel del bebé!   </b>      </p></CENTER>                     <p style=\"text-align: justify;\">Pañal ultra suave y respirable con una cubierta ultradelgada que permite brindarle al bebé, la comodidad que necesita manteniendo su piel fresca y sequita hasta con 12 horas de absorción. Diseñado con barrera anti-filtraciones especialmente para contener las heces del recién nacido. Además, es un producto hipoalergénico y dermatológicamente probado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggiesDermacare.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"\"font-size: 13px;\">Dermatológicamente testeado para pieles sensibles y delicadas</span></b></center></h2><p></p><p></p><center>Producto sin fragancias ni parabenos ni otras sustancias nocivas</center><p></p><p></p><center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<p>¿Cómo ponerlo? Abra el pañal, coloque el extremo con las orejas debajo de la espalda del bebé y a la altura de la cintura. </p><p>¿Cómo cerrarlo? Lleve el otro extremo hacia adelante y pegue las orejas. </p><p>¿Cómo ajustarlo? Verifique el ajuste de los elásticos de las piernas. </p><p>¿Cómo desecharlo? Enrolle el pañal y ciérrelo utilizando las orejas ajustables, Desechar los pañales usados a la basura, nunca en el sanitario. </p>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Poliacrilato de Sodio, Polipropileno con Trazas de Vitamina E, Poliéster, Polietileno, Adhesivos,Elásticos y Viscosa.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Huggies® como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 113,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "071794",
        "name": null,
        "presentationText": "PAQUETE 58 UN",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB234",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": [
      {
        "skuInkafarma": "079455",
        "skuMifarma": "313981",
        "price": 0.1,
        "image": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079455L.jpg",
        "name": "Producto Promocional Huggies Minnie Mouse",
        "stock": 0,
        "presentation": "PELUCHE 1 UN",
        "isLam": "N",
        "familyType": "",
        "eanCode": ""
      }
    ],
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKMB194",
    "name": "Pack 02 Pañales Huggies Bigpack Active Sec Talla XXXG",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Cuenta con una gama de productos como: pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\"> Con Fibras Naturales Suaves como el Algodón con el Pack de Pañales</span></strong><b style=\"font-size: 13px; letter-spacing: -0.4px;\">Huggies Bigpack Active Sec Talla XXXG</b></center></h2><p></p><center><p>¡Los nuevos Huggies Active Sec con protección nocturna de hasta 12 horas de absorben más! Más pañales por el mismo precio y sé parte de la experiencia Huggies que te ofrece protección total y flexibilidad para acompañar cada paso del desarrollo de tu bebé. Los Pañales Huggies Active Sec cuentan con la tecnología Xtra-Flex y con canales suaves y súper respirables que se adaptan a los movimientos del bebé. Con una distribución más rápida y mejorada y, un sistema de ajuste flexible: cintura, barreras y orejas elásticas. Dermatológicamente comprobado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Cojín Absorbente Blanco con Cubierta Externa Impresa a Colores </h3></strong><p> Tu bebé más seco con Huggies</p></center>",
    "shortDescription": "<ul><li>Tecnología Xtra-Flex</li><li>Canales que se adaptan a sus movimientos</li><li>Protección total</li><li>Flexibilidad</li><li>…….</li></ul>",
    "brand": "HUGGIES",
    "sapCode": "PACKMB194",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "¿Cómo ponerlo? Abrir el pañal y las orejas traseras y levante las barreras. Poner al bebé y asegurarse de que el pañal cubra la espalda hasta la cintura. ¿Cómo cerrarlo? Quitar las orejas y fíjelas en la tira delantera del pañal, ajustándolas según el cuerpo del bebé. Cuando las orejas ya no alcancen el pegue, cambie al siguiente tamaño de pañal. ¿Cómo ajustarlo? Ajustar el elástico de la pierna para asegurarse de que no se doble sobre las barreras internas. ¿Cómo desecharlo? Enrollar el pañal y asegúrelo utilizando las orejas ajustables. Desechar los pañales usados a la basura, nunca en el sanitario.",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-3X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-4X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-3L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-4L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKMB194-5L.jpg"
        ]
      }
    ],
    "price": 130,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Huggies como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para mayor seguridad de su bebé, mantener alejado del fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, no dejar que su bebé rasgue la bolsa o el pañal. Cualquier otro objeto que su bebé se introduzca en la boca puede causar asfixia. Deseche cualquier pañal que esté rasgado. Mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Celulosa",
      " Poliacrilato de Sodio",
      " Polipropileno",
      " Polietileno",
      " Adhesivos",
      " Elásticos y Trazas de fragancia."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 3,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200062,
            "name": "Pañales para Bebé",
            "categories": [
              {
                "id": 300380,
                "name": "Talla XXXG / XXXL",
                "categories": [],
                "keyword": "talla-xxxg--xxxl"
              }
            ],
            "keyword": "panales-para-bebe"
          },
          {
            "id": 201382,
            "name": "Promociones para el Cuidado Infantil",
            "categories": [
              {
                "id": 765213,
                "name": "Huggies Natural Care - Soft Comfort",
                "categories": [],
                "keyword": "huggies-natural-care---soft-comfort"
              }
            ],
            "keyword": "promociones-para-el-cuidado-infantil"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200158,
            "name": "Packs para el Cuidado Infantil",
            "categories": [],
            "keyword": "packs-para-el-cuidado-infantil"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 33,
    "fractionalStock": 0,
    "stockRet": 33,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-02-panales-huggies-bigpack-active-sec-xxxg",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Huggies.png\"></center><center><p>Los productos Huggies fueron especialmente desarrollados para brindarte calidad, higiene y confianza. Cuenta con una gama de productos como: pañales, toallitas húmedas, calzoncitos entrenadores y más para el cuidado de tu bebé. Disfruta todas las etapas de crecimiento infantil junto a tu bebé, con los productos para el cuidado infantil con Huggies.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\"> Con Fibras Naturales Suaves como el Algodón con el Pack de Pañales</span></strong><b style=\"font-size: 13px; letter-spacing: -0.4px;\">Huggies Bigpack Active Sec Talla XXXG</b></center></h2><p></p><center><p>¡Los nuevos Huggies Active Sec con protección nocturna de hasta 12 horas de absorben más! Más pañales por el mismo precio y sé parte de la experiencia Huggies que te ofrece protección total y flexibilidad para acompañar cada paso del desarrollo de tu bebé. Los Pañales Huggies Active Sec cuentan con la tecnología Xtra-Flex y con canales suaves y súper respirables que se adaptan a los movimientos del bebé. Con una distribución más rápida y mejorada y, un sistema de ajuste flexible: cintura, barreras y orejas elásticas. Dermatológicamente comprobado.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/TablaHuggies.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Cojín Absorbente Blanco con Cubierta Externa Impresa a Colores </h3></strong><p> Tu bebé más seco con Huggies</p></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "¿Cómo ponerlo? Abrir el pañal y las orejas traseras y levante las barreras. Poner al bebé y asegurarse de que el pañal cubra la espalda hasta la cintura. ¿Cómo cerrarlo? Quitar las orejas y fíjelas en la tira delantera del pañal, ajustándolas según el cuerpo del bebé. Cuando las orejas ya no alcancen el pegue, cambie al siguiente tamaño de pañal. ¿Cómo ajustarlo? Ajustar el elástico de la pierna para asegurarse de que no se doble sobre las barreras internas. ¿Cómo desecharlo? Enrollar el pañal y asegúrelo utilizando las orejas ajustables. Desechar los pañales usados a la basura, nunca en el sanitario.",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Celulosa, Poliacrilato de Sodio, Polipropileno, Polietileno, Adhesivos, Elásticos y Trazas de fragancia.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Huggies como cualquier otra ropa, incluidos los pañales de tela, puede quemarse si es expuesto al fuego. Para mayor seguridad de su bebé, mantener alejado del fuego. Para evitar riesgo de asfixia con la bolsa de plástico o materiales del pañal, no dejar que su bebé rasgue la bolsa o el pañal. Cualquier otro objeto que su bebé se introduzca en la boca puede causar asfixia. Deseche cualquier pañal que esté rasgado. Mantener fuera del alcance de los niños. En caso de irritación consulte a su médico. El contacto con cremas para prevención de irritación u otras sustancias aceitosas en las áreas impresas de la superficie externa del pañal puede causar desprendimiento de tinta no riesgosa hacia la piel del bebé.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 130,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "071218",
        "name": null,
        "presentationText": "PAQUETE 70 UN",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKMB194",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  
];


export const MOCK_FARMACIA: Product[] = 
[
    {
    "id": "071265",
    "name": "Pharamol Antigripal 500 mg + 5 mg + 2 mg Tableta Recubierta",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
    "shortDescription": "<ul><p>¿Qué es PHARAMOL ANTIGRIPAL 500mg+5mg+2mg Tableta Recubierta y para qué se utiliza?</p><p>Es un medicamento que contiene: paracetamol que funciona para evitar que los mensajes de dolor lleguen al cerebro, también actúa en el cerebro para reducir la fiebre. La fenilefrina es un descongestionante nasal y la clorfenamina pertenece a un grupo de medicamentos llamados \"antihistamínicos\". Los antihistamínicos ayudan a reducir los síntomas alérgicos al prevenir los efectos de una sustancia llamada histamina. La histamina es producida por el cuerpo en respuesta a sustancias extrañas a las que el cuerpo es alérgico.</p><p>Está indicado para el alivio temporal de los síntomas del resfriado común/ gripe: congestión nasal, dolor de cabeza, secreción nasal, dolor de garganta, dolores y molestias menores, estornudos y fiebre para adultos y adolescentes mayores de 12 años.</p><p>Debe consultar a un médico si empeora o si no mejora o si la fiebre persiste durante más de 3 días o el dolor durante más de 5 días.</p><p>Si el dolor de garganta es grave, persiste durante más de 2 días, ocurre con o es seguido de fiebre, dolor de cabeza, erupción cutánea, náuseas o vómitos, consulte a un médico de inmediato.</p><li>RS: EN-09365</li></ul>",
    "brand": "MKT PHARMA",
    "sapCode": "829824",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071265X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071265-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071265-3X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071265M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071265L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071265-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071265-3L.jpg"
        ]
      }
    ],
    "price": 95.0,
    "fractionatedPrice": 1.9,
    "prescription": "Venta Libre",
    "precautions": "<ul><p>Consulte a su médico o farmacéutico antes de empezar a tomar este medicamento.</p><li>No tomar más cantidad de medicamento que la recomendada.</li><li>Los alcohólicos crónicos deberán tener la precaución de no tomar más de 2 g de paracetamol (4 tabletas recubiertas de PHARAMOL ANTIGRIPAL 500mg+5mg+2mg Tableta Recubierta).</li><li>Debe evitarse el uso simultáneo de este medicamento con otros medicamentos que contengan paracetamol, ya que las dosis altas pueden dar lugar a daño en el hígado. No use más de un medicamento que contenga paracetamol sin consultar al médico.</li><br><br><p>Deben consultar al médico antes de tomar este medicamento:</p><br><br><li>Los pacientes con enfermedades del riñón, del hígado, del corazón o del pulmón y los pacientes con anemia.<p></p></li><li>Los pacientes asmáticos sensibles al ácido acetilsalicílico.</li><li>Los pacientes sensibles (alérgicos) a un antihistamínico, porque pueden ser sensibles a otros antihistamínicos (como es clorfenamina).</li><li>Los pacientes que estén en tratamiento con medicamentos para tratar: hipertrofia de próstata, asma bronquial, latidos del corazón muy lentos, hipotensión, arteriosclerosis cerebral, inflamación del páncreas (pancreatitis), úlcera digestiva (úlcera péptica estenosante), obstrucción piloroduodenal (entre el estómago y el intestino), enfermedades del tiroides, pacientes sensibles a los efectos sedantes de algunos medicamentos.</li><li>Si está en tratamiento con antidepresivos tricíclicos o medicamentos con efecto similar y le aparecen problemas gastrointestinales, debe dejar de tomar este medicamento y consultar inmediatamente a un médico, porque se le podría producir íleo paralítico (detención de los movimientos normales de una parte dell intestino).</li></ul>",
    "sideEffects": "<ul><p>No tome PHARAMOL ANTIGRIPAL 500mg+5mg+2mg Tableta Recubierta</p><li>Si es alérgico (hipersensible) al paracetamol, a la fenilefrina, a la clorfenamina o a cualquiera de los demás componentes del medicamento.</li><li>Si tiene la tensión alta (hipertensión arterial).</li><li>Si padece enfermedad del tiroides (hipertiroidismo).</li><li>Si padece alguna enfermedad del hígado o riñón grave.</li><li>Si padece alguna enfermedad grave del corazón o las arterias (como enfermedad coronaria grave o angina de pecho).</li><li>Si padece diabetes mellitus.</li><li>Si padece taquicardia (latidos del corazón rápidos).</li><li>Si está en tratamiento con algún medicamento inhibidor de la monoaminooxidasa (IMAO) (como pueden ser algunos medicamentos antidepresivos, o medicamentos para tratar la enfermedad de Parkinson).</li><li>Si está en tratamiento con medicamentos simpaticomiméticos (medicamentos utilizados para el tratamiento del asma, o medicamentos para acelerar la frecuencia de los latidos del corazón).</li><li>Si está en tratamiento con medicamentos betabloqueantes (medicamentos para el corazón o para tratar enfermedades de las arterias.</li><li>Si tiene glaucoma (elevación de la presión ocular).</li><li>Los niños menores de 12 años no pueden tomar este medicamento.</li></ul>",
    "favorite": false,
    "concentration": null,
    "presentation": "CAJA",
    "quantityUnits": 50,
    "unitMeasure": "UN",
    "fractionalMode": true,
    "activePrinciples": [
      "<ul><p>Cada Tableta Recubierta contiene:</p><li>Paracetamol.............500 mg</li><li>Fenilefrina clorhidrato..5 mg</li><li>Clorfenamina maleato.....2 mg</li><p>Excipientes c.s.p......1 Tab. Rec.</p></ul>"
    ],
    "fractionatedForm": "SOBRE",
    "fractionatedText": "SOBRE 1 UN",
    "noFractionatedText": "CAJA 100 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 300,
    "categoryList": [
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300456,
                "name": "Congestión Nasal",
                "categories": [],
                "keyword": "congestion-nasal"
              },
              {
                "id": 300455,
                "name": "Preparaciones para Tos y Resfrío",
                "categories": [],
                "keyword": "preparaciones-para-tos-y-resfrio"
              },
              {
                "id": 300457,
                "name": "Analgésicos",
                "categories": [],
                "keyword": "analgesicos"
              }
            ],
            "keyword": "resfriado-comun"
          }
        ],
        "keyword": "farmacia"
      }
    ],
    "stock": 30,
    "fractionalStock": 1531,
    "stockRet": 30,
    "fractionalRetStock": 1531,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": true,
    "quantityUnitsCore": 50,
    "limitOfferTime": null,
    "slug": "pharamol-antigripal-tableta-recubierta",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "<ul><p>Cada Tableta Recubierta contiene:</p><li>Paracetamol.............500 mg</li><li>Fenilefrina clorhidrato..5 mg</li><li>Clorfenamina maleato.....2 mg</li><p>Excipientes c.s.p......1 Tab. Rec.</p></ul>",
        "key": "COMPOSITION"
      },
      {
        "order": 3,
        "title": "Contraindicaciones",
        "content": "<ul><p>No tome PHARAMOL ANTIGRIPAL 500mg+5mg+2mg Tableta Recubierta</p><li>Si es alérgico (hipersensible) al paracetamol, a la fenilefrina, a la clorfenamina o a cualquiera de los demás componentes del medicamento.</li><li>Si tiene la tensión alta (hipertensión arterial).</li><li>Si padece enfermedad del tiroides (hipertiroidismo).</li><li>Si padece alguna enfermedad del hígado o riñón grave.</li><li>Si padece alguna enfermedad grave del corazón o las arterias (como enfermedad coronaria grave o angina de pecho).</li><li>Si padece diabetes mellitus.</li><li>Si padece taquicardia (latidos del corazón rápidos).</li><li>Si está en tratamiento con algún medicamento inhibidor de la monoaminooxidasa (IMAO) (como pueden ser algunos medicamentos antidepresivos, o medicamentos para tratar la enfermedad de Parkinson).</li><li>Si está en tratamiento con medicamentos simpaticomiméticos (medicamentos utilizados para el tratamiento del asma, o medicamentos para acelerar la frecuencia de los latidos del corazón).</li><li>Si está en tratamiento con medicamentos betabloqueantes (medicamentos para el corazón o para tratar enfermedades de las arterias.</li><li>Si tiene glaucoma (elevación de la presión ocular).</li><li>Los niños menores de 12 años no pueden tomar este medicamento.</li></ul>",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 4,
        "title": "Precaución y advertencia",
        "content": "<ul><p>Consulte a su médico o farmacéutico antes de empezar a tomar este medicamento.</p><li>No tomar más cantidad de medicamento que la recomendada.</li><li>Los alcohólicos crónicos deberán tener la precaución de no tomar más de 2 g de paracetamol (4 tabletas recubiertas de PHARAMOL ANTIGRIPAL 500mg+5mg+2mg Tableta Recubierta).</li><li>Debe evitarse el uso simultáneo de este medicamento con otros medicamentos que contengan paracetamol, ya que las dosis altas pueden dar lugar a daño en el hígado. No use más de un medicamento que contenga paracetamol sin consultar al médico.</li><br><br><p>Deben consultar al médico antes de tomar este medicamento:</p><br><br><li>Los pacientes con enfermedades del riñón, del hígado, del corazón o del pulmón y los pacientes con anemia.<p></p></li><li>Los pacientes asmáticos sensibles al ácido acetilsalicílico.</li><li>Los pacientes sensibles (alérgicos) a un antihistamínico, porque pueden ser sensibles a otros antihistamínicos (como es clorfenamina).</li><li>Los pacientes que estén en tratamiento con medicamentos para tratar: hipertrofia de próstata, asma bronquial, latidos del corazón muy lentos, hipotensión, arteriosclerosis cerebral, inflamación del páncreas (pancreatitis), úlcera digestiva (úlcera péptica estenosante), obstrucción piloroduodenal (entre el estómago y el intestino), enfermedades del tiroides, pacientes sensibles a los efectos sedantes de algunos medicamentos.</li><li>Si está en tratamiento con antidepresivos tricíclicos o medicamentos con efecto similar y le aparecen problemas gastrointestinales, debe dejar de tomar este medicamento y consultar inmediatamente a un médico, porque se le podría producir íleo paralítico (detención de los movimientos normales de una parte dell intestino).</li></ul>",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": 2,
    "presentationId": 1,
    "quantityUnitsFractionated": 0,
    "visiblePresentations": [
      "unit",
      "pack"
    ],
    "pricePack": 95.0,
    "quantityUnitsPack": 50,
    "unitPrice": 1.9,
    "descriptionUnits": null,
    "tagImageUrl": "https://inkafarmaproductimages.s3.us-west-2.amazonaws.com/tags/TAG-3x2.jpg",
    "secondaryTagImageUrl": null,
    "alertTagText": "",
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0.0,
    "unitPriceWithPaymentMethod": 0.0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0.0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "3G",
    "saleChannels": [
      "CALL",
      "MOBILE",
      "WEB"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "306188",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "3E",
    "substituteList": [
      {
        "orderId": "4",
        "skuInkafarma": "067555",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "073606",
        "guaranteed": "GG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "037437",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "007068",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "428277",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "018019",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "006925",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "071469",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "072433",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "430617",
        "guaranteed": "NG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": null,
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": true,
    "isGeneric": false
  },
  {
    "id": "PACKFC6",
    "name": "Pack Vick VapoRub Ungüento 100 Gr",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
    "shortDescription": "<ul><li>Ayuda a descongestionar las vías respiratorias</li><li>Calma la tos</li><li>Alivio temporal de dolor muscular menores</li><li>Registro Sanitario E-22732</li></ul>",
    "brand": "VICK",
    "sapCode": "PACKFC6",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC6X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC6M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC6L.jpg",
        "thumbnails": []
      }
    ],
    "price": 32.6,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100001,
        "name": "Salud",
        "categories": [
          {
            "id": 200009,
            "name": "Sistema Respiratorio",
            "categories": [
              {
                "id": 300058,
                "name": "Preparaciones Nasales Tópicas",
                "categories": [],
                "keyword": "preparaciones-nasales-topicas"
              }
            ],
            "keyword": "sistema-respiratorio"
          }
        ],
        "keyword": "salud"
      },
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300456,
                "name": "Congestión Nasal",
                "categories": [],
                "keyword": "congestion-nasal"
              }
            ],
            "keyword": "resfriado-comun"
          },
          {
            "id": 200176,
            "name": "Lo Mejor de P&G Health",
            "categories": [
              {
                "id": 300725,
                "name": "Vick",
                "categories": [],
                "keyword": "vick"
              }
            ],
            "keyword": "lo-mejor-de-pg-health"
          }
        ],
        "keyword": "farmacia"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200163,
            "name": "Packs de Farmacia",
            "categories": [],
            "keyword": "packs-de-farmacia"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 168,
    "fractionalStock": 0,
    "stockRet": 168,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-vick-vaporub-unguento-100-gr",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 32.6,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "324070",
        "name": null,
        "presentationText": "POTE 100 GR",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKFC6",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKFC5",
    "name": "Pack Vick 44 Jarabe Sabor Cereza 120 ML",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick 44 es un jarabe que alivia la tos seca y con flema, su efecto es antitusígeno y expectorante. No genera somnolencia.</center>",
    "shortDescription": "<ul><li>•Alivia la tos seca y con flema.• Efecto antitusígeno y expectorante.</li><li>Registro Sanitario E-11206</li></ul>",
    "brand": "VICK",
    "sapCode": "PACKFC5",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC5X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC5M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC5L.jpg",
        "thumbnails": []
      }
    ],
    "price": 39.2,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "ADVERTENCIAS Y PRECAUCIONES: No exceda Ia dosis recomendada. No tome este producto por más de 7 días seguidos. Consulte a su médico si los síntomas persisten, o si esta acompañado de fiebre alta, sarpullido o dolor de cabeza permanente, o si la tos empeora. Si está tomando otros medicamentos y no sabe si contiene un IMAO, consulte a un médico o farmacéutico antes de tomar este producto. No se administre a pacientes que presenten alergia a los componentes de Ia formula. Adminístrese con precaución en pacientes con insuficiencia hepática y / o renal. Contiene Sacarina Sódica.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "200mg de Guaifenesina y 20mg de Bromhidrato de Dextrometorfano."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300455,
                "name": "Preparaciones para Tos y Resfrío",
                "categories": [],
                "keyword": "preparaciones-para-tos-y-resfrio"
              }
            ],
            "keyword": "resfriado-comun"
          },
          {
            "id": 200176,
            "name": "Lo Mejor de P&G Health",
            "categories": [
              {
                "id": 300725,
                "name": "Vick",
                "categories": [],
                "keyword": "vick"
              }
            ],
            "keyword": "lo-mejor-de-pg-health"
          },
          {
            "id": 200154,
            "name": "Malestar de la Tos con Flema",
            "categories": [],
            "keyword": "malestar-de-la-tos-con-flema"
          }
        ],
        "keyword": "farmacia"
      },
      {
        "id": 100001,
        "name": "Salud",
        "categories": [
          {
            "id": 200009,
            "name": "Sistema Respiratorio",
            "categories": [
              {
                "id": 300066,
                "name": "Antitusígenos",
                "categories": [],
                "keyword": "antitusigenos"
              }
            ],
            "keyword": "sistema-respiratorio"
          }
        ],
        "keyword": "salud"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200163,
            "name": "Packs de Farmacia",
            "categories": [],
            "keyword": "packs-de-farmacia"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 112,
    "fractionalStock": 0,
    "stockRet": 112,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-vick-44-jarabe-sabor-cereza-120-ml",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick 44 es un jarabe que alivia la tos seca y con flema, su efecto es antitusígeno y expectorante. No genera somnolencia.</center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "200mg de Guaifenesina y 20mg de Bromhidrato de Dextrometorfano.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "ADVERTENCIAS Y PRECAUCIONES: No exceda Ia dosis recomendada. No tome este producto por más de 7 días seguidos. Consulte a su médico si los síntomas persisten, o si esta acompañado de fiebre alta, sarpullido o dolor de cabeza permanente, o si la tos empeora. Si está tomando otros medicamentos y no sabe si contiene un IMAO, consulte a un médico o farmacéutico antes de tomar este producto. No se administre a pacientes que presenten alergia a los componentes de Ia formula. Adminístrese con precaución en pacientes con insuficiencia hepática y / o renal. Contiene Sacarina Sódica.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 39.2,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "264050",
        "name": null,
        "presentationText": "FRASCO 120 ML",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKFC5",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKFC41",
    "name": "Pack Vick Vaporub 50g + 03 Sobres Vick Vitapyrena Forte",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
    "shortDescription": "<ul><li>Alivia los síntomas asociados al resfriado y congestión nasal</li><li>Alivia el dolor de cabeza, fiebre, dolor corporal y de garganta</li><li>Registro Sanitario: E-17169</li><li>Registro Sanitario E-22732</li></ul>",
    "brand": "VICK",
    "sapCode": "PACKFC41",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC41X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC41M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC41L.jpg",
        "thumbnails": []
      }
    ],
    "price": 17.1,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "SKU 324069: Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g. SKU 327091: Cada sobre contiene:                                                             • Paracetamol 500 mg•  Clorhidrato De Fenilefrina 10mg"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300457,
                "name": "Analgésicos",
                "categories": [],
                "keyword": "analgesicos"
              },
              {
                "id": 300456,
                "name": "Congestión Nasal",
                "categories": [],
                "keyword": "congestion-nasal"
              }
            ],
            "keyword": "resfriado-comun"
          },
          {
            "id": 200176,
            "name": "Lo Mejor de P&G Health",
            "categories": [
              {
                "id": 300725,
                "name": "Vick",
                "categories": [],
                "keyword": "vick"
              }
            ],
            "keyword": "lo-mejor-de-pg-health"
          }
        ],
        "keyword": "farmacia"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200157,
            "name": "Packs de Nutrición y Bienestar",
            "categories": [],
            "keyword": "packs-de-nutricion-y-bienestar"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 555,
    "fractionalStock": 0,
    "stockRet": 555,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-vick-vaporub-50gr-03-vick-vitapyrena-forte",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "SKU 324069: Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g. SKU 327091: Cada sobre contiene:                                                             • Paracetamol 500 mg•  Clorhidrato De Fenilefrina 10mg",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 17.1,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "324069",
        "name": null,
        "presentationText": "POTE 50 GR",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      },
      {
        "sku": "327091",
        "name": null,
        "presentationText": "GRANULADO 1 UN",
        "quantity": 3,
        "presentationNoFractionated": false,
        "fractionalPresentation": true,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKFC41",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKFC37",
    "name": "Pack 03 Sobres Antigripal Vick VitaPyrena Forte",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
    "shortDescription": "<ul><li>Alivia los síntomas asociados al resfriado y congestión nasal</li><li>Alivia el dolor de cabeza, fiebre, dolor corporal y de garganta</li><li>Registro Sanitario: E-17169</li></ul>",
    "brand": "VICK",
    "sapCode": "PACKFC37",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC37X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC37M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC37L.jpg",
        "thumbnails": []
      }
    ],
    "price": 6.300000000000001,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Si toma otro medicamento, la fiebre continuara por más de 3 días o los síntomas persisten consulte a su médico. No use por más de 5 días seguidos ya que puede producir daño hepático o renal. Evite el consumo de alcohol durante su uso. ADVERTENCIAS: No se use en el embarazo y la lactancia. No use en menores de 12 años ni en pacientes con fenilcetonuria, ya que se metaboliza a Fenilalanina, que puede causar toxicidad.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "Cada sobre contiene:                                                             • Paracetamol 500 mg•  Clorhidrato De Fenilefrina 10mg"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300457,
                "name": "Analgésicos",
                "categories": [],
                "keyword": "analgesicos"
              },
              {
                "id": 300456,
                "name": "Congestión Nasal",
                "categories": [],
                "keyword": "congestion-nasal"
              }
            ],
            "keyword": "resfriado-comun"
          }
        ],
        "keyword": "farmacia"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200157,
            "name": "Packs de Nutrición y Bienestar",
            "categories": [],
            "keyword": "packs-de-nutricion-y-bienestar"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 1272,
    "fractionalStock": 0,
    "stockRet": 1272,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-03-vick-vitapyrena-sobres",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Cada sobre contiene:                                                             • Paracetamol 500 mg•  Clorhidrato De Fenilefrina 10mg",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Si toma otro medicamento, la fiebre continuara por más de 3 días o los síntomas persisten consulte a su médico. No use por más de 5 días seguidos ya que puede producir daño hepático o renal. Evite el consumo de alcohol durante su uso. ADVERTENCIAS: No se use en el embarazo y la lactancia. No use en menores de 12 años ni en pacientes con fenilcetonuria, ya que se metaboliza a Fenilalanina, que puede causar toxicidad.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 6.300000000000001,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "327091",
        "name": null,
        "presentationText": "GRANULADO 1 UN",
        "quantity": 3,
        "presentationNoFractionated": false,
        "fractionalPresentation": true,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKFC37",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKFC142",
    "name": "Pack Vick Vaporub 50g + 06 Sobres Vitapyrena Forte",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.<p> Vick VitaPyrena Forte alivia los síntomas asociados al resfriado como la congestión nasal, el dolor de cabeza, la fiebre, dolor de garganta.",
    "shortDescription": "<p>Vick Vaporub Ungüento Tópico: <ul><li>Ayuda a descongestionar las vías respiratorias</li><li>Calma la tos</li><li>Alivio temporal de dolor muscular menores</li><li>Registro Sanitario E-22732<br></li></ul><p>Vitapyrena Forte Antigripal Sabor Miel y Limón: <p>VitaPyrena Forte alivia las molestias del resfriado común: congestion nasal,dolor de cabeza,fiebre,dolor corporal y dolor de garganta</p><ul><li>Antigripal</li><li>Sabor a miel y limon</li><li>Polvo para solución oral</li><li>RS: EE-00947</li></ul>",
    "brand": "VICK",
    "sapCode": "PACKFC142",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC142X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC142M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKFC142L.jpg",
        "thumbnails": []
      }
    ],
    "price": 23.400000000000002,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "<p>Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. <p>ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
    "sideEffects": "<p>Vick Vaporub Ungüento tópico: Hipersensibilidad a los componentes de la fórmula.<p>Vitapyrena Forte Antigripal Sabor Miel y Limón: Alergia a los componentes de la formula, insuficiencia hepática o renal, aumento de tamaño de la próstata, hipertensión, enfermedad de la tiroides, diabetes.",
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "<p>Vick Vaporub Ungüento tópico: Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g<p>Vitapyrena Forte Antigripal Sabor Miel y Limón: Cada sobre contiene: <li>Paracetamol 500 mg<li> Clorhidrato De Fenilefrina 10mg"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 3,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300456,
                "name": "Congestión Nasal",
                "categories": [],
                "keyword": "congestion-nasal"
              },
              {
                "id": 300455,
                "name": "Preparaciones para Tos y Resfrío",
                "categories": [],
                "keyword": "preparaciones-para-tos-y-resfrio"
              },
              {
                "id": 300457,
                "name": "Analgésicos",
                "categories": [],
                "keyword": "analgesicos"
              }
            ],
            "keyword": "resfriado-comun"
          }
        ],
        "keyword": "farmacia"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200163,
            "name": "Packs de Farmacia",
            "categories": [],
            "keyword": "packs-de-farmacia"
          }
        ],
        "keyword": "inka-packs"
      }
    ],
    "stock": 555,
    "fractionalStock": 0,
    "stockRet": 555,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-vick-vaporub-50g-vitapyrena-forte",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "<p>Vick Vaporub Ungüento tópico: Hipersensibilidad a los componentes de la fórmula.<p>Vitapyrena Forte Antigripal Sabor Miel y Limón: Alergia a los componentes de la formula, insuficiencia hepática o renal, aumento de tamaño de la próstata, hipertensión, enfermedad de la tiroides, diabetes.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.<p> Vick VitaPyrena Forte alivia los síntomas asociados al resfriado como la congestión nasal, el dolor de cabeza, la fiebre, dolor de garganta.",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "<p>Vick Vaporub Ungüento tópico: Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g<p>Vitapyrena Forte Antigripal Sabor Miel y Limón: Cada sobre contiene: <li>Paracetamol 500 mg<li> Clorhidrato De Fenilefrina 10mg",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "<p>Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. <p>ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 23.400000000000002,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": null,
    "itemsPack": [
      {
        "sku": "324069",
        "name": null,
        "presentationText": "POTE 50 GR",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      },
      {
        "sku": "327091",
        "name": null,
        "presentationText": "GRANULADO 1 UN",
        "quantity": 6,
        "presentationNoFractionated": false,
        "fractionalPresentation": true,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "MOBILE",
      "WEB"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKFC142",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "324070",
    "name": "Vick Vaporub Ungüento tópico",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
    "shortDescription": "<ul><li>Ayuda a descongestionar las vías respiratorias</li><li>Calma la tos</li><li>Alivio temporal de dolor muscular menores</li><li>Registro Sanitario E-22732<br></li></ul>",
    "brand": "VICK",
    "sapCode": "108797",
    "eanCode": "",
    "isLam": "N",
    "familyType": "Farma",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/324070X.jpg",
        "thumbnails": [
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-2X.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-3X.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-4X.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/324070M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/324070L.jpg",
        "thumbnails": [
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-2L.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-3L.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-4L.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324070-5L.jpg"
        ]
      }
    ],
    "price": 16.3,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
    "sideEffects": "Hipersensibilidad a los componentes de la fórmula.",
    "favorite": false,
    "concentration": null,
    "presentation": "POTE",
    "quantityUnits": 1,
    "unitMeasure": "GR",
    "fractionalMode": false,
    "activePrinciples": [
      "Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "POTE 100 GR",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100001,
        "name": "Salud",
        "categories": [
          {
            "id": 200009,
            "name": "Sistema Respiratorio",
            "categories": [
              {
                "id": 300058,
                "name": "Preparaciones Nasales Tópicas",
                "categories": [],
                "keyword": "preparaciones-nasales-topicas"
              }
            ],
            "keyword": "sistema-respiratorio"
          }
        ],
        "keyword": "salud"
      },
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300456,
                "name": "Congestión Nasal",
                "categories": [],
                "keyword": "congestion-nasal"
              }
            ],
            "keyword": "resfriado-comun"
          },
          {
            "id": 200176,
            "name": "Lo Mejor de P&G Health",
            "categories": [
              {
                "id": 300725,
                "name": "Vick",
                "categories": [],
                "keyword": "vick"
              }
            ],
            "keyword": "lo-mejor-de-pg-health"
          }
        ],
        "keyword": "farmacia"
      }
    ],
    "stock": 337,
    "fractionalStock": 0,
    "stockRet": 337,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "vick-vaporub-unguento-topico",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "Hipersensibilidad a los componentes de la fórmula.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 16.3,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 55,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "137770",
    "publishWithoutStock": true,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "NG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "072284",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "072283",
        "guaranteed": "3G"
      },
      {
        "orderId": "7",
        "skuInkafarma": "324069",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "324071",
        "guaranteed": "NG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "324069",
    "name": "Vick Vaporub Ungüento tópico",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
    "shortDescription": "<ul><li>Ayuda a descongestionar las vías respiratorias</li><li>Calma la tos</li><li>Alivio temporal de dolor muscular menores</li><li>Registro Sanitario E-22732</li></ul>",
    "brand": "VICK",
    "sapCode": "108798",
    "eanCode": "",
    "isLam": "N",
    "familyType": "Farma",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/324069X.jpg",
        "thumbnails": [
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-2X.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-3X.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-4X.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/324069M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/324069L.jpg",
        "thumbnails": [
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-2L.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-3L.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-4L.jpg",
          "https://inkafarmaproductimages.s3-us-west-2.amazonaws.com/imagesproducto/324069-5L.jpg"
        ]
      }
    ],
    "price": 10.8,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
    "sideEffects": "Hipersensibilidad a los componentes de la fórmula.",
    "favorite": false,
    "concentration": null,
    "presentation": "POTE",
    "quantityUnits": 1,
    "unitMeasure": "GR",
    "fractionalMode": false,
    "activePrinciples": [
      "Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "POTE 50 GR",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100001,
        "name": "Salud",
        "categories": [
          {
            "id": 200009,
            "name": "Sistema Respiratorio",
            "categories": [
              {
                "id": 300058,
                "name": "Preparaciones Nasales Tópicas",
                "categories": [],
                "keyword": "preparaciones-nasales-topicas"
              }
            ],
            "keyword": "sistema-respiratorio"
          }
        ],
        "keyword": "salud"
      },
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300456,
                "name": "Congestión Nasal",
                "categories": [],
                "keyword": "congestion-nasal"
              }
            ],
            "keyword": "resfriado-comun"
          },
          {
            "id": 200176,
            "name": "Lo Mejor de P&G Health",
            "categories": [
              {
                "id": 300725,
                "name": "Vick",
                "categories": [],
                "keyword": "vick"
              }
            ],
            "keyword": "lo-mejor-de-pg-health"
          }
        ],
        "keyword": "farmacia"
      }
    ],
    "stock": 555,
    "fractionalStock": 0,
    "stockRet": 555,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "vick-vaporub-unguento-topico",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "Hipersensibilidad a los componentes de la fórmula.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/vick-logo.jpg\"></center><br><center>Vick VapoRub es un ungüento que combina mentol, eucalipto y alcanfor en un ungüento, que ayuda a descongestionar las vías respiratorias, calmar la tos y  alivio temporal de dolores musculares menores.</center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Alcanfor 5.26g| Mentol 2.82g| Aceite de eucalipto 1.33g",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Si presenta fiebre o si los síntomas persisten por más de 3 días, en caso de embarazo o periodos de lactancia consultar al médico. Evitar el contacto con los ojos. No ingerir. Descontinuar su uso si aparece irritación. No aplicar en heridas o piel dañada. No usar vendajes oclusivos o compresas calientes. ADVERTENCIAS: Por contener alcanfor, no usar en niños menores de 3 años, Salvo prescripción médica. Puede causar convulsiones. Evitar la aplicación en fosas nasales. Para su uso por vaporización. No calentar directamente o exponer al fuego o calentar en horno microondas. El uso inadecuado puede causar daños/quemaduras. En caso de ingestión accidental buscar asistencia médica.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 10.8,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": null,
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 138,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "137771",
    "publishWithoutStock": true,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "NG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "072284",
        "guaranteed": "3G"
      },
      {
        "orderId": "3",
        "skuInkafarma": "072283",
        "guaranteed": "3G"
      },
      {
        "orderId": "7",
        "skuInkafarma": "324070",
        "guaranteed": "NG"
      },
      {
        "orderId": "7",
        "skuInkafarma": "324071",
        "guaranteed": "NG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "108071",
    "name": "Mejoral 500 mg - 30 mg Tabletas - Caja 200 UN",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
    "shortDescription": "<ul><li>Analgésico, antimigraña.</li><li>Registro Sanitario N-759</li></ul>",
    "brand": "MEDIFARMA",
    "sapCode": "105263",
    "eanCode": "",
    "isLam": "N",
    "familyType": "Farma",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/108071X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/108071M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/108071L.jpg",
        "thumbnails": []
      }
    ],
    "price": 53,
    "fractionatedPrice": 2.65,
    "prescription": "Venta Libre",
    "precautions": "ADVERTENCIA Y PRECAUCIONES:\nSe ha demostrado una asociación entre el consumo de ácido acetilsalicílico en niños y la presencia de síndrome de reye. No use en casos de hipersensibilidad a cualquier de los componentes de este medicamento, en menores de 16 años (salvo por indicación médica), si tiene enfermedad renal o hepática, ulcera péptica activa o preexistente, gota, antecedentes de hemofilia, trombocitopenia o alteraciones de la coagulación; antecedentes de hemorragia digestiva o perforación gástrica, asma, broncoespasmo, rinitis, urticaria, pólipos nasales, luego de la administración de antiinflamatorios. Pregunta a su médico y/o farmacéutico antes de usar si usted es alérgico a cualquier de los componentes de este medicamento, tiene edad avanzada, enfermedad renal o hepática, asma, hipertensión, esta deshidratado. Debe informar a su médico si presenta sangrado anormal.",
    "sideEffects": "Embarazo Lactancia: No se recomienda su uso, especialmente durante el tercer trimestre del embarazo, excepto bajo supervisión médica. Su uso durante la lactancia deberá evitarse. En caso de ingestión mayor a la dosis recomendada busque ayuda médica. Luego de la administración repetida de dosis altas aparece intoxicación moderada por salicilatos. En caso de sobredosis puede sugerir dolor de cabeza, disminución de la audición, mareos, zumbido de oídos, visión borrosa, letargo, confusión, sudoración, sed, hiperventilación, náuseas y vómitos.",
    "favorite": false,
    "concentration": null,
    "presentation": "CAJA",
    "quantityUnits": 200,
    "unitMeasure": "UN",
    "fractionalMode": true,
    "activePrinciples": [
      "Ácido acetilsalicílico | Cafeína"
    ],
    "fractionatedForm": "BLÍSTER",
    "fractionatedText": "BLÍSTER 10 UN",
    "noFractionatedText": "CAJA 200 UN",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 120,
    "categoryList": [
      {
        "id": 100001,
        "name": "Salud",
        "categories": [
          {
            "id": 200011,
            "name": "Problemas Generales",
            "categories": [
              {
                "id": 300084,
                "name": "Analgésico y Antiinflamatorios",
                "categories": [],
                "keyword": "analgesico-y-antiinflamatorios"
              }
            ],
            "keyword": "problemas-generales"
          }
        ],
        "keyword": "salud"
      },
      {
        "id": 100007,
        "name": "Farmacia",
        "categories": [
          {
            "id": 200083,
            "name": "Malestar General y Fiebre",
            "categories": [
              {
                "id": 300459,
                "name": "Analgésicos",
                "categories": [],
                "keyword": "analgesicos-1"
              }
            ],
            "keyword": "malestar-general-y-fiebre"
          },
          {
            "id": 200081,
            "name": "Resfriado Común",
            "categories": [
              {
                "id": 300457,
                "name": "Analgésicos",
                "categories": [],
                "keyword": "analgesicos"
              }
            ],
            "keyword": "resfriado-comun"
          }
        ],
        "keyword": "farmacia"
      }
    ],
    "stock": 3,
    "fractionalStock": 75,
    "stockRet": 3,
    "fractionalRetStock": 75,
    "showStockAlert": "Y",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": true,
    "quantityUnitsCore": 200,
    "limitOfferTime": null,
    "slug": "mejoral-500-mg-30-mg-tabletas",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "Embarazo Lactancia: No se recomienda su uso, especialmente durante el tercer trimestre del embarazo, excepto bajo supervisión médica. Su uso durante la lactancia deberá evitarse. En caso de ingestión mayor a la dosis recomendada busque ayuda médica. Luego de la administración repetida de dosis altas aparece intoxicación moderada por salicilatos. En caso de sobredosis puede sugerir dolor de cabeza, disminución de la audición, mareos, zumbido de oídos, visión borrosa, letargo, confusión, sudoración, sed, hiperventilación, náuseas y vómitos.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "Ácido acetilsalicílico | Cafeína",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "ADVERTENCIA Y PRECAUCIONES:\nSe ha demostrado una asociación entre el consumo de ácido acetilsalicílico en niños y la presencia de síndrome de reye. No use en casos de hipersensibilidad a cualquier de los componentes de este medicamento, en menores de 16 años (salvo por indicación médica), si tiene enfermedad renal o hepática, ulcera péptica activa o preexistente, gota, antecedentes de hemofilia, trombocitopenia o alteraciones de la coagulación; antecedentes de hemorragia digestiva o perforación gástrica, asma, broncoespasmo, rinitis, urticaria, pólipos nasales, luego de la administración de antiinflamatorios. Pregunta a su médico y/o farmacéutico antes de usar si usted es alérgico a cualquier de los componentes de este medicamento, tiene edad avanzada, enfermedad renal o hepática, asma, hipertensión, esta deshidratado. Debe informar a su médico si presenta sangrado anormal.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": 3,
    "presentationId": 1,
    "quantityUnitsFractionated": 10,
    "visiblePresentations": [
      "pack",
      "collection1"
    ],
    "pricePack": 53,
    "quantityUnitsPack": 200,
    "unitPrice": 0.265,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "",
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "",
    "saleChannels": [
      "MOBILE",
      "WEB",
      "CALL"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "114661",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "NG",
    "substituteList": [
      {
        "orderId": "7",
        "skuInkafarma": "072692",
        "guaranteed": "NG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": true,
    "isGeneric": false
  }
]

export const MOCK_DERMOCOSMETICA: Product[] = [
  {
    "id": "067386",
    "name": "Crema Reparadora La Roche Posay Cicaplast Baume B5+",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. Además, ofrece completas líneas de productos para el cuidado de la piel y maquillajes para tu rostro. Probados 100 % contra alergias y en cada piel sensible.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Bálsamo para Piel Debilitada Reparadora La Roche Posay Cicaplast Baume B5+ </span></strong></center></h2><p></p><center><p>Nueva fórmula con Tribioma (un complejo prebiótico único) asociado con 5% de Pro-Vitamina B5 y Madecassosside para calmar instantáneamente, acelerar la reparación de la barrera cutánea y reducir visiblemente las marcas. Además, tolerancia óptima, apto para pieles sensibles y enriquecido con zinc y manganeso.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/larocheposay-7.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Ideal para toda la familia adultos, niños y bebés</h3></strong><p>Conoce todos los productos de la Roche Posay</p></center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/019177X.jpg\"> <p> <a href=\"https://inkafarma.pe/deeplinks?product=019177&amp;productName=cicaplast-baume-b5-balsamo-reparador-40ml-la-roche target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\" https://inkafarma.pe/deeplinks?product=019177&amp;productName=cicaplast-baume-b5-balsamo-reparador-40ml-la-roche\" target=\"_blank&quot;\"> Tratamiento Cicatrizante La Roche Posay Cicaplast Gel B5 </a> <p></p></h3><p> Ideal para pieles que han sufrido lesiones post intervenciones cosméticas o dermatológicas</p> </div> <div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009310X.jpg \"> <p> <a href=\"https://inkafarma.pe/deeplinks?product=009310&amp;productName=cicaplast-labios-balsamo-reparador-7-5ml-la-roche-\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\" https://inkafarma.pe/deeplinks?product=009310&amp;productName=cicaplast-labios-balsamo-reparador-7-5ml-la-roche-\" target=\"_blank&quot;\"> Bálsamo Labial La Roche Posay Cicaplast Levres</a> <p></p></h3> <p> Bálsamo para labios resecos y agrietados que ayuda a humectar, calmar y cicatrizar las grietas ocasionadas por agentes externos.</p></div> </div></center><p></p>",
    "shortDescription": "<ul><li> Repara la piel dañada.</li><li> Apto para bebés desde recién nacidos, niños y adultos.</li><li> Eficacia reparadora proabada en 14 indicaciones.</li><li>NSOC42833-11CO</li></ul>",
    "brand": "LA ROCHE-POSAY",
    "sapCode": "816491",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "Aplicar en piel limpia y seca. Aplicar generosamente en cuerpo, rostro y labios. Evitar el área del contorno de ojos.",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067386X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067386M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067386L.jpg",
        "thumbnails": []
      }
    ],
    "price": 25.9,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Mantener fuera del alcance de los niños.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "TUBO",
    "quantityUnits": 1,
    "unitMeasure": "ML",
    "fractionalMode": false,
    "activePrinciples": [
      "[TRIBIOMA PREBIOTIC COMPLEX]: Innovación con eficacia probada para reequilibrar el microbioma de la piel debilitada.[5% VITAMINA B5]: Refuerza la proliferación de queratinocitos.[MADECASSOSIDE]: Reduce la inflamación y acelera la riepitelización."
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "TUBO 15 ML",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200104,
            "name": "Tratamiento Facial",
            "categories": [],
            "keyword": "tratamiento-facial"
          },
          {
            "id": 200103,
            "name": "Tratamientos Corporales",
            "categories": [
              {
                "id": 300733,
                "name": "Cicatrizantes",
                "categories": [],
                "keyword": "cicatrizantes"
              }
            ],
            "keyword": "tratamientos-corporales"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765336,
                "name": "La Roche Posay + Regalo",
                "categories": [],
                "keyword": "la-roche-posay--regalo"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      }
    ],
    "stock": 18,
    "fractionalStock": 0,
    "stockRet": 18,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "balsamo-la-roche-posay-cicaplast-baume-b5",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": 3337875816779,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. Además, ofrece completas líneas de productos para el cuidado de la piel y maquillajes para tu rostro. Probados 100 % contra alergias y en cada piel sensible.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Bálsamo para Piel Debilitada Reparadora La Roche Posay Cicaplast Baume B5+ </span></strong></center></h2><p></p><center><p>Nueva fórmula con Tribioma (un complejo prebiótico único) asociado con 5% de Pro-Vitamina B5 y Madecassosside para calmar instantáneamente, acelerar la reparación de la barrera cutánea y reducir visiblemente las marcas. Además, tolerancia óptima, apto para pieles sensibles y enriquecido con zinc y manganeso.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/larocheposay-7.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Ideal para toda la familia adultos, niños y bebés</h3></strong><p>Conoce todos los productos de la Roche Posay</p></center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/019177X.jpg\"> <p> <a href=\"https://inkafarma.pe/deeplinks?product=019177&amp;productName=cicaplast-baume-b5-balsamo-reparador-40ml-la-roche target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\" https://inkafarma.pe/deeplinks?product=019177&amp;productName=cicaplast-baume-b5-balsamo-reparador-40ml-la-roche\" target=\"_blank&quot;\"> Tratamiento Cicatrizante La Roche Posay Cicaplast Gel B5 </a> <p></p></h3><p> Ideal para pieles que han sufrido lesiones post intervenciones cosméticas o dermatológicas</p> </div> <div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009310X.jpg \"> <p> <a href=\"https://inkafarma.pe/deeplinks?product=009310&amp;productName=cicaplast-labios-balsamo-reparador-7-5ml-la-roche-\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\" https://inkafarma.pe/deeplinks?product=009310&amp;productName=cicaplast-labios-balsamo-reparador-7-5ml-la-roche-\" target=\"_blank&quot;\"> Bálsamo Labial La Roche Posay Cicaplast Levres</a> <p></p></h3> <p> Bálsamo para labios resecos y agrietados que ayuda a humectar, calmar y cicatrizar las grietas ocasionadas por agentes externos.</p></div> </div></center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "Aplicar en piel limpia y seca. Aplicar generosamente en cuerpo, rostro y labios. Evitar el área del contorno de ojos.",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "[TRIBIOMA PREBIOTIC COMPLEX]: Innovación con eficacia probada para reequilibrar el microbioma de la piel debilitada.[5% VITAMINA B5]: Refuerza la proliferación de queratinocitos.[MADECASSOSIDE]: Reduce la inflamación y acelera la riepitelización.",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 25.9,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "¡CUPÓN INKA20 DESDE S/169!",
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 24.9,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "1",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 300,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE",
      "B2C_BTY"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "302317",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "NG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "072576",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "073599",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "069155",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "003688",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "069154",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "069156",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "066686",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "072182",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "071259",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "071258",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "15",
    "attributeDetails": [
      {
        "label": "Tamaño",
        "description": "15 ML",
        "imgUrl": null,
        "bgColor": null
      }
    ],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "009309",
    "name": "Gel Limpiador La Roche-Posay Effaclar",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. Además, ofrece completas líneas de productos para el cuidado de la piel y maquillajes para tu rostro. Productos probados 100 % contra alergias y en cada piel sensible.<br></p></center><center><h2><strong style=\"font-family: sans-serif; font-size: 12px; letter-spacing: 0px;\">Tratamiento y Cuidado para tu piel con el&nbsp;</strong><span style=\"font-size: 13px;\"><b>Gel Limpiador La Roche Posay Effaclar para Piel Grasa</b></span></h2><h2><span style=\"font-size: 13px;\"><b><br></b></span><br></h2></center><center><p>  </p><p itemprop=\"description\">    El <strong>Effaclar Gel Limpiador Purificante +M de La Roche-Posay</strong> es un     <strong>gel limpiador facial para piel mixta a grasa</strong> con tendencia a <strong>imperfecciones</strong>.     Gracias a <strong>Phylobioma</strong> y a la ciencia del <strong>microbioma</strong>, equilibra el pH,     elimina <strong>exceso de sebo</strong> e impurezas <strong>sin resecar</strong>, y ayuda al     <strong>control de brillo</strong> diario. Enriquecido con <strong>Zinc PCA</strong> y     <strong>Agua Termal de La Roche-Posay</strong>.</p><p itemprop=\"description\">  </p>  <!-- Beneficios con keywords -->  <h2><br></h2><h2>Beneficios del gel limpiador para piel grasa</h2>  <ul>    <li><strong>Limpieza profunda y suave</strong>: espuma ligera que <strong>desobstruye poros</strong> y elimina impurezas.</li>    <li><strong>Control del brillo</strong>: el <em>Zinc PCA</em> ayuda a regular el sebo en <strong>piel mixta a grasa</strong>.</li>    <li><strong>Menos imperfecciones en 4 semanas</strong>: reduce la apariencia de <strong>puntos negros</strong> y marcas.</li>    <li><strong>Respeta la piel sensible</strong>: fórmula <strong>sin alcohol, sin parabenos y sin colorantes</strong>.</li>  </ul>  <!-- Diferenciadores -->  <h2>¿Por qué elegir Effaclar Gel ?</h2>  <p>    Este <strong>limpiador facial para piel grasa</strong> no solo limpia: protege el equilibrio     fisiológico, mejora la textura y potencia tu rutina anti-imperfecciones. Ideal si buscas     <strong>piel más limpia, fresca y mate</strong> durante todo el día.  </p><p></p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Uriage-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Anthelios de la Roche Posay</span></b></center></h2><p></p><p></p><center>Protección y cuidado solar para piel sensible frente a los rayos UVA y UVB e infrarrojos.</center>   <p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/la-roche-posay-inkafarma-026123.jpg\"> <p> <a href=\"https://mifarma.com.pe/producto/protector-solar-facial-la-roche-posay-anthelios-sh/026123 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://mifarma.com.pe/producto/protector-solar-facial-la-roche-posay-anthelios-sh/026123\" target=\"_blank&quot;\">Protector Solar Facial La Roche Posay Anthelios Shaka Fluid SPF 50+</a> <p></p></h3><p>Protector solar para el rostro que brinda máximo cuidado, ideal para actividades deportivas al aire libre, protege aún con sudor o arena en la piel. </p> </div> <div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/la-roche-posay-inkafarma-010816.jpg\"> <p> <a href=\"https://mifarma.com.pe/producto/protector-solar-gel-crema-anthelios-xl-spf-50-colo/010816\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://mifarma.com.pe/producto/protector-solar-gel-crema-anthelios-xl-spf-50-colo/010816\" target=\"_blank&quot;\">Protector Solar Gel Crema Anthelios XL SPF 50 Color</a> <p></p></h3> <p>Prevención de manchas pigmentarias inducidas por la radiación alta, protección solar, fotoestable y cuenta con protección UVA/UVB.</p></div> </div></center><p></p>",
    "shortDescription": "<ul><li>Gel limpiador para pieles mixtas a grasas</li><li>Reduce imperfecciones</li><li>Elimina puntos negros e impurezas</li><li>Textura en gel que se transforma en espuma</li><li>Desobstruye poros dejando la piel limpia y fresca</li><li>Apto pieles sensibles</li><li>Envase de 400 ml</li><li>NSC2006CO21504</li></ul>",
    "brand": "LA ROCHE-POSAY",
    "sapCode": "120514",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "Humedece tu rostro con agua tibia para abrir poros, y frota en tu mano una pequeña cantidad del producto hasta convertirlo en espuma. Aplica con movimientos suaves y circulares en zona T del rostro y extiende hacia las mejillas, evitando el contacto con los ojos. Enjuaga con abundante agua fría para ayudar a cerrar los poros. Seca tu rostro con suaves toques, sin frotar.",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-3X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-4X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-3L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-4L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/009309-5L.jpg"
        ]
      }
    ],
    "price": 142.9,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Evitar el contacto con los ojos.",
    "sideEffects": "No usar en caso de hipersensibilidad al producto.",
    "favorite": false,
    "concentration": null,
    "presentation": "FRASCO",
    "quantityUnits": 1,
    "unitMeasure": "ML",
    "fractionalMode": false,
    "activePrinciples": [
      "AQUA / WATER / EAU • SODIUM LAURETH SULFATE • PEG-8 • COCO-BETAINE • HEXYLENE GLYCOL • SODIUM CHLORIDE • PUNICA GRANATUM PERICARP EXTRACT • ZINC PCA • PEG-120 METHYL GLUCOSE DIOLEATE • SODIUM CITRATE • SODIUM HYDROXIDE • CAPRYLYL GLYCOL • CITRIC ACID • TRISODIUM ETHYLENEDIAMINE DISUCCINATE • MALTODEXTRIN • PENTYLENE GLYCOL • TOCOPHEROL • SODIUM BENZOATE • PHENOXYETHANOL • PARFUM / FRAGRANCE"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "FRASCO 400 ML",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 6,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200104,
            "name": "Tratamiento Facial",
            "categories": [
              {
                "id": 300764,
                "name": "Limpieza Facial",
                "categories": [],
                "keyword": "limpieza-facial-1"
              }
            ],
            "keyword": "tratamiento-facial"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765336,
                "name": "La Roche Posay + Regalo",
                "categories": [],
                "keyword": "la-roche-posay--regalo"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      },
      {
        "id": 100016,
        "name": "Cupones Promocionales",
        "categories": [
          {
            "id": 765359,
            "name": "Cupón INKA20",
            "categories": [],
            "keyword": "cupon-inka20"
          }
        ],
        "keyword": "cupones-promocionales"
      }
    ],
    "stock": 40,
    "fractionalStock": 0,
    "stockRet": 40,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "effaclar-gel-limpiador-facial-400ml-la-roche-posay",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": 3337872411991,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "No usar en caso de hipersensibilidad al producto.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. Además, ofrece completas líneas de productos para el cuidado de la piel y maquillajes para tu rostro. Productos probados 100 % contra alergias y en cada piel sensible.<br></p></center><center><h2><strong style=\"font-family: sans-serif; font-size: 12px; letter-spacing: 0px;\">Tratamiento y Cuidado para tu piel con el&nbsp;</strong><span style=\"font-size: 13px;\"><b>Gel Limpiador La Roche Posay Effaclar para Piel Grasa</b></span></h2><h2><span style=\"font-size: 13px;\"><b><br></b></span><br></h2></center><center><p>  </p><p itemprop=\"description\">    El <strong>Effaclar Gel Limpiador Purificante +M de La Roche-Posay</strong> es un     <strong>gel limpiador facial para piel mixta a grasa</strong> con tendencia a <strong>imperfecciones</strong>.     Gracias a <strong>Phylobioma</strong> y a la ciencia del <strong>microbioma</strong>, equilibra el pH,     elimina <strong>exceso de sebo</strong> e impurezas <strong>sin resecar</strong>, y ayuda al     <strong>control de brillo</strong> diario. Enriquecido con <strong>Zinc PCA</strong> y     <strong>Agua Termal de La Roche-Posay</strong>.</p><p itemprop=\"description\">  </p>  <!-- Beneficios con keywords -->  <h2><br></h2><h2>Beneficios del gel limpiador para piel grasa</h2>  <ul>    <li><strong>Limpieza profunda y suave</strong>: espuma ligera que <strong>desobstruye poros</strong> y elimina impurezas.</li>    <li><strong>Control del brillo</strong>: el <em>Zinc PCA</em> ayuda a regular el sebo en <strong>piel mixta a grasa</strong>.</li>    <li><strong>Menos imperfecciones en 4 semanas</strong>: reduce la apariencia de <strong>puntos negros</strong> y marcas.</li>    <li><strong>Respeta la piel sensible</strong>: fórmula <strong>sin alcohol, sin parabenos y sin colorantes</strong>.</li>  </ul>  <!-- Diferenciadores -->  <h2>¿Por qué elegir Effaclar Gel ?</h2>  <p>    Este <strong>limpiador facial para piel grasa</strong> no solo limpia: protege el equilibrio     fisiológico, mejora la textura y potencia tu rutina anti-imperfecciones. Ideal si buscas     <strong>piel más limpia, fresca y mate</strong> durante todo el día.  </p><p></p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Uriage-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Anthelios de la Roche Posay</span></b></center></h2><p></p><p></p><center>Protección y cuidado solar para piel sensible frente a los rayos UVA y UVB e infrarrojos.</center>   <p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/la-roche-posay-inkafarma-026123.jpg\"> <p> <a href=\"https://mifarma.com.pe/producto/protector-solar-facial-la-roche-posay-anthelios-sh/026123 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://mifarma.com.pe/producto/protector-solar-facial-la-roche-posay-anthelios-sh/026123\" target=\"_blank&quot;\">Protector Solar Facial La Roche Posay Anthelios Shaka Fluid SPF 50+</a> <p></p></h3><p>Protector solar para el rostro que brinda máximo cuidado, ideal para actividades deportivas al aire libre, protege aún con sudor o arena en la piel. </p> </div> <div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/la-roche-posay-inkafarma-010816.jpg\"> <p> <a href=\"https://mifarma.com.pe/producto/protector-solar-gel-crema-anthelios-xl-spf-50-colo/010816\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://mifarma.com.pe/producto/protector-solar-gel-crema-anthelios-xl-spf-50-colo/010816\" target=\"_blank&quot;\">Protector Solar Gel Crema Anthelios XL SPF 50 Color</a> <p></p></h3> <p>Prevención de manchas pigmentarias inducidas por la radiación alta, protección solar, fotoestable y cuenta con protección UVA/UVB.</p></div> </div></center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "Humedece tu rostro con agua tibia para abrir poros, y frota en tu mano una pequeña cantidad del producto hasta convertirlo en espuma. Aplica con movimientos suaves y circulares en zona T del rostro y extiende hacia las mejillas, evitando el contacto con los ojos. Enjuaga con abundante agua fría para ayudar a cerrar los poros. Seca tu rostro con suaves toques, sin frotar.",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "AQUA / WATER / EAU • SODIUM LAURETH SULFATE • PEG-8 • COCO-BETAINE • HEXYLENE GLYCOL • SODIUM CHLORIDE • PUNICA GRANATUM PERICARP EXTRACT • ZINC PCA • PEG-120 METHYL GLUCOSE DIOLEATE • SODIUM CITRATE • SODIUM HYDROXIDE • CAPRYLYL GLYCOL • CITRIC ACID • TRISODIUM ETHYLENEDIAMINE DISUCCINATE • MALTODEXTRIN • PENTYLENE GLYCOL • TOCOPHEROL • SODIUM BENZOATE • PHENOXYETHANOL • PARFUM / FRAGRANCE",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Evitar el contacto con los ojos.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 142.9,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": null,
    "secondaryTagImageUrl": null,
    "alertTagText": "¡CUPÓN INKA20 DESDE S/169!",
    "priceAllPaymentMethod": 107.1,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 0,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": true,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "0",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 21,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "G",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE",
      "B2C_BTY"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "553720",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "NG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "072467",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "073598",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "078608",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068329",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025189",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "072948",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025256",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025254",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "030403",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068503",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "400",
    "attributeDetails": [
      {
        "label": "Tamaño",
        "description": "400 ML",
        "imgUrl": null,
        "bgColor": null
      }
    ],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKDB270",
    "name": "Pack 03 Fotoprotector Isdin Fusion Water Magic SPF50",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/ISDIN-LOGO.png\"></center><center><p></p><p style=\"\" text-align:=\"\" justify;\"\"=\"\">Los productos ISDIN, con más de 40 años de experiencia te brindan fotoprotección, higiene, cuidado facial y más. Además, al ser líder en el mercado dermatológico mantiene una amplia experiencia en las principales patologías y afecciones de la piel, ante las que ofrece propuestas integrales dirigidas al tratamiento, prevención y mantenimiento. ¡Realza tu belleza natural con ISDIN!</p><p style=\"\" text-align:=\"\" justify;\"\"=\"\"><br></p></center><p></p><h2><center><strong><span style=\"\" font-size:=\"\" 13px;\"\"=\"\">Fotoprotector Isdin FusionWater Magic Urban SPF30</span></strong></center></h2><p></p><center><p>        </p><h2>Protección Solar de Alta Calidad para tu Piel</h2><p><br></p>        <p></p><p style=\"\" text-align:=\"\" justify;\"\"=\"\">Fusion Water MAGIC SPF 50 es un <strong>fotoprotector facial ultraligero</strong> con una textura de absorción inmediata, diseñado para uso diario. Su fórmula se funde con la piel, proporcionando una <strong>alta protección UV</strong> sin dejar residuo graso. Ideal para mantener la piel hidratada, este protector solar es perfecto para quienes buscan una protección eficaz y cómoda en su rutina diaria.</p><p style=\"\" text-align:=\"\" justify;\"\"=\"\"><br></p>                <h3>Características Principales:</h3>        <ol>            </ol><p><strong>Alta Protección SPF 50:</strong> Protección evaluada clínicamente en laboratorio y en condiciones reales de alta radiación solar.</p><p><strong>Absorción Inmediata:</strong> No deja residuo graso ni irrita los ojos, perfecto para un acabado sedoso.</p><p><strong>Oil Control:</strong> Ideal para pieles grasas, matifica la piel y es <em>mineral oil free</em>.</p><p><strong>Hidratación Intensa:</strong> Contiene ácido hialurónico para una hidratación profunda durante todo el día.</p><p><strong>Acción Antioxidante:</strong> Protege contra el daño de los radicales libres gracias al <em>Mediterranean Alga Extract</em> y a la vitamina E.</p><p><strong>Fórmula No Comedogénica:</strong> No obstruye los poros, evitando la aparición de imperfecciones.</p><ol>                                                            </ol><ol>        </ol>        <section>        <h2>Protección 5 Star Daily Protection</h2><p><span style=\"letter-spacing: 0px;\">Fusion Water MAGIC SPF 50 se enmarca en la línea de </span><strong style=\"letter-spacing: 0px;\">fotoprotectores 5 Star Daily Protection</strong><span style=\"letter-spacing: 0px;\">, que proporcionan una alta protección UV testada en condiciones reales de exposición solar. Estos fotoprotectores no solo ofrecen eficacia, sino que también cuentan con una alta tolerabilidad en todo tipo de pieles, incluso en aquellas sensibles.</span></p>        <p>Además, están diseñados para no irritar los ojos, ser <strong>oil control</strong> y estar comprometidos con la protección de los mares y océanos, alineándose con los valores de sostenibilidad de ISDIN.</p><p><br></p>    </section>    <section>        <h2>Ideal para Actividades al Aire Libre</h2>        <p>Este protector solar es perfecto para quienes pasan largas horas al aire libre. Su fórmula ligera y de absorción rápida lo convierte en el fotoprotector ideal para actividades al sol, ya sea en la playa, en el deporte o en cualquier otra exposición prolongada a los rayos solares.</p>    </section><p></p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Cellskinlab-2-fotoprotector-facial.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Protección solar perfecta&nbsp;para tu piel</h3></strong><p>Disfruta de la seguridad y cuidado de Isdin</p></center>",
    "shortDescription": "<p>Fotoprotector ISDIN Fusion Water Magic SPF50:</p><ul><li>Textura Acuosa</li><li>Hidrata la Piel</li><li>Probadodermatológicamente</li><li>Oil control</li><li>NSOC23152-23CO</li></ul>",
    "brand": "ISDIN",
    "sapCode": "PACKDB270",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB270X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB270M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB270L.jpg",
        "thumbnails": []
      }
    ],
    "price": 344.70000000000005,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "<p>Fotoprotector ISDIN Fusion Water Magic SPF50:</p>Precauciones: evitar la exposición prolongada de los niños al sol. No usar en menores de seis (6) meses. Para su uso en niños menores de seis (6) meses, consulte a su médico. En niños menores de seis meses de edad no se recomienda la exposición al sol. Mantener fuera del alcance de los niños. Evitar el contacto con ojos y mucosas, puede causar irritación. No permanezca mucho tiempo expuesto al sol, aunque emplee un producto de protección solar. La exposición excesiva al sol es un riesgo importante para la salud. Suspender su uso en caso de que se presenten signos de irritación o salpullido. Este producto no ofrece ninguna protección contra la insolación. Este producto ayuda a prevenir quemaduras solares. Evitar el contacto con los textiles.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200106,
            "name": "Fotoprotector",
            "categories": [
              {
                "id": 300740,
                "name": "Fotoprotector Facial",
                "categories": [],
                "keyword": "fotoprotector-facial"
              }
            ],
            "keyword": "fotoprotector"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200159,
            "name": "Packs de Dermatología Cosmética",
            "categories": [],
            "keyword": "packs-de-dermatologia-cosmetica"
          }
        ],
        "keyword": "inka-packs"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765348,
                "name": "Fotoprotección Avanzada",
                "categories": [],
                "keyword": "fotoproteccion-avanzada"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      }
    ],
    "stock": 22,
    "fractionalStock": 0,
    "stockRet": 22,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-03-fotoprotector-isdin-fusion-water-magic",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/ISDIN-LOGO.png\"></center><center><p></p><p style=\"\" text-align:=\"\" justify;\"\"=\"\">Los productos ISDIN, con más de 40 años de experiencia te brindan fotoprotección, higiene, cuidado facial y más. Además, al ser líder en el mercado dermatológico mantiene una amplia experiencia en las principales patologías y afecciones de la piel, ante las que ofrece propuestas integrales dirigidas al tratamiento, prevención y mantenimiento. ¡Realza tu belleza natural con ISDIN!</p><p style=\"\" text-align:=\"\" justify;\"\"=\"\"><br></p></center><p></p><h2><center><strong><span style=\"\" font-size:=\"\" 13px;\"\"=\"\">Fotoprotector Isdin FusionWater Magic Urban SPF30</span></strong></center></h2><p></p><center><p>        </p><h2>Protección Solar de Alta Calidad para tu Piel</h2><p><br></p>        <p></p><p style=\"\" text-align:=\"\" justify;\"\"=\"\">Fusion Water MAGIC SPF 50 es un <strong>fotoprotector facial ultraligero</strong> con una textura de absorción inmediata, diseñado para uso diario. Su fórmula se funde con la piel, proporcionando una <strong>alta protección UV</strong> sin dejar residuo graso. Ideal para mantener la piel hidratada, este protector solar es perfecto para quienes buscan una protección eficaz y cómoda en su rutina diaria.</p><p style=\"\" text-align:=\"\" justify;\"\"=\"\"><br></p>                <h3>Características Principales:</h3>        <ol>            </ol><p><strong>Alta Protección SPF 50:</strong> Protección evaluada clínicamente en laboratorio y en condiciones reales de alta radiación solar.</p><p><strong>Absorción Inmediata:</strong> No deja residuo graso ni irrita los ojos, perfecto para un acabado sedoso.</p><p><strong>Oil Control:</strong> Ideal para pieles grasas, matifica la piel y es <em>mineral oil free</em>.</p><p><strong>Hidratación Intensa:</strong> Contiene ácido hialurónico para una hidratación profunda durante todo el día.</p><p><strong>Acción Antioxidante:</strong> Protege contra el daño de los radicales libres gracias al <em>Mediterranean Alga Extract</em> y a la vitamina E.</p><p><strong>Fórmula No Comedogénica:</strong> No obstruye los poros, evitando la aparición de imperfecciones.</p><ol>                                                            </ol><ol>        </ol>        <section>        <h2>Protección 5 Star Daily Protection</h2><p><span style=\"letter-spacing: 0px;\">Fusion Water MAGIC SPF 50 se enmarca en la línea de </span><strong style=\"letter-spacing: 0px;\">fotoprotectores 5 Star Daily Protection</strong><span style=\"letter-spacing: 0px;\">, que proporcionan una alta protección UV testada en condiciones reales de exposición solar. Estos fotoprotectores no solo ofrecen eficacia, sino que también cuentan con una alta tolerabilidad en todo tipo de pieles, incluso en aquellas sensibles.</span></p>        <p>Además, están diseñados para no irritar los ojos, ser <strong>oil control</strong> y estar comprometidos con la protección de los mares y océanos, alineándose con los valores de sostenibilidad de ISDIN.</p><p><br></p>    </section>    <section>        <h2>Ideal para Actividades al Aire Libre</h2>        <p>Este protector solar es perfecto para quienes pasan largas horas al aire libre. Su fórmula ligera y de absorción rápida lo convierte en el fotoprotector ideal para actividades al sol, ya sea en la playa, en el deporte o en cualquier otra exposición prolongada a los rayos solares.</p>    </section><p></p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Cellskinlab-2-fotoprotector-facial.png\"></center><br><center><strong><h3 class=\"“heading-1”\">Protección solar perfecta&nbsp;para tu piel</h3></strong><p>Disfruta de la seguridad y cuidado de Isdin</p></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "<p>Fotoprotector ISDIN Fusion Water Magic SPF50:</p>Precauciones: evitar la exposición prolongada de los niños al sol. No usar en menores de seis (6) meses. Para su uso en niños menores de seis (6) meses, consulte a su médico. En niños menores de seis meses de edad no se recomienda la exposición al sol. Mantener fuera del alcance de los niños. Evitar el contacto con ojos y mucosas, puede causar irritación. No permanezca mucho tiempo expuesto al sol, aunque emplee un producto de protección solar. La exposición excesiva al sol es un riesgo importante para la salud. Suspender su uso en caso de que se presenten signos de irritación o salpullido. Este producto no ofrece ninguna protección contra la insolación. Este producto ayuda a prevenir quemaduras solares. Evitar el contacto con los textiles.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 344.70000000000005,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "¡CUPÓN INKA20 DESDE S/169!",
    "priceAllPaymentMethod": 284.9,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 267.7,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": true,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "1",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "069106",
        "name": null,
        "presentationText": "FRASCO 50 ML",
        "quantity": 3,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKDB270",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKDB9",
    "name": "Pack La Roche Posay Gel + Mat Effaclar",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. La Roche-Posay ofrece completas líneas de productos para el cuidado de la piel, maquillajes para tu rostro y cuerpo. Probados  100 % contra alergias y en cada piel sensible.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Tratamiento y cuidado para tu piel con Anthelios Toque Seco Antibrillo sin Color La Roche Posay</span></strong></center></h2><p></p><center><p>Prevención de manchas pigmentarias inducidas por la radiación alta, protección solar, fotoestable y cuenta con protección UVA/UVB.</p></center><h2><center><strong><span style=\"font-size: 13px;\">Tratamiento y cuidado para tu piel con effaclar mat hidratante/span></strong></center></h2><p></p><center><p>Neutraliza el brillo desde su origen, con efecto matificante duradero.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Cerave-4.png\"></center><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Anthelios de la Roche Posay</span></b></center></h2><p></p><p></p><center>Protección y cuidado solar para piel sensible frente a los rayos UVA y UVB e infrarrojos.</center><p></p>",
    "shortDescription": "<ul><li>Maquillaje anti-imperfecciones</li><li>Antibrillo</li><li>Hidratante</li><li>Poro anti-dilatado</li><li>Registro Sanitario: NSC2006CO21504</li></ul>",
    "brand": "LA ROCHE-POSAY",
    "sapCode": "PACKDB9",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB9X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB9M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB9L.jpg",
        "thumbnails": []
      }
    ],
    "price": 262.8,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Evitar el contacto directo con los ojos.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200104,
            "name": "Tratamiento Facial",
            "categories": [
              {
                "id": 300763,
                "name": "Hidratación",
                "categories": [],
                "keyword": "hidratacion"
              }
            ],
            "keyword": "tratamiento-facial"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200159,
            "name": "Packs de Dermatología Cosmética",
            "categories": [],
            "keyword": "packs-de-dermatologia-cosmetica"
          }
        ],
        "keyword": "inka-packs"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765336,
                "name": "La Roche Posay + Regalo",
                "categories": [],
                "keyword": "la-roche-posay--regalo"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      }
    ],
    "stock": 35,
    "fractionalStock": 0,
    "stockRet": 35,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-la-roche-posay-gel-mat-effaclar",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. La Roche-Posay ofrece completas líneas de productos para el cuidado de la piel, maquillajes para tu rostro y cuerpo. Probados  100 % contra alergias y en cada piel sensible.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Tratamiento y cuidado para tu piel con Anthelios Toque Seco Antibrillo sin Color La Roche Posay</span></strong></center></h2><p></p><center><p>Prevención de manchas pigmentarias inducidas por la radiación alta, protección solar, fotoestable y cuenta con protección UVA/UVB.</p></center><h2><center><strong><span style=\"font-size: 13px;\">Tratamiento y cuidado para tu piel con effaclar mat hidratante/span></strong></center></h2><p></p><center><p>Neutraliza el brillo desde su origen, con efecto matificante duradero.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Cerave-4.png\"></center><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Anthelios de la Roche Posay</span></b></center></h2><p></p><p></p><center>Protección y cuidado solar para piel sensible frente a los rayos UVA y UVB e infrarrojos.</center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Evitar el contacto directo con los ojos.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 262.8,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "REGALO · DELIVERY LIMA · SUJETO A STOCK",
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 249.7,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "1",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "009309",
        "name": null,
        "presentationText": "FRASCO 400 ML",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      },
      {
        "sku": "006036",
        "name": null,
        "presentationText": "TUBO 40 ML",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKDB9",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": [
      {
        "skuInkafarma": "034690",
        "skuMifarma": "800805",
        "price": 0.1,
        "image": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/034690L.jpg",
        "name": "Producto Promocional Mini Sérum Hyalu B5 La Roche Posay",
        "stock": 18,
        "presentation": "FRASCO 10 ML",
        "isLam": "N",
        "familyType": "",
        "eanCode": ""
      }
    ],
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKDB74",
    "name": "Pack Protector Solar Toque Seco sin Color La Roche-Posay Anthelios",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. Además, ofrece completas líneas de productos para el cuidado de la piel y maquillajes para tu rostro. Productos probados 100 % contra alergias y en cada piel sensible.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Tratamiento y cuidado para tu piel con Anthelios Toque Seco Antibrillo sin Color La Roche Posay</span></strong></center></h2><p></p><center><p>Prevención de manchas pigmentadas inducidas por la radiación alta, protección solar, fotoestable, y con protección UVA/UVB.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Cerave-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Anthelios de la Roche Posay</span></b></center></h2><p></p><p></p><center>Protección y cuidado solar para piel sensible frente a los rayos UVA y UVB e infrarrojos. </p></center>",
    "shortDescription": "<ul><li>Protector solar.</li><li>NSOC-28993-16PE</li></ul>",
    "brand": "LA ROCHE-POSAY",
    "sapCode": "PACKDB74",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": null,
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB74X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB74M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB74L.jpg",
        "thumbnails": []
      }
    ],
    "price": 251.8,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Mantener fuera del alcance de los niños.",
    "sideEffects": "No usar en caso de hipersensibilidad al producto.",
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200106,
            "name": "Fotoprotector",
            "categories": [
              {
                "id": 300740,
                "name": "Fotoprotector Facial",
                "categories": [],
                "keyword": "fotoprotector-facial"
              }
            ],
            "keyword": "fotoprotector"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200159,
            "name": "Packs de Dermatología Cosmética",
            "categories": [],
            "keyword": "packs-de-dermatologia-cosmetica"
          }
        ],
        "keyword": "inka-packs"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765348,
                "name": "Fotoprotección Avanzada",
                "categories": [],
                "keyword": "fotoproteccion-avanzada"
              },
              {
                "id": 765336,
                "name": "La Roche Posay + Regalo",
                "categories": [],
                "keyword": "la-roche-posay--regalo"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      }
    ],
    "stock": 3,
    "fractionalStock": 0,
    "stockRet": 3,
    "fractionalRetStock": 0,
    "showStockAlert": "Y",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-protector-solar-toque-seco-la-roche-posay",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "No usar en caso de hipersensibilidad al producto.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Larocheposay.png\"></center><center><p>La Roche-Posay cuenta con productos revolucionarios y soluciones personalizadas para las necesidades de cada tipo de piel. Además, ofrece completas líneas de productos para el cuidado de la piel y maquillajes para tu rostro. Productos probados 100 % contra alergias y en cada piel sensible.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Tratamiento y cuidado para tu piel con Anthelios Toque Seco Antibrillo sin Color La Roche Posay</span></strong></center></h2><p></p><center><p>Prevención de manchas pigmentadas inducidas por la radiación alta, protección solar, fotoestable, y con protección UVA/UVB.</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Cerave-4.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Anthelios de la Roche Posay</span></b></center></h2><p></p><p></p><center>Protección y cuidado solar para piel sensible frente a los rayos UVA y UVB e infrarrojos. </p></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Mantener fuera del alcance de los niños.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 251.8,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "REGALO · DELIVERY LIMA · SUJETO A STOCK",
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 239.2,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "1",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "010853",
        "name": null,
        "presentationText": "TUBO 50 ML",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKDB74",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": [
      {
        "skuInkafarma": "034690",
        "skuMifarma": "800805",
        "price": 0.1,
        "image": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/034690L.jpg",
        "name": "Producto Promocional Mini Sérum Hyalu B5 La Roche Posay",
        "stock": 18,
        "presentation": "FRASCO 10 ML",
        "isLam": "N",
        "familyType": "",
        "eanCode": ""
      }
    ],
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKDB2",
    "name": "Pack Eucerin Baby Shampoo + Crema Corporal + Pomada",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Eucerin.png\"></center><center><p>Eucerin con más de 111 años de ciencia visible en la piel y una de las marcas líderes en dermocosmética a nivel mundial, cuenta con una extensa línea de productos que ofrece soluciones y tratamiento para la piel, cremas corporales, anti-arrugas, protección solar, shampoos y mucho más. Todos los productos de Eucerin han demostrado una eficacia probada para proteger y cuidar tu piel.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Eucerin para Bebés limpieza y cuidado infantil para piel sensible</span></strong></center></h2><p></p><center><span style=\"font-size: 13px;\"><strong>Protección y cuidado para tu piel con Eucerin Pomada Regeneradora Aquaphor</strong></span></center><p></p><center><p>Acelere la regeneración de la piel, Eucerin Aquaphor es una pomada  que repara, protege y calma la piel seca, agrietada e irritada, creando una barrera protectora ideal para apoyar a la regeneración de la piel.</p>&gt;</center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Eucerin-6.png\"></center>",
    "shortDescription": "<ul><li>Cuidado del bebé</li><li>No irrita los ojos</li><li>Protege la piel</li><li>Pomada Regeneradora 49GR</li><li>Shampo y Crema de 400ML</li><li>NSOC80508-17CO</li></ul>",
    "brand": "EUCERIN",
    "sapCode": "PACKDB2",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<ul><p>Usar el producto de la siguiente manera:</p><li>Aplicar efectuando suave masajes sobre la piel y cabello del bebé</li></ul>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB2X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB2M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB2L.jpg",
        "thumbnails": []
      }
    ],
    "price": 392.4,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Almacenar en un lugar fresco.",
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": null,
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100005,
        "name": "Mamá y Bebé",
        "categories": [
          {
            "id": 200071,
            "name": "Aseo Bebé / Niños",
            "categories": [
              {
                "id": 300420,
                "name": "Gel de Baño",
                "categories": [],
                "keyword": "gel-de-bano"
              },
              {
                "id": 300416,
                "name": "Shampoo para Niños",
                "categories": [],
                "keyword": "shampoo-para-ninos"
              }
            ],
            "keyword": "aseo-bebe--ninos"
          }
        ],
        "keyword": "mama-y-bebe"
      },
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200107,
            "name": "Dermatología Pediátrica",
            "categories": [],
            "keyword": "dermatologia-pediatrica"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200159,
            "name": "Packs de Dermatología Cosmética",
            "categories": [],
            "keyword": "packs-de-dermatologia-cosmetica"
          }
        ],
        "keyword": "inka-packs"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765344,
                "name": "Todo en Dermocuidado Infantil",
                "categories": [],
                "keyword": "todo-en-dermocuidado-infantil"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      }
    ],
    "stock": 16,
    "fractionalStock": 0,
    "stockRet": 16,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-eucerin-baby-shampoo-crema-corporal-pomada",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Eucerin.png\"></center><center><p>Eucerin con más de 111 años de ciencia visible en la piel y una de las marcas líderes en dermocosmética a nivel mundial, cuenta con una extensa línea de productos que ofrece soluciones y tratamiento para la piel, cremas corporales, anti-arrugas, protección solar, shampoos y mucho más. Todos los productos de Eucerin han demostrado una eficacia probada para proteger y cuidar tu piel.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Eucerin para Bebés limpieza y cuidado infantil para piel sensible</span></strong></center></h2><p></p><center><span style=\"font-size: 13px;\"><strong>Protección y cuidado para tu piel con Eucerin Pomada Regeneradora Aquaphor</strong></span></center><p></p><center><p>Acelere la regeneración de la piel, Eucerin Aquaphor es una pomada  que repara, protege y calma la piel seca, agrietada e irritada, creando una barrera protectora ideal para apoyar a la regeneración de la piel.</p>&gt;</center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Eucerin-6.png\"></center>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<ul><p>Usar el producto de la siguiente manera:</p><li>Aplicar efectuando suave masajes sobre la piel y cabello del bebé</li></ul>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Almacenar en un lugar fresco.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 392.4,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "REGALO · DELIVERY LIMA · SUJETO A STOCK",
    "priceAllPaymentMethod": 254.9,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 235.7,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": true,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "1",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "010767",
        "name": null,
        "presentationText": "FRASCO 400 ML",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      },
      {
        "sku": "024793",
        "name": null,
        "presentationText": "FRASCO 49 GR",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      },
      {
        "sku": "010664",
        "name": null,
        "presentationText": "TUBO 400 ML",
        "quantity": 1,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKDB2",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": [
      {
        "skuInkafarma": "073833",
        "skuMifarma": "308756",
        "price": 0.1,
        "image": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/073833L.jpg",
        "name": "Producto Promocional Toalla Bebé Eucerin",
        "stock": 9,
        "presentation": "TOALLA 1 UN",
        "isLam": "N",
        "familyType": "",
        "eanCode": ""
      }
    ],
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "PACKDB130",
    "name": "Pack 02 Protector Solar Facial en Gel Crema Eucerin Oil Control FPS50+",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Eucerin.png\"></center><center><p>Eucerin con más de 111 años de ciencia visible en la piel y una de las marcas líderes en dermocosmética a nivel mundial, cuenta con una extensa línea de productos que ofrece soluciones y tratamiento para la piel, cremas corporales, anti-arrugas, protección solar, shampoo y mucho más. Todos los productos de Eucerin han demostrado una eficacia probada para proteger y cuidar tu piel.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Seguridad y cuidado para tu piel con el Protector Solar Eucerin Oil Control Toque Seco</span></strong></center></h2><p></p><center><p>Fotoprotección y humectación diaria para áreas expuestas al sol (cara, cuello, dorso de las manos).</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Bioderma-1.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Protector Solar Eucerin Oil Control </span></b></center></h2><p></p><p></p><center>Para las necesidades individuales de cada tipo de piel</center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/eucerin-mifarma-035563.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-medio/035563 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-medio/035563\" target=\"_blank&quot;\">Protector Solar Facial Eucerin Oil Control FPS 50+ Tono Medio</a><p></p></h3><p>Protector Solar Facial Eucerin protege contra la protección UV alta, cubre inmediatamente las impurezas e imperfecciones de la piel.</p> </div> <div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/eucerin-mifarma-035797.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-claro/035797\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-claro/035797\" target=\"_blank&quot;\">Protector Solar Facial Eucerin Oil Control FPS 50+ Tono Claro</a>&nbsp;<p></p></h3> <p>Protege de la luz HEVIS ,UV y cubre inmediatamente las impurezas e imperfecciones de la piel, proporcionando un control en la piel grasa.</p></div> </div></center><p></p>",
    "shortDescription": "<ul><li>Protección solar facial</li><li>Sin brillo hasta por 8 horas</li><li>Factor de protección solar 50+</li><li>Con filtros UVA y UVB</li><li>NSOC63190-14CO</li></ul>",
    "brand": "EUCERIN",
    "sapCode": "PACKDB130",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "<ul><p>Usar el producto de la siguiente manera:</p><li>Paso 1. Aplicar diariamente 20 minutos antes de la exposición solar.</li><li>Paso 2. Re-aplicar cada vez que sea necesario, especialmente después de nadar, secarse con toalla o transpirar.</li></ul>",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB130X.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB130M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/PACKDB130L.jpg",
        "thumbnails": []
      }
    ],
    "price": 239.8,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": "Almacenar en un lugar fresco.",
    "sideEffects": "En caso de notar alguna reacción desfavorable al usar el producto suspenda su uso y consulte a su médico.",
    "favorite": false,
    "concentration": null,
    "presentation": "SUPERPACK",
    "quantityUnits": 1,
    "unitMeasure": "UN",
    "fractionalMode": false,
    "activePrinciples": [
      "0"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "SUPER PACK",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 2,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200106,
            "name": "Fotoprotector",
            "categories": [
              {
                "id": 300740,
                "name": "Fotoprotector Facial",
                "categories": [],
                "keyword": "fotoprotector-facial"
              }
            ],
            "keyword": "fotoprotector"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100015,
        "name": "Inka Packs",
        "categories": [
          {
            "id": 200159,
            "name": "Packs de Dermatología Cosmética",
            "categories": [],
            "keyword": "packs-de-dermatologia-cosmetica"
          }
        ],
        "keyword": "inka-packs"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765348,
                "name": "Fotoprotección Avanzada",
                "categories": [],
                "keyword": "fotoproteccion-avanzada"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      }
    ],
    "stock": 22,
    "fractionalStock": 0,
    "stockRet": 22,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "pack-2-protector-solar-facial-en-gel-crema-eucerin",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": null,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 4,
        "title": "Contraindicaciones",
        "content": "En caso de notar alguna reacción desfavorable al usar el producto suspenda su uso y consulte a su médico.",
        "key": "CONTRAINDICATIONS"
      },
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/marca-descripcion/Eucerin.png\"></center><center><p>Eucerin con más de 111 años de ciencia visible en la piel y una de las marcas líderes en dermocosmética a nivel mundial, cuenta con una extensa línea de productos que ofrece soluciones y tratamiento para la piel, cremas corporales, anti-arrugas, protección solar, shampoo y mucho más. Todos los productos de Eucerin han demostrado una eficacia probada para proteger y cuidar tu piel.</p></center><p></p><h2><center><strong><span style=\"font-size: 13px;\">Seguridad y cuidado para tu piel con el Protector Solar Eucerin Oil Control Toque Seco</span></strong></center></h2><p></p><center><p>Fotoprotección y humectación diaria para áreas expuestas al sol (cara, cuello, dorso de las manos).</p></center><center><img src=\"https://dcuk1cxrnzjkh.cloudfront.net/imagenes/Imagen+descripcion/Bioderma-1.png\"></center><p></p><center><br></center><p></p><p></p><h2><center><b><span style=\"font-size: 13px;\">Descubre la Línea de Protector Solar Eucerin Oil Control </span></b></center></h2><p></p><p></p><center>Para las necesidades individuales de cada tipo de piel</center><p></p><p></p><center><div class=\"row\"><div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/eucerin-mifarma-035563.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-medio/035563 target=_blank\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-medio/035563\" target=\"_blank&quot;\">Protector Solar Facial Eucerin Oil Control FPS 50+ Tono Medio</a><p></p></h3><p>Protector Solar Facial Eucerin protege contra la protección UV alta, cubre inmediatamente las impurezas e imperfecciones de la piel.</p> </div> <div class=\"col-6 col-lg-6 py-2\"> <img src=\"https://dcuk1cxrnzjkh.cloudfront.net/Imagenes_Interlink/eucerin-mifarma-035797.jpg\"> <p> <a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-claro/035797\" target=\"_blank&quot;\"></a></p><h3 class=\"heading-1\"><a href=\"https://inkafarma.pe/producto/protector-solar-facial-eucerin-oil-control-claro/035797\" target=\"_blank&quot;\">Protector Solar Facial Eucerin Oil Control FPS 50+ Tono Claro</a>&nbsp;<p></p></h3> <p>Protege de la luz HEVIS ,UV y cubre inmediatamente las impurezas e imperfecciones de la piel, proporcionando un control en la piel grasa.</p></div> </div></center><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "<ul><p>Usar el producto de la siguiente manera:</p><li>Paso 1. Aplicar diariamente 20 minutos antes de la exposición solar.</li><li>Paso 2. Re-aplicar cada vez que sea necesario, especialmente después de nadar, secarse con toalla o transpirar.</li></ul>",
        "key": "HOW_TO_USE"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "0",
        "key": "COMPOSITION"
      },
      {
        "order": 5,
        "title": "Precaución y advertencia",
        "content": "Almacenar en un lugar fresco.",
        "key": "CAUTIONS"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 239.8,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "REGALO · DELIVERY LIMA · SUJETO A STOCK",
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 227.8,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "1",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": 3000,
    "itemsPack": [
      {
        "sku": "009064",
        "name": null,
        "presentationText": "FRASCO 50 ML",
        "quantity": 2,
        "presentationNoFractionated": true,
        "fractionalPresentation": false,
        "packItemRefence": null,
        "productPackItem": null,
        "factor": null,
        "discountPack": null
      }
    ],
    "totalAmountComponentPack": null,
    "productPack": true,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "PACKDB130",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": false,
    "videoList": null,
    "bannerList": null,
    "guaranteedEcommerce": null,
    "substituteList": null,
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "",
    "attributeDetails": [],
    "gifts": [
      {
        "skuInkafarma": "085131",
        "skuMifarma": "320419",
        "price": 0.1,
        "image": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/085131L.jpg",
        "name": "Producto Promocional Mochila Eucerin Plegable",
        "stock": 0,
        "presentation": "UNIDAD 1 UN",
        "isLam": "N",
        "familyType": "",
        "eanCode": ""
      }
    ],
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  },
  {
    "id": "079878",
    "name": "Gel-Crema La Roche-Posay Effaclar A.Z.",
    "longDescription": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
    "shortDescription": "<li>Tratamiento anti-imperfecciones y antiarrugas para pieles adultas con tendencia acneica. <li>Reduce imperfecciones, marcas, arrugas y poros. <li>NSOC38344-25CO",
    "brand": "LA ROCHE-POSAY",
    "sapCode": "834363",
    "eanCode": "",
    "isLam": "N",
    "familyType": "",
    "recurrent": false,
    "howToConsume": "Textura gel-crema hidratante y de absorción muy rapida con acabado aterciopelado. Excelente base de maquillaje. Aplicar mañana y noche sobre el rostro. Eficacia anti-imperfecciones testeada en todos los fototipos de piel. Evitar el contacto directo con los ojos. En caso de contacto, aclarar con abundante agua. No aplicar sobre puel dañada o irritada. Evite la exposición al sol y utilice protector solar de amplio espectro (UVA/UVB). Manténgase fuera del alcance de los niños.",
    "imageList": [
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878X.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-2X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-3X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-4X.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-5X.jpg"
        ]
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878M.jpg",
        "thumbnails": []
      },
      {
        "url": "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878L.jpg",
        "thumbnails": [
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-2L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-3L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-4L.jpg",
          "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/079878-5L.jpg"
        ]
      }
    ],
    "price": 224.9,
    "fractionatedPrice": 0,
    "prescription": "Venta Libre",
    "precautions": null,
    "sideEffects": null,
    "favorite": false,
    "concentration": null,
    "presentation": "TUBO",
    "quantityUnits": 1,
    "unitMeasure": "ML",
    "fractionalMode": false,
    "activePrinciples": [
      "2039154 34 - INGREDIENTS : AQUA / WATER / EAU . AZELAICACID . C15-19 ALKANE . GLYCERIN . TRIETHYL CITRATEDIGLYCERIN . SALICYLIC ACID . PANTHENOL . SILICA .AMMONIUM POLYACRYLOYLDIMETHYL TAURATE . TARAXACUMOFFICINALE RHIZOME/ROOT EXTRACT - DANDELIONRHIZOME/ROOT EXTRACT . ZINC GLUCONATE . GLYCERYLSTEARATE . PEG-100 STEARATE . SODIUM HYALURONATE .SODIUM HYDROXIDE . SODIUM PHOSPHATE . DISODIUMPHOSPHATE . HYDROXYETHYLCELLULOSE . HYDROXYPROPYLSTARCH PHOSPHATE . TETRASODIUM GLUTAMATE DIACETATE. CITRIC ACID . TRISODIUM ETHYLENEDIAMINE DISUCCINATE .PENTYLENE GLYCOL . POLYSORBATE 60 . PARFUM /FRAGRANCE. (CODE F.I.L. : N70048676/1)"
    ],
    "fractionatedForm": null,
    "fractionatedText": null,
    "noFractionatedText": "TUBO 40 ML",
    "productStatusId": 1,
    "productStatus": "AVAILABLE",
    "productStatusMessage": null,
    "maxUnitSale": 4,
    "maxUnitSaleFractionated": 0,
    "categoryList": [
      {
        "id": 100009,
        "name": "Dermatología Cosmética",
        "categories": [
          {
            "id": 200104,
            "name": "Tratamiento Facial",
            "categories": [
              {
                "id": 300760,
                "name": "Anti Imperfecciones",
                "categories": [],
                "keyword": "anti-imperfecciones"
              },
              {
                "id": 300762,
                "name": "Antimanchas",
                "categories": [],
                "keyword": "antimanchas"
              }
            ],
            "keyword": "tratamiento-facial"
          }
        ],
        "keyword": "dermatologia-cosmetica"
      },
      {
        "id": 100019,
        "name": "Promociones Especiales",
        "categories": [
          {
            "id": 201399,
            "name": "Lo Mejor en Dermocosmética",
            "categories": [
              {
                "id": 765342,
                "name": "Todo en Serum Dermatológico",
                "categories": [],
                "keyword": "todo-en-serum-dermatologico"
              },
              {
                "id": 765336,
                "name": "La Roche Posay + Regalo",
                "categories": [],
                "keyword": "la-roche-posay--regalo"
              }
            ],
            "keyword": "lo-mejor-en-dermocosmetica"
          }
        ],
        "keyword": "promociones-especiales"
      }
    ],
    "stock": 15,
    "fractionalStock": 0,
    "stockRet": 15,
    "fractionalRetStock": 0,
    "showStockAlert": "N",
    "fractionalShowStockAlert": "N",
    "fractionatedSelected": null,
    "unitPriceSelected": null,
    "quantitySelected": 0,
    "subTotal": null,
    "fractionalCore": false,
    "quantityUnitsCore": 1,
    "limitOfferTime": null,
    "slug": "gel-crema-la-roche-posay-effaclar-a-z",
    "skuParentState": null,
    "skuParentMain": null,
    "brandResourcePath": null,
    "label": null,
    "gtin": 3337875920742,
    "promotionAlerts": null,
    "skuVariants": [],
    "details": [
      {
        "order": 1,
        "title": "Descripción larga",
        "content": "<ul><p><strong>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</strong></p></ul><p></p>",
        "key": "LONG_DESCRIPTION"
      },
      {
        "order": 2,
        "title": "Composición",
        "content": "2039154 34 - INGREDIENTS : AQUA / WATER / EAU . AZELAICACID . C15-19 ALKANE . GLYCERIN . TRIETHYL CITRATEDIGLYCERIN . SALICYLIC ACID . PANTHENOL . SILICA .AMMONIUM POLYACRYLOYLDIMETHYL TAURATE . TARAXACUMOFFICINALE RHIZOME/ROOT EXTRACT - DANDELIONRHIZOME/ROOT EXTRACT . ZINC GLUCONATE . GLYCERYLSTEARATE . PEG-100 STEARATE . SODIUM HYALURONATE .SODIUM HYDROXIDE . SODIUM PHOSPHATE . DISODIUMPHOSPHATE . HYDROXYETHYLCELLULOSE . HYDROXYPROPYLSTARCH PHOSPHATE . TETRASODIUM GLUTAMATE DIACETATE. CITRIC ACID . TRISODIUM ETHYLENEDIAMINE DISUCCINATE .PENTYLENE GLYCOL . POLYSORBATE 60 . PARFUM /FRAGRANCE. (CODE F.I.L. : N70048676/1)",
        "key": "COMPOSITION"
      },
      {
        "order": 3,
        "title": "Modo de uso",
        "content": "Textura gel-crema hidratante y de absorción muy rapida con acabado aterciopelado. Excelente base de maquillaje. Aplicar mañana y noche sobre el rostro. Eficacia anti-imperfecciones testeada en todos los fototipos de piel. Evitar el contacto directo con los ojos. En caso de contacto, aclarar con abundante agua. No aplicar sobre puel dañada o irritada. Evite la exposición al sol y utilice protector solar de amplio espectro (UVA/UVB). Manténgase fuera del alcance de los niños.",
        "key": "HOW_TO_USE"
      }
    ],
    "presentationIdSelected": null,
    "fractionatedPresentationId": null,
    "presentationId": 1,
    "quantityUnitsFractionated": null,
    "visiblePresentations": [
      "pack"
    ],
    "pricePack": 224.9,
    "quantityUnitsPack": 1,
    "unitPrice": 0,
    "descriptionUnits": null,
    "tagImageUrl": "",
    "secondaryTagImageUrl": null,
    "alertTagText": "¡CUPÓN INKA20 DESDE S/169!",
    "priceAllPaymentMethod": 0,
    "fractionatedPriceAllPaymentMethod": 0,
    "priceWithpaymentMethod": 215.9,
    "fractionatedPriceWithpaymentMethod": 0,
    "crossOutPL": false,
    "crossOutFractionatedPL": false,
    "paymentMethodCardType": "1",
    "unitPriceAllPaymentMethod": 0,
    "unitPriceWithPaymentMethod": 0,
    "subTotalAllPaymentMethod": null,
    "subTotalWithPaymentMethod": null,
    "priceHighDiscount": 0,
    "fractionatedPriceHighDiscount": 0,
    "unitPriceHighDiscount": 0,
    "subTotalHighDiscount": null,
    "isFromSeller": false,
    "sellerId": null,
    "sellerName": null,
    "ranking": null,
    "itemsPack": null,
    "totalAmountComponentPack": null,
    "productPack": false,
    "guaranteed": "",
    "saleChannels": [
      "CALL",
      "WEB",
      "MOBILE",
      "B2C_BTY"
    ],
    "complementary": [],
    "segment": "",
    "skuMifarma": "314390",
    "publishWithoutStock": false,
    "sellerData": {
      "priceTmpFromSellerCenter": false,
      "pricePromoSellerCenter": 0,
      "priceTagName": null,
      "priceTagIdentifier": null
    },
    "productAliviamed": null,
    "skuGenericSuggest": "",
    "prescriptionCode": 0,
    "typeComplementary": null,
    "typeProductSheet": true,
    "videoList": [],
    "bannerList": [],
    "guaranteedEcommerce": "NG",
    "substituteList": [
      {
        "orderId": "3",
        "skuInkafarma": "072467",
        "guaranteed": "3G"
      },
      {
        "orderId": "4",
        "skuInkafarma": "073598",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "078608",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068329",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025189",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "072948",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025256",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "025254",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "030403",
        "guaranteed": "GG"
      },
      {
        "orderId": "4",
        "skuInkafarma": "068503",
        "guaranteed": "GG"
      }
    ],
    "descriptionColor": null,
    "codeColor": null,
    "colorImageUrl": null,
    "size": "40",
    "attributeDetails": [
      {
        "label": "Tamaño",
        "description": "40 ML",
        "imgUrl": null,
        "bgColor": null
      }
    ],
    "gifts": null,
    "fromSeller": false,
    "isUnitPresentationDefault": false,
    "isGeneric": false
  }
];

export const MOCK_PRODUCTS: Product[] = [...MOCK_MAMA_BEBE, ...MOCK_FARMACIA, ...MOCK_DERMOCOSMETICA];