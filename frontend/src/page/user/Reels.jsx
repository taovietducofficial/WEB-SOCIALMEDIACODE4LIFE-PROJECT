import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Rightbar from '../../components/Rightbar';
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
        name: 'Current User',
        avatar: '/default-avatar.jpg'
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
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <div className="relative max-w-3xl mx-auto bg-black rounded-lg overflow-hidden">
            <div className="h-1 bg-gray-700">
              <div className="h-full bg-blue-500 transition-all duration-300" style={{width: `${progress}%`}}></div>
            </div>
            
            <video
              ref={videoRef}
              src={reels[currentReel].video}
              className="w-full h-[calc(100vh-200px)] object-cover"
              loop
              autoPlay
              muted={isMuted}
              onClick={handleVideoClick}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center mb-4">
                <img src={reels[currentReel].user.avatar} alt="user avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <span className="text-white font-semibold">{reels[currentReel].user.name}</span>
                  <button className="ml-4 px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600">Follow</button>
                </div>
              </div>
              <p className="text-white">{reels[currentReel].description}</p>
            </div>

            <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
              <button onClick={toggleLike} className="flex flex-col items-center">
                <FaHeart className={`text-2xl ${reels[currentReel].liked ? 'text-red-500' : 'text-white'}`} />
                <span className="text-white text-sm mt-1">{reels[currentReel].likes}</span>
              </button>
              <button className="flex flex-col items-center">
                <FaComment className="text-2xl text-white" />
                <span className="text-white text-sm mt-1">{reels[currentReel].comments}</span>
              </button>
              <button className="flex flex-col items-center">
                <FaShare className="text-2xl text-white" />
                <span className="text-white text-sm mt-1">{reels[currentReel].shares}</span>
              </button>
              <button onClick={toggleSave} className="flex flex-col items-center">
                <FaBookmark className={`text-2xl ${reels[currentReel].saved ? 'text-yellow-400' : 'text-white'}`} />
                <span className="text-white text-sm mt-1">Save</span>
              </button>
              <button onClick={() => setShowPostModal(true)} className="flex flex-col items-center">
                <FaPlus className="text-2xl text-white" />
                <span className="text-white text-sm mt-1">Post</span>
              </button>
            </div>

            <div className="absolute bottom-4 left-4 flex space-x-4">
              <button onClick={handleVideoClick} className="text-white text-2xl">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={toggleMute} className="text-white text-2xl">
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>

            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
              <button 
                onClick={handlePrevReel} 
                disabled={currentReel === 0}
                className={`p-2 rounded-full bg-black/50 ${currentReel === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/70'}`}
              >
                <FaChevronLeft className="text-white text-xl" />
              </button>
              <button 
                onClick={handleNextReel} 
                disabled={currentReel === reels.length - 1}
                className={`p-2 rounded-full bg-black/50 ${currentReel === reels.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/70'}`}
              >
                <FaChevronRight className="text-white text-xl" />
              </button>
            </div>
          </div>

          {showPostModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Create New Reel</h2>
                <input 
                  type="file" 
                  accept="video/*"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button 
                  onClick={() => fileInputRef.current.click()}
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
                >
                  {newPost.video ? 'Change Video' : 'Select Video'}
                </button>
                {newPost.video && <p className="mb-4 text-gray-600">Selected: {newPost.video.name}</p>}
                <textarea
                  placeholder="Add a description..."
                  value={newPost.description}
                  onChange={(e) => setNewPost({...newPost, description: e.target.value})}
                  className="w-full h-32 p-2 border rounded-lg mb-4 resize-none"
                />
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={handlePostSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Post
                  </button>
                  <button 
                    onClick={() => setShowPostModal(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Cancel
                  </button>
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