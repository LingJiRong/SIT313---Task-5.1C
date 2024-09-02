import React, { useState } from 'react';
import { Form, Button, Header, Segment } from 'semantic-ui-react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

const NewPostPage = () => {
  const [postType, setPostType] = useState('');

  const handlePostTypeChange = (e, { value }) => setPostType(value);

  return (
    <>
      <Segment
        style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '10px' }}
        textAlign='left'
      >
        <Header as='h2' style={{ fontWeight: 'bold' }}>New Post</Header>
      </Segment>

      <Header as='h4'>Select Post Type:</Header>
      <Form>
        <Form.Group inline>
          <Form.Radio
            label='Question'
            value='question'
            checked={postType === 'question'}
            onChange={handlePostTypeChange}
          />
          <Form.Radio
            label='Article'
            value='article'
            checked={postType === 'article'}
            onChange={handlePostTypeChange}
          />
        </Form.Group>
      </Form>

      <Segment
        style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px' }}
      >
        <Header as='h4' style={{ fontWeight: 'bold' }}>What do you want to ask or share?</Header>
      </Segment>

      <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        This section is designed based on the type of the post. It could be developed by conditional rendering.
      </p>

      <Segment padded='very'>
        {postType === 'question' && <QuestionForm />}
        {postType === 'article' && <ArticleForm />}
        <Button 
          primary 
          style={{ float: 'right' }}
        >
          Post
        </Button>
      </Segment>
    </>
  );
};

export default NewPostPage;
