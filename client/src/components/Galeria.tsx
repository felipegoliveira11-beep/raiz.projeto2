import img1 from "../assets/img01.jpeg";
import img2 from "../assets/img02.jpeg";
import img3 from "../assets/img03.jpeg";
import img4 from "../assets/img04.jpeg";
import img5 from "../assets/img05.jpeg";
import "./Header.css";

const Header = () => {
  const imagens = [img1, img2, img3, img4 , img5];
  
const linkJalapao = "https://link-do-seu-site-jalapao.com";
const linkSerrasGerais = "https://link-do-seu-site-serras.com";
  return (
    <header className="header">
      <h1>Galeria</h1>

      <div className="galeria">
        {imagens.map((img, index) => (
          <img key={index} src={img} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </header>
  );
};

export default Header;