import React, { useState, useRef, useEffect } from 'react';
import './Reels.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import { FaHeart, FaComment, FaShare, FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaChevronLeft, FaChevronRight, FaBookmark, FaPlus } from 'react-icons/fa';

const Reels = () => {
  const [reels, setReels] = useState([
    {
      id: 1,
      user: {
        name: 'Tào Việt Đức',
        avatar: '/428629140_122123821286195094_987946793325005882_n (1).jpg'
      },
      video: '/6042669584382.mp4',
      description: 'Học lập trình cùng Code4Life! #code4life #programming',
      likes: 1200,
      comments: 45,
      shares: 20,
      saved: false,
      liked: false
    },
    {
      id: 2, 
      user: {
        name: 'Huỳnh Trung Kiên',
        avatar: '/428629140_122123821286195094_987946793325005882_n (1).jpg'
      },
      video: '/6042669591983.mp4', 
      description: 'Tips và tricks trong lập trình! #coding #tips',
      likes: 850,
      comments: 32,
      shares: 15,
      saved: false,
      liked: false
    },
    {
      id: 3, 
      user: {
        name: 'Nguyễn Văn A',
        avatar: '/428629140_122123821286195094_987946793325005882_n (1).jpg'
      },
      video: '/6042669595830.mp4', 
      description: 'Tips và tricks trong lập trình! #coding #tips',
      likes: 850,
      comments: 32,
      shares: 15,
      saved: false,
      liked: false
    }
  ]);

  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPostModal, setShowPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    video: null,
    description: ''
  });
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      if (video) {
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(progress);
      }
    };

    video?.addEventListener('timeupdate', updateProgress);
    return () => video?.removeEventListener('timeupdate', updateProgress);
  }, [currentReel]);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleNextReel = () => {
    if (currentReel < reels.length - 1) {
      setCurrentReel(currentReel + 1);
      setProgress(0);
    }
  };

  const handlePrevReel = () => {
    if (currentReel > 0) {
      setCurrentReel(currentReel - 1);
      setProgress(0);
    }
  };

  const toggleLike = () => {
    const updatedReels = [...reels];
    const currentReelData = updatedReels[currentReel];
    currentReelData.liked = !currentReelData.liked;
    currentReelData.likes += currentReelData.liked ? 1 : -1;
    setReels(updatedReels);
  };

  const toggleSave = () => {
    const updatedReels = [...reels];
    updatedReels[currentReel].saved = !updatedReels[currentReel].saved;
    setReels(updatedReels);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setNewPost({...newPost, video: file});
    } else {
      alert('Please select a valid video file');
    }
  };

  const handlePostSubmit = () => {
    if (!newPost.video || !newPost.description) {
      alert('Please fill in all fields');
      return;
    }

    const newReel = {
      id: reels.length + 1,
      user: {
        name: 'Current User', // Replace with actual logged in user
        avatar: '/default-avatar.jpg' // Replace with actual user avatar
      },
      video: URL.createObjectURL(newPost.video),
      description: newPost.description,
      likes: 0,
      comments: 0,
      shares: 0,
      saved: false,
      liked: false
    };

    setReels([...reels, newReel]);
    setNewPost({video: null, description: ''});
    setShowPostModal(false);
  };

  return (
    <div className="reels-container">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="reels-content">
          <div className="reel-viewer">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            
            <video
              ref={videoRef}
              src={reels[currentReel].video}
              className="reel-video"
              loop
              autoPlay
              muted={isMuted}
              onClick={handleVideoClick}
            />

            <div className="reel-info">
              <div className="user-info">
                <div className="user-profile">
                  <img src={reels[currentReel].user.avatar} alt="user avatar" />
                  <div className="user-details">
                    <span>{reels[currentReel].user.name}</span>
                    <button className="follow-button">Follow</button>
                  </div>
                </div>
              </div>
              <p className="reel-description">{reels[currentReel].description}</p>
            </div>

            <div className="reel-actions">
              <div className="action-item" onClick={toggleLike}>
                <FaHeart color={reels[currentReel].liked ? '#ff0000' : '#fff'} />
                <span>{reels[currentReel].likes}</span>
              </div>
              <div className="action-item">
                <FaComment />
                <span>{reels[currentReel].comments}</span>
              </div>
              <div className="action-item">
                <FaShare />
                <span>{reels[currentReel].shares}</span>
              </div>
              <div className="action-item" onClick={toggleSave}>
                <FaBookmark color={reels[currentReel].saved ? '#ffeb3b' : '#fff'} />
                <span>Save</span>
              </div>
              <div className="action-item" onClick={() => setShowPostModal(true)}>
                <FaPlus />
                <span>Post</span>
              </div>
            </div>
            
            <div className="reel-controls">
              <div className="play-pause" onClick={handleVideoClick}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </div>
              <div className="volume-control" onClick={toggleMute}>
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </div>
            </div>

            <div className="navigation-buttons">
              <button onClick={handlePrevReel} disabled={currentReel === 0}>
                <FaChevronLeft />
              </button>
              <button onClick={handleNextReel} disabled={currentReel === reels.length - 1}>
                <FaChevronRight />
              </button>
            </div>
          </div>

          {showPostModal && (
            <div className="post-modal">
              <div className="post-modal-content">
                <h2>Create New Reel</h2>
                <input 
                  type="file" 
                  accept="video/*"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  style={{display: 'none'}}
                />
                <button onClick={() => fileInputRef.current.click()}>
                  {newPost.video ? 'Change Video' : 'Select Video'}
                </button>
                {newPost.video && <p>Selected: {newPost.video.name}</p>}
                <textarea
                  placeholder="Add a description..."
                  value={newPost.description}
                  onChange={(e) => setNewPost({...newPost, description: e.target.value})}
                />
                <div className="modal-buttons">
                  <button onClick={handlePostSubmit}>Post</button>
                  <button onClick={() => setShowPostModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Reels;