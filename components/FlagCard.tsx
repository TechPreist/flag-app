import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
interface FlagCardProps {
  key: string;
  src: string;
  title: string;
  population: number;
  region: string;
  capital: string[];
}
const FlagCard: React.FC<FlagCardProps> = ({
  key,
  src,
  title,
  population,
  region,
  capital,
}) => {
  return (
    <>
      <div>
        <Card key={key} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              className="h-52 w-full object-cover"
              image={src}
              alt={`${title} flag`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Population: {population}
                <br /> Region: {region} <br />
                Capital: {capital}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default FlagCard;
