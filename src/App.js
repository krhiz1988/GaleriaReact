import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

const galeria = [
  {
    nombre: "Imagen Uno",
    url: "https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg",
    descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150"  
  },
  {
    nombre: "Imagen Dos",
    url: "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_960_720.jpg",
    descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150"  
  },
  {
    nombre: "Imagen tres",
    url: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
    descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150"  
  }
];
function App() {
  
  return (
    <div className="App">
      <Header title="Galería de Imágenes con React" />
      <Card  galeria={galeria[0]} />

    </div>
  );
}

export default App;
