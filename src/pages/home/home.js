import React from "react";
import { Pane, majorScale, Paragraph } from "evergreen-ui";
import MovieItem from "../../components/movie-item/movie-item";

const movies = [
  {
    id: 1,
    name: "The Redemption",
    likes: 0,
    price: 10,
  },
  {
    id: 2,
    name: "Africa’s Tech Roots",
    likes: 0,
    price: 40,
  },
  {
    id: 3,
    name: "The Invisible Man",
    likes: 0,
    price: 45,
  },
  {
    id: 4,
    name: "The Complicated Project",
    likes: 0,
    price: 50,
  },
  {
    id: 5,
    name: "Simply Javascript",
    likes: 0,
    price: 40,
  },
  {
    id: 6,
    name: "The New Web",
    likes: 0,
    price: 30,
  },
];

const Home = () => {
  const [popularMovie, setPopularMovie] = React.useState({});
  const [movieList, setMovieList] = React.useState(movies);

  const updateLikeCount = (id) => {
    let newArr;
    if (movieList.find((e) => e.id === id)) {
      newArr = movieList.map((e) =>
        e.id === id ? { ...e, likes: e.likes + 1 } : e
      );
      setMovieList(newArr);
    }
  };

  //Increases the price after 20 likes
  const updatePrice = () => {
    let newList = movieList.map((movie) =>
      movie.likes >= 20 ? { ...movie, price: movie.price + 10 } : movie
    );

    // setMovieList(newList);
  };

  const sortPopularMovie = () => {
    const likesCount = movieList.map((movie) => movie.likes);

    const max = Math.max(...likesCount);

    const index = likesCount.indexOf(max);

    setPopularMovie(movieList[index]);
  };

  React.useEffect(() => {
    updatePrice();

    if (movieList.every((el) => el.likes === 0)) {
    } else {
      sortPopularMovie();
    }
  }, [movieList]);

  return (
    <Pane>
      <Pane
        paddingY={majorScale(1)}
        paddingX={majorScale(10)}
        backgroundColor="#B6D0E2"
      >
        <h2>Nolly-Flix</h2>
      </Pane>
      <Pane maxWidth={1000} width="100%" margin="auto">
        <Paragraph paddingY={majorScale(3)}>
          The place you find the best movies. Suscription is charged
        </Paragraph>

        {/* <Pane> */}
        <Pane classNmae="row" marginBottom={20}>
          <Pane className="col-4">
            <Paragraph fontSize={25} marginBottom={8}>
              {" "}
              View popular movies
            </Paragraph>
            {Object.keys(popularMovie).length !== 0 ? (
              <>
                <MovieItem
                  movie={popularMovie}
                  updateLikeCount={updateLikeCount}
                />
              </>
            ) : (
              <Pane paddingY={majorScale(2)}>
                <Paragraph>Like movies to make them popular</Paragraph>
              </Pane>
            )}
          </Pane>
        </Pane>
        {/* </Pane> */}

        <Pane>
          <Paragraph fontSize={25} marginBottom={8}>
            Available movies
          </Paragraph>
          <div className="row">
            {movieList.map((movie, i) => {
              return (
                <Pane className="col-4" marginBottom={20} key={i}>
                  <MovieItem movie={movie} updateLikeCount={updateLikeCount} />
                </Pane>
              );
            })}
          </div>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Home;
