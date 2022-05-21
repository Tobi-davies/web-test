import React from "react";
import { Pane, Paragraph, Button, majorScale } from "evergreen-ui";

const MovieItem = ({ movie, updateLikeCount }) => {
  const time = new Date();

  return (
    <Pane border="1px solid #ccc">
      <Pane
        height={100}
        borderBottom="1px solid #ccc"
        backgroundColor="#ccc"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textTransform="uppercase"
        fontFamily="Poppins"
        fontWeight={700}
        fontSize={24}
        textAlign="center"
      >
        {movie.name}
      </Pane>
      <Pane fontFamily="Poppins" padding={8}>
        <Paragraph fontFamily="inherit">Name: {movie.name}</Paragraph>
        {/* <Paragraph fontFamily="inherit">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
        </Paragraph> */}
        <Paragraph fontFamily="inherit">
          Year released: {time.getFullYear()}
        </Paragraph>
        <Paragraph fontFamily="inherit">Price: {movie.price} USD</Paragraph>
        <Paragraph fontFamily="inherit">Likes: {movie.likes} </Paragraph>

        <Pane width="60%" margin="auto">
          <Button
            appearance="primary"
            intent="success"
            fontSize="1em"
            type="button"
            width="100%"
            marginY={majorScale(1)}
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
