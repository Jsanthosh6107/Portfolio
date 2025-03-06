import { WebsiteAttentionIcon, AccessibleIcon, GiftSalesIcon, HotSalesIcon, PurchaseMobileSalesIcon, CartRemoveIcon, ShopSalesIcon } from "@/components/svgs";

export const homeLayout = [
  {
    type: "Hero",
    data: {
      heroTitle: "Placeholder Hero Title",
      heroDescription: "Placeholder Hero Description"
    }
  },
  {
    type: "Shelf",
    data: {
      headers: ["Placeholder Header 1", "Placeholder Header 2", "Placeholder Header 3"],
      text: [
        "Placeholder text for this section.",
        "Another placeholder text here.",
        "Yet another placeholder text."
      ],
    },
  },
  {
    type: "CompanyGallery",
    data: {
      images: [
        { src: "/images/HCAllOverTheWorld.png", alt: "Placeholder Image 1", width: 500, height: 500 },
        { src: "/images/SamsPressureWashing.png", alt: "Placeholder Image 2", width: 500, height: 500 },
        { src: "/images/SSSGodsLove.png", alt: "Placeholder Image 3", width: 500, height: 500 },
      ],
    },
  },
  {
    type: "ImageText",
    data: {
      imageInfo: {
        src: "/images/StandOut.jpg",
        alt: "Placeholder Image",
        width: 800,
        height: 500,
      },
      textContent: [
        "Placeholder text 1.",
        "Placeholder text 2.",
        "Placeholder text 3.",
      ],
      inverted: false,
    },
  },
  {
    type: "Tiles",
    data: {
      tilesHeader: "Placeholder Tiles Header",
      tilesTitle: "Placeholder Tiles Title",
      tiles: [
        { svg: <WebsiteAttentionIcon />, title: "Placeholder Title", description: "Placeholder description." },
        { svg: <AccessibleIcon />, title: "Placeholder Title", description: "Placeholder description." },
        { svg: <GiftSalesIcon />, title: "Placeholder Title", description: "Placeholder description." },
        { svg: <HotSalesIcon />, title: "Placeholder Title", description: "Placeholder description." },
        { svg: <PurchaseMobileSalesIcon />, title: "Placeholder Title", description: "Placeholder description." },
        { svg: <CartRemoveIcon />, title: "Placeholder Title", description: "Placeholder description." },
      ],
    },
  },
  {
    type: "ImageTextTwo",
    data: {
      ITTitle: "Placeholder Section Title",
      ITSubTitle: "Placeholder Subtitle",
      SVGImage: <ShopSalesIcon />,
      Title: "Placeholder Title",
      Description: "Placeholder description text goes here.",
      ButtonText: "Placeholder Button",
    }
  },
  {
    type: "Comparison",
    data: {
      headerOne: "Placeholder Header 1",
      headerTwo: "Placeholder Header 2",
      listOne: ["Placeholder item 1", "Placeholder item 2", "Placeholder item 3", "Placeholder item 4"],
      listTwo: ["Placeholder item A", "Placeholder item B", "Placeholder item C", "Placeholder item D"],
    },
  },
  {
    type: "Cards",
    data: {
      subTitle: "Placeholder Subtitle",
      title: "Placeholder Title",
      description: "Placeholder description.",
      cards: [
        {
          cardSubtitle: "Placeholder Subtitle",
          cardTitle: "Placeholder Card Title",
          cardDescription: "Placeholder card description.",
          cardStatistics: [
            { cardNumber: "XX%", cardNumberText: "Placeholder Statistic" },
            { cardNumber: "XX%", cardNumberText: "Placeholder Statistic" },
            { cardNumber: "XX%", cardNumberText: "Placeholder Statistic" }
          ],
          cardButton: "Placeholder Button",
          cardButtonURL: "#",
          imageInfo: {
            src: "/images/TechLaptop.jpg",
            alt: "Placeholder Image",
            width: 800,
            height: 500
          }
        },
        {
          cardSubtitle: "Placeholder Subtitle",
          cardTitle: "Placeholder Card Title",
          cardDescription: "Placeholder card description.",
          cardStatistics: [
            { cardNumber: "XX%", cardNumberText: "Placeholder Statistic" },
            { cardNumber: "XX%", cardNumberText: "Placeholder Statistic" },
            { cardNumber: "XX%", cardNumberText: "Placeholder Statistic" }
          ],
          cardButton: "Placeholder Button",
          cardButtonURL: "#",
          imageInfo: {
            src: "/images/CozyCafe.jpg",
            alt: "Placeholder Image",
            width: 800,
            height: 500
          }
        }
      ]
    }
  },
  {
    type: "Quotes",
    data: {
      quoteList: [
        { quote: "Placeholder quote text.", name: "Placeholder Name", business: "Placeholder Business" },
        { quote: "Placeholder quote text.", name: "Placeholder Name", business: "Placeholder Business" },
        { quote: "Placeholder quote text.", name: "Placeholder Name", business: "Placeholder Business" },
        { quote: "Placeholder quote text.", name: "Placeholder Name", business: "Placeholder Business" }
      ]
    }
  },
  {
    type: "Numbers",
    data: {
      numbersList: [
        { topNumber: "XX", topSymbol: "%", bottomString: "Placeholder Stat" },
        { topNumber: "XX", topSymbol: "x", bottomString: "Placeholder Stat" },
        { topNumber: "XX", topSymbol: "%", bottomString: "Placeholder Stat" },
        { topNumber: "XX", topSymbol: "%", bottomString: "Placeholder Stat" },
      ]
    }
  },
  {
    type: "Footer",
    data: {
      buttonText: "Placeholder Button",
      callToAction: "Placeholder Call to Action",
      links: [
        { text: "Placeholder Link", url: "#" },
        { text: "Placeholder Link", url: "#" },
        { text: "Placeholder Link", url: "#" },
      ],
      copyright: "Placeholder Copyright Text"
    }
  },
];
