import React, { useState } from "react";
import { Form, Button, Segment, Radio } from "semantic-ui-react";
import "./App.css";

const NewPostPage = () => {
  const [postType, setPostType] = useState("question");
  const [postContent, setPostContent] = useState("");

  const handlePostTypeChange = (e, { value }) => setPostType(value);

  const handleContentChange = (e) => setPostContent(e.target.value);

  const handleSubmit = () => {
    // Handle the post submission (functionality to be implemented in future tasks)
    alert(`Posting a new ${postType}: ${postContent}`);
  };

  return (
    <Segment className="new-post-container">
      <h2>Create a New Post</h2>

      <Form onSubmit={handleSubmit}>
        {/* Radio buttons for post type */}
        <Form.Field>
          <label>Select Post Type</label>
          <Radio
            label="Question"
            name="postType"
            value="question"
            checked={postType === "question"}
            onChange={handlePostTypeChange}
          />
          <Radio
            label="Article"
            name="postType"
            value="article"
            checked={postType === "article"}
            onChange={handlePostTypeChange}
            style={{ marginLeft: "20px" }}
          />
        </Form.Field>

        {/* Render input fields based on post type */}
        {postType === "question" ? (
          <>
            <Form.TextArea
              label="Enter your question"
              placeholder="Ask your question here..."
              value={postContent}
              onChange={handleContentChange}
            />
          </>
        ) : (
          <>
            <Form.TextArea
              label="Write your article"
              placeholder="Share your article content here..."
              value={postContent}
              onChange={handleContentChange}
            />
          </>
        )}

        <Button type="submit" primary>
          Post
        </Button>
      </Form>
    </Segment>
  );
};

export default NewPostPage;
