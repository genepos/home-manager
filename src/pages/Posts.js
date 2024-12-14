import { TextField, Button } from '@mui/material';
import '../css/Posts.css';
import PostContent from '../compornents/PostContent';

function Posts() {
    const title = '最近の投稿';
  
    return (
      <div className='Posts'>
        <div className='title'>
         <h1>{title}</h1>
        </div>

        <div className='filter'>
          <TextField id="outlined-basic" label="キーワード" variant="outlined" />
          <Button variant="contained">検索</Button>
        </div>

        <div className='contents'>
            <PostContent id='00000'/>
            <PostContent id='00001'/>
            <PostContent id='00002'/>
            <PostContent id='00003'/>
            <PostContent id='00004'/>
            <PostContent id='00005'/>
            <PostContent id='00006'/>
            <PostContent id='00007'/>
            <PostContent id='00008'/>
            <PostContent id='00009'/>
            <PostContent id='00010'/>
            <PostContent id='00011'/>
            <PostContent id='00012'/>
            <PostContent id='00013'/>
            <PostContent id='00014'/>
            <PostContent id='00015'/>
            <PostContent id='00016'/>
            <PostContent id='00017'/>
        </div>

      </div>
    );
  }
  
  export default Posts;