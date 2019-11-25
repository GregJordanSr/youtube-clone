import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={13}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: 'pointer' }} onClick={ () => onVideoSelect(video) }>
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
      </Paper>
      <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
        <h4><b>{video.snippet.title}</b></h4>
      </Typography>
    </Grid>
  );
};

export default VideoItem;