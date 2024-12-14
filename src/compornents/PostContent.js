import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { TextField, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import '../css/PostContent.css';
function PostContent() {
    const postDate = '2024/12/20'
    const title = 'テストテストテスト';
    const content = 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト';
    const posterInitial = 'テ'
    return (
            <Card className='Card_post'>
                <CardHeader className='CardContent_header' title={title} subheader={postDate}
                        avatar={
                            <Avatar className='Avatar' aria-label="recipe">
                              {posterInitial}
                            </Avatar>
                          }
                >
                    <Avatar className='posterIcon'></Avatar>
                </CardHeader>
                <CardMedia
                    component='img'
                    height='150'
                    image='../../images/test.png'
                    alt='NO IMAGE'
                    className='CardContent_image'/>
                <CardContent className='CardContent_content'>
                    <p>{content}</p>
                </CardContent>
            </Card>
    );
  }
  
  export default PostContent;