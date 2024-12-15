import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { TextField, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import '../css/PostContent.css';
function PostContent() {
    const postContent = {
        postDate: '2024/12/20',
        title: 'テストテストテスト',
        content: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
        posterInitial: 'テ'
    }
    return (
            <Card className='Card_post'>
                <CardHeader className='CardContent_header' title={postContent.title} subheader={postContent.postDate}
                        avatar={
                            <Avatar className='Avatar' aria-label="recipe">
                              {postContent.posterInitial}
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
                    <p>{postContent.content}</p>
                </CardContent>
            </Card>
    );
  }
  
  export default PostContent;