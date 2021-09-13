import { Carousel } from "react-carousel-minimal";

//CAROUSEL SACADO DE INTERNET REACT
function Carousel1() {
  const data = [
    {
      image:
        "https://image.freepik.com/free-psd/movie-clapper-board-mock-up-frame_23-2148470111.jpg",
      caption: "Las peliculas del momento",
    },
    {
      image:
        "https://image.freepik.com/free-psd/top-view-retro-film-strip-popcorn_23-2148470115.jpg",
      caption: "Todas en un lugar",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2019/03/21/02/51/deadpool-4070071_960_720.jpg",
      caption: "Superheroes",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg",
      caption: "Fantasia",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/14/05/21/children-1822688_960_720.jpg",
      caption: "Historias de vida",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg",
      caption: "Contemporaneas",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/10/26/11/14/tv-3774381_960_720.jpg",
      caption: "Mira desde tu casa",
    },
    {
      image:
        "https://areajugones.sport.es/wp-content/uploads/2021/07/naruto.jpeg",
      caption: "Anime",
    },
    {
      image:
        "https://sm.ign.com/t/ign_nl/gallery/t/the-25-bes/the-25-best-horror-movies_2smr.1080.jpg",
      caption: "Terror",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/02/18/19/26/suspense-4860506_960_720.jpg",
      caption: "Suspenso",
    },
    {
      image:
        "https://images.everydayhealth.com/images/emotional-health/depression/funny-movies-that-help-lift-your-depression-rm-1440x810.jpg",
      caption: "Comedia",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <br />
        <h2>Las peliculas que mas te gustan a tu alcance!</h2>
        <p>
          En MovieFinder buscamos traerte las peliculas mas novedosas del
          momento
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="1250px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1250px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel1;
