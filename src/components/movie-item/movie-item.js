import React from "react";
import { Pane, Paragraph, Button, majorScale } from "evergreen-ui";

const MovieItem = ({ movie, updateLikeCount }) => {
  return (
    <Pane border="1px solid green">
      <Pane
        height={100}
        borderBottom="1px solid #ccc"
        backgroundColor="#ccc"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textTransform="uppercase"
        fontFamily="Poppins"
        // font-family: 'Poppins', sans-serif;
        fontWeight={700}
        fontSize={24}
        textAlign="center"
      >
        {movie.name}
      </Pane>
      <Pane fontFamily="Poppins">
        <Paragraph fontFamily="inherit">legrskhtd</Paragraph>
        <Paragraph fontFamily="inherit">flegrksh</Paragraph>
        <Paragraph fontFamily="inherit">eag; lrs</Paragraph>
        <Paragraph fontFamily="inherit">Likes: {movie.likes} </Paragraph>

        <Pane width="60%" margin="auto">
          <Button
            appearance="success"
            fontSize="1em"
            type="button"
            width="100%"
            marginY={majorScale(2)}
            onClick={() => updateLikeCount(movie.id)}
          >
            Like
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default MovieItem;
