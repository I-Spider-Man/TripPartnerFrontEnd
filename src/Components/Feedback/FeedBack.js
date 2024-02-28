import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  Rating,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUser } from "../Auth/UserContext";
import { fetchEventComments, postEventComment } from "../Files/Event_Details";
import {
  fetchSpotComments,
  postSpotComment,
} from "../Files/TouristSpotDetails";
import { message } from "antd";
import { CssTextField } from "../TextFieds";
import { LoadingButton } from "@mui/lab";

function FeedBack({ spotId, eventId }) {
  const { userDetails } = useUser();
  console.log(spotId, eventId);
  const [ratingDialog, setRatingDialog] = useState(false);
  const [render, setRender] = useState(false);
  const [loadingProcess, setLoadingProcess] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(3);
  const [prevComment, setPrevCommnet] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (eventId) {
          const response = await fetchEventComments(eventId);
          setPrevCommnet(response);
        } else if (spotId) {
          const response = await fetchSpotComments(spotId);
          setPrevCommnet(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [spotId, eventId, render]);
  console.log(prevComment);
  const postComment = async () => {
    if (userDetails) {
      setLoadingProcess(true);
      try {
        if (eventId) {
          await postEventComment(eventId, userDetails.userId, comment, rating);
        } else if (spotId) {
          await postSpotComment(spotId, userDetails.userId, comment, rating);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setRender(!render);
        setLoadingProcess(false);
        window.location.reload();
      }
    } else {
      message.error("To comment login first.");
    }
  };
  return (
    <div style={{ minHeight: "50vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "50px",
        }}
      >
        <CssTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Avatar src={userDetails?.userProfile} alt="User" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <LoadingButton
                  loading={loadingProcess}
                  disabled={!comment.trim()}
                  loadingIndicator={
                    <Button variant="contained" disabled>
                      sending..
                    </Button>
                  }
                  variant="contained"
                  onClick={() => {
                    setRatingDialog(!ratingDialog);
                  }}
                >
                  post
                </LoadingButton>
              </InputAdornment>
            ),
          }}
          placeholder="Give us your thoughts. "
          fullWidth
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </div>
      <Dialog
        open={ratingDialog}
        onClose={() => setRatingDialog(!ratingDialog)}
      >
        <DialogTitle>
          {"give us your rating on this " +
            (eventId ? "event" : "tourist spot")}
        </DialogTitle>
        <DialogContent>
          <p>{comment}</p>
          <Rating
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              postComment();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ padding: "10px", marginTop: "20px" }}>
        {prevComment
          ?.slice()
          .reverse()
          .map((comments) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                borderStyle: "groove",
                borderWidth: "2px",
                padding: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Avatar src={comments.userData.userProfile} alt="" />
                <Rating value={comments.ratings} readOnly />
              </div>
              <p style={{ marginLeft: "50px", color: "white" }}>
                {comments.feedback}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FeedBack;
