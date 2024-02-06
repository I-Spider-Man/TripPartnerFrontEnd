import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { fetchEventDataByEventId } from "../../DataStorage";
import { Modal, Upload, Button, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({});
  const { eventId } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetchEventDataByEventId(eventId);
        console.log(response);
        setEventDetails(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEventDetails();
  }, [eventId]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFileChange = (info) => {
    setFileList(info.fileList);
  };

  const handleUpload = () => {
    // Implement your upload logic here
    // You may need to send a request to your server with the fileList data
    // and handle the file upload on the server side
    // Once the upload is successful, you can close the modal and update the state
    setIsModalVisible(false);
    setFileList([]);
  };

  return eventDetails ? (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {eventDetails.eventPictureList &&
              eventDetails.eventPictureList.map((eventPicture) => (
                <img
                  key={eventPicture.id} // Add a unique key for each image
                  src={eventPicture.eventPicture}
                  alt="eventPicture"
                  className="itemImg"
                  style={{
                    width: "100%",
                    minHeight: "300px",
                    maxHeight: "300px",
                    objectFit: "fill",
                    objectPosition: "center",
                  }}
                />
              ))}
          </div>
          <div className="right">
            <h1 className="title">Event Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{eventDetails.eventName}</h1>
                {/* Other event details... */}
              </div>
            </div>
            <Button type="primary" onClick={showModal}>
              Add Images
            </Button>
            {/* Image Upload Modal */}
            <Modal
              title="Upload Images"
              visible={isModalVisible}
              onOk={handleUpload}
              onCancel={handleCancel}
            >
              <Upload
                fileList={fileList}
                onChange={handleFileChange}
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>Select File</Button>
              </Upload>
              <Space direction="vertical" style={{ width: "100%" }}>
                {fileList.map((file) => (
                  <span key={file.uid}>{file.name}</span>
                ))}
              </Space>
            </Modal>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List eventName={eventDetails.eventName} />
        </div>
      </div>
    </div>
  ) : (
    <>loading....</>
  );
};

export default EventDetails;
