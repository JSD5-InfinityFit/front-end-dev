import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import calculateCalories from "../utils/calories";
import { ListItemText } from "@mui/material";

const CaloriesCard = ({activityData, weight}) => {
  let calories = 0;
  activityData.map((activity) => {
    calories += calculateCalories(activity.type, weight, activity.duration);
  })

  return (
    <Card sx={{ minWidth: 250, minHeight: 250, maxWidth: 300, maxHeight: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Calories Burned
        </Typography>
        <Typography variant="h5" component="div">
          {calories}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          kCal
        </Typography>
        <Typography variant="body2">Exercise for good help</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CaloriesCard;
