import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, TextField, Button, Divider } from '@mui/material';
import { styled } from '@mui/system';

const existingFeedback = [
  { id: 1, name: 'John Doe', feedback: 'Great coffee and friendly staff!', date: '2024-06-01' },
  { id: 2, name: 'Jane Smith', feedback: 'I love the ambiance here. Will come back again!', date: '2024-06-02' },
];

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f4e1d2',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#6d4c41',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6d4c41',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#5a382f',
  },
}));

const FeedbackPage = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState(existingFeedback);

  const handleFeedbackSubmit = () => {
    if (name && feedback) {
      const newFeedback = {
        id: feedbackList.length + 1,
        name,
        feedback,
        date: new Date().toISOString().split('T')[0],
      };
      setFeedbackList([newFeedback, ...feedbackList]);
      setName('');
      setFeedback('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <StyledTypography variant="h4" gutterBottom>
        Customer Feedback
      </StyledTypography>

      <Box sx={{ marginBottom: 4 }}>
        <StyledTypography variant="h6" gutterBottom>
          Leave Your Feedback
        </StyledTypography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Feedback"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <StyledButton variant="contained" onClick={handleFeedbackSubmit}>
          Submit Feedback
        </StyledButton>
      </Box>

      <Grid container spacing={3}>
        {feedbackList.map((fb) => (
          <Grid item xs={12} key={fb.id}>
            <StyledCard>
              <CardContent>
                <StyledTypography variant="h6">{fb.name}</StyledTypography>
                <Typography variant="body1">{fb.feedback}</Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    {fb.date}
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeedbackPage;
