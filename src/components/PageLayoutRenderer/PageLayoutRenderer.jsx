import Hero from "@/components/Hero/Hero";
import HeroFace from "@/components/Hero/HeroFace"
import Shelf from "@/components/Shelf/Shelf";
import CompanyGallery from "@/components/CompanyGallery/CompanyGallery";
import ImageText from "@/components/ImageText/ImageText";
import Tiles from "@/components/Tiles/Tiles";
import TilesProjects from "@/components/Tiles/TilesProjects";
import ImageTextTwo from "@/components/ImageText/ImageTextTwo";
import Comparison from "@/components/Comparison/Comparison";
import Quotes from "@/components/Quotes/Quotes";
import Numbers from "@/components/Numbers/Numbers";
import Footer from "@/components/Footer/Footer";
import Cards from "@/components/Cards/Cards";

const PagelayoutRenderer = ({ layout }) => {
    const renderComponent = (item, index) => {
        switch (item.type) {
            case "Hero":
                return <Hero key={index} heroTitle={item.data.heroTitle} heroDescription={item.data.heroDescription} />;
            case "HeroFace":
                return <HeroFace key={index} heroTitle={item.data.heroTitle} heroDescription={item.data.heroDescription} heroImage={item.data.heroImage}/>;    
            case "Shelf":
                return <Shelf key={index} headers={item.data.headers} text={item.data.text} />
            case "CompanyGallery":
            return <CompanyGallery key={index} images={item.data.images} />;
            case "ImageText":
                return <ImageText key={index} imageInfo={item.data.imageInfo} textContent={item.data.textContent} inverted={item.data.inverted} />;
            case "Tiles":
                return <Tiles tilesHeader={item.data.tilesHeader} tilesTitle={item.data.tilesTitle} key={index} tiles={item.data.tiles}/>;
            case "TilesProjects":
                return <TilesProjects tilesHeader={item.data.tilesHeader} tilesTitle={item.data.tilesTitle} key={index} tiles={item.data.tiles}/>;
            case "ImageTextTwo":
                return <ImageTextTwo key={index} ITTitle={item.data.ITTitle} ITSubTitle={item.data.ITSubTitle} SVGImage={item.data.SVGImage} Title={item.data.Title} Description={item.data.Description} ButtonText={item.data.ButtonText} PixelImage={item.data.PixelImage} />;
            case "Comparison":
                return <Comparison key={index} headerOne={item.data.headerOne} headerTwo={item.data.headerTwo} listOne={item.data.listOne} listTwo={item.data.listTwo} />
            case "Cards":
                return <Cards key={index} subTitle={item.data.subTitle} title={item.data.title} description={item.data.description} cards={item.data.cards} />
            case "Quotes":
                return <Quotes key={index} quoteList={item.data.quoteList} />
            case "Numbers":
                return <Numbers key={index} numbersList={item.data.numbersList} />
            case "Footer":
                return <Footer key={index} buttonText={item.data.buttonText} callToAction={item.data.callToAction} links={item.data.links} copyright={item.data.copyright} />
            default:
                return null;
        }
    };

    return <>{layout.map((item, index) => renderComponent(item, index))}</>;
}

export default PagelayoutRenderer;