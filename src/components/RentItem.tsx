import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { Box, Link } from '@mui/material';
import { isLikedStatus } from '../helpers';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type RentItemProps = {
  item: GoogleSpreadsheetRow
}

const defaultImageLink = "https://destinations.ru/images/sights/poland/sight-big-rinochnaya-ploshchad-v-varshave.jpg"

export default function RentItem(props: RentItemProps) {
  const {item} = props;
  // console.log(item)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 360 }}>
      <CardHeader
        sx={{
          '& .MuiCardHeader-subheader': {
            color: 'success.main',
            fontWeight: 600
          },
        }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item["Num"]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item['Info']}
        subheader={item['Price']}
      />
      <CardMedia
        component="img"
        height="194"
        image={
          item['ImageLink'] ? item['ImageLink'] : defaultImageLink
        }
        alt="wroslaw"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {
            (item['Next call / visit'] || '')
              .split('\n')
              .map((textItem: any, idx: number) => (
                  <li key={idx}>{textItem}</li>
              ))
          }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {
          isLikedStatus(item['Status']) && (
            <IconButton aria-label="add to favorites">
            <FavoriteIcon color='secondary' />
          </IconButton>
          )
        }
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Link href={item['Link']} variant="body1" color="text.secondary">
            Open Link
          </Link>
          <Typography variant="body1" color="text.secondary">
            {item['Contacted'] ? `${item['Contacted']}` : "Not contacted"}
          </Typography>
        </Box>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Contact person: {item['Contact person']}
          </Typography>
          <Typography paragraph>
            {
              (item['Phone'] || '')
                .split('\n')
                .map((textItem: any, idx: number) => (
                    <li key={idx}>
                      <Link href={`tel:+48${(textItem || '').replaceAll(' ', '')}`} underline="none">
                        Call: {textItem}
                      </Link>
                    </li>
                ))
            }
          </Typography>
          <Typography paragraph>
            Cat: {item['Cat']}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
