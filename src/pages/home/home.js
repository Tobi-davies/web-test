import React from "react";
import { Pane, majorScale, Paragraph } from "evergreen-ui";
import MovieItem from "../../components/movie-item/movie-item";

const movies = [
  {
    id: 1,
    name: "The Redemption",
    likes: 0,
  },
  {
    id: 2,
    name: "Africa’s Tech Roots",
    likes: 0,
  },
  {
    id: 3,
    name: "The Invisible Man",
    likes: 0,
  },
  {
    id: 4,
    name: "The Complicated Project",
    likes: 0,
  },
  {
    id: 5,
    name: "Simply Javascript",
    likes: 0,
  },
  {
    id: 6,
    name: "The New Web",
    likes: 0,
  },
];

const Home = () => {
  const [likeNum, setLikeNum] = React.useState(0);
  const [movieList, setMovieList] = React.useState(movies);

  const updateLikeCount = (id) => {
    console.log(id);
    // setMovieList((prev) => prev.filter((e) => (e.id === id ? e.likes + 1 : e)));

    // const index = arr.findIndex(object => {
    //   return object.id === 2;
    // }); // 👉️ 1

    // if (index !== -1) {
    //   arr[index].name = 'John';
    // }

    // const newArr = arr.map(object => {
    //   if (object.id === 2) {
    //     // 👇️ change value of name property
    //     return {...object, name: 'John'};
    //   }
    //   return object;
    // });

    // setMovieList((prev) =>
    //   prev.map((e) =>
    //     e.id === id
    //       ? {
    //           id: id,
    //           name: e.name,
    //           likes: e.likes++,
    //         }
    //       : e
    //   )
    // );

    // const existingMovie = movieList.find(e => e.id === id)
    let newArr;
    if (movieList.find((e) => e.id === id)) {
      newArr = movieList.map((e) =>
        e.id === id ? { ...e, likes: e.likes + 1 } : e
      );
      setMovieList(newArr);
    }

    // console.log(newArr);
  };

  console.log(movieList);

  return (
    <Pane>
      <Pane
        paddingY={majorScale(1)}
        paddingX={majorScale(2)}
        backgroundColor="#B6D0E2"
      >
        <h2>Nolly-Flix</h2>
      </Pane>
      <Pane maxWidth={1000} width="100%" margin="auto">
        <Paragraph>
          The place you find the best movies. Suscription is charged
        </Paragraph>

        <Pane>
          <Paragraph> View popular movies</Paragraph>
        </Pane>

        <Pane>
          <Paragraph>Available movies</Paragraph>
          <div className="row">
            {movieList.map((movie, i) => {
              return (
                <Pane
                  className="col-4"
                  border="1px solid red"
                  marginBottom={20}
                  key={i}
                >
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
