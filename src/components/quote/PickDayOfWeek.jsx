import { Container, Typography, Checkbox, FormGroup, Box, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import React, { useState } from "react";



export default function PickDayOfWeek(props){

  return (
    <Box>
      <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Day of Week</FormLabel>
          <FormGroup row>
            {Object.entries(props.selectedDays).map(([day, isChecked]) => (
              <FormControlLabel
                key={day}
                control={<Checkbox checked={isChecked} onChange={props.handleDayChange} name={day} />}
                label={day.charAt(0).toUpperCase() + day.slice(1)}
              />
            ))}
          </FormGroup>
      </FormControl>
    </Box>
  )
}