import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const LessonCard = props => {
    const {image, title, description} = props;
    return (
        <Card style={{maxWidth: 300, margin: "10px 15px"}}>
            <CardActionArea style={{flexGrow: 1}}>
                <CardMedia 
                style={{height: 150}}
                image={image}
                title="Lesson"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Continue Lesson
                </Button>
            </CardActions>        
        </Card>
    )
}

export default LessonCard
