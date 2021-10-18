import React, { useState } from "react"
import { Global, css } from "@emotion/react"
import { Box, Button } from "bumbag"

export const App = () => {
  return (
    <Box>
      <span>Hi</span>
      <Button
        css={css`
          color: blueviolet;
        `}
      >
        Butt
      </Button>
    </Box>
  )
}

export default App
