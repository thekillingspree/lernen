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
        <Card className="lesson-card" >
            
                <CardMedia 
                style={{height: 150}}
                image={image}
                title="Lesson"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{minHeight: 150}}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActionArea style={{flexGrow: 1, position: 'absolute', bottom: 0}}>
            <CardActions>
                <Button size="small" color="primary">
                Continue Lesson
                </Button>
            </CardActions>        
            </CardActionArea>
        </Card>
    )
}

export default LessonCard
